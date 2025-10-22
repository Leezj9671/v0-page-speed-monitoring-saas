"use client"

import { useState } from "react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const CATEGORY_COLORS = [
  { name: "Blue", value: "blue", class: "bg-blue-500" },
  { name: "Purple", value: "purple", class: "bg-purple-500" },
  { name: "Pink", value: "pink", class: "bg-pink-500" },
  { name: "Orange", value: "orange", class: "bg-orange-500" },
  { name: "Green", value: "green", class: "bg-green-500" },
  { name: "Teal", value: "teal", class: "bg-teal-500" },
  { name: "Red", value: "red", class: "bg-red-500" },
  { name: "Gray", value: "gray", class: "bg-gray-500" },
]

export function AddCategoryDialog() {
  const [open, setOpen] = useState(false)
  const [categoryName, setCategoryName] = useState("")
  const [categoryColor, setCategoryColor] = useState("blue")
  const [description, setDescription] = useState("")
  const [urlPatterns, setUrlPatterns] = useState<string[]>([])
  const [currentPattern, setCurrentPattern] = useState("")
  const [keywords, setKeywords] = useState<string[]>([])
  const [currentKeyword, setCurrentKeyword] = useState("")
  const [matchType, setMatchType] = useState("any")

  const handleAddPattern = () => {
    if (currentPattern.trim()) {
      setUrlPatterns([...urlPatterns, currentPattern.trim()])
      setCurrentPattern("")
    }
  }

  const handleRemovePattern = (index: number) => {
    setUrlPatterns(urlPatterns.filter((_, i) => i !== index))
  }

  const handleAddKeyword = () => {
    if (currentKeyword.trim()) {
      setKeywords([...keywords, currentKeyword.trim()])
      setCurrentKeyword("")
    }
  }

  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    console.log("[v0] Saving category:", {
      name: categoryName,
      color: categoryColor,
      description,
      urlPatterns,
      keywords,
      matchType,
    })

    // Reset form
    setCategoryName("")
    setCategoryColor("blue")
    setDescription("")
    setUrlPatterns([])
    setKeywords([])
    setMatchType("any")
    setOpen(false)

    // TODO: Add actual save logic here
  }

  const isValid = categoryName.trim() && (urlPatterns.length > 0 || keywords.length > 0)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Create a new page category with custom rules for automatic page classification
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Category Name */}
          <div className="space-y-2">
            <Label htmlFor="category-name">Category Name</Label>
            <Input
              id="category-name"
              placeholder="e.g., Product Pages, Blog Posts, Landing Pages"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>

          {/* Category Color */}
          <div className="space-y-2">
            <Label>Category Color</Label>
            <div className="flex gap-2 flex-wrap">
              {CATEGORY_COLORS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setCategoryColor(color.value)}
                  className={`w-10 h-10 rounded-md ${color.class} ${
                    categoryColor === color.value ? "ring-2 ring-offset-2 ring-primary" : "opacity-60 hover:opacity-100"
                  } transition-all`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Describe what pages belong to this category..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </div>

          {/* URL Patterns */}
          <div className="space-y-2">
            <Label>URL Patterns</Label>
            <p className="text-sm text-muted-foreground">
              Add URL patterns to match pages. Use * as wildcard (e.g., /products/*, /blog/*)
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="/products/*"
                value={currentPattern}
                onChange={(e) => setCurrentPattern(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddPattern()
                  }
                }}
              />
              <Button type="button" onClick={handleAddPattern} size="sm">
                Add
              </Button>
            </div>
            {urlPatterns.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {urlPatterns.map((pattern, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {pattern}
                    <button
                      type="button"
                      onClick={() => handleRemovePattern(index)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Keywords */}
          <div className="space-y-2">
            <Label>Keywords (Optional)</Label>
            <p className="text-sm text-muted-foreground">
              Add keywords to match in page titles, meta descriptions, or content
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., product, shop, buy"
                value={currentKeyword}
                onChange={(e) => setCurrentKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddKeyword()
                  }
                }}
              />
              <Button type="button" onClick={handleAddKeyword} size="sm">
                Add
              </Button>
            </div>
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {keyword}
                    <button
                      type="button"
                      onClick={() => handleRemoveKeyword(index)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Match Type */}
          <div className="space-y-2">
            <Label htmlFor="match-type">Match Type</Label>
            <Select value={matchType} onValueChange={setMatchType}>
              <SelectTrigger id="match-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Match any rule (URL pattern OR keyword)</SelectItem>
                <SelectItem value="all">Match all rules (URL pattern AND keyword)</SelectItem>
                <SelectItem value="url-only">URL patterns only</SelectItem>
                <SelectItem value="keyword-only">Keywords only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!isValid}>
            Create Category
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
