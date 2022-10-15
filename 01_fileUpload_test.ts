
Feature('Uploading File');

Scenario('Upload File', ({I}) => {
    I.amOnPage('upload');
    I.attachFile('#file-upload', '/fixtures/test.txt');
    I.click('#file-submit');
    I.see('File Uploaded!');
});
