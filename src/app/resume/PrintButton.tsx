"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.print()}
      className="no-print"
    >
      <Download className="size-4" />
      Download PDF
    </Button>
  )
}
