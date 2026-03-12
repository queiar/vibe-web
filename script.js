function updateTime() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000); // Actualiza cada segundo
updateTime();

function changeColor() {
    const colors = ['#00ff41', '#ff003c', '#00e5ff', '#ffff00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.color = randomColor;
    document.querySelector('.terminal-card').style.borderColor = randomColor;
    document.querySelector('button').style.borderColor = randomColor;
    document.querySelector('button').style.color = randomColor;
}