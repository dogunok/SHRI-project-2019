<h1>React Arcanum</h1>

### Переходим в ветку `git checkout added_TS`

<h2>Запуск приложения React</h2>

Устанавливаем зависимости:<br />

### `npm install`

Запускать проект из корня дирректория:<br />

Сначала запускаем сервер: <br />
Переходим в папку `node` и от туда запускаем сервер <be />

### `ts-node server.js api/repos`

И командой запустить react приложение: <br />

### `npm start` 

Запустится приложение и откроектся на порту [http://localhost:3000](http://localhost:3000) <br />

<h3>В данной работе реализовал </h3>

<ol>
    <li>Перевел приложение на ts</li>
</ol>

<h3>Столкнулся с проблемами </h3>
<ol>
     <li>Старался не использовать тип - 'any', но где-то от не знания и не хватки времени не удалось точно определить тип </li>
     <li>Если прописывал в tsconfig.json - include =>  значения папки node, чтобы он за ней следил то не удалось запустить приложение, так как  "isolatedModules": true и он ругался на require </li>
     <li>При каждом запуске npm start настройки  tsconfig.json изменялись на дефолтные, решить проблему не удалось...</li>
     <li>Так же столкнулся с проблемой перевода метода Array.map - если item - просто значение то проблем нет, а если это объект, то тогда не удалось перевести.</li>
    <li>Не смог понять как на TS перевести функцию, у которой аргумент функция</li>
</ol>



<h2>Запускаем автотесты</h2>

<h3>Интеграционные тесты</h3>

  `npm istrall selenium-standalone --global` <br />
  
   установка [java 13](https://www.oracle.com/technetwork/java/javase/downloads/jdk13-downloads-5672538.html) <br />
   
  `selenium-standalone install`
  
  `npm install hermione --save-dev`
  
  <h4>Запуск автотестов</h4>
  
  Для этого нужно запустить сервер: <br />
  
  Переходим в папку `node` и запускаем сервер командой `node server.js api/repos`<br />
  
  Запускаем `React` приложение `npm start` из корня репозитория <br />

  Переходим в корень репозитория и запускаем тесты: <br />
  `selenium-standalone start` <br />
  
  `npm run integrationTest`<br />


<h3>Модульные тесты</h3>

<h4>Запуск тестов</h4>

`npm run unitTest`

### 1)Обработчики запросов

В проекте использовал два обработки запросов `getAllRepos` и `getAllFilesInFolder`, для обработчкив и написал тесты.

Для тестирования в коде добавил `sourceLocation = './../'`, для того чтобы мог прописывать из какой дирректории идет запуск теста относительно обработчиков запроса

<h4>getAllRepos</h4>

```JS
    getAllRepos(req, res, sourceLocation = './../') {
        fs.readdir(sourceLocation + this.path , (err, files) => {
            if(err) return res.send(err)
            const allRepos = files.filter(item => item[0] !== '.');
            res.send(allRepos);
        });
    };
```


<h4>getAllFilesInFolder</h4>

```JS

    getAllFilesInFolder(req, res, sourceLocation = './../'){
        const params = req.params;

        const allInfo = {
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
            (err, out) => {
                if(err) return res.send(err);
                out.trim().split('\n').map((item, i) => allInfo.fileName.push(item));
                checkAnswer()
            });

            execFile('git' ,
            [`log`, `--name-only`, `--pretty=format:%h:%an:%ar:%s`, `${this._checkArg(params.commitHash, 'master')}`],
            {cwd: `${sourceLocation + this.path}/${this._checkArg(params.repositoryId, '')}${this._checkArg(params['3'], '')}`, maxBuffer: 100000000},
            (err, out) => {
                if(err) return res.send(err);
                out.trim().split('\n').map((item, i) => allInfo.log.push(item));
                checkAnswer()
            });

        } else if(params['2'] !== undefined){
            res.status(404).send('Sorry cant find that!');
        };
    };
```

### 2)Вспомогательные функции

Функцию никак не изменял для написания тестов

```JS
    _checkArg(arg, firstAnswer){
        return arg === undefined ? firstAnswer : arg;
    };
```

 <h4>Результаты тестирования</h4>

 ![результат тестирования](./screenshots/unitTest-finish.png)
