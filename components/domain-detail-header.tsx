import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Share, Settings, Scan, ChevronDown } from "lucide-react"

export function DomainDetailHeader({ domain }: { domain: string }) {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <h1 className="text-xl font-semibold">PageSpeed Brilliance</h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>/</span>
            <span>Domains</span>
            <span>/</span>
            <span className="text-foreground">{domain}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            <Scan className="mr-2 h-4 w-4" />
            Scan Now
          </Button>

          <Button size="sm" variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">2</Badge>
          </Button>

          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Button variant="ghost" size="icon">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{domain.charAt(0).toUpperCase()}</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{domain}</h2>
            <div className="flex items-center gap-2 mt-1">
              <a href={`https://www.${domain}`} className="text-sm text-muted-foreground hover:underline">
                https://www.{domain}
              </a>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Last scanned: 2 minutes ago</span>
              <Badge
                variant="outline"
                className="bg-status-excellent/10 text-status-excellent border-status-excellent/20"
              >
                Trending up
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-status-excellent">92</div>
            <div className="text-sm text-muted-foreground mt-1">Overall Score</div>
          </div>

          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
