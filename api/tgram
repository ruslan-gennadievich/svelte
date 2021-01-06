module.exports = (req, res) => {
  console.log(req);
  const axios = require('axios');
  const TOKEN = process.env.BOT_TOKEN;
  
  const baseUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  return axios
          .get(baseUrl, { params })
          .catch(e => {
            console.error('Telegram error', e.response.data);
          });
};
