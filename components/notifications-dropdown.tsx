"use client"

import { useState } from "react"
import { Bell, CheckCheck, Settings, Trash2, AlertCircle, TrendingDown, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Notification {
  id: string
  type: "critical" | "warning" | "info" | "success"
  title: string
  message: string
  domain?: string
  timestamp: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "critical",
    title: "Critical Performance Drop",
    message: "Speed score dropped to 34",
    domain: "shop.example.com",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "warning",
    title: "Server Response Time",
    message: "Response time >5s detected",
    domain: "api.testing.com",
    timestamp: "15 minutes ago",
    read: false,
  },
  {
    id: "3",
    type: "success",
    title: "Performance Improved",
    message: "Score increased by 15%",
    domain: "blog.company.com",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: "4",
    type: "info",
    title: "New Domain Added",
    message: "store.newsite.com successfully added",
    domain: "store.newsite.com",
    timestamp: "2 hours ago",
    read: true,
  },
  {
    id: "5",
    type: "warning",
    title: "Scan Completed",
    message: "Found 12 optimization opportunities",
    domain: "docs.platform.io",
    timestamp: "3 hours ago",
    read: true,
  },
]

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="h-4 w-4 text-status-poor" />
      case "warning":
        return <TrendingDown className="h-4 w-4 text-status-moderate" />
      case "success":
        return <TrendingUp className="h-4 w-4 text-status-excellent" />
      case "info":
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">{unreadCount}</Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px]">
        <div className="flex items-center justify-between px-2 py-2">
          <DropdownMenuLabel className="p-0">Notifications</DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto p-1 text-xs" onClick={markAllAsRead}>
              <CheckCheck className="mr-1 h-3 w-3" />
              Mark all read
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[400px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">No notifications</p>
            </div>
          ) : (
            <DropdownMenuGroup>
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="flex items-start gap-3 p-3 cursor-pointer"
                  onSelect={(e) => {
                    e.preventDefault()
                    if (!notification.read) {
                      markAsRead(notification.id)
                    }
                  }}
                >
                  <div className="mt-0.5">{getIcon(notification.type)}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      {!notification.read && <div className="h-2 w-2 rounded-full bg-primary mt-1" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{notification.message}</p>
                    {notification.domain && (
                      <p className="text-xs text-muted-foreground font-mono">{notification.domain}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notification.id)
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          )}
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          Notification Settings
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
