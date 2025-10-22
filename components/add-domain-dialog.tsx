"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Globe, FileText, Settings2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CATEGORIES = [
  { id: "mainpage", label: "Mainpage", color: "bg-blue-500" },
  { id: "collections", label: "Collections", color: "bg-purple-500" },
  { id: "products", label: "Products", color: "bg-pink-500" },
  { id: "blogs", label: "Blogs", color: "bg-orange-500" },
  { id: "custom", label: "Custom", color: "bg-green-500" },
  { id: "other", label: "Other", color: "bg-gray-500" },
]

interface AddDomainDialogProps {
  trigger?: React.ReactNode
}

export function AddDomainDialog({ trigger }: AddDomainDialogProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    domain: "",
    description: "",
    sitemapUrl: "",
    scanFrequency: "daily",
    selectedCategories: ["mainpage", "collections", "products", "blogs", "custom", "other"],
    autoDetectSitemap: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Adding domain:", formData)

    setIsLoading(false)
    setOpen(false)

    // Reset form
    setFormData({
      domain: "",
      description: "",
      sitemapUrl: "",
      scanFrequency: "daily",
      selectedCategories: ["mainpage", "collections", "products", "blogs", "custom", "other"],
      autoDetectSitemap: true,
    })
  }

  const toggleCategory = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter((id) => id !== categoryId)
        : [...prev.selectedCategories, categoryId],
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Domain
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Domain</DialogTitle>
          <DialogDescription>
            Add a domain to monitor its PageSpeed performance. We'll automatically discover pages from your sitemap.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-4">
            {/* Domain URL */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Domain URL *
              </Label>
              <Input
                id="domain"
                placeholder="https://example.com"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">Enter the full domain URL including https://</p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="E.g., Primary business site, E-commerce store..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
              />
            </div>

            {/* Sitemap Configuration */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Sitemap Configuration
              </Label>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="autoDetect"
                  checked={formData.autoDetectSitemap}
                  onCheckedChange={(checked) => setFormData({ ...formData, autoDetectSitemap: checked as boolean })}
                />
                <label
                  htmlFor="autoDetect"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Auto-detect sitemap (checks /sitemap.xml, /sitemap_index.xml)
                </label>
              </div>

              {!formData.autoDetectSitemap && (
                <Input
                  placeholder="https://example.com/sitemap.xml"
                  value={formData.sitemapUrl}
                  onChange={(e) => setFormData({ ...formData, sitemapUrl: e.target.value })}
                />
              )}
            </div>

            {/* Scan Frequency */}
            <div className="space-y-2">
              <Label htmlFor="frequency" className="flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                Scan Frequency
              </Label>
              <Select
                value={formData.scanFrequency}
                onValueChange={(value) => setFormData({ ...formData, scanFrequency: value })}
              >
                <SelectTrigger id="frequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="manual">Manual Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Selection */}
            <div className="space-y-3">
              <Label>Categories to Monitor</Label>
              <p className="text-xs text-muted-foreground">
                Select which page categories to automatically detect and monitor
              </p>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={formData.selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                    />
                    <label
                      htmlFor={category.id}
                      className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <div className={`h-3 w-3 rounded-full ${category.color}`} />
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || !formData.domain}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Adding Domain...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Domain
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
