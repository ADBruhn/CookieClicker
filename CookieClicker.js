let cookieEl = document.getElementById('cookie')
let cookie2El = document.getElementById ('cookie2')
let cookie3El = document.getElementById ('cookie3')
let cookie4El = document.getElementById ('cookie4')
let cookie5El = document.getElementById ('cookie5')
let cookie6El = document.getElementById ('cookie6')

let cookieCount = 0
let score = document.getElementById ('score')
let countChange = 1
let multiplier = document.getElementById ('multiplier')
let autoclickers = document.getElementById('autoclickers')

let showButtonEl = document.getElementById ('showButton')
let removeButtonEl = document.getElementById ('removeButton')
let doublerButtonEl = document.getElementById ('doublerButton')
let increaseButtonEl = document.getElementById ('increaseButton')
let cookie2ButtonEl = document.getElementById('cookie2Button')
let backgroundChangeButtonEl =document.getElementById('backgroundChangeButton')
let autoclickerButtonEl = document.getElementById ('autoclickerButton')
let movingCookieButtonEl = document.getElementById('movingCookieButton')

let messageEl = document.getElementById('message')
let bodyEl = document.getElementById('body')
let congratsEl = document.getElementById('congrats')
let a = 0
let x = 50
let y = 10
var z = Math.floor(Math.random() * 4)
let cookie2Yes = 0
let movingCookieYes = 0
let background = 0


function clickedCookie () {
    console.log ('cookie clicked')
    console.log (`Random number = ${z}`)
    cookieCount = cookieCount + countChange
    score.innerHTML = cookieCount
 
    if (cookieCount === 10) {
        if (countChange === 1) {
            doublerButtonEl.classList.remove('remove')
        } 
    }

    if (cookieCount >= x) {
        increaseButtonEl.classList.remove('remove')
    } else {
        increaseButtonEl.classList.add('remove')
    }

    if (cookieCount >= 100) {
        if (cookie2Yes === 0){
        cookie2ButtonEl.classList.remove('remove')
        }
    } else {
        cookie2ButtonEl.classList.add('remove')
    }

    if (cookieCount >= 200) {
        autoclickerButtonEl.classList.remove('remove')
    } else {
        autoclickerButtonEl.classList.add('remove')
    }

    if (cookieCount >= 123) {
        if (movingCookieYes === 0)
        movingCookieButtonEl.classList.remove('remove')
    } else {
        movingCookieButtonEl.classList.add('remove')
    }

    if (cookieCount >= y) { 
        congratsEl.innerHTML = (`Good job! You've reached ${cookieCount - cookieCount % 10}`)
        congratsEl.classList.remove('remove')
        y = y + 10

    } else {
        congratsEl.classList.add('remove')
    }
}

function clickedMovingCookie () {
    z = Math.floor(Math.random() * 4)
    clickedCookie()
    if (z === 0) {
        cookie3El.classList.remove('hide')
        cookie4El.classList.add('hide')
        cookie5El.classList.add('hide')
        cookie6El.classList.add('hide')
    } else if (z === 1) {
        cookie3El.classList.add('hide')
        cookie4El.classList.remove('hide')
        cookie5El.classList.add('hide')
        cookie6El.classList.add('hide')
    } else if (z === 2) {
        cookie3El.classList.add('hide')
        cookie4El.classList.add('hide')
        cookie5El.classList.remove('hide')
        cookie6El.classList.add('hide')
    } else if (z === 3) {
        cookie3El.classList.add('hide')
        cookie4El.classList.add('hide')
        cookie5El.classList.add('hide')
        cookie6El.classList.remove('hide')
    }
}

function logKey(e) {
    if (e.keyCode === 32) {
        if (cookie2Yes === 1) {
        clickedCookie ()
        }
    }
    
}

function buyMovingCookie () {
    cookieCount = cookieCount - 20
    score.innerHTML = cookieCount
    movingCookieYes = 1
    movingCookieButtonEl.classList.remove('remove')
    cookie3El.classList.remove('hide')
}

function buyAutoclicker () {
    cookieCount= cookieCount - 200
    score.innerHTML = cookieCount
    a = a + 1
    autoclickers.classList.remove('remove')
    autoclickers.innerHTML = (`Number of Autoclickers: ${a}`)
    autoclickerButtonEl.classList.add('remove')
    setInterval (clickedCookie, 1000)


}

function buyDoubler () {
    cookieCount = cookieCount - 10
    score.innerHTML = cookieCount
    doublerButtonEl.classList.add('remove')
    countChange = 2
    multiplier.innerHTML = (`Rate of Change: ${countChange}`)
}

function buyIncrease () {
    cookieCount = cookieCount - x
    console.log (`cookiecount= ${cookieCount}`)
    countChange = countChange + 1
    multiplier.innerHTML = (`Rate of Change: ${countChange}`)
    score.innerHTML = cookieCount
    x = x + 50
    increaseButtonEl.classList.add('remove')
    console.log (`x = ${x}`)
}

function buyCookie2 () {
    cookie2ButtonEl.classList.add('remove')
    cookie2El.classList.remove('remove')
    cookie2Yes = 1
    messageEl.innerHTML = (`Use the SPACEBAR to click on the second cookie`)
    
}


function shrink () {
    cookieEl.classList.add('shrink')
}

function grow () {
    cookieEl.classList.remove('shrink')
}

function showCookie () {
        cookieEl.classList.remove('hide')

        showButtonEl.classList.add('remove')
        removeButtonEl.classList.remove ('remove')
}

function hideCookie () {
    cookieEl.classList.add('hide')

    removeButtonEl.classList.add('remove')
    showButtonEl.classList.remove('remove')

}

function backgroundChange () {
    if (background === 0) {
        bodyEl.classList.add('grey')
        background = 1
        
    } else if (background === 1) {
        bodyEl.classList.remove('grey')
        background = 0
        
    }
}

cookieEl.addEventListener ('click', clickedCookie)
cookieEl.addEventListener ('mousedown', shrink)
cookieEl.addEventListener ('mouseup', grow)
cookie3El.addEventListener ('click', clickedMovingCookie)
cookie4El.addEventListener ('click', clickedMovingCookie)
cookie5El.addEventListener ('click', clickedMovingCookie)
cookie6El.addEventListener ('click', clickedMovingCookie)
document.addEventListener('keydown', logKey) //figuring this out
cookie2El.addEventListener ('keydown', shrink) //not being used yet
cookie2El.addEventListener ('keyup', grow) //not being used yet

showButtonEl.addEventListener ('click', showCookie)
removeButtonEl.addEventListener ('click', hideCookie)
doublerButtonEl.addEventListener ('click', buyDoubler)
increaseButtonEl.addEventListener ('click', buyIncrease)
backgroundChangeButtonEl.addEventListener('click', backgroundChange)
cookie2ButtonEl.addEventListener ('click', buyCookie2)
autoclickerButtonEl.addEventListener ('click', buyAutoclicker)
movingCookieButtonEl.addEventListener('click', buyMovingCookie)
