"use client"

import { useEffect, useRef } from "react"

export function StatusDonut() {
  const chartRef = useRef(null)

  useEffect(() => {
    // In a real implementation, this would use Chart.js
    // For now, we'll just render a simple representation
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height)

    // Sample data
    const data = [
      { label: "New", value: 30, color: "#67e8f9" },
      { label: "Contacted", value: 40, color: "#0d9488" },
      { label: "Engaged", value: 20, color: "#4ade80" },
      { label: "Converted", value: 10, color: "#fcd34d" },
    ]

    // Draw donut chart
    const centerX = chartRef.current.width / 2
    const centerY = chartRef.current.height / 2
    const radius = Math.min(centerX, centerY) - 20
    const innerRadius = radius * 0.6

    let startAngle = 0
    const total = data.reduce((sum, item) => sum + item.value, 0)

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center circle (for donut hole)
    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
  }, [])

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <canvas ref={chartRef} width="300" height="300" />
    </div>
  )
}
