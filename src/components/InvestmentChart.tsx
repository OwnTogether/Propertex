import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Mock Data: Simulating investment growth over 7 days
const data = [
  { date: "Day 1", value: 100 },
  { date: "Day 2", value: 105 },
  { date: "Day 3", value: 102 },
  { date: "Day 4", value: 110 },
  { date: "Day 5", value: 115 },
  { date: "Day 6", value: 120 },
  { date: "Day 7", value: 125 }
]

export function InvestmentChart() {
  return (
    <Card className="bg-background text-foreground p-4">
      <CardHeader>
        <CardTitle>Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="date" className="text-sm" />
            <YAxis className="text-sm" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
