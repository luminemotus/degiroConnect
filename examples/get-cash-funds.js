const DeGiro = require('..');

const degiro = DeGiro.create({
    // username: 'your-username',
    // password: 'your-password',
});

degiro.login().then(degiro.getCashFunds)
.then(console.log)
.catch(console.error);
