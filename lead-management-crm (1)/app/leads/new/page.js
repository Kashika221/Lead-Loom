import { AppShell } from "@/components/layout/app-shell"
import { LeadForm } from "@/components/leads/lead-form"

export default function NewLeadPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-teal-900">Add New Lead</h1>
        <LeadForm />
      </div>
    </AppShell>
  )
}
