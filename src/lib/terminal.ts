import terminalData from '../constants/terminal_gosok.json';

export const getTerminalName = (terminalId: string) => {
  const terminals = terminalData.response.body.items.item;

  const filteredTerminal = terminals.find(
    (terminal) => terminal.terminalId === 'NAEK' + terminalId
  );

  return filteredTerminal?.terminalNm;
};
