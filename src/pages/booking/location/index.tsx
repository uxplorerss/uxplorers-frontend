import { useState } from "react";
import { Container, SearchBox, LocationList, LocationItem, LocationName, InfoIcon } from "./index.styles";
import TopBar from "../../../common/components/TopBar";
import Input from "../../../common/components/Input";


function LocationSelectPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  
  const locations = [
    "부산", "울산", "서울", "서울남부", "순천", "인천", "인천공항T1", "인천공항T2", 
    "김해시청", "광주시청"
  ];

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
        {locations
          .filter(loc => loc.includes(searchKeyword))
          .map((location, index) => (
            <div css ={LocationItem} key={index}>
              <div css ={LocationName}>{location}</div>
              <div css ={InfoIcon}>i</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LocationSelectPage;
