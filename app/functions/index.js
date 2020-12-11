const dotenv = require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripeAPI = process.env.STRIPE_TEST_API_KEY
const stripe = require('stripe')(`${stripeAPI}`);

// api

// -app config
const app = express();

// -middleware
app.use(cors({ origin: true }));
app.use(express.json());

// -api routes
app.get('/', (req, res) => res.status(200).send('hello world!'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment request received :P Total: ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// -listen command
exports.api = functions.https.onRequest(app);