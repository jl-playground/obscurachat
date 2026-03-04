import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

export const useParticles = () => {
  const particles = ref<Particle[]>([])
  let animationFrameId: number

  const createParticle = (x: number, y: number, color: string = '#FF7F66') => {
    const particle: Particle = {
      id: `particle-${Date.now()}-${Math.random()}`,
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 1
    }
    particles.value.push(particle)
  }

  const updateParticles = () => {
    particles.value = particles.value.filter((p) => {
      p.x += p.vx
      p.y += p.vy
      p.life -= 0.02
      p.vy += 0.1 // gravity
      return p.life > 0
    })
  }

  const animate = () => {
    updateParticles()
    animationFrameId = requestAnimationFrame(animate)
  }

  const start = () => {
    if (!process.client) return
    animationFrameId = requestAnimationFrame(animate)
  }

  const stop = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  }

  return {
    particles,
    createParticle,
    start,
    stop
  }
}
