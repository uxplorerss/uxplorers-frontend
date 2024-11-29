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

export function convertAMPMHHMM(datetime: number): string {
  const date = new Date(
    Math.trunc(datetime / 100000000),
    Math.trunc(datetime / 1000000) % 100,
    Math.trunc(datetime / 10000) % 100,
    Math.trunc(datetime / 100) % 100,
    datetime % 100
  );
  return date.toLocaleString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function convertMinutesToHHMM(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return `${hour}시간 ${minute}분`;
}
