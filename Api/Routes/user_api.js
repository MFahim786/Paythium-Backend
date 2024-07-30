const express = require("express");
const router = express.Router();
const stripe = require('stripe')('sk_test_51PGbM4KUNELnNZi7as5VAGmnqgkT6cVzGeYIAFpU7SaEOPeagrY79WnEIyc5D3bvVFe0nHsPjJFRtfV86eZuw9v600mgsScdbL');

// Middleware to parse JSON
router.use(express.json());

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount in dollars, e.g., 1.80
  console.log('Amount received:', amount);

  // Convert amount to cents
  const amountInCents = Math.round(parseFloat(amount) * 100);
  console.log('Amount in cents:', amountInCents);

  try {
    // Create a price object
    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: amountInCents, // Use the amount in cents
      recurring: {
        interval: 'month',
      },
      product_data: {
        name: 'Paythium Payment',
      },
    });

  
});

module.exports = router;
