const assert = require('assert');

describe('Статическое тестирование', () => {

    describe('Страница http://localhost:3000/ и отображение блоков', () => {

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

        it('На странице присутствует блок .header__repo_list', function() {
            return this.browser
                .url('/')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
            })
        })
    })

    describe('Страница http://localhost:3000/interactiveMap и ее блоки отображаются (запрос /api/repos/:repositoryId)', () => {

        it('Страница http://localhost:3000/interactiveMap загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
            })
        })

        it('На странице http://localhost:3000/interactiveMap присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
            })
        })
    
        it('На странице http://localhost:3000/interactiveMap присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
            })
        })
    
        it('На странице http://localhost:3000/interactiveMap присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
            })
        })
    
        it('На странице http://localhost:3000/interactiveMap присутствует блок .header__repo_list ', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
            })
        })
    })

    describe('Страница http://localhost:3000/interactiveMap и ее блоки отображаются (запрос /:repositoryId*(/tree/:commitHash)?(/:path*)?)', () => {

        it('Страница http://localhost:3000/interactiveMap/css загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
            })
        })

        it('На странице http://localhost:3000/interactiveMap/css присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
            })
        })
    
        it('На странице http://localhost:3000/interactiveMap/css присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
            })
        })
    
        it('На странице http://localhost:3000/interactiveMap/css присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
            })
        })

        it('На странице http://localhost:3000/interactiveMap/css присутствует блок .header__repo_list ', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
            })
        })
    })
})

describe('Динамичечское тестирование', () => {
    describe('Клики по содержимому', () => {
        it('Клик по папке в репозитории', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap')
                .waitForVisible('.info-file__name a')
                .$('.info-file__name a').click()
                .waitForVisible('.info-file__name a')
                .then((exists) => {
                    assert.ok(exists, 'содержимое отсутствует и клик не произошел');
            })
        })

        it('Клик по вложенной папке в репозитории', function() {
            return this.browser
                .url('http://localhost:3000/interactiveMap/css')
                .waitForVisible('.info-file__name a')
                .$('.info-file__name a').click()
                .waitForVisible('.info-file__name a')
                .then((exists) => {
                    assert.ok(exists, 'содержимое отсутствует и клик не произошел');
            })
        })
    })
})