import { Assets, Sprite } from 'pixi.js'

const getSprite = ({
  name = '',
  scale = 0.5,
  position = { x: 0, y: 0 },
  anchor = 0,
}) => {
  const asset = Assets.get(name)
  const sprite = Sprite.from(asset)

  if (scale) sprite.scale.set(scale)
  if (position) {
    sprite.x = position.x
    sprite.y = position.y
  }
  if (anchor) sprite.anchor.set(anchor)

  return sprite
}

export default getSprite
