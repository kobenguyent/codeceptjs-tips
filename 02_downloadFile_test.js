
Feature('Downloading File');

Scenario('File is downloaded', (I) => {
    I.amOnPage('download');
    I.handleDownloads();
    I.click('Country.pdf');
    I.amInPath('output/downloads');
    I.wait(2);
    I.seeFile('Country.pdf');
});
