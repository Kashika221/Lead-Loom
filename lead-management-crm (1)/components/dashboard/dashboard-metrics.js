import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardMetrics({ totalLeads, contactedLeads, meetings }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-cyan-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Total Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-6xl font-bold text-teal-900">{totalLeads || 120}</p>
        </CardContent>
      </Card>

      <Card className="bg-green-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Contacted Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-6xl font-bold text-teal-900">{contactedLeads || 45}</p>
        </CardContent>
      </Card>

      <Card className="bg-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Meetings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-6xl font-bold text-teal-900">{meetings || 12}</p>
        </CardContent>
      </Card>
    </div>
  )
}
