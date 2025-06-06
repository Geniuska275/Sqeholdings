import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"


export default function EntropyExplainer({ entropyValue }) {
  // Interpret the entropy value
  const getEntropyInterpretation = (value) => {
    if (value < 1.0) {
      return {
        level: "Low",
        description: "The data shows high predictability with limited variation.",
        implications: "This suggests a concentrated or uniform distribution with little diversity.",
        color: "#141d38 dark:#141d38",
      }
    } else if (value < 2.5) {
      return {
        level: "Moderate",
        description: "The data shows a balanced mix of predictability and variation.",
        implications: "This suggests a distribution with some concentration but also meaningful diversity.",
        color: "#141d38",
      }
    } else {
      return {
        level: "High",
        description: "The data shows significant unpredictability and variation.",
        implications: "This suggests a diverse distribution with substantial uncertainty or complexity.",
        color: "#141d38",
      }
    }
  }

  const interpretation = getEntropyInterpretation(entropyValue)

  return (
    <Card>
      <CardHeader>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-[#141d38]"> Entropy:</span>
            <span className={`text-lg font-bold ${interpretation.color}`}>{entropyValue.toFixed(2)}</span>
          </div>

          <div className="w-full bg-muted rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                entropyValue < 1.0 ? "bg-blue-600" : entropyValue < 2.5 ? "bg-green-600" : "bg-amber-600"
              }`}
              style={{ width: `${Math.min(100, (entropyValue / 5) * 100)}%` }}
            ></div>
          </div>

        
          <div className="mt-4 space-y-2">
            <p className="font-medium">
              Interpretation: <span className={interpretation.color}>{interpretation.level}</span>
            </p>
          
          </div>

        </div>
      </CardContent>
    </Card>
  )
}
