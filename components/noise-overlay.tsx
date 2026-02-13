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

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value     // red
        data[i + 1] = value // green
        data[i + 2] = value // blue
        data[i + 3] = 100   // alpha (more visible)
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
      className="fixed inset-0 pointer-events-none opacity-70"
      style={{ zIndex: 99999, mixBlendMode: 'overlay' }}
      aria-hidden="true"
    />
  )
}
