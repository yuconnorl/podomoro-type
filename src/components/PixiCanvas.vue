<template>
  <div ref="root"></div>
  <div>{{ currentType }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Assets } from 'pixi.js'
import { onMounted, onUpdated, ref } from 'vue'

import { ANIMATION_NAME } from '@/configs/config'
import useCanvas from '@/hooks/useCanvas'
import Envelopef from '@/objects/envelopef'
import { useGeneralStore } from '@/stores/general'

const general = useGeneralStore()
const { currentType } = storeToRefs(general)

const manifest = {
  bundles: [
    {
      name: 'json2',
      assets: [
        {
          name: 'nuke_s',
          srcs: '/images/nuke_s.json',
        },
        {
          name: 'nuke_m',
          srcs: '/images/nuke_m.json',
        },
        {
          name: 'nuke_l',
          srcs: '/images/nuke_l.json',
        },
        {
          name: 'nuke_xl',
          srcs: '/images/nuke_xl.json',
        },
        {
          name: 'red_envelope',
          srcs: '/images/red_envelope.json',
        },
        {
          name: 'silver_envelope',
          srcs: '/images/silver_envelope.json',
        },
        {
          name: 'gold_envelope',
          srcs: '/images/gold_envelope.json',
        },
      ],
    },
  ],
}

await Assets.init({ manifest })
await Assets.loadBundle('json2')

const root = ref<HTMLElement | HTMLCanvasElement | null>(null)
const canvas = useCanvas({ backgroundColor: '#1099bb' })

const onUpdate = () => {
  if (currentType.value === 'silver') {
    for (let i = 0; i < 10; i++) {
      const a = Envelopef({
        name: ANIMATION_NAME.SILVER_ENVELOPE,
        stage: canvas.stage,
        x: 100 + (i % 5) * 130,
        y: 100 + Math.floor(i / 5) * 130,
        anchor: 0.5,
        speed: 0.3,
      })
    }
  }
  if (currentType.value === 'gold') {
    for (let i = 0; i < 10; i++) {
      Envelopef({
        name: ANIMATION_NAME.GOLD_ENVELOPE,
        stage: canvas.stage,
        x: 100 + (i % 5) * 130,
        y: 400 + Math.floor(i / 5) * 130,
        anchor: 0.5,
        speed: 0.3,
      })
    }
  }
}

onMounted(() => {
  root.value?.appendChild(canvas.view)
  console.log(root.value.getBoundingClientRect())
})

onUpdated(() => {
  onUpdate()
})
</script>

<style scoped lang="scss"></style>
