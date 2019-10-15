const path = require('path');
const request = require('request');
const allAgent = [];
const allInfoCommand = [];

const router = (app, pathRepo) => {
    app.get(`/`, (req, res, next) => {
        res.sendFile('index.html', {root: path.join(__dirname, '../morkup')})
    });

    app.post(`/notify_agent`, (req, res, next) => {
        allAgent.push(req.body);
        console.log(req.body)
        res.end()
    });

    app.post('/notify_build_result', (req, res, next) => {
        console.log('notify_build_result --- done');
        allInfoCommand.push(req.body)
        console.log(allInfoCommand)
    })

    app.post('/buildRequest', (req, res, nex) => {
        for(let i = 0; i < allAgent.length; i++){
            if(allAgent[i].free){
                const hostAgent = allAgent[i].host;
                const portAgent = allAgent[i].port;
                request.post(
                    `${hostAgent}:${portAgent}/`
                    ,
                    {
                        form: {
                            hash: req.body.hash,
                            nameCommand: req.body.nameCommand
                        }
                    },
                    function(err,httpResponse,body){
                        console.log(`${hostAgent}:${portAgent}`)
                        console.log('request done')
                    }
                )
                break
            }
        }
        res.end()
    })
}
module.exports = router;

