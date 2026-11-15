import React from "react";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { MobileUnsupportedView } from "@/components/shared/MobileUnsupportedView";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Mobile Gate: Displayed on screens smaller than 1024px (lg) */}
      <div className="lg:hidden block min-h-screen">
        <MobileUnsupportedView />
      </div>

      {/* Desktop / Large Screen Layout: Displayed on lg (1024px) and above */}
      <div className="hidden lg:flex min-h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
