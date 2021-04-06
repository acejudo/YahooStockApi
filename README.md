Run node app/index.js 

Create docker image
    docker build -t yahoo_stock_api .

Docker run
    docker run -p 8080:8080 -d yahoo_stock_api

http://localhost:8080/?ticker=AQB
