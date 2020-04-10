'user strict';

setInterval(changeDegrees, 1000)

function changeDegrees() {
    const minutes = document.querySelector
        ('.min-hand')
    const hours = document.querySelector('.hour-hand')
    if (degreesSeconds === 360) {
        degreesSeconds = 0
        degreesMinutes = degreesMinutes + 6
        minutes.style.transform = `rotate(${degreesMinutes}deg)`
    }
    if (degreesMinutes === 360) {
        degreesMinutes = 0
        degreesHours = degreesHours + 30
        hours.style.transform = `rotate(${degreesHours}deg)`
    }

    const seconds = document.querySelector('.second-hand')
    seconds.style.transform = `rotate(${degreesSeconds}deg)`
    degreesSeconds = degreesSeconds + 6




}

let degreesSeconds = 0;
let degreesMinutes = 0;
let degreesHours = 0;
