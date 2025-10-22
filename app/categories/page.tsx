import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { CategoryHeader } from "@/components/category-header"
import { CategoryGrid } from "@/components/category-grid"
import { CategoryInsights } from "@/components/category-insights"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8">
        <CategoryHeader />

        <div className="mt-6 space-y-6">
          <CategoryGrid />
          <CategoryInsights />
        </div>
      </main>
    </div>
  )
}
