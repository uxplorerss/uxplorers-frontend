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

export function convertAMPMHHMM(datetime: number | Date): string {
  if (typeof datetime === 'number') {
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
  return datetime.toLocaleString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function parseYYYYMMDDHHMM(datetime: string): Date {
  const year = parseInt(datetime.substring(0, 4), 10);
  const month = parseInt(datetime.substring(4, 6), 10) - 1; // Month is 0-indexed
  const day = parseInt(datetime.substring(6, 8), 10);
  const hour = parseInt(datetime.substring(8, 10), 10);
  const minute = parseInt(datetime.substring(10, 12), 10);

  return new Date(year, month, day, hour, minute);
}

export function getDifferenceInMinutes(datetime1: string, datetime2: string) {
  const date1 = parseYYYYMMDDHHMM(datetime1);
  const date2 = parseYYYYMMDDHHMM(datetime2);

  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  const minutes = Math.floor(diffInMs / 60000); // Convert milliseconds to minutes

  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return { hour, minute };
}
