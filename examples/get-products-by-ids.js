const DeGiro = require('../src/index');

(async () => {
    const degiro = DeGiro.create({
        username: 'raskuks',
        password: '@AB12mx34',
    });

    await degiro.login();

    console.log(await degiro.getProductsByIds(['8066561', '331868']));
})();
