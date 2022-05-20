import React from 'react';
import { createStyles, Title, Text, Button, Container, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 10,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Personal {' '}
          <Text component="span" color={theme.primaryColor} inherit>
            Quit Timeline
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Input your quit date and we'll automatically track your progress! <br />
            As time progresses, you'll unluck more health benefits!
          </Text>
        </Container>

      </div>
    </Container>
  );
}