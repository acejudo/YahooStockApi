[![Build and deploy Node.js app to Azure Web App - yahoostockapi](https://github.com/acejudo/YahooStockApi/actions/workflows/main_yahoostockapi.yml/badge.svg)](https://github.com/acejudo/YahooStockApi/actions/workflows/main_yahoostockapi.yml)

# Yahoo Stock Api

Get stock prices in real time using Yahoo Finance and node

- Actual market price
- Market price change
- Market price change in percent
- Pre Market price
- Pre Market price change
- Pre Market price change in percent

# Run
    node app/index.js 
    
# Create docker image
    docker build -t acejudo/yahoo_stock_api .

# Docker run
    docker run -p 8080:8080 -d acejudo/yahoo_stock_api
# Request

    http://localhost:8080/?ticker=AQB
    
    https://yahoostockapi.azurewebsites.net/?ticker=AQB

# Response

    {
      "ticker": "MSFT",
      "marketPrice": {
        "currency": "USD",
        "price": 253.25
      },
      "marketPriceChange": {
        "currency": "USD",
        "price": 3.35
      },
      "marketPriceChangePercent": {
        "currency": "USD",
        "price": 1.34
      },
      "preMarketPrice": {
        "currency": "USD",
        "price": 252.82
      },
      "preMarketPriceChange": {
        "currency": "USD",
        "price": -0.43
      },
      "preMarketPriceChangePercent": {
        "currency": "USD",
        "price": -0.17
      }
    }
