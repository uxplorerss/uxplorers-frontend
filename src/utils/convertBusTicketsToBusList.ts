import { BusTicket } from '../apis/getBusTickets';
import { BusList, SearchQuery } from '../types';
import { getDifferenceInMinutes, parseYYYYMMDDHHMM } from './convertDate';

export function convertBusTicketsToBusList(
  busTickets: BusTicket[],
  searchQuery: SearchQuery
): BusList {
  // 기본 adults 요금, teens 요금은 20% 할인, children 요금은 50% 할인
  const busCompany = [
    '경기고속',
    '금호고속',
    '대원고속',
    '경기고속',
    '동부고속',
    '동양고속',
  ];

  return busTickets.map((busTicket, index) => {
    const etaNum = getDifferenceInMinutes(
      busTicket.arrPlandTime.toString(),
      busTicket.depPlandTime.toString()
    );

    return {
      startDate: parseYYYYMMDDHHMM(busTicket.depPlandTime.toString()),
      startId: searchQuery.startId,
      destIdList: [searchQuery.destId],
      company: busCompany[index % busCompany.length],
      fee: {
        children: busTicket.charge * 0.5,
        teens: busTicket.charge * 0.8,
        adults: busTicket.charge,
      },
      eta: `${etaNum.hour}시간 ${etaNum.minute}분`,
      class: busTicket.gradeNm,
      seats: [],
      distance: 75 * etaNum.hour + Math.floor(1.2 * etaNum.minute),
      isExpress: true,
    };
  });
}
