export const getBusNowTimeAPI = async (fromTmnId: string, toTmnId: string) => {
  const queryStringParams: Record<string, string> = {
    serviceKey: import.meta.env.VITE_OPEN_API_KEY,
    pageNo: '1',
    numOfRows: '10',
    _type: 'json',
    depTmnCd: fromTmnId,
    arrTmnCd: toTmnId,
  };

  const queryString = new URLSearchParams(queryStringParams).toString();

  const response = await fetch(
    `/uxplorers-frontend/api/ExpBusArrInfoService/getExpBusArrPrdtInfo?${queryString}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  return data;
};

// ===
interface BusTicket {
  arrPlaceNm: string;
  arrPlandTime: number;
  charge: number;
  depPlaceNm: string;
  depPlandTime: number;
  gradeNm: string;
  routeId: number;
}

interface ResponseBusTickets {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: BusTicket[];
      };
    };
  };
}

/**
 *
 * @param busTmnId
 * @returns
 */
const parseBusTerminalId = (busTmnId: string) => {
  if (busTmnId.length === 3) {
    return `NAEK${busTmnId}`;
  }
  return busTmnId;
};

export const getBusTicketsAPI = async (
  fromTmnId: string,
  toTmnId: string,
  plandTime: string
): Promise<ResponseBusTickets> => {
  const queryStringParams: Record<string, string> = {
    serviceKey: import.meta.env.VITE_OPEN_API_KEY,
    pageNo: '1',
    numOfRows: '100',
    _type: 'json',
    depTerminalId: parseBusTerminalId(fromTmnId),
    arrTerminalId: parseBusTerminalId(toTmnId),
    depPlandTime: plandTime,
  };

  const queryString = new URLSearchParams(queryStringParams).toString();
  console.log(queryString);

  const response = await fetch(
    `/uxplorers-frontend/api/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?${queryString}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();

  return data;
};
