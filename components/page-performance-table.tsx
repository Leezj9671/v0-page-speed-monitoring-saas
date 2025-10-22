import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye, RefreshCw } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const pages = [
  {
    url: "https://company.com/",
    description: "Main homepage",
    category: "Homepage",
    score: 95,
    status: "Excellent",
    lcp: "1.2s",
    fid: "15ms",
    cls: "0.05",
    lastScan: "2 min ago",
  },
  {
    url: "https://company.com/products",
    description: "Main products collection",
    category: "Collections",
    score: 92,
    status: "Excellent",
    lcp: "1.4s",
    fid: "18ms",
    cls: "0.08",
    lastScan: "2 min ago",
  },
  {
    url: "https://company.com/products/widget-pro",
    description: "Product detail page",
    category: "Products",
    score: 87,
    status: "Good",
    lcp: "1.8s",
    fid: "22ms",
    cls: "0.12",
    lastScan: "3 min ago",
  },
  {
    url: "https://company.com/blog/latest-updates",
    description: "Blog article page",
    category: "Blog",
    score: 94,
    status: "Excellent",
    lcp: "1.1s",
    fid: "12ms",
    cls: "0.03",
    lastScan: "4 min ago",
  },
  {
    url: "https://company.com/about",
    description: "Company information page",
    category: "Other",
    score: 87,
    status: "Good",
    lcp: "1.7s",
    fid: "19ms",
    cls: "0.11",
    lastScan: "5 min ago",
  },
]

const categoryColors: Record<string, string> = {
  Homepage: "bg-primary/10 text-primary border-primary/20",
  Collections: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  Products: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  Blog: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Other: "bg-slate-500/10 text-slate-600 border-slate-500/20",
}

const statusColors = {
  Excellent: "bg-status-excellent/10 text-status-excellent border-status-excellent/20",
  Good: "bg-status-good/10 text-status-good border-status-good/20",
}

export function PagePerformanceTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Page Performance Analysis</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search pages..." className="w-[300px] pl-9" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page URL</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Performance</TableHead>
              <TableHead className="text-center">LCP</TableHead>
              <TableHead className="text-center">FID</TableHead>
              <TableHead className="text-center">CLS</TableHead>
              <TableHead>Last Scan</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div>
                    <div className="font-medium text-sm">{page.url}</div>
                    <div className="text-xs text-muted-foreground">{page.description}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={categoryColors[page.category]}>
                    {page.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-bold">{page.score}</span>
                    <Badge
                      variant="outline"
                      className={statusColors[page.status as keyof typeof statusColors]}
                      size="sm"
                    >
                      {page.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center text-sm">{page.lcp}</TableCell>
                <TableCell className="text-center text-sm">{page.fid}</TableCell>
                <TableCell className="text-center text-sm">{page.cls}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{page.lastScan}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="text-sm text-muted-foreground">Showing 1-5 of 23 pages</div>

          <div className="flex items-center gap-2">
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
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
