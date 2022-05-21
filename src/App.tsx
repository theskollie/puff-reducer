import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Image,
  Title,
  ActionIcon,
  ColorScheme,
  Paper,
  Text
} from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

import {Routes, Route} from 'react-router-dom';

//Components
import Sidebar from './components/Sidebar'

//Pages
import Home from './pages/Home'
import About from './pages/About';
import Timeline from './pages/Timeline';


export default function App() {
  const theme = useMantineTheme();
  theme.primaryColor = "red";
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  return (
    <Paper>
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300 }}>
          <Sidebar />
        </Navbar>
      }
      footer={
        <Footer height={30} p="md" styles={{
          root: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
        }} >
          <Text sx={{a: {color: '#f03e3e'}}}>Developed by <a href="https://github.com/theskollie"> Skollie</a></Text>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group spacing="xs">
              {theme.colorScheme !== 'dark' ? <Image src="./vapeicon.png" style={{width: '13%'}} /> :<Image src="./vapeicon-dark.png" style={{width: '13%'}} /> }
              <Title order={2}>Puff Reducer</Title>
           </Group>
            <ActionIcon
                variant="outline"
                color={theme.colorScheme === 'dark' ? 'yellow' : 'blue'}
                onClick={() => {
                  setColorScheme((prev: ColorScheme) : ColorScheme => {
                    return prev === 'light' ? 'dark' : 'light'
                  })
                  theme.colorScheme = colorScheme;
                  }}
                title="Toggle color scheme"
                styles={{root:{position: 'fixed', right: 10}}}
              >
                {theme.colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon>
            </div> 

        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </AppShell>
    </Paper>
  );
}