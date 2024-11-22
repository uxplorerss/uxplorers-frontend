import TopBar from "../../common/components/TopBar";
import BottomBar from "../../common/components/BottomBar";
import Input from "../../common/components/Input";
import { container, mainContent, dateSelector, dateBox, addDateButton, searchButton } from "./index.styles";
import { useState } from "react";

function TicketsPage() {

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
        />
        <div css={dateSelector}>
          <div css={dateBox}>
          <Input 
            value="11월 22일 (금)"
            onValueChange={(value: string) => {
              setCheck({
                ...check,
                date: value,
              });
            }}
          />
          </div>
          <div css={dateBox}>
            <Input 
            value="+왕복 선택" 
            onValueChange={(value: string ) => {
              setCheck({
                ...check,
                roundTrip: value === "왕복",
              });
            }}/>
          </div>
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
