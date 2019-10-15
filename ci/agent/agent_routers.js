const { execFile} = require('child_process');
const request = require('request');
const numberBuild = [];

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
    if(!numberBuild.includes(randomNumber)){
        numberBuild.push(randomNumber)
        return randomNumber
    }

    return getRandom(min, max);
}

const requestBuildInfo = (path, info) => {
    request.post(
        path,
        {
            form: {
                ...info
            }
        },
        (err, res, body) => {
            console.log('done request')
        }
    )
}

const agentRouter = (app, pathRepo, pathServer) => {
    app.post(`/`, (req, res, next) => {
        console.log('/')
        let time = Date.now();
        const hashCommit = req.body.hash;
        const nameCommand = req.body.nameCommand.split(' ');
        const infoFinishCommand = {
            time: '',
            stdout: '',
            stderr: '',
            numberBuild: ''
        }

        if(hashCommit){
            execFile('git' ,
            ['checkout', hashCommit],
            {cwd: pathRepo,
            maxBuffer: 1000000}, (err, out) => {
                if(err) return res.send(err);
                console.log(`Сменил ветку ${hashCommit}`)
                console.log(out)
            });
        }

        execFile(
            nameCommand[0] ,
            nameCommand.slice(1),
            {cwd: pathRepo,
            maxBuffer: 1000000},
            (err, out, stderr) => {
                if(err) return res.send(err);
                time = Date.now() - time;
                infoFinishCommand.time = time;
                infoFinishCommand.stdout = out;
                infoFinishCommand.stderr = stderr;
                infoFinishCommand.numberBuild = getRandom(100000, 999999);
                console.log(`${nameCommand[0]} ${nameCommand.slice(1).join(' ')} команда завершина`);
                console.log(getRandom(100000, 999999))
                console.log('Время выполнения = ', time, 'ms');

                requestBuildInfo(pathServer + '/notify_build_result', infoFinishCommand)
                res.end();
            }
        );
    });
}

module.exports = agentRouter;