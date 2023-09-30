const Stat = {
    getCountries: (datasource) => {
        console.log(datasource);
        return Array.from(new Set(datasource.map(sale => {
            return sale.country;
        })))
    },


    getUnitSold: (datasource) => {
        // this.getCountries([]);
        // console.log(self);
    },
};