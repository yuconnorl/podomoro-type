import { AnimatedSprite, Assets, Texture } from 'pixi.js'

// generate new animation sprite
const getAnimatedSprite = ({
  name = '',
  scale = 0.5,
  position = { x: 0, y: 0 },
  anchor = 0,
  animationSpeed = 0.25,
  loop = true,
  fireAfterComplete = () => {},
}) => {
  const asset = Assets.get(name)
  const frameLength = asset._frameKeys.length
  const textureArray = []

  for (let i = 1; i < frameLength; i++) {
    textureArray.push(Texture.from(`${name}_${i}.png`))
  }

  const anim = new AnimatedSprite(textureArray)
  if (scale) anim.scale.set(scale)
  if (position) anim.position = position
  if (animationSpeed) anim.animationSpeed = animationSpeed
  if (anchor) anim.anchor.set(anchor)
  anim.loop = loop
  anim.play()

  // cleanup animation if onComplete function is provided
  if (fireAfterComplete)
    anim.onComplete = () => {
      fireAfterComplete()
      anim.removeFromParent()
    }

  return anim
}

export default getAnimatedSprite
