import { useState } from 'react';
import {
  Container,
  SearchBox,
  LocationList,
  LocationItem,
  LocationItemSelected,
  LocationName,
  InfoIcon,
  RegionColumn,
  TerminalColumn,
} from '../arrivalLocation/index.styles';
import TopBar from '../../../common/components/TopBar';
import Input from '../../../common/components/Input';
import terminalData from '../../../constants/terminal.json';
import terminalRegionData from '../../../constants/terminal_region.json';
import terminal2Data from '../../../constants/terminal2.json';

import { useNavigate } from '@tanstack/react-router';

import useSearchQueryStore from '../../../stores/useSearchQueryStore';

interface Terminal {
  tmnCd: number | string;
  tmnNm: string;
}

interface TerminalRegion {
  num: string;
  tmnNm: string;
}

interface Terminal2Data {
  [key: string]: Terminal[];
}


function LocationSelectPage() {
  const { setSearchQuery } = useSearchQueryStore();
  const navigate = useNavigate();
  
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTerminal, setSelectedTerminal] = useState<string | null>(null);

  const terminals: Terminal[] = terminalData.response.body.items.item;
  const terminals2: Terminal2Data = terminal2Data.response.body.items.item;
  const terminalRegion: TerminalRegion[] = Object.entries(terminalRegionData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([code, name]) => ({
      num: code,
      tmnNm: name,
    }));

    const regionSelectedTerminals = selectedTerminal
    ? terminals2[selectedTerminal]
    : [];

  const filteredTerminals = (selectedTerminal ? regionSelectedTerminals : terminals)
  .filter((terminal) => terminal.tmnNm.includes(searchKeyword)
  );


  const handleTerminalClick = (terminal: Terminal) => {
    setSearchQuery({
      destId: terminal.tmnCd.toString(),
    });
    navigate({ to: '/booking' });
  };

  return (
    <div css={Container}>
      <TopBar
        leftSlot={null}
        centerSlot={<h1>도착지를 선택하세요</h1>}
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
            <div 
            css={terminal.num === selectedTerminal ? LocationItemSelected : LocationItem}
            key={terminal.num}
            onClick={() => {
              setSelectedTerminal(terminal.num);
            }}
            >
              <div css={LocationName}>{terminal.tmnNm}</div>
            </div>
          ))}
        </div>

        <div css={TerminalColumn}>
          {filteredTerminals.map((terminal) => (
            <div
              css={LocationItem}
              key={terminal.tmnCd}
              onClick={() => handleTerminalClick(terminal)}
            >
              <div css={LocationName}>{terminal.tmnNm}</div>
              <div css={InfoIcon}>i</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationSelectPage;
