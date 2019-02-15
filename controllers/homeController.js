var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

exports.stripeData = function (req, res) {
    let chargeResponse = {};
    let charges = stripe.charges.list(
        { limit: 3 },
        (err, charges) => {
            if (err) {
                console.log(err);
            } else {
                charges.data.forEach((elem, index, array) => {
                    console.log(elem.id);
                    chargeResponse[elem.id] = {amount: elem.amount}
                });
            }
            res.render('stripe', {response: chargeResponse});
            console.log(chargeResponse);
        });
};