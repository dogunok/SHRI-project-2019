const processModule = require('process');
const parserRequest = require('./../parserRequest');

const pathStart: string = processModule.argv[2];
const newRequest: any = new parserRequest(pathStart);

interface Res{
    send: (item: {}) => void;
    status: any;
}

interface App {
    get: (path: string, test: {}) => void;
    post: (path: string, test: {}) => void;
    delete: (path: string, test: {}) => void;
    use: ({}) => void;
}

const router = (app: App) => {
    app.get(`/${pathStart}`, (req: object, res: object) => {
        newRequest.getAllRepos(req, res)
    });

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash`, (req: object, res: object) => {
        newRequest.getAllCommits(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash/diff`, (req: object, res: object) => {
        newRequest.getDiff(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/blob/:commitHash/:pathToFile*`, (req: object, res: object) => {
        newRequest.getShowFile(req, res)
    })

    app.get(`/${pathStart}/:repositoryId*(/tree/:commitHash)?(/:path*)?`, (req: object, res: object) => {
        newRequest.getAllFilesInFolder(req, res)
    })

    app.post(`/${pathStart}`, (req: object, res: object) => {
        newRequest.addNewRepo(req, res)
    });

    app.delete(`/${pathStart}/:repositoryId`, (req: object, res: object) => {
        newRequest.deleteRepo(req, res)
    })

    app.use((req: object, res: Res, next: any) => {
        res.status(404).send('Sorry cant find that!');
    });
}

module.exports =  router;

