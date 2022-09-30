var clicks = 0
var seconds = 0
var currentMole = -1
var showMole = true
var interval

const handleStart = () => {
    if (seconds > 0) return
    document.getElementById('seconds').innerText = 'Elapsed time: ' + seconds
    makeInterval()
}

const makeInterval = () => {
    interval = setInterval(moleProgram, 1000)
}

const moleProgram = () => {
    console.log('mole program')
    seconds++
    document.getElementById('seconds').innerText = 'Elapsed time: ' + seconds

    debounce()

    if (seconds < 1 || !showMole) return
    const _random = getRandomInt(0, 2)
    currentMole = _random
    document.getElementsByClassName('mole-exist')[_random].src = './assets/mole.png'
    hideMole()
}

const hideMole = () => {
    setTimeout(() => {
        document.getElementsByClassName('mole-exist')[currentMole].src = ''
        currentMole = -1
    }, getRandomInt(200, 400))
}

const debounce = () => {
    setTimeout(() => {
        showMole = true
    }, 200)
}

const clickHole = (index) => {
    if (seconds <= 0) return
    
    clicks++
    document.getElementById('clicks').innerText = 'Click: ' + clicks
    if (index !== currentMole) {
        showMole = false
        document.getElementsByClassName('mole-exist')[currentMole].src = ''
        currentMole = -1
    } else {
        console.log('anda berhasil')
        clearInterval(interval)
        clearMoleProgram()
        
        alert('Selamat anda berhasil dalam ' + seconds + ' detaik dan total click ' + clicks)
    }
}

const clearMoleProgram = () => {
    document.getElementsByClassName('mole-exist')[currentMole].src = ''
    document.getElementById('start').classList.remove('bg-gray-400')
    document.getElementById('start').classList.add('bg-pink-400')   
    document.getElementById('seconds').innerText = ""
    document.getElementById('clicks').innerText = ""

    seconds = 0
    clicks = 0
    currentMole = -1
    showMole = true
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}