"use client"

import { useEffect, useRef } from "react"

export function EmailPerformanceChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    // In a real implementation, this would use Chart.js
    // For now, we'll just render a simple representation
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height)

    // Draw background
    ctx.fillStyle = "#f0fdfa"
    ctx.fillRect(0, 0, chartRef.current.width, chartRef.current.height)

    // Sample data
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    const data = [10, 15, 12, 18, 15, 22, 20, 25, 30]

    // Draw line chart
    const maxValue = Math.max(...data)
    const stepX = chartRef.current.width / (labels.length - 1)
    const stepY = (chartRef.current.height - 40) / maxValue

    // Draw line
    ctx.beginPath()
    ctx.moveTo(0, chartRef.current.height - data[0] * stepY - 20)

    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(i * stepX, chartRef.current.height - data[i] * stepY - 20)
    }

    ctx.strokeStyle = "#0d9488"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw points
    for (let i = 0; i < data.length; i++) {
      ctx.beginPath()
      ctx.arc(i * stepX, chartRef.current.height - data[i] * stepY - 20, 5, 0, 2 * Math.PI)
      ctx.fillStyle = "#0d9488"
      ctx.fill()
    }

    // Draw labels
    ctx.fillStyle = "#333"
    ctx.font = "10px Arial"

    for (let i = 0; i < labels.length; i++) {
      ctx.fillText(labels[i], i * stepX - 10, chartRef.current.height - 5)
    }
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef} width="800" height="300" />
    </div>
  )
}
