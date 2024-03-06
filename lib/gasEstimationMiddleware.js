const estimateGas = require("multichain-evm-gas-estimator");

/**
 * Middleware function for estimating gas costs of EVM transactions.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @returns {Promise<void>} - Promise representing the asynchronous execution of the middleware.
 */
async function gasEstimationMiddleware(req, res, next) {
  // Extract EVM transaction details from the request body
  const { chain, InfuraAPIKey, txDetails, unit } = req.body;

  try {
    // Estimate gas cost for the transaction
    const gasEstimation = await estimateGas(
      chain,
      InfuraAPIKey,
      txDetails,
      unit
    );

    // Attach gas estimation data to the request object
    req.EVMGasEstimation = gasEstimation;

    // Move to the next middleware
    next();
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
}

module.exports = gasEstimationMiddleware;
