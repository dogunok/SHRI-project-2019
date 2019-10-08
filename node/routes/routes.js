const process = require('process');
const ParserRequest = require('../parserRequest.js');
const pathStart = process.argv[2];
const newRequest = new ParserRequest(pathStart)


const router = app => {
    app.get(`/${pathStart}`, (req, res) => {
        newRequest.getAllRepos(req, res)
    });

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash`, (req, res) => {
        newRequest.getAllCommits(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash/diff`, (req, res) => {
        newRequest.getDiff(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/blob/:commitHash/:pathToFile*`, (req, res) => {
        newRequest.getShowFile(req, res)
    })

    app.get(`/${pathStart}/:repositoryId*(/tree/:commitHash)?(/:path*)?`, (req, res) => {
        newRequest.getAllFilesInFolder(req, res)
    })

    app.post(`/${pathStart}`, (req, res) => {
        newRequest.addNewRepo(req, res)
    });





    app.delete(`/${pathStart}/:repositoryId`, (req, res) => {
        newRequest.deleteRepo(req, res)
    })

    app.use(function(req, res, next) {
        res.status(404).send('Sorry cant find that!');
    });
}
module.exports = router;

