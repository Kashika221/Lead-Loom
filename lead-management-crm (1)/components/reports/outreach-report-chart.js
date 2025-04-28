"use client"

import { useEffect, useRef } from "react"

export function OutreachReportChart() {
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
    const labels = ["Campaign 1", "Campaign 2", "Campaign 3", "Campaign 4", "Campaign 5"]
    const datasets = [
      { label: "Sent", data: [100, 150, 120, 200, 180], color: "#0d9488" },
      { label: "Opened", data: [70, 90, 60, 120, 100], color: "#67e8f9" },
      { label: "Replied", data: [20, 30, 15, 40, 35], color: "#4ade80" },
    ]

    // Draw bar chart
    const barWidth = chartRef.current.width / (labels.length * datasets.length + labels.length)
    const groupWidth = barWidth * datasets.length
    const maxValue = Math.max(...datasets.flatMap((d) => d.data))
    const stepY = (chartRef.current.height - 60) / maxValue

    // Draw bars
    datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((value, index) => {
        const x = index * (groupWidth + barWidth) + datasetIndex * barWidth + barWidth / 2
        const y = chartRef.current.height - value * stepY - 40
        const height = value * stepY

        ctx.fillStyle = dataset.color
        ctx.fillRect(x, y, barWidth, height)
      })
    })

    // Draw labels
    ctx.fillStyle = "#333"
    ctx.font = "10px Arial"

    labels.forEach((label, index) => {
      const x = index * (groupWidth + barWidth) + groupWidth / 2
      ctx.fillText(label, x, chartRef.current.height - 20)
    })

    // Draw legend
    datasets.forEach((dataset, index) => {
      const x = 20
      const y = 20 + index * 20

      ctx.fillStyle = dataset.color
      ctx.fillRect(x, y, 15, 15)

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
