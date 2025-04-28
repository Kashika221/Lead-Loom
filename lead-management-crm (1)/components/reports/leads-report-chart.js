"use client"

import { useEffect, useRef } from "react"

export function LeadsReportChart() {
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
      { label: "Website", data: [12, 19, 15, 22, 25, 30], color: "#0d9488" },
      { label: "Referral", data: [8, 12, 10, 15, 18, 20], color: "#67e8f9" },
      { label: "Social Media", data: [5, 8, 12, 10, 15, 18], color: "#4ade80" },
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
