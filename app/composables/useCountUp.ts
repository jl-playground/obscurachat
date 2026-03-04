import { ref, onMounted } from 'vue'

export const useCountUp = (target: number, duration: number = 2000) => {
  const count = ref(0)
  const isCountingStarted = ref(false)

  const startCount = () => {
    if (isCountingStarted.value) return

    isCountingStarted.value = true
    const increment = target / (duration / 16) // 60fps
    const timer = setInterval(() => {
      if (count.value < target) {
        count.value = Math.min(Math.floor(count.value + increment), target)
      } else {
        count.value = target
        clearInterval(timer)
      }
    }, 16)
  }

  return {
    count,
    startCount
  }
}
