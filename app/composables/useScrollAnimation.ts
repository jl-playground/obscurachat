export const useScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observeElements = (selector: string, onIntersect?: () => void) => {
    if (!process.client) return

    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          onIntersect?.()
        }
      })
    }, observerOptions)

    elements.forEach(el => observer.observe(el))

    return observer
  }

  return {
    observeElements
  }
}
