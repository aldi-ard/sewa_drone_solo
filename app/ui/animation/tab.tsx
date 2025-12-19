"use client";
import { ReactNode, useState } from "react";

type TabItem<T extends string> = {
  key: T;
  label: string;
  content: ReactNode ;
};

type TabsProps<T extends string> = {
  tabs: TabItem<T>[];
  defaultTab: T;
};

const Tabs = <T extends string>({ tabs, defaultTab }: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState<T>(defaultTab);

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="md:flex flex overflow-x-auto gap-1 mb-6 md:bg-neutral-200 bg-neutral-50 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`md:px-4 px-3 py-1  md:py-1 rounded-lg font-semibold transition md:text-sm text-xs text-wrap
              ${
                activeTab === tab.key
                  ? "bg-fuchsia-500 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            role="tab"
            aria-selected={activeTab === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
