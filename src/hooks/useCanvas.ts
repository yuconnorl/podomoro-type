import { storeToRefs } from 'pinia'
import { Application, Assets, TilingSprite } from 'pixi.js'

import { usePixiStore } from '@/stores/pixi'

const useCanvas = ({
  height = 1000,
  width = 1000,
  resolution = 1,
  backgroundColor = '#000',
}) => {
  const pixi = usePixiStore()
  const { canvasHeight, canvasWidth } = storeToRefs(pixi)

  // 建立 canvas instance
  const canvas = new Application({
    width: canvasWidth.value,
    height: canvasHeight.value,
    backgroundColor: backgroundColor,
    resolution: resolution,
    antialias: true,
    autoDensity: true,
    preserveDrawingBuffer: true,
  })

  // 加入晨晨背景
  // const sunBg = await Assets.load('/images/sun.png')
  // const sunSprite = new TilingSprite(
  //   sunBg,
  //   canvas.screen.width,
  //   canvas.screen.height,
  // )

  // sunSprite.tileScale.set(0.15, 0.15)
  // canvas.ticker.add(function () {
  //   sunSprite.tilePosition.x += 1
  // })

  // canvas.stage.addChild(sunSprite)

  return canvas
}

export default useCanvas
