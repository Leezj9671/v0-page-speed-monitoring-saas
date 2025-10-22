import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download } from "lucide-react"
import { AddCategoryDialog } from "@/components/add-category-dialog"

export function CategoryHeader() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Page Categories</h1>
          <p className="text-muted-foreground mt-1">Manage and configure automated page categorization rules</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Rules
          </Button>
          <AddCategoryDialog />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search categories..." className="pl-9" />
        </div>
      </div>
    </div>
  )
}
