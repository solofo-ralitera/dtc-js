// Asyncrhone
//console.log('Metsena');

//console.log('Tetehina ny sakafo');

// mamana rano
//console.log('Ataingina ny rano');
let tempRano = 70;


/*while(tempRano <= 100) {
    console.log('Efa mangotraka ve?', tempRano);
    tempRano++;
}
console.log('Mafaka ny rano')
*/

/*
setTimeout(() => {
    tempRano++;
    console.log('Mafana ve?', tempRano);
}, 3000)

let tempMenaka = 20;
setInterval(() => {
    tempMenaka++;
    console.log('Mafana ve ny menaka?', tempMenaka);
}, 500)
*/

[1,2,3,4,5,6,7,8,9].forEach(num => {
})

const mamanarano = () => {
    return new Promise(resolve => {
        let temp = 90;
        console.log('Mamana rano');
        temp++;
        const interval = setInterval(() => {
            if(temp > 100) {
                clearInterval(interval);
                return resolve({temp: temp});
            }
            temp++;
        }, 100);
    })    
}


const mamanamenaka = () => {
    return new Promise(resolve => {
        let temp = 90;
        console.log('Mamana menaka');
        temp++;
        const interval = setInterval(() => {
            if(temp > 150) {
                clearInterval(interval);
                return resolve({temp: temp});
            }
            temp++;
        }, 100);
    })    
}

/*
mamanarano()
    .then((temp) => {
        console.log('Arotsaka ny sakafo', temp);
        return 'Voarotsaka ny sakafo';
    }).then((v) => {
        return mamanamenaka();
    }).then(() => {
        console.log('Mafana ny menaka');
    })
*/

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

let volako = 5000;
new Promise(resolve => {
    console.log('nividy kiraro');
    resolve(getRandomArbitrary(0, 1000));
}).then(sisambolako => {
    if(sisambolako > 600) {
        console.log('nividy mofo');
        return sisambolako - 600;
    } else if(sisambolako < 300) {
        console.log('nividy sigara');
        return sisambolako - 300;
    }
    return sisambolako;
}).then(sisambolako => {
    if(sisambolako <= 0) {
        console.log('Mody @ zay');
        return null;
    }
    console.log('Mividy zavatra hafa');
    return sisambolako - 100;
}).then(sisambolako => {
    console.log(sisambolako);
    if(sisambolako <= 0) {
        throw new Error('Tsisy vola tsony');
    }
})

//console.log('Asina sira ny sakafo');
