import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { AddDomainDialog } from "@/components/add-domain-dialog"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { UserMenuDropdown } from "@/components/user-menu-dropdown"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <h1 className="text-xl font-semibold">PageSpeed Brilliance</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search domains and pages..." className="w-[300px] pl-9" />
        </div>

        <div className="hidden md:block">
          <AddDomainDialog />
        </div>

        <NotificationsDropdown />

        <UserMenuDropdown />
      </div>
    </header>
  )
}
