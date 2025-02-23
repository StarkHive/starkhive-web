"use client"
import type React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onChange: (value: string) => void
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, placeholder = "Search jobs..." }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full border-primary/20 bg-background pl-10 pr-4"
      />
    </div>
  )
}

export default SearchBar

