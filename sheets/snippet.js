const {google} = require('googleapis');
const keys = require('./keys.json')
const fs = require('fs');
const mock = require('mock.json');

//
//https://developers.google.com/sheets/api/quickstart/nodejs
//https://console.developers.google.com/
//https://developers.google.com/identity/protocols/oauth2/scopes
//https://www.googleapis.com/auth/spreadsheets

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function (err, tokens) {

    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Connected!');
        gsrun(client);
    }
});

async function gsrun(cl) {
    const gsapi = google.sheets({version: 'v4', auth: cl});
    const opt = {
        spreadsheetId: mock.spreadsheetId,
        range: mock.range
    };
    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    let newDataArray = dataArray.map(function (r) {
        return r;
    })
    createFeatureFile("googleSheetTest",dataArray);
    console.log(newDataArray);
}

function createFeatureFile(name, testData) {
    fs.unlinkSync(mock.path+ name + '.feature');
    fs.appendFile(mock.file+ name + '.feature', parseToCucumber(testData), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function parseToCucumber(inputData) {
    let returnString = '';
    for (let i = 0; i < inputData.length; i++) {
        console.log(inputData[i].join(' '))
        returnString += inputData[i].join(' ');
        returnString += '\n';
    }
    return returnString;
}
