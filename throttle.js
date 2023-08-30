// machine Gun
// sniper/ shotgun

// 1st trigger happened at T=1stBulletTime;
// 2nd trigger happened at T=someTime;

// someTime > 1stBulletTime + recoilTime
let machinGunCount = 0;
let shotgunCount = 0;

let normalCountDisplay = document.getElementById('normal-count');
let throttleCountDisplay = document.getElementById('throttle-count');
const trigger = document.getElementById('trigger');

trigger.addEventListener('click', () => {
    machinGunCount++;
    // shotgunCount++;
    normalCountDisplay.innerText = machinGunCount;
    // throttleCountDisplay.innerText=shotgunCount;
    // brokenShotGunTrigger();
    fixedShotGunTrigger();
})

function brokenShotGunTrigger() {
    shotgunCount++;
    throttleCountDisplay.innerText = shotgunCount;
}

// currentBulletFiredTime > lastBulletFiredTime + recoilTime
const throttleFN = (callback, delay) => {
    let lastExecutedFn = 0;
    return function (...args) {
        let currentTime = new Date().getTime();
        if (currentTime < delay + lastExecutedFn) {
            return;
            // dont execute any function
        }
        else {
            lastExecutedFn = currentTime;
            callback(...args);
        }
    }
}

const fixedShotGunTrigger = throttleFN(brokenShotGunTrigger, 900);

// throttle -> it's a technique to limit the execution of an event
// when this event triggers continuesly due to user's actions
