import { Search, Filter, ArrowUpDown, Download, Grid3x3, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function DomainsToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Checkbox id="select-all" />
        <label htmlFor="select-all" className="text-sm font-medium">
          Select All
        </label>
      </div>

      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search domains and pages..." className="pl-9" />
      </div>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="mainpage">Mainpage</SelectItem>
          <SelectItem value="collections">Collections</SelectItem>
          <SelectItem value="products">Products</SelectItem>
          <SelectItem value="blogs">Blogs</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="performance">
        <SelectTrigger className="w-[180px]">
          <ArrowUpDown className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="performance">Sort by Performance</SelectItem>
          <SelectItem value="name">Sort by Name</SelectItem>
          <SelectItem value="pages">Sort by Pages</SelectItem>
          <SelectItem value="recent">Recently Added</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm">
        <Download className="mr-2 h-4 w-4" />
        Export Data
      </Button>

      <div className="flex items-center gap-1 border rounded-lg p-1">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 bg-accent">
          <Grid3x3 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
