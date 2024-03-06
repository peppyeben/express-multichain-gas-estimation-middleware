
const express = require("express");
const app = express();
const gasEstimationMiddleware = require("../index");

// Middleware to parse JSON requests
app.use(express.json());

// Use Ethereum Gas Estimation Middleware
app.use(gasEstimationMiddleware);

// Route to handle incoming Ethereum transaction requests
app.post("/transaction", (req, res) => {
  console.log(req.body);
  // Access gas estimation data from the request object
  const gasEstimation = req.ethereumGasEstimation;

  // Respond with gas estimation data
  res.status(200).json({ gasEstimation });
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
