import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  { type: "Buy", asset: "Tesla (TSLA)", amount: "$3,000", date: "Feb 20" },
  { type: "Sell", asset: "Bitcoin (BTC)", amount: "$5,000", date: "Feb 19" }
]

export function RecentTransactions() {
  return (
    <Card className="p-4 bg-background text-foreground">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.map((tx, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-border">
            <span className={tx.type === "Buy" ? "text-green-500" : "text-red-500"}>
              {tx.type}
            </span>
            <span>{tx.asset}</span>
            <span>{tx.amount}</span>
            <span>{tx.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
