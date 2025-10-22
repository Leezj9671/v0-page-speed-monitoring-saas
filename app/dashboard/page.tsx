import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { DomainStatusGrid } from "@/components/domain-status-grid"
import { TrendsChart } from "@/components/trends-chart"
import { PerformanceLists } from "@/components/performance-lists"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8">
        <DashboardHeader />

        <div className="mt-6 space-y-6">
          <DashboardStats />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <DomainStatusGrid />
              <TrendsChart />
            </div>

            <div className="space-y-6">
              <PerformanceLists />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
