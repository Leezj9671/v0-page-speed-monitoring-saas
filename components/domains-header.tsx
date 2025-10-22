import { AddDomainDialog } from "@/components/add-domain-dialog"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { UserMenuDropdown } from "@/components/user-menu-dropdown"

export function DomainsHeader() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <h1 className="text-xl font-semibold">PageSpeed Brilliance</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <AddDomainDialog />

          <NotificationsDropdown />

          <UserMenuDropdown />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Enhanced Domain List with Category Status</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Advanced domain management interface with expandable category-based page performance metrics and inline status
          monitoring
        </p>
      </div>
    </div>
  )
}
