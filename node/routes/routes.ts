const processs = require('process');
const parserRequest = require('./../parserRequest');
// const express = require('express');

const pathStart: string = processs.argv[2];
const newRequest: any = new parserRequest(pathStart);

const router = (app: any) => {
    app.get(`/${pathStart}`, (req: any, res: any) => {
        newRequest.getAllRepos(req, res)
    });

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash`, (req: any, res: any) => {
        newRequest.getAllCommits(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/commits/:commitHash/diff`, (req: any, res: any) => {
        newRequest.getDiff(req, res)
    })

    app.get(`/${pathStart}/:repositoryId/blob/:commitHash/:pathToFile*`, (req: any, res: any) => {
        newRequest.getShowFile(req, res)
    })

    app.get(`/${pathStart}/:repositoryId*(/tree/:commitHash)?(/:path*)?`, (req: any, res: any) => {
        newRequest.getAllFilesInFolder(req, res)
    })

    app.post(`/${pathStart}`, (req: any, res: any) => {
        newRequest.addNewRepo(req, res)
    });

    app.delete(`/${pathStart}/:repositoryId`, (req: any, res: any) => {
        newRequest.deleteRepo(req, res)
    })

    app.use(function(req: any, res: any, next: any) {
        res.status(404).send('Sorry cant find that!');
    });
}

module.exports =  router;

