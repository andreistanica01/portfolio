'use client'

import { useEffect, useRef } from 'react'

export function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      const blockSize = 4 // 4x4 pixel blocks

      for (let y = 0; y < canvas.height; y += blockSize) {
        for (let x = 0; x < canvas.width; x += blockSize) {
          const value = Math.random() * 255

          for (let dy = 0; dy < blockSize; dy++) {
            for (let dx = 0; dx < blockSize; dx++) {
              const px = Math.min(x + dx, canvas.width - 1)
              const py = Math.min(y + dy, canvas.height - 1)
              const index = (py * canvas.width + px) * 4

              data[index] = value     // red
              data[index + 1] = value // green
              data[index + 2] = value // blue
              data[index + 3] = 80    // alpha (more visible)
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = () => {
      frame++
      // Update every 6 frames for subtle stepping effect
      if (frame % 6 === 0) {
        generateNoise()
      }
      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 99999, mixBlendMode: 'overlay' }}
      aria-hidden="true"
    />
  )
}
