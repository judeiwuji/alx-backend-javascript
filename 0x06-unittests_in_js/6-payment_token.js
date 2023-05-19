const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      return resolve({ data: 'Successful response from the API' });
    }
    resolve();
  });
};

module.exports = getPaymentTokenFromAPI;
