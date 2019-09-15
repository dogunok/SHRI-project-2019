const fs = require('fs');
const { execFile} = require('child_process');

module.exports = class ParserRequest{
    constructor(path){
        this.path = path
        this.allComits
    }

    

    getAllRepos(req, res) {
        fs.readdir('./' + this.path , (err, files) => {
            if(err) return res.send(err)
            const allRepos = files.filter(item => item[0] !== '.');
            res.send(allRepos);
        });
    }

    getAllCommits(req, res){
        const params = req.params
        execFile('git' ,
        ['log', '--pretty=format:{"commitHash":"%H", "date": "%ad", "nameCommit": "%s"};'],
        {cwd: `./${this.path}/${params.repositoryId}`},
        (err, out) => {
            if(err) return res.send(err)
            const infoCommit = [];

            out.split(';').map(item => {
                if(item.length > 0) {
                    try{
                        infoCommit.push(JSON.parse(item))
                    } catch{
                        infoCommit.push(item)
                    }
                }
            })
            this.allComits = infoCommit
            res.send(infoCommit)
        })
    }

    getDiff(req, res){
        const params = req.params
        execFile('git' ,
        ['diff', `${params.commitHash}^1..${params.commitHash}`],
        {cwd: `./${this.path}/${params.repositoryId}`,
        maxBuffer: 1000000}, (err, out) => {
            if(err) return res.send(err)

            res.send(out)
        })
    }

    getAllFilesInFolder(req, res){
        const params = req.params;
        if(params['0'].match('tree') || params['2'] === undefined){
            execFile('git' ,
            [`ls-tree`, `-r`, `--name-only`, `${this._checkArg(params.commitHash, 'master')}`],
            {cwd: `./${this.path}/${this._checkArg(params.repositoryId, '')}${this._checkArg(params['3'], '')}`},
            (err, out) => {
                const allName = {};
                if(err) return res.send(err)
                out.trim().split('\n').map((item, i) => allName["name-" + i] = "" + item);
                res.send(allName);
            })
        } else if(params['2'] !== undefined){
            res.status(404).send('Sorry cant find that!');
        }
    }

    getShowFile(req, res){
        const params = req.params;
        execFile('git' ,
        ['show', `${params.commitHash}:${params.pathToFile}${params['0']}`],
        {cwd: `./${this.path}/${params.repositoryId}`,
        maxBuffer: 1000000}, (err, out) => {
            if(err) return res.send(err)
            res.send(out)
        })
    }

    addNewRepo(req, res){
        const inJson = req.body;
        execFile('git' ,
        ['clone', inJson.url],
        {cwd: `./${this.path}`,
        maxBuffer: 1000000}, (err, out) => {
            if(err) return res.send(err)
            res.send('added new repo')
        })
    }

    deleteRepo(req, res){
        const params = req.params
        fs.rmdir('./' + this.path + '/' + params.repositoryId, (err) => {
            if (err) throw err;
            console.log(`${this.path} was deleted`);
        });
    }

    _checkArg(arg, firstAnswer){
        return arg === undefined ? firstAnswer : arg;
    }
}
