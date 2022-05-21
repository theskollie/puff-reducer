import React, { useState } from 'react'
import { Container, Paper, Title, SimpleGrid, NumberInput, Button, Center, Alert } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { AlertCircle } from 'tabler-icons-react';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';

interface SettingsProps {
    setWakeUpTime: React.Dispatch<React.SetStateAction<number>>;
    setMaxPuffs: React.Dispatch<React.SetStateAction<number>>;
    setHoursAwake: React.Dispatch<React.SetStateAction<number>>;
    setCurrentMax: React.Dispatch<React.SetStateAction<number>>;
    returnCurrentMax: (wakeUpTime: number) => number;
}

const Settings = ({setWakeUpTime, setMaxPuffs, setHoursAwake, setCurrentMax, returnCurrentMax}: SettingsProps) => {

//Settings States
  const currentHour = new Date("May 18, 2022 08:00");
  const [wakeUpSettings, SetWakeUpSettings] = useState(currentHour);
  const [hoursAwakeSettings, SethoursAwakeSettings] = useState<number>(getLocalStorage()[2]);
  const [maxPuffsSettings, SetmaxPuffsSettings] = useState<number>(getLocalStorage()[1]);

//Error State
    const[error, setError] = useState({
        active: false,
        message: 'Default Message'
    })

  interface submitParams {
      hoursAwake: number;
      maxPuffs: number;
      wakeTime: Date;
  }

  const handleSubmit = ({hoursAwake, maxPuffs, wakeTime} : submitParams)  => {
    
    const hours = Math.round(hoursAwake);
    const puffs = Math.round(maxPuffs);

    if (error.active === true) setError({active: false, message: 'Default Message'});
    if (puffs % hours !== 0) {
        setError({active: true, message: `Max Puffs should be divisible by hours awake!`})
        return
    }
    if (wakeTime.getMinutes() !== 0) {
        setError({active: true, message: `No minutes allowed in wake up time!`})
        return
    }

    const x = wakeTime.getHours();
    setLocalStorage({
        wakeUp: x,
        maxPuffs: puffs,
        hoursAwake: hours,
    });

    setWakeUpTime(Number(localStorage.getItem("wakeUpTime")));
    setMaxPuffs(Number(localStorage.getItem("maxPuffs")));
    setHoursAwake(Number(localStorage.getItem("hoursAwake")));
    setCurrentMax(returnCurrentMax(x));
  }
  return (
      <div>
    <Container size="lg" mt={60}> 
    <Title order={3} sx={{textAlign: 'center', marginBottom: '20px'}}>Settings</Title>
    <SimpleGrid cols={3} spacing="xl"
            breakpoints={[
              { maxWidth: 1215, cols: 1, spacing: 'sm' },
            ]}
    >
    <TimeInput
      label="What time did you wake up?"
      description="Please select an hour with no minutes"
      radius="md"
      size="md"
      value={wakeUpSettings}
      onChange={(e) => SetWakeUpSettings(e)}
      required
    />
    <NumberInput
      label="How many hours will you be awake?"
      description="Please use whole numbers"
      size="md"
      radius="md"
      value={hoursAwakeSettings}
      onChange={(e) => SethoursAwakeSettings(e?? 8)}
      required
    />
    <NumberInput
      label="How many puffs per day?"
      description="Maximum puffs you'd like per day"
      size="md"
      radius="md"
      value={maxPuffsSettings}
      onChange={(e) => SetmaxPuffsSettings(e?? 50)}
      required
    />
    </SimpleGrid>
    {
    error.active === true &&
    <Center>
    <Alert icon={<AlertCircle size={16} />} title="Error!" color="red" mt={20}>
      {error.message}
    </Alert>
    </Center>
    }
    <Center>
    <Button onClick={() => handleSubmit({
        hoursAwake: hoursAwakeSettings,
        maxPuffs: maxPuffsSettings,
        wakeTime: wakeUpSettings
    })} color="red" mt={15}>Update Settings</Button>
    </Center>
    </Container>
    </div>
  )
}

export default Settings