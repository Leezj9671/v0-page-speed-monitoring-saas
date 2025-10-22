"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Globe, FolderTree, Settings, AlertCircle, Activity } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "All Domains", href: "/domains", icon: Globe },
  { name: "Categories", href: "/categories", icon: FolderTree },
  { name: "Settings", href: "/settings", icon: Settings },
]

const alerts = [
  { text: "shop.example.com - Speed score dropped to 34", severity: "critical" },
  { text: "api.testing.com - Server response time >5s", severity: "critical" },
]

const recentActivity = [
  { text: "blog.company.com", detail: "Performance improved by 15%", time: "2 minutes ago" },
  { text: "New domain added", detail: "store.newsite.com", time: "15 minutes ago" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card p-6 hidden lg:block">
      <nav className="space-y-1">
        <div className="mb-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</div>
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-8">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Performance Alerts
        </div>
        <div className="space-y-2">
          {alerts.map((alert, i) => (
            <div key={i} className="rounded-lg border border-status-poor/20 bg-status-poor/5 p-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-status-poor mt-0.5 flex-shrink-0" />
                <p className="text-xs text-foreground">{alert.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent Activity</div>
        <div className="space-y-3">
          {recentActivity.map((activity, i) => (
            <div key={i} className="flex items-start gap-2">
              <Activity className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium">{activity.text}</p>
                <p className="text-xs text-muted-foreground">{activity.detail}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
