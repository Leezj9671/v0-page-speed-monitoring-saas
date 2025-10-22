import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react"

const domains = [
  { name: "company.com", status: "Excellent", score: 92, change: "+5", trend: "up", lastCheck: "2 min ago" },
  { name: "shop.example.com", status: "Moderate", score: 67, change: "-12", trend: "down", lastCheck: "1 min ago" },
  { name: "blog.company.com", status: "Good", score: 85, change: "+8", trend: "up", lastCheck: "3 min ago" },
  { name: "api.testing.com", status: "Poor", score: 34, change: "-23", trend: "down", lastCheck: "5 min ago" },
  { name: "docs.platform.io", status: "Excellent", score: 94, change: "0", trend: "neutral", lastCheck: "4 min ago" },
  { name: "support.helpdesk.com", status: "Good", score: 76, change: "+2", trend: "up", lastCheck: "6 min ago" },
]

const statusColors = {
  Excellent: "bg-status-excellent/10 text-status-excellent border-status-excellent/20",
  Good: "bg-status-good/10 text-status-good border-status-good/20",
  Moderate: "bg-status-moderate/10 text-status-moderate border-status-moderate/20",
  Poor: "bg-status-poor/10 text-status-poor border-status-poor/20",
}

export function DomainStatusGrid() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Domain Status</CardTitle>
        <Button variant="ghost" size="sm">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full ${
                    domain.status === "Excellent"
                      ? "bg-status-excellent"
                      : domain.status === "Good"
                        ? "bg-status-good"
                        : domain.status === "Moderate"
                          ? "bg-status-moderate"
                          : "bg-status-poor"
                  }`}
                />
                <div>
                  <div className="font-medium">{domain.name}</div>
                  <div className="text-xs text-muted-foreground">Last check: {domain.lastCheck}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-bold">{domain.score}</div>
                  <div className="flex items-center gap-1 text-xs">
                    {domain.trend === "up" && <TrendingUp className="h-3 w-3 text-status-excellent" />}
                    {domain.trend === "down" && <TrendingDown className="h-3 w-3 text-status-poor" />}
                    {domain.trend === "neutral" && <Minus className="h-3 w-3 text-muted-foreground" />}
                    <span
                      className={
                        domain.trend === "up"
                          ? "text-status-excellent"
                          : domain.trend === "down"
                            ? "text-status-poor"
                            : "text-muted-foreground"
                      }
                    >
                      {domain.change} points
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
