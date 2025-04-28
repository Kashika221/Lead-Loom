import { AppShell } from "@/components/layout/app-shell"
import { OutreachForm } from "@/components/outreach/outreach-form"

export default function NewOutreachPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-teal-900">Create New Outreach Campaign</h1>
        <OutreachForm />
      </div>
    </AppShell>
  )
}
