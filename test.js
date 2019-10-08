const assert = require('chai').assert;
const fs = require('fs');
const {execFile} = require('child_process');

const testPath = 'api/repos';

describe('Контроллеры - обработчики запросов', () => {
    describe('Проверяем запрос на получение списка репозиториев', () => {
        it('На выходе должен получиться массив', () => {
            fs.readdir('./' + testPath , (err, files) => {
                const allRepos = files.filter(item => item[0] !== '.');
                assert.typeOf(allRepos, 'array');
            });
        });

        it('При получении данных приходит полный список репозиториев', () => {

            const testStub = [ '351919-keksobooking',
            'SHRE---2019_task-3',
            'SHRE-2019__task-2',
            'interactiveMap',
            'proxygen',
            'react',
            'server-and-API' ];

            fs.readdir('./' + testPath , (err, files) => {
                const allRepos = files.filter(item => item[0] !== '.');
                assert.deepEqual(allRepos, testStub);
            });
        });
    })

    describe('Проверяем запрос на получения всех файлов в ветке master и получаем весь log в master', () => {

        it('Данные входа совпадают с данными заглушкой', () => {

            const allInfoStub =
            {
                fileName:
                    [ 'css/fonts/MyriadPro-Regular.otf',
                    'css/fonts/MyriadPro-Regular.ttf',
                    'css/fonts/MyriadPro-Regular.woff',
                    'css/fonts/MyriadPro-Regular.woff2',
                    'css/style.css',
                    'html/index.html',
                    'img/Thumbs.db',
                    'img/electro.png',
                    'img/gas.png',
                    'js/main.js',
                    'js/mydataarea.js' ],
                log:
                    [ '23396f7:dogunok:8 months ago:finale project',
                    'css/fonts/MyriadPro-Regular.otf',
                    'css/fonts/MyriadPro-Regular.ttf',
                    'css/fonts/MyriadPro-Regular.woff',
                    'css/fonts/MyriadPro-Regular.woff2',
                    'css/style.css',
                    'html/index.html',
                    'img/Thumbs.db',
                    'img/electro.png',
                    'img/gas.png',
                    'js/main.js',
                    'js/mydataarea.js' ]
            };

            const allInfo =
            {
                fileName: [],
                log: []
            };

            execFile('git' ,
            [`ls-tree`, `-r`, `--name-only`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.fileName.push(item));
            })

            execFile('git' ,
            [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.log.push(item));
            })

            const checkInfo = setInterval(() => {
                if(allInfo.fileName.length > 0 && allInfo.log.length > 0){
                    clearInterval(checkInfo)
                    assert.deepEqual(allInfo, allInfoStub)
                }
            }, 100)
        })

        it('На выходе "allFile.fileName" не изменил тип и он === "Array" ', () => {
            const allInfo =
            {
                fileName: [],
                log: []
            };

            execFile('git' ,
            [`ls-tree`, `-r`, `--name-only`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.fileName.push(item));
            })

            execFile('git' ,
            [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.log.push(item));
            })

            const checkInfo = setInterval(() => {
                if(allInfo.fileName.length > 0 && allInfo.log.length > 0){
                    clearInterval(checkInfo)
                    assert.typeOf(allInfo.fileName, 'array', 'На выходе не "Array"')
                }
            }, 100)
        })

        it('На выходе "allFile.log" не изменил тип и он === "Array" ', () => {
            const allInfo =
            {
                fileName: [],
                log: []
            };

            execFile('git' ,
            [`ls-tree`, `-r`, `--name-only`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.fileName.push(item));
            })

            execFile('git' ,
            [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `master`],
            {cwd: `./${testPath}/interactiveMap`, maxBuffer: 100000000},
            (err, out) => {
                out.trim().split('\n').map((item, i) => allInfo.log.push(item));
            })

            const checkInfo = setInterval(() => {
                if(allInfo.fileName.length > 0 && allInfo.log.length > 0){
                    clearInterval(checkInfo);
                    assert.typeOf(allInfo.log, 'array', 'На выходе не "Array"');
                }
            }, 100);
        })

    })

})

describe('Вспомогательные функции', () => {
    it('Выбран верный аргумент', () => {
        function checkArg(arg, firstAnswer) {
            return arg === undefined ? firstAnswer : arg;
        }
        assert.equal(checkArg(undefined, 'master'), 'master');
    })

    it('На выходе должна быть строка', () => {
        function checkArg(arg, firstAnswer) {
            return arg === undefined ? firstAnswer : arg;
        }
        assert.typeOf(checkArg(undefined, 'master'), 'string');
    })
})