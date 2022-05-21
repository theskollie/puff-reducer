import React, {useEffect, useState} from 'react'
import Settings from '../components/home/Settings'

//Components
import Hero from '../components/home/Hero'
import KeyPerformance from '../components/home/KeyPerformance'

//Utils
import { getLocalStorage } from '../utils/localStorage';

const Home = () => {
  let localStorage = getLocalStorage();
  const currentDate = new Date();
  
  //State
  const [wakeUpTime, setWakeUpTime] = useState(localStorage[0]);
  const [maxPuffs, setMaxPuffs] = useState(localStorage[1]);
  const [hoursAwake, setHoursAwake] = useState(localStorage[2]);

  const returnCurrentMax = (wakeUpTime : number) => {
    let current = currentDate.getHours();
    if (current < wakeUpTime) {
      current+=24;
    }

    //Hours Awake - Max Puffs per Hour
    const maxPuffHourCount = (current - wakeUpTime) * (Math.round(maxPuffs / hoursAwake));
    //Current Minutes / How Often You Can Puff Per Hour
    const maxPuffMinuteCount = Math.floor(currentDate.getMinutes() / (60 / Math.round(maxPuffs / hoursAwake)));
    //Combine Both for Total
    return maxPuffHourCount + maxPuffMinuteCount;
  }
  
  const [currentMax, setCurrentMax] = useState(returnCurrentMax(wakeUpTime));
  
  return (
    <div>
      <Hero />
      <KeyPerformance
        wakeUpTime={wakeUpTime}
        maxPuffs={maxPuffs}
        hoursAwake={hoursAwake}
        currentMax={currentMax}
      />
      <Settings
        setWakeUpTime={setWakeUpTime}
        setMaxPuffs={setMaxPuffs}
        setHoursAwake={setHoursAwake}
        setCurrentMax={setCurrentMax}
        returnCurrentMax={returnCurrentMax}
      />
    </div>
  )
}

export default Home