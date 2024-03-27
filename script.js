console.log("Hello world")
const body = document.querySelector('body');
const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle) {
    circle.addEventListener('click', function (e) {
        console.log(e);
        if (e.target.id === 'blue') {
            body.style.backgroundColor = '#4fc1e8'
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = '#ffce54'
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = '#a0d568'
        }
        if (e.target.id === 'redish') {
            body.style.backgroundColor = '#ed5564'
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = '#ac92eb'
        }
    })
});
