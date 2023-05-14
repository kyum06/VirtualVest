const Stocks = Object.freeze([

    new StockBuilder()
        .setName('삼성전자')
        .setPrice(66000),

    new StockBuilder()
        .setName('카카오')
        .setPrice(58200),

    new StockBuilder()
        .setName('테슬라')
        .setPrice(210000),

    new StockBuilder()
        .setName('엔비디아')
        .setPrice(388000),

    new StockBuilder()
        .setName('네이버')
        .setPrice(193200),

    new StockBuilder()
        .setName('LG')
        .setPrice(109000),

    new StockBuilder()
        .setName('애플')
        .setPrice(227000),
   
    new StockBuilder()
        .setName('포스코')
        .setPrice(382000),
        
]);

setInterval(() => {
    Stocks.forEach(stock => {
        stock.changePrice();
    });
}, 1000);