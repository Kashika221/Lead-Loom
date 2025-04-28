import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function OutreachCampaignsList({ campaigns = [], variant = "default" }) {
  // Sample data if campaigns is empty
  const sampleCampaigns = [
    { _id: "1", name: "Q2 Newsletter", status: "active", sentCount: 120 },
    { _id: "2", name: "Product Launch", status: "draft", sentCount: 0 },
    { _id: "3", name: "Follow-up Campaign", status: "active", sentCount: 80 },
  ]

  const displayCampaigns = campaigns.length > 0 ? campaigns : sampleCampaigns

  if (variant === "compact") {
    return (
      <div className="space-y-3">
        {displayCampaigns.map((campaign) => (
          <Link
            key={campaign._id}
            href={`/outreach/${campaign._id}`}
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 border"
          >
            <div
              className={`w-3 h-3 rounded-full mr-3 ${campaign.status === "active" ? "bg-teal-500" : campaign.status === "draft" ? "bg-yellow-400" : "bg-gray-300"}`}
            />
            <span className="flex-1">{campaign.name}</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {displayCampaigns.map((campaign) => (
        <Link
          key={campaign._id}
          href={`/outreach/${campaign._id}`}
          className="block p-4 rounded-lg hover:bg-gray-50 border"
        >
          <div className="flex items-center mb-2">
            <h3 className="font-medium">{campaign.name}</h3>
            <span
              className={`ml-auto px-2 py-1 text-xs rounded-full ${
                campaign.status === "active"
                  ? "bg-green-100 text-green-800"
                  : campaign.status === "draft"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {campaign.status}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {campaign.sentCount > 0 ? `${campaign.sentCount} emails sent` : "No emails sent yet"}
          </p>
        </Link>
      ))}
    </div>
  )
}
