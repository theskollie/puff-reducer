import { SimpleGrid, Container } from '@mantine/core';
import KPIStats from './KPIStats';
import {getNextPuff} from './NextPuff'

interface KPIprops {
    wakeUpTime: number;
    maxPuffs: number;
    hoursAwake: number;
    currentMax: number;
}



const KeyPerformance = ({wakeUpTime, maxPuffs, hoursAwake, currentMax} : KPIprops) => {


  return (
        <Container size="xl" mt={20}>
            <SimpleGrid cols={3}
                  breakpoints={[
                    { maxWidth: 289, cols: 1, spacing: 'sm' },
                    { maxWidth: 755, cols: 2, spacing: 'sm' },
                  ]}
            >
                <div>
                    <KPIStats data={{
                            label: 'Next Puff',
                            stats: `${String(getNextPuff(maxPuffs / hoursAwake))}`,
                            progress: 100,
                            color: 'red',
                            icon: 'currentlimit'
                        }} />
                </div>
                <div>
                    <KPIStats data={{
                                label: 'Current Max',
                                stats: `${currentMax} Puffs`,
                                progress: 100,
                                color: 'indigo',                         
                                icon: 'currentMax'
                        }} />
                </div>
                <div>
                    <KPIStats data={{
                                label: 'Hourly Limit',
                                stats: `${String(Math.floor(maxPuffs / hoursAwake))} Puffs`,
                                progress: 100,
                                color: 'yellow',
                                icon: 'hourlimit'
                        }} />
                </div>
                <div>
                    <KPIStats data={{
                                label: 'Day Limit',
                                stats: `${String(maxPuffs)} Puffs`,
                                progress: 100,
                                color: 'orange',
                                icon: 'daylimit'
                        }} />
                </div>
                <div>
                    <KPIStats data={{
                        label: 'Wake Up Time',
                        stats: `${wakeUpTime}:00`,
                        progress: 100,
                        color: 'teal',
                        icon: 'wakeup'
                    }} />
                </div>
                <div>
                    <KPIStats data={{
                            label: 'Hours Awake',
                            stats: `${String(hoursAwake)} Hours`,
                            progress: 100,
                            color: 'cyan',
                            icon: 'time'
                        }} />
                </div>
                
            </SimpleGrid>
        </Container>
  )
}

export default KeyPerformance