export const getGameLink = () =>
  api({
    method: 'GET',
    url: '/game-link',
    params: { gameCode, plat },
  }).then((res) => res.data)

export const postSome = <Type>(data: Type) =>
  api({
    method: 'POST',
    url: '/game-link',
    data,
  }).then((res) => res.data)
