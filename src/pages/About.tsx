import { Container, Paper, Title, Text } from '@mantine/core'
import React from 'react'
import Hero from '../components/about/Hero'

const About = () => {
  return (
    <div>
       <Paper>
      <Container>   
          <Hero />
          <Title order={2}>Most effective usage?</Title>
          <Text mt={20} pb={40}>If you have a vape that tracks puffs, track your first day without using the app to get a baseline. <br/>
                Set this as your daily limit for the first day and reduce maximum puffs by number of hours awake each day. <br />
                Once your max puffs is below hours awake per day, reduce by half until you are ready to quit. <br />
                At this point you can move over to the Quit Timeline and input your Quit Date.

          </Text>
      </Container>
      </Paper>
    </div>
  )
}

export default About