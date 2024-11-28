export function convertYYYYMMDD(Date: Date): string {
  const year = Date.getFullYear();
  const month = Date.getMonth() + 1;
  const date = Date.getDate();

  return `${year}${month < 10 ? `0${month}` : month}${
    date < 10 ? `0${date}` : date
  }`;
}

function korDay(day: number): string {
  const korDays = ['일', '월', '화', '수', '목', '금', '토'];
  return korDays[day];
}

export function convertMMDDday(Date: Date): string {
  const month = Date.getMonth() + 1;
  const date = Date.getDate();
  const day = Date.getDay();

  return `${month}월 ${date}일 (${korDay(day)})`;
}
