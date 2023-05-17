const container = document.querySelector('.company-grid');

function randomRange(from, to) {
    return (Math.random() * (to - from + 1) | 0) + from;
}

const dot = n => parseInt(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const stockCollector = new Map();

class StockBuilder {
    constructor() {
        this.stockPrice = 0;
        this.companyName = '';
        this.logoPath = '';

        this.amount = 0;
        this.totalMoney = 0;
        this.companyElem = null;

        let id = Math.random() * 1e10 | 0;
        this.uuid = `c-${id}`;

        this.Interval = setInterval(() => {
            if (this.companyElem === null) {
                return;
            }
            this.randomStockPrice();
        }, randomRange(2000, 4000));

        stockCollector.set(this.uuid, this);
    }

    appendElem() {
        container.innerHTML += `
            <div class="company ${this.uuid}">
                <img src="${this.logoPath}" alt="company">
                <h3>${this.companyName}</h3>
                <p class="amount">보유: ${this.amount}<br><p class="rate"></p></p>
                <p class="price">$${dot(this.stockPrice)}</p>
                <div class="btn-wrapper">
                    <div class="btn-stock" onclick="buy('${this.uuid}')">구매</div>
                    <div class="btn-stock" onclick="sell('${this.uuid}')">판매</div>
                </div>
            </div>
        `;
        this.companyElem = document.querySelector(`.${this.uuid}`);
    }

    setName(name) {
        this.companyName = name;
        return this;
    }

    setPrice(price, random) {
        this.companyElem = document.querySelector(`.${this.uuid}`);
        this.stockPrice = price;

        if (this.companyElem !== null) {
            this.companyElem.querySelector('.price').innerHTML = `$${dot(price)}`;
            if (this.totalMoney === this.amount * this.stockPrice || this.amount === 0) {
                this.companyElem.querySelector('.rate').innerText = '-';
                this.companyElem.querySelector('.rate').setAttribute('style', 'color:gray');   
            }
            if (random > 0) {
                this.companyElem.querySelector('.rate').innerText = '▲' + parseInt(Math.abs(random));
                this.companyElem.querySelector('.rate').setAttribute('style', 'color:red');
            } else {
                this.companyElem.querySelector('.rate').innerText = '▼' + parseInt(Math.abs(random));
                this.companyElem.querySelector('.rate').setAttribute('style', 'color:blue');
            }
        }

        return this;    
    }

    setLogoPath(path) {
        this.logoPath = path;
        return this;
    }

    buyStock() {
        if (money < this.stockPrice) {
            alert('돈이 부족합니다. 아시겠어요???')
            return;
        }
        this.amount += 1;
        money -= this.stockPrice;
        this.totalMoney += this.stockPrice;

        this.companyElem.querySelector('.amount').innerHTML = `보유: ${this.amount}`;
        document.querySelector('.money').innerText = `보유 자산: ${dot(parseInt(money))}원`;
    }

    sellStock() {
        if (this.amount < 1) {
            return;
        }
        this.amount -= 1;
        money += this.stockPrice;
        this.totalMoney -= this.stockPrice;

        this.companyElem.querySelector('.amount').innerHTML = `보유: ${this.amount}`;
        document.querySelector('.money').innerText = `보유 자산: ${dot(parseInt(money))}원`;
    }

    randomStockPrice() {
        let random = randomRange(0, 40) + 80; // 80 ~ 120
        this.setPrice(this.stockPrice * random / 100, random - 100);
    }
}

function buy(uuid) {
    let company = stockCollector.get(uuid);
    console.log(company);
    company.buyStock();
}

function sell(uuid) {
    let company = stockCollector.get(uuid);
    console.log(company);
    company.sellStock();
}

new StockBuilder()
    .setName('삼성전자')
    .setPrice(66_000)
    .setLogoPath('/src/samsung.svg')
    .appendElem();

new StockBuilder()
    .setName('카카오')
    .setPrice(58_200)
    .setLogoPath('/src/kakao.svg')
    .appendElem();

new StockBuilder()
    .setName('한화솔루션')
    .setPrice(210_000)
    .setLogoPath('/src/hanwha.webp')
    .appendElem();

new StockBuilder()
    .setName('SK하이닉스')
    .setPrice(388_000)
    .setLogoPath('/src/hynix.svg')
    .appendElem();

new StockBuilder()
    .setName('네이버')
    .setPrice(193_200)
    .setLogoPath('/src/naver.svg')
    .appendElem();

new StockBuilder()
    .setName('LG전자')
    .setPrice(109_000)
    .setLogoPath('/src/lg.svg')
    .appendElem();

new StockBuilder()
    .setName('현대모터스')
    .setPrice(227_000)
    .setLogoPath('/src/hyundai.svg')
    .appendElem();

new StockBuilder()
    .setName('포스코')
    .setPrice(382_000)
    .setLogoPath('/src/posco.svg')
    .appendElem();