const request = require('request');
const baseUrl = 'https://finance.yahoo.com/quote/';

const getMarketPrice = function (ticker) {
    return getResult(ticker, 'regularMarketPrice')
  };

const getMarketPriceChange = function (ticker) {
    return getResult(ticker, 'regularMarketChange')
  };

const getMarketChangePercent = function (ticker) {
    return getResult(ticker, 'regularMarketChangePercent')
  };

const getPreMarketPrice = function (ticker) {
    return getResult(ticker, 'preMarketPrice')
  };

const getPreMarketChange = function (ticker) {
    return getResult(ticker, 'preMarketChange')
  };

const getPreMarketChangePercent = function (ticker) {
    return getResult(ticker, 'preMarketChangePercent')
  };


  

function getResult(ticker, type){
    return new Promise((resolve, reject) => {
        request(`${baseUrl + ticker}/`, (err, res, body) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                let price = body.split(`"${ticker}":{"sourceInterval"`)[1]
                    .split(type)[1]
                    .split('fmt":"')[1]
                    .split('"')[0];

                price = getPrice(price, body, resolve);
            } catch (err) {
                reject(err);
            }
        });
    });
}

function getPrice(price, body, resolve) {
    price = parseFloat(price.replace(',', ''));
    const currencyMatch = body.match(/Currency in ([A-Za-z]{3})/);
    let currency = null;
    if (currencyMatch) {
        currency = currencyMatch[1];
    }
    resolve({
        currency,
        price,
    });
    return price;
}

module.exports = {
    getPreMarketPrice, getPreMarketChange, getPreMarketChangePercent, getMarketPrice, getMarketChangePercent, getMarketPriceChange
};