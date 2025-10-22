import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb } from "lucide-react"

const topPerformers = [
  { name: "docs.platform.io", score: 94 },
  { name: "company.com", score: 92 },
  { name: "blog.company.com", score: 85 },
]

const needsAttention = [
  { name: "api.testing.com", score: 34 },
  { name: "shop.example.com", score: 67 },
]

export function PerformanceLists() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topPerformers.map((domain) => (
            <div key={domain.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-status-excellent" />
                <span className="text-sm">{domain.name}</span>
              </div>
              <Badge
                variant="outline"
                className="bg-status-excellent/10 text-status-excellent border-status-excellent/20"
              >
                {domain.score}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Needs Attention</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {needsAttention.map((domain) => (
            <div key={domain.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${domain.score < 50 ? "bg-status-poor" : "bg-status-moderate"}`}
                />
                <span className="text-sm">{domain.name}</span>
              </div>
              <Badge
                variant="outline"
                className={
                  domain.score < 50
                    ? "bg-status-poor/10 text-status-poor border-status-poor/20"
                    : "bg-status-moderate/10 text-status-moderate border-status-moderate/20"
                }
              >
                {domain.score}
              </Badge>
            </div>
          ))}

          <Alert className="mt-4 bg-status-moderate/5 border-status-moderate/20">
            <Lightbulb className="h-4 w-4 text-status-moderate" />
            <AlertDescription className="text-xs">
              Recommendation: Focus on optimizing images and reducing server response times for these domains.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
