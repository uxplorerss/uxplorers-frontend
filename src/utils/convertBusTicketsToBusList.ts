import { BusTicket } from '../apis/getBusTickets';
import { BusList, SearchQuery } from '../types';
import { getDifferenceInMinutes, parseYYYYMMDDHHMM } from './convertDate';

export function convertBusTicketsToBusList(
  busTickets: BusTicket[],
  searchQuery: SearchQuery
): BusList {
  // 기본 adults 요금, teens 요금은 20% 할인, children 요금은 50% 할인
  return busTickets.map((busTicket) => {
    return {
      startDate: parseYYYYMMDDHHMM(busTicket.depPlandTime.toString()),
      startId: searchQuery.startId,
      destIdList: [searchQuery.destId],
      company: '경기고속',
      fee: {
        children: busTicket.charge * 0.5,
        teens: busTicket.charge * 0.8,
        adults: busTicket.charge,
      },
      eta: getDifferenceInMinutes(
        busTicket.arrPlandTime.toString(),
        busTicket.depPlandTime.toString()
      ),
      class: busTicket.gradeNm,
      seats: [],
      distance: 0,
      isExpress: true,
    };
  });
}
