
Feature('Downloading File');

Scenario('File is downloaded', async ({I}) => {
    I.amOnPage('/download');
    await I.handleDownloads('file.txt');
    I.click('file.txt');
    I.amInPath('output');
    await I.waitForFile('file.txt', 10);
});
