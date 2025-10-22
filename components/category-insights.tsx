import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

const insights = [
  {
    type: "success",
    title: "High Categorization Rate",
    description: "94% of pages are automatically categorized with high confidence",
    icon: CheckCircle,
  },
  {
    type: "warning",
    title: "Review Uncategorized Pages",
    description: "67 pages in 'Other' category may benefit from custom rules",
    icon: AlertCircle,
  },
  {
    type: "info",
    title: "Category Performance",
    description: "Mainpage and Custom categories show the highest average scores",
    icon: Info,
  },
]

export function CategoryInsights() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Category Insights</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((insight, i) => {
          const Icon = insight.icon
          return (
            <Card key={i} className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-lg p-2 ${
                    insight.type === "success"
                      ? "bg-status-excellent/10 text-status-excellent"
                      : insight.type === "warning"
                        ? "bg-status-moderate/10 text-status-moderate"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
