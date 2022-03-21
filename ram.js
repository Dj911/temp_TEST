import express from "express"
import bodyParser from "body-parser"
const app = express();

app.use(bodyParser.json());

app.post('/webHook', function (request, response) {
    console.log('HERE!!')
    const event = request.body;
    console.log(event);
    const purchase = event.purchase;

    console.log(purchase.id);
    console.log(purchase.fiatValue);
    console.log(purchase.fiatCurrency);

    response.send('OK');
});

app.listen(3000);
