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
            },

        }
    }
}