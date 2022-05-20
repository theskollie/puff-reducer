import React from 'react'

const getNextPuff = (maxPerHour : number) => {
    const now = new Date(); 
    const minutesInHour = 61;
    const maxPuffPerHour = maxPerHour; // Max Puffs / Day Length
    const whenToPuff = Math.floor(minutesInHour / maxPuffPerHour); // 60 Seconds / Max Puffs in Hour
  
    let index = whenToPuff; // 15
    let output : number[] = [];
    while (index < minutesInHour) {
        output.push(index);
        index += whenToPuff;
    }

    const filterOld = output.filter(item => now.getMinutes() < item);
    if (filterOld[0] === undefined) {
        return 'Next Hour'
    }

    const nextPuff = filterOld.map(item => {   
        if (item === 60) {
            return `${now.getHours() + 1}:00`
        }
        return `${now.getHours()}:${item < 10 ? "0" : ""}${item}`
    })

    return nextPuff[0];
}

export {getNextPuff}