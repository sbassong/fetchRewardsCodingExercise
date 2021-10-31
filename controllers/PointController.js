const {Point} = require('../models')


//handles posting a transaction
const AddTransaction = async (req, res) => {
  try {
    const transactionBody = req.body
    const transaction = await Point.create(transactionBody)
    return res.status(201).send(transaction)
  } catch (error) {
    throw error
  }
}

//Handles spending points
const SpendPoints = async (req, res) => {
  try {
    let points = req.body.points
    
    //grab all the records in db and order by oldest first
    let transactions = await Point.findAll({
      order: [['timestamp', 'ASC']]
    })
    
    // helper function to get total trans points
    const allTransactionPoints = ()  => {
      let sum = 0
      transactions.forEach(transaction => sum += transaction.points)
      return sum
    }
    //store the total trans points
    let totalTransactionPoints = allTransactionPoints()
    //points alredy spent
    const pointsSpent = {}
    
    transactions.forEach(transaction => {  
      if (transaction.points < points) {
        if (totalTransactionPoints > points) {
          
          if (!pointsSpent[transaction.payer]) {
            pointsSpent[transaction.payer] = transaction.points * -1
          } else {
            pointsSpent[transaction.payer] -= transaction.points
          }
          totalTransactionPoints -= transaction.points
          points -= transaction.points
        } else {
          return res.status(400).send('Sorry, not enough reward points. Shop at your favorite store to earn points!')
        }
      } else {
        if (!pointsSpent[transaction.payer]) {
          pointsSpent[transaction.payer] = points * -1
        }
        totalTransactionPoints -= points
        points = 0
      }
    })
    
    //Convert points spent to prompt template
    const transactionsPayload = Object.entries(pointsSpent).map(item => ({
      payer: item[0],
      points: item[1],
    }))
    
    //update each record in db
    transactions.forEach(async(transaction) => {
      id = transaction.id
      await Point.update(transaction, {
        where: {id: id}
      })
    })

    return res.status(200).send(transactionsPayload)
  } catch (error) {
    throw error
  }
}

//handles retrieving balance
const GetBalance = async (req, res) => {
  try {
    let transactions = await Point.findAll()
    let balance = {}

    transactions.forEach(transaction => {
      balance[transaction.payer] ? balance[transaction.payer] += transaction.points : balance[transaction.payer] = transaction.points
    })

    return res.status(200).send(balance)
  } catch (error) {
    throw error
  }
}


module.exports = {
  AddTransaction,
  SpendPoints,
  GetBalance,
}