import TerminalInfo from '../constants/terminal_gosok.json';

interface ResponseGosokTerminalInfo {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: {
          terminalId: string;
          terminalNm: string;
        }[];
      };
    };
  };
}

/**
 * 터미널 코드를 받아 ㅌ터미널 이름을 반환하는 함수
 * @param code 터미널 코드 (NAEK를 붙인 코드 | 숫자 코드)
 * @returns 터미널 이름
 */
export function searchTerminalNameToCode(code: string): string | null {
  const terminal = (
    TerminalInfo as ResponseGosokTerminalInfo
  ).response.body.items.item.find(
    (item) => item.terminalId === parseBusTerminalId(code)
  );

  if (!terminal) {
    return null;
  }
  return terminal.terminalNm;
}

/**
 * 터미널 이름을 받아 터미널 코드를 반환하는 함수
 * @param name 터미널 이름
 * @returns NAEK가 없는 터미널 코드
 */
export function searchTerminalCodeToName(name: string): string | null {
  const terminal = (
    TerminalInfo as ResponseGosokTerminalInfo
  ).response.body.items.item.find((item) => item.terminalNm === name);

  if (!terminal) {
    return null;
  }
  return terminal.terminalId.slice(4);
}

/**
 * NAEK가 붙었는지 판단하는 함수
 * @param busTmnId
 * @returns
 */
export const parseBusTerminalId = (busTmnId: string) => {
  if (busTmnId.length === 3 || Number.isNaN(Number(busTmnId)) === false) {
    return `NAEK${busTmnId}`;
  }
  return busTmnId;
};
