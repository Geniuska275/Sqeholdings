

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent } from "./ui/card"

export default function HistogramChart({ data }) {
  const { histogram} = data

  // Determine if we have categorized data
  const hasCategories = histogram.some((item) => item.category !== undefined)

  // Group data by bin for multi-category histograms
  const groupedData = hasCategories
    ? histogram.reduce((acc, item) => {
        const existingBin = acc.find((b) => b.bin === item.bin)
        if (existingBin) {
          existingBin[item.category] = item.frequency
        } else {
          const newBin = { bin: item.bin }
          newBin[item.category] = item.frequency
          acc.push(newBin)
        }
        return acc
      }, [])
    : histogram

  // Get unique categories if we have categorized data
  const categories = hasCategories ? Array.from(new Set(histogram.map((item) => item.category))) : []

  // Generate colors for categories
  const colors = ["#141d38", "#141d38", "#141d38", "#141d38", "#141d38"]

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={hasCategories ? groupedData : histogram} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bin" />
          <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />

          {hasCategories ? (
            categories.map((category, index) => (
              <Bar
                key={category }
                dataKey={category}
                fill={colors[index % colors.length]}
                name={category}
              />
            ))
          ) : (
            <Bar dataKey="frequency" fill="#141d38" name="Frequency" />
          )}
        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}
