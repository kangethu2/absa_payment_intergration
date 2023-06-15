const express = require('express')
const crypto = require('crypto');

const app = express()

// Accept and Parse JSON data
app.use(express.json())

// Serve files in the ./dist folder
app.use('/', express.static('dist'))


// Define API endpoints
app.post('/api/v1/signature', async function(req, res) {
    // console.log(req.body)


    const formData = {
        access_key: 'xxxx',
        profile_id: 'xxxx',
        ...req.body
    }

    const SECRET_KEY = 'xxxxxx';

    formData.signature = signData(buildDataToSign(formData), SECRET_KEY);

    res.json({ signature: formData.signature })
})

function signData(data, secretKey) {
    const HMAC_SHA256 = 'sha256';
    const hmac = crypto.createHmac(HMAC_SHA256, secretKey);
    hmac.update(data);
    return hmac.digest('base64');
}

function buildDataToSign(formData) {
    const signedFieldNames = formData['signed_field_names'].split(',');
    const dataToSign = signedFieldNames.map(field => `${field}=${formData[field]}`);
    //console.log({ dataToSign })
    return commaSeparate(dataToSign);
}

function commaSeparate(dataToSign) {
    return dataToSign.join(',');
}

app.listen(3000, console.log("listening on port 3000"))