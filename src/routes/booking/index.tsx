import { createFileRoute } from '@tanstack/react-router'
import { Typography, TopBar, Input, BottomBar, Button, IconButton, LogoIcon, LanguageSwitchButton } from '../../common/components';
import LogoImg from '/ios/32.png?url';
import TransferBtn from '../../assets/booking/btn_transfer.svg';
import styled from '@emotion/styled';
import { useState } from 'react';

export const Route = createFileRoute('/booking/')({
  component: RouteComponent,
})

const StyledTopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledSelect = styled.select`
  border-style: none;
  border-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

function TopBarContents({position}:{position: "left" | "right"}) {
  if (position === 'left') {
    return (
      <StyledTopBarLeft>
        <img src={LogoImg} alt='kumoneygo logo'/>
        <Typography variant='caption1'>KUmoney GO!</Typography>
      </StyledTopBarLeft>
    )
  } else if (position === 'right') {
    return (
      <Typography variant='caption1'>
        <StyledSelect name='languages'>
          <option value='ko'>KOR</option>
          <option value='en'>ENG</option>
        </StyledSelect>
      </Typography>
    )
  }
  return (
    <>
    </>
  )
}

function BookmarkList() {
  return (
    <div style={{padding: "0 20px"}}>
      <Typography variant='body1' as='p'>즐겨찾기</Typography>
      <Button>서울 경부 → 구미</Button>
    </div>
  )
}

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .date_type {
    display: flex;
    flex-direction: row;
    gap: 15px;

    * {
      min-width: 0;
    }
  }
`

function RouteComponent() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleChange = (handleName: "origin" | "destination" | "time" | "왕복", e: string ) => {
    console.log(handleName);
    switch (handleName) {
      case 'origin':
        setOrigin(e);
        break;
      case 'destination':
        setDestination(e);
        break;
      case 'time':
        break;
      case '왕복':
        break;
      default:
        break;
    }
  };

  const handleSearchBus = () => {
  };

  const handleTransfer = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <>
      <TopBar leftSlot={<Button>
        <LogoIcon />
      </Button>} rightSlot={<LanguageSwitchButton language='Korean' />}/>

      <form style={{padding: "0 20px", justifyItems: 'center', position: 'relative'}} onSubmit={(e) => e.preventDefault()}>
        <Typography variant='title1' as='p'>어디로 갈까요?</Typography>

        <IconButton src={TransferBtn} alt='transfer btn' onClick={handleTransfer} style={{position: 'absolute', right: '10%', top: '33%'}}/>
        <StyledInputContainer>
          <Input value={origin} onValueChange={(e) => handleChange('origin', e)} placeholder='출발지 선택' />
          <Input value={destination} onValueChange={(e) => handleChange('destination', e)} placeholder='도착지 선택' />

          <div className='date_type'>
            <Input value={(new Date()).toDateString()} onValueChange={(e) => handleChange('time', e)} placeholder='날짜 선택' />
            <Input value='' onValueChange={(e) => handleChange('왕복', e)} placeholder='+ 왕복 선택' />
          </div>
        </StyledInputContainer>

        <Button onClick={handleSearchBus} style={{margin: "30px 0"}}>조회하기</Button>
      </form>

      <BookmarkList />
      <BottomBar />
    </>
  );
}
