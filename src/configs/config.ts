// 動畫類型
export const ANIMATION_NAME = {
  NUKE_S: 'nuke_s',
  NUKE_M: 'nuke_m',
  NUKE_L: 'nuke_l',
  NUKE_XL: 'nuke_xl',
  RED_ENVELOPE: 'red_envelope',
  SILVER_ENVELOPE: 'silver_envelope',
  GOLD_ENVELOPE: 'gold_envelope',
}

// 禮包種類
export const REWARD_TYPE = {
  GOLD: 'gold',
  SILVER: 'silver',
  RED: 'red',
}

export const STORAGE_KEY = {
  TOKEN: 'token', // authorization
  LANGUAGE: 'language', // 語系
}

export const IS_DEV = process.env.NODE_ENV === 'development'
