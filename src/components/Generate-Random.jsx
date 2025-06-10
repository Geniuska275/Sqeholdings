"use client"

import { useState } from "react"
import { Copy, Dice6, Check } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Cards } from "./ui/cards"

export default function GenerateRandom() {
  const [randomNumber, setRandomNumber] = useState(null)
  const [copied, setCopied] = useState(false)

  const generateRandomNumber = () => {
    const min = 100000 // Smallest 6-digit number
    const max = 999999 // Largest 6-digit number
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    setRandomNumber(random)
    setCopied(false)
  }

  const copyToClipboard = async () => {
    if (randomNumber !== null) {
      try {
        await navigator.clipboard.writeText(randomNumber.toString())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }
  }

  return (
    <div className="min-h-screen mb-[70px]  flex items-center justify-center p-4 ">
      <Cards className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Dice6 className="h-6 w-6" />
            Random Number Generator
          </CardTitle>
         
        </CardHeader>
        <CardContent className="space-y-6">
   
            
          <Button onClick={generateRandomNumber} className="w-[300px] bg-black text-white" size="lg">
            <Dice6 className="mr-2 h-4 w-4" />
            Generate Random Number
          </Button>

          {randomNumber !== null && (
            <div className="text-center space-y-4">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                <p className="text-sm font-medium mb-2">Generated Number</p>
                <p className="text-4xl font-bold">{randomNumber}</p>
              </div>

              <Button onClick={copyToClipboard} variant="outline" className="w-[350px]" disabled={copied}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Cards>
    </div>
  )
}
