var axios = require('axios');
var data = JSON.stringify({
    "exchange": "NSE",
    "tradingsymbol": "INFY-EQ",
    "quantity": 5,
    "disclosedquantity": 3,
    "transactiontype": "BUY",
    "ordertype": "MARKET",
    "variety": "NORMAL",
    "producttype": "INTRADAY"
});

var config = {
    method: 'post',
    url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/placeOrder ',
    headers: {
        'Authorization': 'Bearer AUTHORIZATION_TOKEN',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-UserType': 'USER',
        'X-SourceID': 'WEB',
        'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
        'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
        'X-MACAddress': 'MAC_ADDRESS',
        'X-PrivateKey': 'VYTfxNrb'
    },
    data: data
};

axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
        console.log(error);
    });