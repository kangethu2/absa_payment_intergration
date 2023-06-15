import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';

export function sign(data) {
    const secret_key = 'xxxxx';
    const hmacDigest = Base64.stringify(hmacSHA256(data, secret_key));

    return hmacDigest;

}


export function buildDataToSign(formData) {
    const signedFieldNames = formData['signed_field_names'].split(',');
    const dataToSign = signedFieldNames.map(field => `${field}=${formData[field]}`);
    //console.log({ dataToSign })
    return commaSeparate(dataToSign);
}

function commaSeparate(dataToSign) {
    return dataToSign.join(',');
}

// export function simFormData() {
//     return {
//         access_key: 'a22e75eea7cf3ce6b0f601b91dad0109',
//         profile_id: '14B8EE96-D2CF-4F5E-93BA-DB4DF59D9FE9',
//         transaction_uuid: "641c226bafa90",
//         unsigned_field_names: "",
//         signed_field_names: "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,bill_to_address_line1",
//         signed_date_time: "2023-03-23T09:56:59Z",
//         locale: 'en',
//         bill_to_address_line1: 'My Apartment',
//         transaction_type: "authorization",
//         reference_number: "1679565420930",
//         amount: "1000.00",
//         currency: "KES",
//     }
// }