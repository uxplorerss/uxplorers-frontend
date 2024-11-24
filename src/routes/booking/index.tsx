import { createFileRoute } from '@tanstack/react-router'
import { Typography, TopBar, Input, BottomBar } from '../../common/components';
import LogoImg from '/ios/32.png?url';
import styled from '@emotion/styled';

export const Route = createFileRoute('/booking/')({
  component: RouteComponent,
})

const StyledTopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

function TopBarContents({position}:{position: "left" | "right"}) {
  if (position === 'left') {
    return (
      <StyledTopBarLeft>
        <img src={LogoImg}/>
        <Typography variant='body'>KUmoney GO!</Typography>
      </StyledTopBarLeft>
    )
  } else if (position === 'right') {
    return (
      <Typography variant='body'>ENG</Typography>
    )
  }
  return (
    <>
    </>
  )
}

function RouteComponent() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <TopBar leftSlot={<TopBarContents position='left' />} rightSlot={<TopBarContents position='right'/>}/>
      <Typography variant='title' as='p'>어디로 갈까요?</Typography>
      <Input value='' onValueChange={handleChange} placeholder='출발지 선택' />
      <Input value='' onValueChange={handleChange} placeholder='도착지 선택' />
      <BottomBar />
    </>
  );
}
