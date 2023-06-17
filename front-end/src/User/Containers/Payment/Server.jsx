// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NCzKkSGKUfFuPYDUJQYcSsOZroh4yUlkQ1fZgRyGxC57kuOBBrT6OCEqaXHbjbfIqXEzLfV17zvc0bV8oRgzf2r00eZAQqp4A');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));