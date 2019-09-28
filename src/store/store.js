class Store{
    constructor(){
        this.state = {
            visibileFiles: [
                'api',
                'ci',
                'contrib',
                'http',
                'lib',
                'local',
                'packages',
                'robots',
                'server',
                'ut',
                'README.md',
                'ya.make'
            ]
        }
    }

    _getState(){
        return this.state
    }
}