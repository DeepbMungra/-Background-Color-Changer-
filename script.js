function colorchange(event) {
    let colors = ['red', 'blue', 'green', 'yellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];  
    document.body.style.backgroundColor = randomColor;
}

function colorchanges(event) {
    let colors = ['black', 'gold'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];  
    document.body.style.backgroundColor = randomColor;
}
