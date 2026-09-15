"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton({ label }: { label: string }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.print()}
      className="no-print"
    >
      <Download className="size-4" />
      {label}
    </Button>
  )
}
