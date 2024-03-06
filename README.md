# EVM Gas Estimation Middleware for Express.js

This middleware provides functionality to estimate gas costs of EVM transactions in Express.js applications. It integrates with the `multichain-evm-gas-estimator` package to accurately estimate gas costs based on provided transaction details.

## Installation

To install the EVM Gas Estimation Middleware, you can use npm:

```
npm install express-multichain-gas-estimation-middleware
```

## Usage

1. Import the EVM Gas Estimation Middleware into your Express.js application:

```javascript
const express = require("express");
const app = express();
const gasEstimationMiddleware = require("express-multichain-gas-estimation-middleware");

// Middleware to parse JSON requests
app.use(express.json());

// Use EVM Gas Estimation Middleware
app.use(gasEstimationMiddleware);

// Route to handle incoming EVM transaction requests
app.post("/transaction", (req, res) => {
  // Access gas estimation data from the request object
  const gasEstimation = req.EVMGasEstimation;

  // Respond with gas estimation data
  res.status(200).json({ gasEstimation });
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

2. Send POST requests to the `/transaction` endpoint with EVM transaction details in the request body. The middleware will estimate gas costs and attach the estimation data to the request object. The route handler can then access this data and respond accordingly.

## Middleware Documentation

The EVM Gas Estimation Middleware is designed to estimate gas costs for EVM transactions. Here's how it works:

- The middleware intercepts incoming requests to your Express.js application.
- It extracts EVM transaction details from the request body, including the chain, Infura API key, transaction details (`txDetails`), and gas unit (`unit`).
- Using the `multichain-evm-gas-estimator` package, it estimates the gas cost for the transaction.
- The gas estimation data is attached to the request object as `req.EVMGasEstimation`.
- The middleware handles errors during gas estimation and responds with a 500 status code and an error message if necessary.

## Contributions and Issues

Feel free to contribute to this project or report any issues on the [GitHub repository](https://github.com/peppyeben/express-multichain-gas-estimation-middleware).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides an overview of the EVM Gas Estimation Middleware and demonstrates how to integrate it into your Express.js applications for accurate gas cost estimation in EVM transactions.
