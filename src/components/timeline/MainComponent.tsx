import React, {useState, useEffect} from 'react'
import { Timeline, Text } from '@mantine/core';
import { GitBranch, GitPullRequest, GitCommit, MessageDots, Star } from 'tabler-icons-react';

interface MainComponentProps {
  activeELement: number;
  getQuitTime: () => void;
}

const MainComponent = ({activeELement, getQuitTime} : MainComponentProps) => {

  useEffect(() => {
    getQuitTime();
  },[])

  return (
    <Timeline active={activeELement} color="red" bulletSize={30} lineWidth={3} p={30} >
    <Timeline.Item bullet={<Star size={15} />} title="Quit Date!">
      <Text color="dimmed" size="sm">Congratulations! You&apos;ve decided to quit smoking/vaping!</Text>
    </Timeline.Item>

    <Timeline.Item bullet={<Star size={15} />} title="Pulse rate returning to normal">
      <Text color="dimmed" size="sm">Your bronchial tubes will begin to recover almost immediately. <br/> When you inhale smoke, the fibres in your bronchial tubes stiffen, and are unable to move as freely as they normally would.</Text>
      <Text size="xs" mt={4}>20 Minutes</Text>
    </Timeline.Item>

    <Timeline.Item title="Carbon monoxide in your lungs halved" bullet={<GitPullRequest size={15} />} lineVariant="dashed">
      <Text color="dimmed" size="sm">After 8 hours, the amount of harmful carbon monoxide in your bloodstream has been reduced by half.</Text>
      <Text size="xs" mt={4}>8 Hours</Text>
    </Timeline.Item>

    <Timeline.Item title="Oxygen in lungs & tissues increased" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm">There is more oxygen in your lungs and tissues, your arteries and veins are not as constricted, and your heart is working more effectively to pump blood around your body.</Text>
      <Text size="xs" mt={4}>24 Hours</Text>
    </Timeline.Item>

    <Timeline.Item title="No Carbon Monoxide present in lungs" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> Newly free of carbon monoxide, the stunted nerve endings in your lungs are beginning to regrow. Most people notice that their sense of taste and smell returns at the two-day mark.</Text>
      <Text size="xs" mt={4}>48 Hours</Text>
    </Timeline.Item>

    <Timeline.Item title="Lung Capacity Increased" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> Even better news for your bronchial tubes, they’re relaxing and expanding more than ever. A mere three days after you had your last cigarette you can breathe easy, because your lung capacity has increased.</Text>
      <Text size="xs" mt={4}>72 Hours</Text>
    </Timeline.Item>

    <Timeline.Item title="9x more likely to quit for good" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> But once you’ve reached the one week mark it’s time to look towards all of the health benefits that you can expect to experience in the future, because people who have successfully quit smoking for a week are nine times more likely to kick the habit for good.</Text>
      <Text size="xs" mt={4}>1 Week</Text>
    </Timeline.Item>

    <Timeline.Item title="Improved Circulation" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> Some ex-smokers can feel the improvement in their circulation after just 2 weeks of sticking to their Stoptober 2020 challenge. Your lung function can also increase by up to 30% in this timeframe, which means that you can regain some of the mobility you lost to cigarettes. </Text>
      <Text size="xs" mt={4}>2 Week</Text>
    </Timeline.Item>

    <Timeline.Item title="Improved Fertility + Lung Capacity" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> After just three months of quitting nicotine for good a woman’s fertility has drastically improved. Your lung function increases by up to 10%, which can help to combat any breathing issues that you are experiencing.  </Text>
      <Text size="xs" mt={4}>3 Months</Text>
    </Timeline.Item>

    <Timeline.Item title="One Year!" bullet={<Star size={15} />}>
      <Text color="dimmed" size="sm"> One-year smoke free means that your chance of having a heart attack has been reduced by 50% compared to the chances of someone who is still smoking. Your lung capacity and functionality has drastically improved, your circulation is better than it has been for years, and you can look forward to a brighter future with less chances of nicotine related health complications.   </Text>
      <Text size="xs" mt={4}>1 Year</Text>
    </Timeline.Item>

    </Timeline>
  )
}

export default MainComponent