import { DomainDetailHeader } from "@/components/domain-detail-header"
import { CategoryCards } from "@/components/category-cards"
import { PerformanceCharts } from "@/components/performance-charts"
import { PagePerformanceTable } from "@/components/page-performance-table"
import { DomainDetailSidebar } from "@/components/domain-detail-sidebar"

export default function DomainDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DomainDetailSidebar />

      <main className="flex-1">
        <div className="border-b bg-card">
          <DomainDetailHeader domain={params.slug} />
        </div>

        <div className="p-6 lg:p-8 space-y-6">
          <CategoryCards />
          <PerformanceCharts />
          <PagePerformanceTable />
        </div>
      </main>
    </div>
  )
}
