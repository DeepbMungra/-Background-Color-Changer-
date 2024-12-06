function colorchange(event) {
    let colors = ['red', 'blue', 'green', 'yellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];  
    document.body.style.backgroundColor = randomColor;
}