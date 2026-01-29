"use client";

import { ReactNode } from "react";
import SidebarNav from "./sidebar-nav";
import OnThisPage from "./on-this-page";
import Breadcrumbs from "./breadcrumbs";

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocsLayoutWrapperProps {
  children: ReactNode;
  navItems: NavItem[];
  breadcrumbs?: BreadcrumbItem[];
  showOnThisPage?: boolean;
}

export default function DocsLayoutWrapper({
  children,
  navItems,
  breadcrumbs,
  showOnThisPage = true,
}: DocsLayoutWrapperProps) {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        {/* Left Sidebar Navigation */}
        <SidebarNav items={navItems} />

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumbs */}
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

            {/* Page Content */}
            {children}
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        {showOnThisPage && (
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-24 pr-8">
              <OnThisPage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
