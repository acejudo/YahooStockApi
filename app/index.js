var express = require('express') //llamamos a Express
var app = express()               
var yahooStockPrices = require('./yahoo-stock-prices');
const getMarketPrice = yahooStockPrices.getMarketPrice;
const getMarketPriceChange = yahooStockPrices.getMarketPriceChange;
const getMarketChangePercent  = yahooStockPrices.getMarketChangePercent;
const getPreMarketPrice = yahooStockPrices.getPreMarketPrice;
const getPreMarketChange = yahooStockPrices.getPreMarketChange;
const getPreMarketChangePercent = yahooStockPrices.getPreMarketChangePercent;

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', async (req, res) => {
    let ticker = req.query.ticker;
    if(ticker != null){
      const marketPrice = await getMarketPrice(ticker);
      const marketPriceChange = await getMarketPriceChange(ticker);
      const marketPriceChangePercent =  await getMarketChangePercent(ticker);
      const preMarketPrice = await getPreMarketPrice(ticker);
      const preMarketChange = await getPreMarketChange(ticker);
      const preMarketChangePercent = await getPreMarketChangePercent(ticker);
      res.json({ 
        'marketPrice': marketPrice ,
        'marketPriceChange': marketPriceChange ,
        'marketPriceChangePercent' : marketPriceChangePercent, 
        'preMarketPrice': preMarketPrice ,
        'preMarketPriceChange': preMarketChange,
        'preMarketPriceChangePercent': preMarketChangePercent
      })   
   } else {
      res.sendStatus(400);
   }
  })

app.listen(port)
console.log('Running ' + port)