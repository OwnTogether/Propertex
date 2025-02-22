import { PortfolioOverview } from "@/components/PotfolioOverview";
import { InvestmentHoldings } from "@/components/InvestmentHoldings"
import { RecentTransactions } from "@/components/RecentTransactions"
import { InvestmentChart } from "@/components/InvestmentChart"


export default function Dashboard() {
  return (
    <div className="flex flex-row space-x-6 w-full">
      <div className="p-6 flex flex-col w-fit space-y-6">
        <PortfolioOverview />
        <InvestmentHoldings />
        <RecentTransactions />
      </div>
      <div className="w-full flex-grow">
        <InvestmentChart />
      </div>
    </div>
  )
}
