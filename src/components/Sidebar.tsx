import React, { useState } from 'react';
import { createStyles, Navbar, Group, Code, Center } from '@mantine/core';
import {
  Settings,
  InfoCircle,
  Timeline,
  Smoking,
  BrandGithub,
  Bug,
} from 'tabler-icons-react';

import {Link} from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
        },
      },
    },
  };
});

const data = [
  { link: '/', label: 'Reducer', icon: Smoking },
  { link: '/timeline', label: 'Quit Timeline', icon: Timeline },
  { link: '/about', label: 'About', icon: InfoCircle },
];

export default function Sidebar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Reducer');

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="https://github.com/theskollie/puff-reducer" target="_blank" rel="noreferrer" className={classes.link}>
          <BrandGithub className={classes.linkIcon} />
          <span>Source Code</span>
        </a>

        <a href="https://github.com/theskollie/puff-reducer/issues" target="_blank" rel="noreferrer" className={classes.link}>
          <Bug className={classes.linkIcon} />
          <span>Report Issue</span>
        </a>
        <Center>
        <Code sx={{ fontWeight: 700}} mt={10}>v1.0.1</Code>
        </Center>
      </Navbar.Section>
     
    </Navbar>
  );
}