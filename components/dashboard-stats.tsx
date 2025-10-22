import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { LayoutGrid, FileText, Target, AlertCircle } from "lucide-react"

const stats = [
  {
    label: "Total Domains",
    value: "247",
    change: "+12 this month",
    trend: "up",
    icon: LayoutGrid,
  },
  {
    label: "Total Pages",
    value: "1,432",
    change: "+89 this week",
    trend: "up",
    icon: FileText,
  },
  {
    label: "Average Score",
    value: "78",
    change: "+3.2 vs last week",
    trend: "up",
    icon: Target,
  },
  {
    label: "Active Alerts",
    value: "8",
    change: "3 critical, 5 warnings",
    trend: "down",
    icon: AlertCircle,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <stat.icon className="h-4 w-4" />
                {stat.label}
              </div>
              {stat.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-status-excellent" />
              ) : (
                <TrendingDown className="h-4 w-4 text-status-poor" />
              )}
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
