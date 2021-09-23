const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const stripe = require('stripe')(`${STRIPE_SECRET_KEY}`)

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400
}
app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd'
  })
  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
