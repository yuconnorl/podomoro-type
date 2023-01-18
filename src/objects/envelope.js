import { Container } from 'pixi.js'

import getAnimatedSprite from '@/utils/getAnimatedSprite'

export default class Envelope {
  constructor({
    x = 0,
    y = 0,
    speed = 3,
    direction = 1,
    stage,
    rect = [0, 0, 1200, 759],
  }) {
    this.vx = speed * direction
    this.vy = speed
    this.rect = rect
    this.stage = stage
    this.score = 500
    this.isOpen = false
    this.isDie = false
    this.target = new Container()
    this.target.x = x
    this.target.y = y
    this.sprite = getAnimatedSprite({
      name: 'enve_red',
    })
    this.target.addChild(this.sprite)
    this.target.buttonMode = true
    this.target.interactive = true
    this.target.on('pointerdown', () => {
      if (!this.isOpen) {
        this.isOpen = true
        console.log('open!')
      }
    })
    this.stage.addChild(this.target)
    return this
  }
  destroy() {
    if (this.target.parent) {
      this.target.parent.removeChild(this.target)
    }
  }
}
