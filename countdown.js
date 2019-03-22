const c = document.getElementById('countdown')
let time = 10

const interval = setInterval(function() {
    if (time <= 0) {
        clearInterval(interval)
        c.innerHTML = "LET'S MOVE ON"
    } else {
        c.innerHTML = time--
    }
}, 1000)
