"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronRight, Settings, RefreshCw, Eye, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

const domains = [
  {
    id: 1,
    name: "company.com",
    description: "Primary business site",
    status: "Excellent",
    score: 92,
    pages: 1010,
    lastScan: "2 minutes ago",
    trend: "+5",
    categories: [
      { name: "Mainpage", score: 95, pages: 1, change: "+2", color: "bg-primary" },
      { name: "Collections", score: 87, pages: 24, change: "+5", color: "bg-purple-500" },
      { name: "Products", score: 91, pages: 856, change: "+5", color: "bg-pink-500" },
      { name: "Blogs", score: 74, pages: 47, change: "-3", color: "bg-amber-500" },
      { name: "Custom", score: 96, pages: 8, change: "+1", color: "bg-emerald-500" },
      { name: "Other", score: 83, pages: 74, change: "0", color: "bg-slate-500" },
    ],
  },
  {
    id: 2,
    name: "shop.example.com",
    description: "E-commerce store",
    status: "Moderate",
    score: 67,
    pages: 2346,
    lastScan: "1 minute ago",
    trend: "-12",
    categories: [],
  },
  {
    id: 3,
    name: "blog.company.com",
    description: "Company blog",
    status: "Good",
    score: 85,
    pages: 189,
    lastScan: "3 minutes ago",
    trend: "+8",
    categories: [],
  },
  {
    id: 4,
    name: "api.testing.com",
    description: "API endpoints",
    status: "Poor",
    score: 34,
    pages: 45,
    lastScan: "5 minutes ago",
    trend: "-23",
    categories: [],
  },
  {
    id: 5,
    name: "docs.platform.io",
    description: "Documentation site",
    status: "Excellent",
    score: 94,
    pages: 312,
    lastScan: "4 minutes ago",
    trend: "0",
    categories: [],
  },
]

const statusColors = {
  Excellent: "bg-status-excellent/10 text-status-excellent border-status-excellent/20",
  Good: "bg-status-good/10 text-status-good border-status-good/20",
  Moderate: "bg-status-moderate/10 text-status-moderate border-status-moderate/20",
  Poor: "bg-status-poor/10 text-status-poor border-status-poor/20",
}

export function DomainsList() {
  const [expandedDomain, setExpandedDomain] = useState<number | null>(1)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">All Domains (247) - Enhanced Category View</h3>
      </div>

      {domains.map((domain) => (
        <Card key={domain.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-4 p-4 hover:bg-accent/50 transition-colors">
              <Checkbox />

              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
              >
                {expandedDomain === domain.id ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>

              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{domain.name.charAt(0).toUpperCase()}</span>
              </div>

              <div className="flex-1 min-w-0">
                <Link href={`/domain/${domain.name}`} className="font-medium hover:underline">
                  {domain.name}
                </Link>
                <p className="text-sm text-muted-foreground">{domain.description}</p>
              </div>

              <Badge variant="outline" className={statusColors[domain.status as keyof typeof statusColors]}>
                {domain.status}
              </Badge>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">{domain.pages} pages</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">{domain.lastScan}</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">{domain.score}</div>
                <div className="flex items-center gap-1">
                  {domain.trend.startsWith("+") ? (
                    <TrendingUp className="h-4 w-4 text-status-excellent" />
                  ) : domain.trend.startsWith("-") ? (
                    <TrendingDown className="h-4 w-4 text-status-poor" />
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {expandedDomain === domain.id && domain.categories.length > 0 && (
              <div className="border-t bg-muted/30 p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {domain.categories.map((category) => (
                    <div
                      key={category.name}
                      className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${category.color}`} />
                          <span className="font-medium text-sm">{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold">
                          {category.score}
                        </Badge>
                      </div>

                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div>{category.pages} pages</div>
                        <div className="flex items-center gap-1">
                          {category.change.startsWith("+") ? (
                            <>
                              <TrendingUp className="h-3 w-3 text-status-excellent" />
                              <span className="text-status-excellent">{category.change} points</span>
                            </>
                          ) : category.change.startsWith("-") ? (
                            <>
                              <TrendingDown className="h-3 w-3 text-status-poor" />
                              <span className="text-status-poor">{category.change} points</span>
                            </>
                          ) : (
                            <span>No change</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <Button variant="link" size="sm" className="h-auto p-0">
                    Rescan All Categories
                  </Button>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    Update Thresholds
                  </Button>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    Export Category Data
                  </Button>
                  <span className="ml-auto">Category scan completed 2 minutes ago</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="flex items-center justify-between pt-4">
        <div className="text-sm text-muted-foreground">Showing 1-5 of 247 domains</div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Items per page:</span>
          <Button variant="outline" size="sm">
            5
          </Button>

          <div className="flex items-center gap-1 ml-4">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">
              50
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
