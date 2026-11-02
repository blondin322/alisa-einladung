import { useEffect, useRef } from 'react'

type SparklesProps = {
  className?: string
  density?: number
}

type Mote = {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  phase: number
  speed: number
  hue: number
}

const COLORS = ['255, 223, 140', '255, 246, 214', '255, 182, 222', '206, 186, 255']

export function Sparkles({ className, density = 1 }: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let motes: Mote[] = []
    let frame = 0
    let width = 0
    let height = 0

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(((width * height) / 9000) * density)
      motes = Array.from({ length: Math.max(12, count) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 2.2,
        vy: -(0.08 + Math.random() * 0.35),
        vx: (Math.random() - 0.5) * 0.18,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.05,
        hue: Math.floor(Math.random() * COLORS.length),
      }))
    }

    function star(x: number, y: number, r: number, alpha: number, color: string) {
      const glow = ctx!.createRadialGradient(x, y, 0, x, y, r * 4)
      glow.addColorStop(0, `rgba(${color}, ${alpha})`)
      glow.addColorStop(1, `rgba(${color}, 0)`)
      ctx!.fillStyle = glow
      ctx!.beginPath()
      ctx!.arc(x, y, r * 4, 0, Math.PI * 2)
      ctx!.fill()
      if (r > 1.6) {
        ctx!.strokeStyle = `rgba(255, 252, 240, ${alpha * 0.9})`
        ctx!.lineWidth = 0.8
        ctx!.beginPath()
        ctx!.moveTo(x - r * 3, y)
        ctx!.lineTo(x + r * 3, y)
        ctx!.moveTo(x, y - r * 3)
        ctx!.lineTo(x, y + r * 3)
        ctx!.stroke()
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      for (const m of motes) {
        m.phase += m.speed
        if (!reduceMotion) {
          m.y += m.vy
          m.x += m.vx
          if (m.y < -10) {
            m.y = height + 10
            m.x = Math.random() * width
          }
          if (m.x < -10) m.x = width + 10
          if (m.x > width + 10) m.x = -10
        }
        const alpha = 0.25 + 0.75 * Math.pow((Math.sin(m.phase) + 1) / 2, 2)
        star(m.x, m.y, m.r, alpha, COLORS[m.hue])
      }
      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    const observer = new ResizeObserver(() => {
      resize()
      if (reduceMotion) draw()
    })
    observer.observe(canvas)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [density])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
