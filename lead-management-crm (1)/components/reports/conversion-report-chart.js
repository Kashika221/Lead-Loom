"use client"

import { useEffect, useRef } from "react"

export function ConversionReportChart() {
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
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const datasets = [
      { label: "Lead to Contact Rate", data: [40, 45, 50, 55, 60, 65], color: "#0d9488" },
      { label: "Contact to Meeting Rate", data: [25, 30, 28, 35, 40, 45], color: "#67e8f9" },
      { label: "Meeting to Deal Rate", data: [15, 18, 20, 22, 25, 30], color: "#4ade80" },
    ]

    // Draw line chart
    const stepX = chartRef.current.width / (labels.length - 1)
    const stepY = (chartRef.current.height - 60) / 100 // Max value is 100%

    // Draw lines
    datasets.forEach((dataset) => {
      ctx.beginPath()
      ctx.moveTo(0, chartRef.current.height - dataset.data[0] * stepY - 40)

      for (let i = 1; i < dataset.data.length; i++) {
        ctx.lineTo(i * stepX, chartRef.current.height - dataset.data[i] * stepY - 40)
      }

      ctx.strokeStyle = dataset.color
      ctx.lineWidth = 3
      ctx.stroke()

      // Draw points
      for (let i = 0; i < dataset.data.length; i++) {
        ctx.beginPath()
        ctx.arc(i * stepX, chartRef.current.height - dataset.data[i] * stepY - 40, 5, 0, 2 * Math.PI)
        ctx.fillStyle = dataset.color
        ctx.fill()
      }
    })

    // Draw labels
    ctx.fillStyle = "#333"
    ctx.font = "10px Arial"

    labels.forEach((label, index) => {
      ctx.fillText(label, index * stepX - 10, chartRef.current.height - 20)
    })

    // Draw legend
    datasets.forEach((dataset, index) => {
      const x = 20
      const y = 20 + index * 20

      ctx.strokeStyle = dataset.color
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(x, y + 7)
      ctx.lineTo(x + 15, y + 7)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(x + 7, y + 7, 3, 0, 2 * Math.PI)
      ctx.fillStyle = dataset.color
      ctx.fill()

      ctx.fillStyle = "#333"
      ctx.font = "12px Arial"
      ctx.fillText(dataset.label, x + 25, y + 12)
    })
  }, [])

  return (
    <div className="w-full h-96">
      <canvas ref={chartRef} width="800" height="400" />
    </div>
  )
}
