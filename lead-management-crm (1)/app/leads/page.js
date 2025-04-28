import Link from "next/link"
import { AppShell } from "@/components/layout/app-shell"
import { Button } from "@/components/ui/button"
import { LeadsTable } from "@/components/leads/leads-table"
import { Plus } from "lucide-react"

export default function LeadsPage() {
  // Sample leads data
  const leads = [
    { _id: "1", name: "John Doe", status: "Contacted", dateAcquired: new Date("2024-04-20") },
    { _id: "2", name: "Jane Smith", status: "New", dateAcquired: new Date("2024-04-18") },
    { _id: "3", name: "Acme Corp", status: "Engaged", dateAcquired: new Date("2024-04-15") },
    { _id: "4", name: "Bob Johnson", status: "Contacted", dateAcquired: new Date("2024-04-10") },
  ]

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-teal-900">Leads</h1>

          <Link href="/leads/new">
            <Button className="bg-teal-700 hover:bg-teal-800">
              <Plus className="mr-2 h-4 w-4" />
              New Lead
            </Button>
          </Link>
        </div>

        <LeadsTable leads={leads} />
      </div>
    </AppShell>
  )
}
