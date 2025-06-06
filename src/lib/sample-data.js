// Generate sample histogram data
export function generateHistogramData(dataSet, timeRange) {
  // Base metrics
  let metrics = {
    mean: 0,
    median: 0,
    mode: 0,
    stdDev: 0,
    entropy: 0, // Added entropy metric
  }

  let histogram = []

  // Generate different data based on dataset and time range
  switch (dataSet) {
    case "sales":
      metrics = {
        mean: 42.5,
        median: 40.0,
        mode: 38.0,
        stdDev: 12.3,
        entropy: 3.12, // Added entropy value
      }

      if (timeRange === "month") {
        histogram = [
          { bin: "0-10", frequency: 5 },
          { bin: "11-20", frequency: 12 },
          { bin: "21-30", frequency: 18 },
          { bin: "31-40", frequency: 25 },
          { bin: "41-50", frequency: 20 },
          { bin: "51-60", frequency: 15 },
          { bin: "61-70", frequency: 8 },
          { bin: "71-80", frequency: 4 },
          { bin: "81-90", frequency: 2 },
          { bin: "91-100", frequency: 1 },
        ]
      } else if (timeRange === "quarter") {
        histogram = [
          { bin: "Jan",  frequency: 42 },
          { bin: "Jan",  frequency: 28 },
          { bin: "Feb",  frequency: 48 },
          { bin: "Feb",  frequency: 32 },
          { bin: "Mar",  frequency: 55 },
          { bin: "Mar",  frequency: 35 },
        ]
        metrics.entropy = 2.58 // Different entropy for categorized data
      } else {
        histogram = [
          { bin: "Week 1", frequency: 35 },
          { bin: "Week 2", frequency: 42 },
          { bin: "Week 3", frequency: 38 },
          { bin: "Week 4", frequency: 45 },
        ]
        metrics.entropy = 1.99 // Different entropy for weekly data
      }
      break

    case "users":
      metrics = {
        mean: 28.7,
        median: 27.0,
        mode: 25.0,
        stdDev: 8.4,
        entropy: 2.45, // Added entropy value
      }

      if (timeRange === "month") {
        histogram = [
          { bin: "18-24", frequency: 28 },
          { bin: "25-34", frequency: 45 },
          { bin: "35-44", frequency: 32 },
          { bin: "45-54", frequency: 18 },
          { bin: "55-64", frequency: 12 },
          { bin: "65+", frequency: 5 },
        ]
      } else {
        histogram = [
          { bin: "Q1", category: "New", frequency: 120 },
          { bin: "Q1", category: "Returning", frequency: 85 },
          { bin: "Q2", category: "New", frequency: 145 },
          { bin: "Q2", category: "Returning", frequency: 95 },
          { bin: "Q3", category: "New", frequency: 160 },
          { bin: "Q3", category: "Returning", frequency: 110 },
          { bin: "Q4", category: "New", frequency: 190 },
          { bin: "Q4", category: "Returning", frequency: 130 },
        ]
        metrics.entropy = 2.98 // Different entropy for quarterly data
      }
      break

    case "performance":
      metrics = {
        mean: 78.3,
        median: 82.0,
        mode: 85.0,
        stdDev: 14.2,
        entropy: 3.05, // Added entropy value
      }

      histogram = [
        { bin: "0-10", frequency: 2 },
        { bin: "11-20", frequency: 3 },
        { bin: "21-30", frequency: 5 },
        { bin: "31-40", frequency: 7 },
        { bin: "41-50", frequency: 10 },
        { bin: "51-60", frequency: 12 },
        { bin: "61-70", frequency: 18 },
        { bin: "71-80", frequency: 25 },
        { bin: "81-90", frequency: 30 },
        { bin: "91-100", frequency: 15 },
      ]
      break

    default:
      histogram = [
        { bin: "Category 1", frequency: 10 },
        { bin: "Category 2", frequency: 20 },
        { bin: "Category 3", frequency: 15 },
        { bin: "Category 4", frequency: 25 },
        { bin: "Category 5", frequency: 18 },
      ]
      metrics.entropy = 2.25 // Default entropy
  }

  // Calculate entropy if not already set (for real data scenarios)
  if (metrics.entropy === 0) {
    metrics.entropy = calculateEntropy(histogram)
  }

  return { histogram, metrics }
}

