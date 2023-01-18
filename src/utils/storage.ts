const getter = (storage, key = '') => {
  try {
    const data = window[storage].getItem(key)
    if (data) return JSON.parse(data)
    return undefined
  } catch (err) {
    return window[`${storage}_${key}`]
  }
}

const setter = (storage, key, value) => {
  if (value === undefined) {
    // eslint-disable-next-line no-console
    console.warn(`[storage] (no value) ${key}`)
    return
  }

  try {
    window[storage].setItem(key, JSON.stringify(value))
  } catch (err) {
    window[`${storage}_${key}`] = value
  }
}

const remover = (storage, key) => {
  try {
    window[storage].removeItem(key)
  } catch (err) {
    window[`${storage}_${key}`] = null
    delete window[`${storage}_${key}`]
  }
}

const storage = {
  local: {
    get: (key) => getter('localStorage', key),
    set: (key, value) => setter('localStorage', key, value),
    remove: (key) => remover('localStorage', key),
  },
  session: {
    get: (key) => getter('sessionStorage', key),
    set: (key, value) => setter('sessionStorage', key, value),
    remove: (key) => remover('sessionStorage', key),
  },
}

export default storage
