module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://localhost:4444/wd/hub',
    waitTimeout: 5000,


    sets: {
        desktop: {
            files: 'integrationTest'
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                // testTimeout: 10000,
                // waitTimeout: 5000,
                // pageLoadTimeout: 10000,
                // sessionRequestTimeout: 10000,
                // sessionQuitTimeout: 10000,
                // httpTimeout: 10000
            },

        }
    }
}