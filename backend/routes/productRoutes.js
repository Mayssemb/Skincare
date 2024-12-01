const express = require('express');
const router = express.Router();

// Sample route to fetch products
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Product One',
      price: '$19.99',
      description: 'Awesome product!',
    },
  ]);
});

module.exports = router;
