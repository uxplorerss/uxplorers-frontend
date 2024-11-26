import TopBar from "../../common/components/TopBar";
import BottomBar from "../../common/components/BottomBar";
import Input from "../../common/components/Input";
import { container, mainContent, dateSelector, dateBox, addDateButton, searchButton } from "./index.styles";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

function TicketsPage() {
  const navigate = useNavigate();

  const [check, setCheck] = useState({
    departure: "",
    destination: "",
    date: "",
    roundTrip: false,
  });

    return (
      <div css={container}>
        <TopBar
          exitButton={<button>X</button>}
          leftSlot={null}
          centerSlot={<h1>어디로 갈까요?</h1>}
          rightSlot={null}
        />
        
        <main css={mainContent}>
        <Input 
          type="text"
          placeholder="출발지를 선택" 
          value=""
          onValueChange={(value: string) => {
            setCheck({
              ...check,
              departure: value,
            });
          }}
          onClick={() => {
            navigate({ to: '/booking/location' });
          }}
        />
        <Input 
         type="text"
          placeholder="도착지를 선택" 
          value=""
          onValueChange={(value: string) => {
            setCheck({
              ...check,
              destination: value,
            });
          }}  
          onClick={() => {
            navigate({ to: '/booking/location' });
          }}
        />
        <div css={dateSelector}>
          <Input 
            css={dateBox} 
            placeholder="날짜 선택"
            value=""
            onValueChange={(value: string) => {
              setCheck({
                ...check,
                date: value,
              });
            }}
          />
          <Input 
            css={dateBox}
            placeholder="+왕복 선택"
            value=""
            onValueChange={(value: string ) => {
              setCheck({
                ...check,
                roundTrip: value === "왕복",
              });
            }}
          />
        </div>
        <button css={searchButton}>조회하기</button>
        </main>
  
        <BottomBar
          leftContent={<span>승차권 확인</span>}
          centerContent={<span>예매하기</span>}
          rightContent={<span>마이페이지</span>}
        />
      </div>
    );
  }
  
  export default TicketsPage;
