import SubTabs from "../animation/SubTabsDrone";
import PricingCard from "../cards/pricingCard";

type DroneSubTabKey = "Aerial" | "FPV";

const DroneSubTabs = () => {
  const subTabs = [
    {
      key: "Aerial" as DroneSubTabKey,
      label: "Aerial",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            title="Aerial 1"
            price="Rp 500.000"
            jenis="drone"
            benefits={[
              "Durasi 1 jam",
              "1 pilot di lokasi",
              "File via Google Drive",
            ]}
          />
          <PricingCard
            jenis="drone"
            title="Aerial 2"
            price="Rp 750.000"
            benefits={[
              "Durasi 2 jam",
              "1 pilot di lokasi",
              "File via Google Drive",
            ]}
          />
          <PricingCard
            jenis="drone"
            title="Aerial 3"
            price="Rp 1.500.000"
            benefits={[
              "Durasi 4 jam",
              "1 pilot di lokasi",
              "Edit video",
              "File via Google Drive",
            ]}
          />
        </div>
      ),
    },
    {
      key: "FPV" as DroneSubTabKey,
      label: "FPV",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            jenis="drone"
            title="FPV 1"
            price="Rp 1.000.000"
            benefits={[
              "2 jam",
              "1 pilot profesional",
              "File via Google Drive",
            ]}
          />
          <PricingCard
            jenis="drone"
            title="FPV 2"
            price="Rp 1.500.000"
            benefits={[
              "4 jam",
              "1 pilot profesional",
              "File via Google Drive",
            ]}
          />
          <PricingCard
            jenis="drone"
            title="FPV 3"
            price="Rp 2.000.000"
            benefits={[
              "8 jam",
              "1 pilot profesional",
              "File via Google Drive",
            ]}
          />
        </div>
      ),
    },
  ];

  return (
    <SubTabs<DroneSubTabKey>
      tabs={subTabs}
      defaultTab={"Aerial"}
    />
  );
};

export default DroneSubTabs;
