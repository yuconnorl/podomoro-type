import { storeToRefs } from 'pinia'
import { Container } from 'pixi.js'
import { ref } from 'vue'

import { ANIMATION_NAME } from '@/configs/config'
import { usePixiStore } from '@/stores/pixi'
import getAnimatedSprite from '@/utils/getAnimatedSprite'

interface Pr {
  x: number
  y: number
  // stage: PIXI.Container<PIXI.DisplayObject>
  speed: number
}

const Envelopef = ({
  x = 0,
  y = 0,
  stage,
  name = '',
  speed = 0,
  anchor = 0,
  onEnvelopeOpen = () => {},
}) => {
  const pixi = usePixiStore()
  const { canvasHeight, canvasWidth } = storeToRefs(pixi)

  const isOpen = ref<boolean>(false)
  const container = new Container()
  const sprite = getAnimatedSprite({
    anchor,
    name: name,
    animationSpeed: speed,
  })

  // remove all children from Container
  const destroy = () => {
    if (container.parent) {
      container.parent.removeChild(container)
    }
  }

  const onNukeComplete = () => {
    console.log('nuke complete')
  }

  const setupContainer = () => {
    container.x = x
    container.y = y
    container.interactive = true
    container.pivot.x = container.width / 2
    container.pivot.y = container.height / 2
    container.on('pointerdown', () => {
      if (!isOpen.value) {
        onEnvelopeOpen() // fetch lottery api
        isOpen.value = true
        const nuke = getAnimatedSprite({
          name: ANIMATION_NAME.NUKE_XL,
          loop: false,
          animationSpeed: 0.5,
          position: {
            x: container.width / 2,
            y: container.height / 2,
          },
          anchor: 0.5,
          fireAfterComplete: onNukeComplete,
        })
        container.addChild(nuke)
      }
    })
  }

  setupContainer()

  container.addChild(sprite)
  stage.addChild(container)

  const enve = {
    container,
    sprite,
    stage: stage,
    isOpen: false,
  }

  return enve
}

export default Envelopef
