import Sale, {startNum} from "./sale.js";
import { MyButton } from "./MyButton.js";
export const Counter = 0;

const getData = () => {
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
        console.log(amounts);
    })
}

// getData();
// const mySet = new Set();
// console.log(mySet);

document.getElementById('getData-btn')?.addEventListener('click', () => {
    getData();
})




