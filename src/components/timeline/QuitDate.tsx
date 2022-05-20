import React, { useState } from 'react'
import { DatePicker, TimeInput,   } from '@mantine/dates';
import { Group, Button, Center } from '@mantine/core';

interface QuitDateProps {
  getQuitTime: () => void;
}

const QuitDate = ({getQuitTime}: QuitDateProps) => {
  const [quitDate, setQuitDate] = useState<Date>(new Date());
  const [quitTime, setQuitTime] = useState<Date>(new Date());
 
  const handleSubmit = () => {
    let month = 'January';
    switch (quitDate.getMonth()) {
      case 0: 
        month = 'January';
        break;
        case 1: 
        month = 'February';
        break;
        case 2: 
        month = 'March';
        break;
        case 3: 
        month = 'April';
        break;
        case 4: 
        month = 'May';
        break;
        case 5: 
        month = 'June';
        break;
        case 6: 
        month = 'July';
        break;
        case 7: 
        month = 'August';
        break;
        case 8: 
        month = 'September';
        break;
        case 9: 
        month = 'October';
        break;
        case 10:
          month =  'November';
          break;
        case 11:
          month =  'December';
          break;
    }
    const quitOutput = `${month} ${quitDate.getDate()} ${quitDate.getFullYear()} ${quitTime.getHours()}:${quitTime.getMinutes()}`
    localStorage.setItem('quitDate', quitOutput);
    getQuitTime();
  }

  return (
    <div>
        <Group>
        <DatePicker placeholder="Pick date" label="Quit Date" value={quitDate} onChange={(e) => setQuitDate(e?? new Date())} required />
        <TimeInput label="Quit Time?" value={quitTime} onChange={(e) => setQuitTime(e)} required />  
        </Group>
        <Center>
        <Button mt={10} color='red' size="xs" onClick={() =>handleSubmit()}>Quit Now</Button>
        </Center>
    </div>
  )
}

export default QuitDate