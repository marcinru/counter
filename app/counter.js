function init(doc) {
    var counter = doc.querySelector('#counter');
    var incrementBtn = doc.querySelector('#incrementBtn');
    var decrementBtn = doc.querySelector('#decrementBtn');

    incrementBtn.addEventListener('click', function() {
        counter.textContent = Number(counter.textContent) + 1;
    });

    decrementBtn.addEventListener('click', function() {
        counter.textContent = Number(counter.textContent) - 1;
    });
}

if (typeof module === 'object') {
    module.exports = init;
}