import { Center, Container, Paper } from '@mantine/core'
import React, { useState } from 'react'
import MainComponent from '../components/timeline/MainComponent'
import Hero from '../components/timeline/Hero'
import QuitDate from '../components/timeline/QuitDate'

const Timeline = () => {

  const [activeELement, setActiveElement] = useState(0);
     
  const getQuitTime = () => {  
        const x = localStorage.getItem('quitDate');
        const quitDate = new Date(`${x}`);

        const now = new Date();
        var diff = Math.round(Math.abs(now.getTime() - quitDate.getTime()) / 3600000);
        console.log(diff);

        switch (true) {
            case (diff >= 1 && diff < 8):
                setActiveElement(1)
                break;
            case (diff >= 8 && diff < 24):
                setActiveElement(2)
                break;
            case (diff >= 24 && diff < 48): // 1 Day
                setActiveElement(3)
                break;
            case (diff >= 48 && diff < 72): // 2 Day
                setActiveElement(4)
                break;
            case (diff >= 72 && diff < 168): // 3 Days
                setActiveElement(5)
                break;
            case (diff >= 168 && diff < 336): // Week
                setActiveElement(6)
                break;
            case (diff >= 336 && diff < 2160): // 2 Week
                setActiveElement(7)
                break;
            case (diff >= 2160 && diff < 4320): // 3 Months
                setActiveElement(8)
                break;
            case (diff >= 4320): // 1 Year
                setActiveElement(9)
                break;
            default:
              setActiveElement(0)
                break;
        }
    }

  return (
    <div>      
        <Paper>
            <Hero />
            <Container>
            <Center>
            <QuitDate getQuitTime={getQuitTime}/>
            </Center>
            <Center>
            <MainComponent getQuitTime={getQuitTime} activeELement={activeELement} />         
            </Center>
            </Container>
        </Paper>
    </div>
  )
}

export default Timeline