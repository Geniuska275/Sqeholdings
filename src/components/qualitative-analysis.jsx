import { Card, CardContent } from "../components/ui/card"
import { Minus, AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from "lucide-react"


export default function QualitativeAnalysis({ data, metrics, type }) {
  if (!data || data.length === 0) {
    // Show different message for random data mode
    const isRandomData = type === "summary" && !data

    return (
      <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-lg font-medium">
            {isRandomData ? "Random Data Generated" : "No analysis available"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {isRandomData
              ? "This is randomly generated data. Qualitative analysis is not available for random datasets."
              : "There is no qualitative analysis data for the selected parameters."}
          </p>
          {isRandomData && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg max-w-md mx-auto">
              <h4 className="font-medium mb-2">Statistical Summary:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Mean: {metrics.mean}</div>
                <div>Median: {metrics.median}</div>
                <div>Mode: {metrics.mode}</div>
                <div>Std Dev: {metrics.stdDev}</div>
                <div className="col-span-2">Entropy: {metrics.entropy}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-5 w-5 text-green-500" />
      case "down":
        return <TrendingDown className="h-5 w-5 text-red-500" />
      default:
        return <Minus className="h-5 w-5 text-gray-500" />
    }
  }

  const getImpactBadge = (impact) => {
    switch (impact) {
      case "positive":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Positive
          </span>
        )
      case "negative":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Negative
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Neutral
          </span>
        )
    }
  }

  const getConfidenceIndicator = (confidence) => {
    switch (confidence) {
      case "high":
        return (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" /> High confidence
          </div>
        )
      case "medium":
        return (
          <div className="flex items-center gap-1 text-yellow-600">
            <CheckCircle className="h-4 w-4" /> Medium confidence
          </div>
        )
      case "low":
        return (
          <div className="flex items-center gap-1 text-red-600">
            <AlertTriangle className="h-4 w-4" /> Low confidence
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {getTrendIcon(item.trend)}
            </div>

            <p className="mt-2 text-muted-foreground">{item.description}</p>

            <div className="mt-4 flex items-center justify-between">
              {item.impact && getImpactBadge(item.impact)}
              {item.confidence && getConfidenceIndicator(item.confidence)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
