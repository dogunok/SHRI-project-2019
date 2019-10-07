const assert = require('assert');

describe('Статика', () => {

    describe('Страница и блоки (url = http://localhost:3000/)', () => {

        it('Страница загружает контент (#root)', function() {
            return this.browser
                .url('/')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
                })
        })
    
        it('На странице присутствует блок .header', function() {
            return this.browser
                .url('/')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
                })
        })
    
        it('На странице присутствует блок .main', function() {
            return this.browser
                .url('/')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
                })
        })
    
        it('На странице присутствует блок .footer', function() {
            return this.browser
                .url('/')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
                })
        })
    
        it('На странице присутствует блок .header__repo_list (список репозиториев)', function() {
            return this.browser
                .url('/')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
                })
        })
    })

    describe('Страница и ее блоки отображаются (запрос /api/repos/:repositoryId) (http://localhost:3000/react)', () => {

        it('Страница загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
                })
        })

        it('На странице присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
                })
        })
    
        it('На странице присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
                })
        })
    
        it('На странице присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
                })
        })
    
        it('На странице присутствует блок .header__repo_list (список репозиториев)', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
                })
        })
    })

    describe('Страница и ее блоки отображаются (запрос /:repositoryId*(/tree/:commitHash)?(/:path*)?) (http://localhost:3000/react/scripts)', () => {

        it('Страница загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
                })
        })

        it('На странице присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
                })
        })
    
        it('На странице присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
                })
        })
    
        it('На странице присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
                })
        })
    
        it('На странице присутствует блок .header__repo_list (список репозиториев)', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
                })
        })
    })
})

describe('Динамика', () => {
    describe('Взаимодействие с содержимым', () => {
        it('Клик на репозиторий - приложение не падает', function() {
            console.log(this.browser.$('.info_file a'))
            return this.browser
                .url('/')
                .waitForVisible('.header__repo_list-name')
                .$('.info_file a')[0].click()
                .waitForVisible('.header__repo_list-name')
                .then((exists) => {
                    assert.ok(exists, 'приложение упало');
                })
        })

        it('Клик на репозиторий - присутствует содержимое репозитория (в непустой папке)', function() {
            return this.browser
                .url('/')
                .waitForVisible('.header__repo_list-name a')
                .$('.info-file a').click()
                .then((exists) => {
                    assert.ok(exists, 'содержимое отсутствует');
                })
        })
    })
})