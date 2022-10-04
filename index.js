var clicks = 0
var seconds = 0
var currentMole = -1
var interval
var showMole = true

const handleStart = () => {
    document.getElementById('clicks').innerText = 'Clicks: ' + clicks
    document.getElementById('seconds').innerText = 'Elapsed time: ' + seconds + ' seconds'
    makeInterval()
    document.getElementById('start-button').setAttribute('disabled', true)
}

const makeInterval = () => {
    interval = setInterval(moleProgram, 1000)
}

const moleProgram = () => {
    seconds++

    document.getElementById('seconds').innerText = 'Elapsed time: ' + seconds + ' seconds'
    console.log('mole program')

    debounce(() => showMole = true, 500)


    if (!showMole) return

    const _random = getRandomInt(0, 2)
    currentMole = _random
    console.log(_random)
    document.getElementsByClassName('mole-exist')[_random].src = './assets/mole.png'
    debounce(hideMole, getRandomInt(200, 400))
}

const hideMole = () => {
    document.getElementsByClassName('mole-exist')[currentMole].src = ""
    currentMole = -1
}

const debounce = (param, time) => {
    setTimeout(param, time)
}

const clickMole = (index) => {
    if (seconds <= 0) return

    clicks++
    document.getElementById('clicks').innerText = 'Clicks: ' + clicks
    if (index !== currentMole) {
        showMole = false
        hideMole()
    } else {
        console.log('click mole berhasil')
        clearInterval(interval)
        alert('Anda berhasil menyelesaikan ini dalam ' + seconds + ' detik dan dengan total click sebanyak ' + clicks)
        clearMoleProgram()
    }
}

const clearMoleProgram = () => {
    document.getElementById('clicks').innerText = ''
    document.getElementById('seconds').innerText = ''
    document.getElementById('start-button').removeAttribute('disabled')
    document.getElementsByClassName('mole-exist')[currentMole].src = ""

    seconds = 0
    clicks = 0
    currentMole = -1
    showMole = true
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}