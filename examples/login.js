const DeGiro = require('../src/index');

console.log('hello world');

const degiro = DeGiro.create({
     username: 'raskuks',
     password: '@AB12mx34',
});

degiro.login()
    .then( console.log)
    //.catch(console.error)
