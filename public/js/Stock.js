const container = document.querySelector('.container');

class StockBuilder {

    constructor() {
        this.amount = 0;
        this.price = 0;
        this.name = '';

        this.titleElement = null;
        this.priceElement = null;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    changePrice() {
        let random = Math.random() * 60 | 0;

        if (random < 40)
            this.price *= 1 + random / 100;

        else
            this.price *= 1 - (random - 39) / 100;

        return this.price;
    }

    getName() {
        return this.name;   
    }

    setName(name) {
        this.name = name;
        return this;
    }

    buyStock(amount, money) {
        if (this.getPrice() * amount < money) {
            alert('돈이 부족합니다');
            return;            
        }
        return money -= this.getPrice() * amount;
    }

    sellStock(amount) {
        if (this.amount < amount) {
            alert('보유 주식이 부족합니다');
            return;
        }
        return this.price * amount;
    }

    applyStock() {
        this.stockDiv = document.createElement('div');

        this.titleElement = document.createElement('h1');
        this.priceElement = document.createElement('h2');
        
        this.stockDiv.append(this.titleElement);
        this.stockDiv.append(this.priceElement);

        this.stockDiv.className = 'stock';
        container.append(this.element);
        
        return this;
    }
}