"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Home,
  ShoppingBag,
  Package,
  FileText,
  MoreHorizontal,
  CheckCircle,
  Clock,
  FileDown,
  FileSpreadsheet,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "All Pages", count: 23, icon: Home },
  { name: "Homepage", count: 1, icon: Home },
  { name: "Collections", count: 6, icon: ShoppingBag },
  { name: "Products", count: 12, icon: Package },
  { name: "Blog", count: 3, icon: FileText },
  { name: "Other", count: 1, icon: MoreHorizontal },
]

const recentScans = [
  { text: "Full scan completed", time: "2 minutes ago" },
  { text: "Scheduled scan", time: "1 hour ago" },
]

export function DomainDetailSidebar() {
  return (
    <aside className="w-64 border-r bg-card p-6 hidden lg:block">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Dashboard
        </Link>
      </div>

      <nav className="space-y-1">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Page Categories</div>
        {categories.map((item) => (
          <button
            key={item.name}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
              item.name === "All Pages" && "bg-primary text-primary-foreground",
            )}
          >
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.name}
            </div>
            <span className="text-xs">{item.count}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Performance Alerts
        </div>
        <div className="rounded-lg border border-status-excellent/20 bg-status-excellent/5 p-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-status-excellent mt-0.5 flex-shrink-0" />
            <p className="text-xs text-foreground">All Clear</p>
          </div>
          <p className="text-xs text-muted-foreground mt-1">No performance issues detected for this domain.</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent Scans</div>
        <div className="space-y-3">
          {recentScans.map((scan, i) => (
            <div key={i} className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium">{scan.text}</p>
                <p className="text-xs text-muted-foreground">{scan.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Export Options</div>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <FileDown className="mr-2 h-4 w-4" />
            Export as PDF
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Export as CSV
          </Button>
        </div>
      </div>
    </aside>
  )
}
