const assert = require('chai').assert;
const ParserRequest = require('./node/parserRequest.js')

const testPath = 'api/repos';
const parser = new ParserRequest(testPath);




describe('Контроллеры - обработчики запросов', () => {
    describe('Проверяем запрос на получение списка репозиториев', () => {

        it('На выходе должен получиться массив', () => {
            parser.getAllRepos (
                {},
                {send: (file) =>{ assert.typeOf(file, 'array')}},
                './'
            );
        });

        it('При получении данных приходит полный список репозиториев', () => {

            const testStub =
            [
                 '351919-keksobooking',
                'SHRE---2019_task-3',
                'SHRE-2019__task-2',
                'interactiveMap',
                'proxygen',
                'react',
                'server-and-API'
            ];

            parser.getAllRepos (
                {},
                {send: (file) =>{ assert.deepEqual(file, testStub)}},
                 './'
            );
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

            parser.getAllFilesInFolder (
                {params: {
                    repositoryId: 'interactiveMap',
                    commitHash: 'master',
                    "3": '',
                    "0": 'tree'
                }},
                {send: (file) => {  assert.deepEqual(file, allInfoStub)}},
                './'
            )
        })

        it('На выходе "allFile.fileName" не изменил тип и он === "Array" ', () => {
            parser.getAllFilesInFolder (
                {params: {
                    repositoryId: 'interactiveMap',
                    commitHash: 'master',
                    "3": '',
                    "0": 'tree'
                }},
                {send: (file) => {  assert.typeOf(file.fileName, 'array', 'На выходе не "Array"')}},
                './'
            )
        })

        it('На выходе "allFile.log" не изменил тип и он === "Array" ', () => {
            parser.getAllFilesInFolder (
                {params: {
                    repositoryId: 'interactiveMap',
                    commitHash: 'master',
                    "3": '',
                    "0": 'tree'
                }},
                {send: (file) => {  assert.typeOf(file.log, 'array', 'На выходе не "Array"')}},
                './'
            )
        })

    })

})

describe('Вспомогательные функции', () => {
    it('Выбран верный аргумент', () => {
        assert.equal(parser._checkArg(undefined, 'master'), 'master');
    })

    it('На выходе должна быть строка', () => {
        assert.typeOf(parser._checkArg(undefined, 'master'), 'string');
    })
})