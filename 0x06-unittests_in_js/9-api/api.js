const express = require('express');

const PORT = 7865;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));
