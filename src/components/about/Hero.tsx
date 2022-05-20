import React from 'react';
import {Link} from 'react-router-dom';
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][1],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> way <br /> to cut nicotine.
            </Title>
            <Text color="dimmed" mt="md">
              Easily track your puffs per day, with the goal of reducing the total each day. 
              Until ultimately, you're ready to move over to the <br/> Quit Timeline to track all the health benefits related to quitting.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color="red">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Reducer</b> – input your daily maximum and our system will determine when to puff so you don't exceed your limit.
              </List.Item>
              <List.Item>
                <b>Quit Timeline</b> – input your quit date & our app will automatically track your progress and show you the health benefits you've already achieved.
              </List.Item>
              <List.Item>
                <b>Open Source</b> – this was a personal project I built to keep myself accountable, which is now available on my GitHub
              </List.Item>
            </List>

            <Group mt={30}>
            <Link to="/">
              <Button radius="xl" size="md" color="red" className={classes.control}>
                Reduce Puffs
              </Button>
            </Link>
            <Link to="/timeline">
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Quit Now
              </Button>
            </Link>
            </Group>
          </div>
          <Image src="./aboutHero.svg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}