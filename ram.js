import express from "express"
import bodyParser from "body-parser"
import { verify } from 'crypto'
import stableStringify from 'fast-json-stable-stringify';
import { readFileSync } from 'fs'
import path from 'path'

const app = express();

app.use(bodyParser.json());

const rampKey = readFileSync(`${path.resolve()}/ramp-public-test.pem`).toString();

app.post('/webHook', function (request, response) {
    console.log('HERE!!')
    const event = request.body;

    if (request.body && request.header('X-Body-Signature')) {

        const verified = verify(
            'sha256',
            Buffer.from(stableStringify(request.body)),
            rampKey,
            Buffer.from(request.header('X-Body-Signature'), 'base64'),
        );

        if (verified) {
            console.log('SUCCESS');
            response.status(204).send();
        } else {
            console.error('ERROR: Invalid signature');
            response.status(401).send();
        }
    } else {
        console.error('ERROR: Wrong request structure');
        response.status(401).send();
    }
    console.log(event);
    const purchase = event.purchase;

    console.log(purchase.id);
    console.log(purchase.fiatValue);
    console.log(purchase.fiatCurrency);    
});

app.listen(process.env.PORT || 3000);
