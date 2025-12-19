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

const SubTabs = <T extends string>({ tabs, defaultTab }: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState<T>(defaultTab);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-6 ">
        {tabs.map((tab) => (
       <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-semibold transition md:text-sm text-xs
              ${
                activeTab === tab.key
                  ? "bg-tansparent text-fuchsia-500 border-b border-b-fuchsia-500"
                  : "bbg-transparant text-gray-700 hover:bg-fuchsia-400 hover:text-white"
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

export default SubTabs;
