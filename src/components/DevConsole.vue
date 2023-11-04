<script setup lang="ts">
import type { InputInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { useInventoryStore } from '../store/inventory-store'

const [show, toggle] = useToggle(false)
const message = useMessage()

const containerRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<InputInst | null>(null)
const outputRef = ref<HTMLDivElement | null>(null)

const command = ref('')
const history = useLocalStorage<string[]>('dev-console-history', [])

onClickOutside(containerRef, () => {
  if (show.value)
    toggle()
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'F10') {
    event.preventDefault()

    toggle()

    if (inputRef.value)
      inputRef.value.focus()

    if (outputRef.value)
      outputRef.value.scrollTop = outputRef.value.scrollHeight
  }

  else if (event.key === 'Escape' && show.value) {
    event.preventDefault()

    toggle()
  }

  else if (event.key === 'Enter') {
    event.preventDefault()

    const success = runCommand(command.value.toLowerCase())

    if (success) {
      addToHistory(command.value)

      scrollOutputToBottom()

      command.value = ''
    }
  }

  else if (event.key === 'ArrowUp') {
    event.preventDefault()

    if (history.value.length > 0)
      command.value = history.value[history.value.length - 1]
  }
})

function scrollOutputToBottom() {
  if (outputRef.value)
    outputRef.value.scrollTop = outputRef.value.scrollHeight
}

function addToHistory(command: string) {
  history.value.push(command)
}

function runCommand(command: string) {
  const inventoryStore = useInventoryStore()

  const parts = command.split(' ')

  switch (parts[0]) {
    case 'add': {
      switch (parts[1]) {
        case 'money': {
          const amount = Number(parts[2])

          if (Number.isNaN(amount))
            return false

          inventoryStore.addMoney(amount)

          return true
        }
      }

      message.error('Unknown command')
      return false
    }

    case 'remove': {
      switch (parts[1]) {
        case 'money': {
          const amount = Number(parts[2])

          if (Number.isNaN(amount))
            return false

          inventoryStore.removeMoney(amount)

          return true
        }
      }

      message.error('Unknown command')
      return false
    }

    case 'reset': {
      switch (parts[1]) {
        case 'money': {
          inventoryStore.setMoney(0)

          return true
        }
      }

      message.error('Unknown command')
      return false
    }

    case 'clear': {
      history.value = []

      return true
    }

    default: {
      message.error('Unknown command')
      return false
    }
  }
}
</script>

<template>
  <div v-show="show" ref="containerRef" class="h-480px absolute bottom-0 left-0 right-0 z-100 bg-black opacity-80 font-mono! p-4 flex flex-col space-y-4">
    <h1 class="font-bold text-xl">
      Dev Console
    </h1>

    <div ref="outputRef" class="flex-grow overflow-y-scroll border border-dark">
      <pre v-for="(item, index) of history" :key="index">{{ item }}</pre>
    </div>

    <NInput ref="inputRef" v-model:value="command" />
  </div>
</template>

<style>

</style>
