const getData = (obj) => {
    fetch('./data/sales_100.json')
    .then(res => res.json())
    .then(data => {
        const globalSales = [];        
        data.sales_100.forEach((sale, index) => {
            const oSale = new Sale(sale);
            globalSales.push(oSale.getAmount());
        });
        return globalSales
    })
    .then(amounts => {
        // console.log(amounts);
    })
}

// getData();
// const mySet = new Set();
// console.log(mySet);

const myFunc = (a, b, c) => {
    console.log(a, b, c);
}


const monNOme = '';

myFunc(monNOme);





