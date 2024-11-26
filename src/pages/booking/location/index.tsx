import { useState } from "react";
import { Container, SearchBox, LocationList, LocationItem, LocationName, InfoIcon } from "./index.styles";
import TopBar from "../../../common/components/TopBar";
import Input from "../../../common/components/Input";
import terminalData from "../../../constants/terminal.json";

interface Terminal {
  tmnCd: number | string;
  tmnNm: string;
}

function LocationSelectPage() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const terminals: Terminal[] = terminalData.response.body.items.item;

  const filteredTerminals = terminals.filter(terminal => 
    terminal.tmnNm.includes(searchKeyword)
  )
  

  return (
    <div css={Container}>
      <TopBar
        exitButton={<button>←</button>} 
        leftSlot={null}
        centerSlot={<h1>출발지를 선택하세요</h1>}
        rightSlot={null}
      />
      
      <div css={SearchBox}>
        <Input
          type="text"
          placeholder="터미널, 지역명"
          value={searchKeyword}
          onValueChange={setSearchKeyword}
        />
      </div>

      <div css={LocationList}>
        {filteredTerminals.map((terminal) => (
            <div css ={LocationItem} key={terminal.tmnCd}>
              <div css ={LocationName}>{terminal.tmnNm}</div>
              <div css ={InfoIcon}>i</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LocationSelectPage;
