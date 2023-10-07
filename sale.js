import { Counter } from "./main.js";

export const startNum = 0;

export default class Sale {
    constructor(saleObject) {
        console.log(Counter);
        self.num++;
        this.saleObject = saleObject;
    }    

    getAmount() {
        return this.saleObject.units_sold * this.saleObject.unit_price;
    }

}

Sale.num = startNum;


