import TopBar from "../../common/components/TopBar";
import BottomBar from "../../common/components/BottomBar";
import Input from "../../common/components/Input";
import { container, mainContent, dateSelector, addDateButton, searchButton } from "./index.styles";

function TicketsPage() {
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
          placeholder="출발지를 선택하세요" 
          value=""
          onValueChange={() => {}}
        />
        <Input 
         type="text"
          placeholder="도착지를 선택하세요" 
          value=""
          onValueChange={() => {}}
        />
        <div css={dateSelector}>
          <Input 
            value="11월 22일 (금)"
            onValueChange={() => {}}
          />
          <button css={addDateButton}>+ 왕복 선택</button>
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
