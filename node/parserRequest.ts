const fs = require('fs');
const {execFile} = require('child_process');
// const express = require('express');


 class ParserRequest {
    path: string;
    allComits: string | {};

    constructor(path: string){
        this.path = path;
        this.allComits = '';
    };

    getAllRepos(req: any, res: any, sourceLocation = './../') {
        fs.readdir(sourceLocation + this.path , (err: Error, files: any) => {
            if(err) return res.send(err)
            const allRepos = files.filter((item: any) => item[0] !== '.');
            res.send(allRepos);
        });
    };

    getAllCommits(req: any, res: any, sourceLocation = './../'){
        const params = req.params;

        type AllInfo = {
            log: string[];
        };

        const allInfo: AllInfo = {
            log: []
        };

        execFile('git' ,
        [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `${this._checkArg(params.commitHash, 'master')}`],
        {cwd: `${sourceLocation + this.path}/${this._checkArg(params.repositoryId, '')}${this._checkArg(params['3'], '')}`, maxBuffer: 100000000},
        (err: Error, out: any) => {
            if(err) return res.send(err);
            out.trim().split('\n').map(() => (item: string) => allInfo.log.push(item));
            res.send(allInfo.log)
        });
    };

    getDiff(req: any, res: any){
        const params = req.params
        execFile('git' ,
        ['diff', `${params.commitHash}^1..${params.commitHash}`],
        {cwd: `./${this.path}/${params.repositoryId}`,
        maxBuffer: 1000000}, (err: Error, out: any) => {
            if(err) return res.send(err);

            res.send(out);
        });
    };

    getAllFilesInFolder(req: any, res: any, sourceLocation = './../'){
        const params = req.params;
       type AllInfo = {
           fileName: string[];
           log: string[];
       };

        const allInfo: AllInfo = {
            fileName: [],
            log: []
        };

        const checkAnswer = () => {
            if(allInfo.fileName.length > 0 && allInfo.log.length > 0){
                res.send(allInfo);
            }
        }

        if(params['0'].match('tree') || params['2'] === undefined){

            execFile('git' ,
            [`ls-tree`, `-r`, `--name-only`, `${this._checkArg(params.commitHash, 'master')}`],
            {cwd: `${sourceLocation + this.path}/${this._checkArg(params.repositoryId, '')}${this._checkArg(params['3'], '')}`, maxBuffer: 100000000},
            (err: Error, out: any) => {
                if(err) return res.send(err);
                out.trim()
                .split('\n')
                .map((item: string) => allInfo.fileName
                .push(item));

                checkAnswer()
            });

            execFile('git' ,
            [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `${this._checkArg(params.commitHash, 'master')}`],
            {cwd: `${sourceLocation + this.path}/${this._checkArg(params.repositoryId, '')}${this._checkArg(params['3'], '')}`, maxBuffer: 100000000},
            (err: Error, out: any) => {
                if(err) return res.send(err);
                out.trim()
                .split('\n')
                .map(() => (item: string) => allInfo.log
                .push(item));

                checkAnswer()
            });

        } else if(params['2'] !== undefined){
            res.status(404).send('Sorry cant find that!');
        };
    };

    getShowFile(req: any, res: any){
        const params = req.params;
        execFile('git' ,
        ['show', `${params.commitHash}:${params.pathToFile}${params['0']}`],
        {cwd: `./../${this.path}/${params.repositoryId}`,
        maxBuffer: 1000000}, (err: Error, out: any) => {
            if(err) return res.send(err)
            res.send(out)
        });
    };

    addNewRepo(req: any, res: any){
        const inJson = req.body;
        execFile('git' ,
        ['clone', inJson.url],
        {cwd: `./${this.path}`,
        maxBuffer: 1000000}, (err: Error, out: any) => {
            if(err) return res.send(err);
            res.send('added new repo');
        });
    };

    deleteRepo(req: any, res: any){
        const params = req.params
        fs.rmdir('./' + this.path + '/' + params.repositoryId, (err: Error) => {
            if (err) throw err;
            console.log(`${this.path} was deleted`);
        });
    };

    _checkArg(arg: string, firstAnswer: string){
        return arg === undefined ? firstAnswer : arg;
    };
};

module.exports =  ParserRequest;