import { RingProgress, Text, SimpleGrid, Paper, Center, Group, useMantineTheme } from '@mantine/core';
import { Activity, BedOff, Clock2, Abacus, Smoking, Cloud } from 'tabler-icons-react';

interface StatsRingProps {
    data: {
      label: string;
      stats: string;
      progress: number;
      color: string;
      icon:  'wakeup' | 'time'| 'daylimit' | 'hourlimit' | 'currentlimit' | 'currentMax';
      special?: true | false
    };
  }

const icons = {
    wakeup: BedOff,
    time: Clock2,
    daylimit: Abacus,
    hourlimit: Activity,
    currentlimit: Smoking,
    currentMax: Cloud,
  };

const KPIStats = ({ data }: StatsRingProps) => {
        let Icon = icons[data.icon];
        const theme = useMantineTheme();
        return (
          <Paper withBorder radius="md" p="xs" key={data.label}>
            <Group position="center">
              <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[{ value: data.progress, color: data.color }]}
                label={
                  <Center>
                    <Icon size={22} />
                  </Center>
                }
              />
    
              <div>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                  {data.label}
                </Text>
                <Text weight={700} size="xl">
                  {data.stats}
                </Text>
              </div>
            </Group>
          </Paper>
        );
      };

export default KPIStats