// Function to calculate Shannon entropy from histogram data
function calculateEntropy(histogram) {
  // Get total frequency
  const totalFrequency = histogram.reduce((sum, item) => sum + item.frequency, 0)

  // Calculate entropy using Shannon's formula: -sum(p_i * log2(p_i))
  let entropy = 0
  for (const item of histogram) {
    const probability = item.frequency / totalFrequency
    if (probability > 0) {
      entropy -= probability * Math.log2(probability)
    }
  }

  // Round to 2 decimal places
  return Number.parseFloat(entropy.toFixed(2))
}

// Sample qualitative analysis data
export const qualitativeData = {
  sales: {
    summary: [
      {
        id: "1",
        title: "Overall Performance",
        description:
          "Sales have increased by 15% compared to the previous period, with online channels showing the strongest growth.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Distribution Analysis",
        description:
          "The distribution shows a right-skewed pattern, indicating a concentration of sales in the lower to mid ranges with some high-value outliers.",
        trend: "neutral",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Seasonal Patterns",
        description:
          "Clear seasonal patterns are visible with peaks occurring during promotional periods and holidays.",
        trend: "neutral",
        confidence: "high",
      },
      {
        id: "4",
        title: "Entropy Analysis",
        description:
          "The entropy value indicates moderate unpredictability in the sales distribution, suggesting diverse customer purchasing patterns.",
        trend: "neutral",
        confidence: "medium",
      },
    ],
    insights: [
      {
        id: "1",
        title: "Online vs In-store Gap",
        description:
          "The gap between online and in-store sales is widening, with online now representing 65% of total revenue.",
        trend: "up",
        impact: "neutral",
        confidence: "high",
      },
      {
        id: "2",
        title: "Price Point Analysis",
        description:
          "Mid-range products ($30-50) show the highest volume, but premium products ($80+) contribute more to overall revenue.",
        trend: "neutral",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Customer Segment Shift",
        description:
          "There is a noticeable shift toward younger demographics (25-34) making more frequent, smaller purchases.",
        trend: "up",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Entropy Implications",
        description:
          "Higher entropy in the online sales channel suggests more diverse purchasing patterns compared to in-store sales.",
        trend: "up",
        impact: "neutral",
        confidence: "medium",
      },
    ],
    recommendations: [
      {
        id: "1",
        title: "Optimize Online Experience",
        description:
          "Invest in improving the mobile shopping experience to capitalize on the growing online sales trend.",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Apparel Strategy Revision",
        description: "Conduct a comprehensive review of the apparel category and consider refreshing the product line.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Premium Product Focus",
        description: "Develop marketing campaigns specifically targeting premium product lines to maximize revenue.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Leverage Distribution Insights",
        description:
          "Use entropy analysis to identify product categories with predictable vs. unpredictable sales patterns for inventory planning.",
        impact: "positive",
        confidence: "high",
      },
    ],
  },
  users: {
    summary: [
      {
        id: "1",
        title: "User Growth Trends",
        description: "User base has grown by 22% year-over-year, with mobile users accounting for 78% of new sign-ups.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Engagement Metrics",
        description:
          "Average session duration has increased to 8.5 minutes, up from 7.2 minutes in the previous period.",
        trend: "up",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Retention Analysis",
        description: "The 30-day retention rate stands at 42%, showing a slight decrease from the previous 45%.",
        trend: "down",
        impact: "negative",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Entropy Assessment",
        description:
          "User behavior entropy is moderate, indicating some predictability in usage patterns while maintaining diversity.",
        trend: "neutral",
        confidence: "medium",
      },
    ],
    insights: [
      {
        id: "1",
        title: "Platform Usage Patterns",
        description:
          "iOS users spend 15% more time on the platform and have a 23% higher conversion rate than Android users.",
        trend: "neutral",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Feature Adoption",
        description:
          "New messaging features have seen rapid adoption with 68% of active users engaging within the first week.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "3",
        title: "Churn Risk Factors",
        description: "Users who don't complete profile setup within 3 days have a 72% higher likelihood of churning.",
        trend: "neutral",
        impact: "negative",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Entropy Variations",
        description:
          "Lower entropy in returning user behavior suggests more predictable patterns compared to new users.",
        trend: "down",
        impact: "positive",
        confidence: "medium",
      },
    ],
    recommendations: [
      {
        id: "1",
        title: "Onboarding Optimization",
        description: "Redesign the onboarding flow to encourage profile completion within the first session.",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Android Experience",
        description: "Prioritize improvements to the Android app experience to close the performance gap with iOS.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Retention Campaigns",
        description: "Implement targeted re-engagement campaigns for users showing early signs of disengagement.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Predictability Analysis",
        description:
          "Use entropy metrics to identify user segments with highly predictable behavior for targeted feature development.",
        impact: "positive",
        confidence: "high",
      },
    ],
  },
  performance: {
    summary: [
      {
        id: "1",
        title: "System Performance",
        description: "Overall system performance has improved by 18% following the recent infrastructure upgrades.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Response Time Analysis",
        description: "Average API response time has decreased from 320ms to 180ms, a 44% improvement.",
        trend: "down",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "3",
        title: "Error Rate Trends",
        description: "System-wide error rate is at 0.8%, down from 1.2% in the previous measurement period.",
        trend: "down",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Entropy Patterns",
        description: "Performance entropy has decreased, indicating more consistent and predictable system behavior.",
        trend: "down",
        impact: "positive",
        confidence: "medium",
      },
    ],
    insights: [
      {
        id: "1",
        title: "Peak Load Handling",
        description: "The system now handles peak loads 35% more efficiently with reduced instance scaling events.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Database Performance",
        description: "Query optimization has reduced database load by 28% while improving read operation speed.",
        trend: "up",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Caching Effectiveness",
        description: "The new caching layer shows a 75% hit rate, significantly reducing backend requests.",
        trend: "up",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "4",
        title: "Entropy Reduction",
        description:
          "Lower entropy in performance metrics indicates more predictable system behavior after optimizations.",
        trend: "down",
        impact: "positive",
        confidence: "high",
      },
    ],
    recommendations: [
      {
        id: "1",
        title: "Endpoint Optimization",
        description: "Prioritize optimization of the three identified slow-performing API endpoints.",
        impact: "positive",
        confidence: "high",
      },
      {
        id: "2",
        title: "Caching Strategy Expansion",
        description: "Extend the successful caching strategy to cover user profile and preference data.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "3",
        title: "Auto-scaling Refinement",
        description: "Fine-tune auto-scaling parameters to be more proactive based on traffic pattern analysis.",
        impact: "positive",
        confidence: "medium",
      },
      {
        id: "4",
        title: "Entropy Monitoring",
        description:
          "Implement entropy monitoring as a key performance indicator to detect early signs of system instability.",
        impact: "positive",
        confidence: "high",
      },
    ],
  },
}

