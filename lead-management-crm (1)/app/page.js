import { redirect } from "next/navigation"

export default function Home() {
  // Directly redirect to dashboard without authentication
  return redirect("/dashboard")
}
