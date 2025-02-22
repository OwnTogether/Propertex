import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PortfolioOverview() {
  return (
    <Card className="p-4 bg-background text-foreground">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent className="text-lg font-semibold">
        <p>Total Value: $50,000</p>
        <p className="text-green-500">+7.5% Today</p>
      </CardContent>
    </Card>
  )
}
