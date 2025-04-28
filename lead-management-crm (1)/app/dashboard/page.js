import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardMetrics } from "@/components/dashboard/dashboard-metrics"
import { LeadsChart } from "@/components/dashboard/leads-chart"
import { StatusDonut } from "@/components/dashboard/status-donut"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  // Sample stats
  const stats = {
    totalLeads: 120,
    contactedLeads: 45,
    meetings: 12,
    leadsOverTime: [
      { _id: "2023-04-01", count: 5 },
      { _id: "2023-04-02", count: 8 },
      { _id: "2023-04-03", count: 12 },
      { _id: "2023-04-04", count: 10 },
      { _id: "2023-04-05", count: 15 },
      { _id: "2023-04-06", count: 18 },
      { _id: "2023-04-07", count: 20 },
      { _id: "2023-04-08", count: 25 },
      { _id: "2023-04-09", count: 22 },
      { _id: "2023-04-10", count: 30 },
    ],
  }

  return (
    <AppShell>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-teal-900">Dashboard</h1>

        <DashboardMetrics
          totalLeads={stats.totalLeads}
          contactedLeads={stats.contactedLeads}
          meetings={stats.meetings}
        />

        <Card>
          <CardHeader>
            <CardTitle>Leads Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <LeadsChart data={stats.leadsOverTime} />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusDonut />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
