import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockHoldings = [
  { name: "Apple (AAPL)", value: "$15,000", allocation: "30%", trend: "up" },
  { name: "Bitcoin (BTC)", value: "$10,000", allocation: "20%", trend: "down" },
  { name: "Tesla (TSLA)", value: "$8,000", allocation: "16%", trend: "up" }
]

export function InvestmentHoldings() {
  return (
    <Card className="p-4 bg-background text-foreground">
      <CardHeader>
        <CardTitle>Investment Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        {mockHoldings.map((holding, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-border">
            <span>{holding.name}</span>
            <span className="text-sm">{holding.value} ({holding.allocation})</span>
            <span className={holding.trend === "up" ? "text-green-500" : "text-red-500"}>
              {holding.trend === "up" ? "▲" : "▼"}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
