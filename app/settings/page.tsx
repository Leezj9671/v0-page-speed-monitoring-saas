import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SettingsHeader } from "@/components/settings-header"
import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8">
        <SettingsHeader />

        <div className="mt-6">
          <SettingsTabs />
        </div>
      </main>
    </div>
  )
}