// Generate truly random histogram data
export function generateRandomHistogramData() {
  // Generate random number of bins (5-12)
  const numBins = Math.floor(Math.random() * 8) + 5

  // Generate random frequencies
  const histogram = []
  const frequencies= []

  for (let i = 0; i < numBins; i++) {
    const frequency = Math.floor(Math.random() * 50) + 1 // 1-50
    const bin = `Bin ${i + 1}`
    histogram.push({ bin, frequency })
    frequencies.push(frequency)
  }

  // Calculate real statistics from the random data
  const totalFreq = frequencies.reduce((sum, freq) => sum + freq, 0)
  const mean = frequencies.reduce((sum, freq, index) => sum + freq * (index + 1), 0) / totalFreq

  // Calculate median
  const sortedFreqs = [...frequencies].sort((a, b) => a - b)
  const median =
    sortedFreqs.length % 2 === 0
      ? (sortedFreqs[sortedFreqs.length / 2 - 1] + sortedFreqs[sortedFreqs.length / 2]) / 2
      : sortedFreqs[Math.floor(sortedFreqs.length / 2)]

  // Find mode (most frequent frequency)
  const freqCount = frequencies.reduce(
    (acc, freq) => {
      acc[freq] = (acc[freq] || 0) + 1
      return acc
    },
    {},
  )
  const mode = Number(Object.keys(freqCount).reduce((a, b) => (freqCount[Number(a)] > freqCount[Number(b)] ? a : b)))

  // Calculate standard deviation
  const variance = frequencies.reduce((sum, freq) => sum + Math.pow(freq - mean, 2), 0) / frequencies.length
  const stdDev = Math.sqrt(variance)

  // Calculate entropy
  const entropy = calculateEntropy(histogram)

  const metrics = {
    mean: Number(mean.toFixed(2)),
    median: Number(median.toFixed(2)),
    mode: Number(mode.toFixed(2)),
    stdDev: Number(stdDev.toFixed(2)),
    entropy: entropy,
  }

  return { histogram, metrics }
}
