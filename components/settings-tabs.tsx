"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Bell, Globe, Zap, Database, Mail, Webhook, Shield } from "lucide-react"

export function SettingsTabs() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [slackNotifications, setSlackNotifications] = useState(false)
  const [autoScan, setAutoScan] = useState(true)

  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-primary/10 p-2">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">General Settings</h3>
              <p className="text-sm text-muted-foreground">Configure basic platform preferences</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="workspace-name">Workspace Name</Label>
              <Input id="workspace-name" defaultValue="PageSpeed Brilliance" />
              <p className="text-xs text-muted-foreground">The name of your monitoring workspace</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger id="timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                  <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                  <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                  <SelectItem value="cet">CET (Central European Time)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-format">Date Format</Label>
              <Select defaultValue="mdy">
                <SelectTrigger id="date-format">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="monitoring" className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-primary/10 p-2">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Monitoring Configuration</h3>
              <p className="text-sm text-muted-foreground">Configure scanning and monitoring behavior</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Automatic Scanning</Label>
                <p className="text-sm text-muted-foreground">Automatically scan domains on a schedule</p>
              </div>
              <Switch checked={autoScan} onCheckedChange={setAutoScan} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="scan-frequency">Scan Frequency</Label>
              <Select defaultValue="hourly">
                <SelectTrigger id="scan-frequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15min">Every 15 minutes</SelectItem>
                  <SelectItem value="30min">Every 30 minutes</SelectItem>
                  <SelectItem value="hourly">Every hour</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="performance-threshold">Performance Alert Threshold</Label>
              <Select defaultValue="50">
                <SelectTrigger id="performance-threshold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">Score below 30 (Critical)</SelectItem>
                  <SelectItem value="50">Score below 50 (Poor)</SelectItem>
                  <SelectItem value="70">Score below 70 (Moderate)</SelectItem>
                  <SelectItem value="90">Score below 90 (Good)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="retention">Data Retention Period</Label>
              <Select defaultValue="90">
                <SelectTrigger id="retention">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="180">180 days</SelectItem>
                  <SelectItem value="365">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-primary/10 p-2">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Notification Preferences</h3>
              <p className="text-sm text-muted-foreground">Manage how you receive alerts and updates</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive alerts via email</p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            {emailNotifications && (
              <div className="space-y-2 pl-6 border-l-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@company.com" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="critical" defaultChecked className="rounded" />
                  <Label htmlFor="critical" className="font-normal">
                    Critical alerts
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="warnings" defaultChecked className="rounded" />
                  <Label htmlFor="warnings" className="font-normal">
                    Performance warnings
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="reports" className="rounded" />
                  <Label htmlFor="reports" className="font-normal">
                    Weekly reports
                  </Label>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Slack Notifications</Label>
                <p className="text-sm text-muted-foreground">Send alerts to Slack channels</p>
              </div>
              <Switch checked={slackNotifications} onCheckedChange={setSlackNotifications} />
            </div>

            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="integrations" className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-primary/10 p-2">
              <Webhook className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Integrations</h3>
              <p className="text-sm text-muted-foreground">Connect external services and tools</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Slack</p>
                  <p className="text-sm text-muted-foreground">Send notifications to Slack</p>
                </div>
              </div>
              <Badge variant="secondary">Not Connected</Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Webhook</p>
                  <p className="text-sm text-muted-foreground">Send data to custom endpoints</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Zapier</p>
                  <p className="text-sm text-muted-foreground">Automate workflows</p>
                </div>
              </div>
              <Badge variant="secondary">Not Connected</Badge>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-primary/10 p-2">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Security Settings</h3>
              <p className="text-sm text-muted-foreground">Manage access and security preferences</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex gap-2">
                <Input id="api-key" type="password" defaultValue="sk_live_••••••••••••••••" readOnly />
                <Button variant="outline">Regenerate</Button>
              </div>
              <p className="text-xs text-muted-foreground">Use this key to access the API programmatically</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Session Timeout</Label>
              <Select defaultValue="24">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hour</SelectItem>
                  <SelectItem value="8">8 hours</SelectItem>
                  <SelectItem value="24">24 hours</SelectItem>
                  <SelectItem value="168">7 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
