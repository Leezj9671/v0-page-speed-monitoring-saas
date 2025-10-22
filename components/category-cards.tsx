import { Card, CardContent } from "@/components/ui/card"
import { Home, ShoppingBag, Package, FileText, MoreHorizontal, Gauge } from "lucide-react"

const categories = [
  { name: "Homepage", icon: Home, score: 95, pages: 1, status: "Excellent" },
  { name: "Collections", icon: ShoppingBag, score: 91, pages: 6, status: "Excellent" },
  { name: "Products", icon: Package, score: 88, pages: 12, status: "Good" },
  { name: "Blog", icon: FileText, score: 93, pages: 3, status: "Excellent" },
  { name: "Other Pages", icon: MoreHorizontal, score: 87, pages: 1, status: "Good" },
  { name: "Core Web Vitals", icon: Gauge, score: 0, pages: 0, status: "Good", text: "Good" },
]

const statusColors = {
  Excellent: "text-status-excellent",
  Good: "text-status-good",
}

export function CategoryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <category.icon className="h-4 w-4" />
                {category.name}
              </div>
              <category.icon className="h-5 w-5 text-muted-foreground" />
            </div>

            <div>
              {category.text ? (
                <div className={`text-3xl font-bold ${statusColors[category.status as keyof typeof statusColors]}`}>
                  {category.text}
                </div>
              ) : (
                <div className={`text-4xl font-bold ${statusColors[category.status as keyof typeof statusColors]}`}>
                  {category.score}
                </div>
              )}
              <p className="mt-1 text-sm text-muted-foreground">
                {category.pages > 0
                  ? `${category.pages} page${category.pages > 1 ? "s" : ""} • ${category.status} ${category.text ? "" : "performance"}`
                  : "All metrics passing"}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
