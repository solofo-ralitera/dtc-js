class Sale {
    constructor(saleObject) {
        self.num++;
        this.saleObject = saleObject;
    }    

    getAmount() {
        return this.saleObject.units_sold * this.saleObject.unit_price;
    }

}

Sale.num = 0;