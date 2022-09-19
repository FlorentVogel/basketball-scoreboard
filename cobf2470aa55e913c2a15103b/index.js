// SCOREBOARD HOME

let sbHome = document.getElementById("sb-home")
let countHome = 0

const addHome1 = () => {
    countHome += 1
    sbHome.textContent = countHome
}

const addHome2 = () => {
    countHome += 2
    sbHome.textContent = countHome
}

const addHome3 = () => {
    countHome += 3
    sbHome.textContent = countHome
}

// SCOREBOARD GUEST

let sbGuest = document.getElementById("sb-guest")
let countGuest = 0

const addGuest1 = () => {
    countGuest += 1
    sbGuest.textContent = countGuest
}

const addGuest2 = () => {
    countGuest += 2
    sbGuest.textContent = countGuest
}

const addGuest3 = () => {
    countGuest += 3
    sbGuest.textContent = countGuest
}

// PERIOD

let sbPeriod = document.getElementById("sb-period")
let countPeriod = 0

const period = () => {
    countPeriod += 1
    sbPeriod.textContent = countPeriod
}

// FOULS

let sbFouls = document.getElementById("sb-fouls")
let countFouls = 0

const fouls = () => {
    countFouls += 1
    sbFouls.textContent = countFouls
}

// RESTART

const restart = () => {
    countHome = 0
    sbHome.textContent = countHome
    
    countGuest = 0
    sbGuest.textContent = countGuest
    
    countPeriod = 0
    sbPeriod.textContent = countPeriod
    
    countFouls = 0
    sbFouls.textContent = countFouls
}
