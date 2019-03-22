const c = document.getElementById('countdown')
let time = 300
var audio = new Audio('./bell.mp3')

const interval = setInterval(() => {
    if (time <= 0) {
        clearInterval(interval)
        c.innerHTML = "LET'S MOVE ON"
        audio.play()
    } else {
        c.innerHTML = time--
    }
}, 1000)
