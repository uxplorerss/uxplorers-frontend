import { useState } from "react";
import { Container, SearchBox, LocationList, LocationItem, LocationName, InfoIcon, RegionColumn, TerminalColumn } from "../departLocation/index.styles";
import TopBar from "../../../common/components/TopBar";
import Input from "../../../common/components/Input";
import terminalData from "../../../constants/terminal.json";
import terminalRegionData from "../../../constants/terminal_region.json";

interface Terminal {
  tmnCd: number | string;
  tmnNm: string;
}

interface TerminalRegion {
  num: string;
  tmnNm: string;
}

function LocationSelectPage() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const terminals: Terminal[] = terminalData.response.body.items.item;
  const terminalRegion: TerminalRegion[] = Object.entries(terminalRegionData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([code, name]) => ({
      num: code,
      tmnNm: name
    }));

  console.log(terminalRegion);
  
  const filteredTerminals = terminals.filter(terminal => 
    terminal.tmnNm.includes(searchKeyword)
  )
  

  return (
    <div css={Container}>
      <TopBar
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
        <div css={RegionColumn}>
        {terminalRegion.map((terminal) => (
            <div css ={LocationItem} key={terminal.num}>
              <div css ={LocationName}>{terminal.tmnNm}</div>
            </div>
          ))}
      </div>

      <div css={TerminalColumn}>
        {filteredTerminals.map((terminal) => (
            <div css ={LocationItem} key={terminal.tmnCd}>
              <div css ={LocationName}>{terminal.tmnNm}</div>
              <div css ={InfoIcon}>i</div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}

export default LocationSelectPage;
