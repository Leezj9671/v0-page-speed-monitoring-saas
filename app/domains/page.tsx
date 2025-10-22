import { DomainsHeader } from "@/components/domains-header"
import { DomainsToolbar } from "@/components/domains-toolbar"
import { DomainsList } from "@/components/domains-list"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DomainsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1">
        <div className="border-b bg-card">
          <DomainsHeader />
        </div>

        <div className="p-6 lg:p-8">
          <DomainsToolbar />
          <DomainsList />
        </div>
      </main>
    </div>
  )
}
