"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Settings, TrendingUp, TrendingDown, Minus } from "lucide-react"

const categories = [
  {
    name: "Mainpage",
    color: "bg-blue-500",
    count: 247,
    avgScore: 92,
    trend: "up",
    change: 3,
    rules: ["URL matches: /", "URL matches: /index", "URL matches: /home"],
    domains: 247,
  },
  {
    name: "Collections",
    color: "bg-purple-500",
    count: 156,
    avgScore: 88,
    trend: "up",
    change: 2,
    rules: ["URL contains: /collections/", "URL contains: /category/", "Sitemap: collection"],
    domains: 89,
  },
  {
    name: "Products",
    color: "bg-pink-500",
    count: 428,
    avgScore: 85,
    trend: "down",
    change: 1,
    rules: ["URL contains: /products/", "URL contains: /item/", "Sitemap: product"],
    domains: 134,
  },
  {
    name: "Blogs",
    color: "bg-amber-500",
    count: 89,
    avgScore: 91,
    trend: "neutral",
    change: 0,
    rules: ["URL contains: /blog/", "URL contains: /article/", "URL contains: /post/"],
    domains: 67,
  },
  {
    name: "Custom",
    color: "bg-emerald-500",
    count: 23,
    avgScore: 94,
    trend: "up",
    change: 5,
    rules: ["User-defined rules", "Manual assignments"],
    domains: 18,
  },
  {
    name: "Other",
    color: "bg-slate-500",
    count: 67,
    avgScore: 79,
    trend: "down",
    change: 2,
    rules: ["Uncategorized pages", "Fallback category"],
    domains: 45,
  },
]

export function CategoryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.name} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${category.color}`} />
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold">{category.count}</p>
              <p className="text-xs text-muted-foreground">Total Pages</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold">{category.avgScore}</p>
                {category.trend === "up" && <TrendingUp className="h-4 w-4 text-status-excellent" />}
                {category.trend === "down" && <TrendingDown className="h-4 w-4 text-status-poor" />}
                {category.trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
              </div>
              <p className="text-xs text-muted-foreground">Avg Score</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-xs font-medium text-muted-foreground mb-2">Categorization Rules</p>
            <div className="space-y-1">
              {category.rules.map((rule, i) => (
                <p key={i} className="text-xs text-foreground font-mono bg-muted px-2 py-1 rounded">
                  {rule}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{category.domains} domains</span>
            <Badge variant="secondary" className="text-xs">
              {category.trend === "up" && `+${category.change}%`}
              {category.trend === "down" && `-${category.change}%`}
              {category.trend === "neutral" && "No change"}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  )
}
