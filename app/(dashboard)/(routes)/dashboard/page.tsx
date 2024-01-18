import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p className="text-center text-2xl">Dashboard Page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
