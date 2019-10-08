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

    describe('Страница http://localhost:3000/react и ее блоки отображаются (запрос /api/repos/:repositoryId)', () => {

        it('Страница http://localhost:3000/react загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
            })
        })

        it('На странице http://localhost:3000/react присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
            })
        })
    
        it('На странице http://localhost:3000/react присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
            })
        })
    
        it('На странице http://localhost:3000/react присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
            })
        })
    
        it('На странице http://localhost:3000/react присутствует блок .header__repo_list ', function() {
            return this.browser
                .url('http://localhost:3000/react')
                .isExisting('.header__repo_list')
                .then((exists) => {
                    assert.ok(exists, 'список репозиториев не появился');
            })
        })
    })

    describe('Страница http://localhost:3000/react и ее блоки отображаются (запрос /:repositoryId*(/tree/:commitHash)?(/:path*)?)', () => {

        it('Страница http://localhost:3000/react/scripts загружает контент (#root)', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('#root')
                .then((exists) => {
                    assert.ok(exists, '#root не появился');
            })
        })

        it('На странице http://localhost:3000/react/scripts присутствует блок .header', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('.header')
                .then((exists) => {
                    assert.ok(exists, '.header не появился');
            })
        })
    
        it('На странице http://localhost:3000/react/scripts присутствует блок .main', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .waitForVisible('.main')
                .then((exists) => {
                    assert.ok(exists, '.main не появился');
            })
        })
    
        it('На странице http://localhost:3000/react/scripts присутствует блок .footer', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
                .isExisting('.footer')
                .then((exists) => {
                    assert.ok(exists, '.footer не появился');
            })
        })

        it('На странице http://localhost:3000/react/scripts присутствует блок .header__repo_list ', function() {
            return this.browser
                .url('http://localhost:3000/react/scripts')
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