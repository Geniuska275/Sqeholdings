

import { useState } from "react"
import HistogramChart from "./histogram-chart.jsx"
import QualitativeAnalysis from "./qualitative-analysis"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { generateHistogramData, generateRandomHistogramData } from "../lib/sample-data"
import EntropyExplainer from "./entropy-explainer.jsx"
import { Button } from "../components/ui/button"

export default function Dashboard() {
  const [dataSet, setDataSet] = useState("sales")
  const [timeRange, setTimeRange] = useState("month")
  const [randomData, setRandomData] = useState(null)
  const [isRandomMode, setIsRandomMode] = useState(false)

  const handleGenerateRandom = () => {
    const newRandomData = generateRandomHistogramData()
    setRandomData(newRandomData)
    setIsRandomMode(true)
  }

  const handleBackToNormal = () => {
    setIsRandomMode(false)
    setRandomData(null)
  }

  // Generate different data based on selected options or use random data
  const histogramData = isRandomMode ? randomData : generateHistogramData(dataSet, timeRange)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Qualitative Analysis</h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          {!isRandomMode ? (
            <>
              <Select value={dataSet} onValueChange={setDataSet}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select dataset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Data</SelectItem>
                  <SelectItem value="users">User Metrics</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                </SelectContent>
              </Select>

              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </>
          ) : (
            <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
              <span className="text-sm font-medium">Random Data Mode</span>
            </div>
          )}

          <Button
            onClick={isRandomMode ? handleBackToNormal : handleGenerateRandom}
            variant={isRandomMode ? "outline" : "default"}
            className="whitespace-nowrap"
          >
            {isRandomMode ? "Back to Datasets" : "Generate Random Data"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <EntropyExplainer entropyValue={histogramData.metrics.entropy} />
        <Card>      
          <CardContent className="pt-2">
            <div className="h-[400px] w-full">
              <HistogramChart data={histogramData} />
            </div>
          </CardContent>
        </Card>

        
        

      </div>
    </div>
  )
}
