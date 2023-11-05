<script setup lang="ts">
import type { FileInfo } from 'naive-ui/es/upload/src/interface'
import { useMessage } from 'naive-ui'
import { useGameStore } from '@/store/game-store'

const gameStore = useGameStore()

const message = useMessage()

function uploadSave({ file: { file } }: { file: Required<FileInfo> }) {
  if (!file) {
    message.error('No file selected')
    return
  }

  gameStore.uploadSave(file)
}
</script>

<template>
  <NH1>Game</NH1>

  <NButton
    @click="() => {
      gameStore.resetGame()
      gameStore.initGame()
    }"
  >
    Reset Game
  </NButton>

  <NButton @click="gameStore.downloadSave()">
    Download Save
  </NButton>

  <NUpload
    accept=".json"
    directory-dnd
    :show-file-list="false"
    :before-upload="() => false"
    @change="(x) => uploadSave(x)"
  >
    <NUploadDragger>
      <div style="margin-bottom: 12px">
        <NIcon size="48" :depth="3" class="ico-mdi-file" />
      </div>

      <NText style="font-size: 16px">
        Click or drag a save game to this area to upload
      </NText>
    </NUploadDragger>
  </NUpload>
</template>

<style>

</style>
