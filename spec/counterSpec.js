var { JSDOM } = require('jsdom');
var init = require('../app/counter');

describe('counter', function() {
    var browser;

    beforeEach(function(done) {
        JSDOM.fromFile('./app/counter.html', {}).then(function(resp) {
            browser = resp;
            init(browser.window.document);
            done();
        });
    });

    afterEach(function() {
        browser.window.close();
    });

    it('has #counter element', function() {
        var counter = browser.window.document.querySelector('#counter');
        expect(counter).not.toBe(null);
    });

    it('has #incrementBtn element', function() {
        var incrementBtn = browser.window.document.querySelector('#incrementBtn');
        expect(incrementBtn).not.toBe(null);
    });

    it('has #decrementBtn element', function() {
        var decrementBtn = browser.window.document.querySelector('#decrementBtn');
        expect(decrementBtn).not.toBe(null);
    });

    it('counter contains 0', function() {
        var counter = browser.window.document.querySelector('#counter');
        expect(counter.textContent).toBe('0');
    });

    it('counter contains 1 when increment button was clicked', function() {
        var counter = browser.window.document.querySelector('#counter');
        var incrementBtn = browser.window.document.querySelector('#incrementBtn');

        var clickEvent = new browser.window.MouseEvent('click');
        incrementBtn.dispatchEvent(clickEvent);

        expect(counter.textContent).toBe('1');
    });

    it('counter contains -1 when decrement button was clicked', function() {
        var counter = browser.window.document.querySelector('#counter');
        var decrementBtn = browser.window.document.querySelector('#decrementBtn');

        var clickEvent = new browser.window.MouseEvent('click');
        decrementBtn.dispatchEvent(clickEvent);

        expect(counter.textContent).toBe('-1');
    });
});