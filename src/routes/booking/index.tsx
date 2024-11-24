import { createFileRoute } from '@tanstack/react-router'
import { Typography, TopBar, Input, BottomBar } from '../../common/components';
import LogoImg from '/ios/32.png?url';
import styled from '@emotion/styled';
import Button from '../../common/components/Button';

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
        <img src={LogoImg}/>
        <Typography variant='typography1'>KUmoney GO!</Typography>
      </StyledTopBarLeft>
    )
  } else if (position === 'right') {
    return (
      <Typography variant='typography1'>
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
      <Typography variant='typography1' as='p'>즐겨찾기</Typography>
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
  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleSearchBus = () => {
  };

  return (
    <>
      <TopBar leftSlot={<TopBarContents position='left' />} rightSlot={<TopBarContents position='right'/>}/>

      <form style={{padding: "0 20px", justifyItems: 'center'}}>
        <Typography variant='title' as='p'>어디로 갈까요?</Typography>

        <StyledInputContainer>
          <Input value='' onValueChange={handleChange} placeholder='출발지 선택' />
          <Input value='' onValueChange={handleChange} placeholder='도착지 선택' />

          <div className='date_type'>
            <Input value={(new Date()).toDateString()} onValueChange={handleChange} placeholder='날짜 선택' />
            <Input value='' onValueChange={handleChange} placeholder='+ 왕복 선택' />
          </div>
        </StyledInputContainer>

        <Button onClick={handleSearchBus} style={{margin: "30px 0"}}>조회하기</Button>
      </form>

      <BookmarkList />
      <BottomBar />
    </>
  );
}
