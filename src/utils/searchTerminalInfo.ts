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

export function searchTerminalNameToCode(code: string): string {
  const terminal = (
    TerminalInfo as ResponseGosokTerminalInfo
  ).response.body.items.item.find((item) => item.terminalId === code);

  if (!terminal) {
    throw new Error('Terminal not found');
  }
  return terminal.terminalNm;
}

export function searchTerminalCodeToName(name: string): string {
  const terminal = (
    TerminalInfo as ResponseGosokTerminalInfo
  ).response.body.items.item.find((item) => item.terminalNm === name);

  if (!terminal) {
    throw new Error('Terminal not found');
  }
  return terminal.terminalId;
}
