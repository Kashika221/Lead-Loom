"use client"

import { useEffect, useRef } from "react"

export function LeadsChart({ data }) {
  const chartRef = useRef(null)

  // Sample data if none is provided
  const sampleData = [
    { _id: "2023-04-01", count: 5 },
    { _id: "2023-04-02", count: 8 },
    { _id: "2023-04-03", count: 12 },
    { _id: "2023-04-04", count: 10 },
    { _id: "2023-04-05", count: 15 },
    { _id: "2023-04-06", count: 18 },
    { _id: "2023-04-07", count: 20 },
    { _id: "2023-04-08", count: 25 },
    { _id: "2023-04-09", count: 22 },
    { _id: "2023-04-10", count: 30 },
  ]

  const chartData = data || sampleData

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

    // Find max value for scaling
    const maxCount = Math.max(...chartData.map((item) => item.count))

    // Draw bars
    const barWidth = chartRef.current.width / chartData.length - 10

    chartData.forEach((item, index) => {
      const barHeight = (item.count / maxCount) * (chartRef.current.height - 40)
      const x = index * (barWidth + 10) + 5
      const y = chartRef.current.height - barHeight - 20

      ctx.fillStyle = "#0d9488"
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#333"
      ctx.font = "10px Arial"
      ctx.fillText(item._id.slice(-5), x, chartRef.current.height - 5)
    })
  }, [chartData])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef} width="800" height="300" />
    </div>
  )
}
