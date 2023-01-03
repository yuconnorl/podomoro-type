export const PANEL_TYPE = {
  PODOMORO: 'Podomoro',
  SHORT_BREAK: 'Short Break',
  LONG_BREAK: 'Long Break',
}

export const TIME_PERIOD = {
  [PANEL_TYPE.PODOMORO]: 30 * 60,
  [PANEL_TYPE.SHORT_BREAK]: 5 * 60,
  [PANEL_TYPE.LONG_BREAK]: 15 * 60,
}

export const PROMPT = {
  [PANEL_TYPE.PODOMORO]: 'Time to focus!',
  [PANEL_TYPE.SHORT_BREAK]: 'Time for a short break!',
  [PANEL_TYPE.LONG_BREAK]: 'Time for a long break!',
}

export const confirmMessage: string =
  'The timer is still running, are you sure you want to switch?'
