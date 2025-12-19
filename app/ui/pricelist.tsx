// 
import Tabs from "./animation/tab";
import PricingCard from "./cards/pricingCard";
import MiniPricingCard from "./cards/miniPricingCard";
import DroneSubTabs from "./pricingTab/drone";
import 'tailwind-scrollbar-hide'
import WeddingSubTabs from "./pricingTab/wedding";
export type PricingTab = "Drone" | "Photografer" | "Videografer" | "Konten Reels" | "Event" | "Company Profile";

const PricingPage = () => {

  const pricingTabs = [
    {
      key: "Drone" as PricingTab,
      label: "Drone",
      content: <DroneSubTabs/>
      
    },
   
    {
      key: "Fotografer" as PricingTab,
      label: "Fotografer",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
           <PricingCard
            jenis="Fotografer"
            title="paket 1"
            price="Rp 1.000.000"
            benefits={[
                "4 jam",
                "1 fotografer",
                "semua file upload google drive",
            ]}
            />
            <PricingCard
            jenis="Fotografer"
            title="paket 2"
            price="Rp 2.000.000"
            benefits={[
                "8 jam",
                "1 fotografer",
                "semua file upload google drive",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Videografer" as PricingTab,
      label: "Videografer",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            jenis="Videografer"
            title="paket 1"
            price="Rp 1.000.000"
            benefits={[
                "4 jam",
                "1 videografer",
                "semua file upload google drive",
            ]}
            />
            <PricingCard
            jenis="Videografer"
            title="paket 2"
            price="Rp 2.000.000"
            benefits={[
                "8 jam",
                "1 videografer",
                "semua file uploud google drive",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Konten Reels" as PricingTab,
      label: "Kontent Reels",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            title="Konten Reels"
            price="Rp 1.500.000"
            benefits={[
                "1 drone pilot & 1 fotografer",
                "3 jam",
                "video dari drone & iphone",
                "video edit maks 1 menit",
                "semua file uploud google drive",

            ]}
            />
        </div>
      ),
    },
    {
      key: "Event" as PricingTab,
      label: "Event",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
            <PricingCard
            title="paket event 1"
            price="Rp 2.500.000"
            benefits={[
                "4 jam",
                "1 drone pilot & 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
            <PricingCard
            title="paket event 2"
            price="Rp 3.500.000"
            benefits={[
                "8 jam",
                "1 drone pilot & 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Paket Lengkap" as PricingTab,
      label: "Paket Lengkap",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
            <PricingCard
            title="paket lengkap basic"
            price="Rp 3.500.000"
            benefits={[
                "4 jam",
                "1 drone pilot, 1 fotografer, 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
            <PricingCard
            title="paket Lengkap advance" 
            price="Rp 4.500.000"
            benefits={[
                "8 jam",
                "1 drone pilot, 1 fotografer, 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Company Profile" as PricingTab,
      label: "Company Profile",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
            <PricingCard
            title="Company Profile"
            price="Rp 5.000.000"
            benefits={[
                "1 drone pilot, 2 videografer",
                "8 jam",
                "video dari drone & kamera",
                "lightning video",
                "video edit",
                "pengambilan video maks. 8 jam",
                "semua file dapat di copy",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Paket Wedding" as PricingTab,
      label: "Paket Wedding",
      content: <WeddingSubTabs/>,
    },
    {
      key: "graduation" as PricingTab,
      label: "Perpisahan Sekolah",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
          title="Basic"
          price="Rp 2.500.000"
          benefits={[
              "1 videografer",
              "1 drone pilot",
              "4 jam sesi dokumentasi",
              "video edit 1-2 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Brozee"
          price="Rp 3.000.000"
          benefits={[
              "1 videografer",
              "1 drone pilot",
              "8 jam sesi dokumentasi",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="silver"
          price="Rp 3.500.000"
          benefits={[
              "unlimited foto",
              "1 videografer",
              "1 fotografer",
              "1 drone pilot",
              "4 jam sesi dokumentasi",
              "video edit 1-2 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Gold"
          price="Rp 4.000.000"
          benefits={[
              "unlimited foto",
              "1 videografer",
              "1 fotografer",
              "1 drone pilot",
              "8 jam sesi dokumentasi",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Diamond"
          price="Rp 7.500.000"
          benefits={[
              "unlimited foto",
              "3 konten vertikal",
              "1 videografer",
              "1 asisten videografer",
              "1 fotografer",
              "1 drone pilot",
              "1 content creator",
              "8 jam sesi dokumentasi",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Platinum"
          price="Rp 5.000.000"
          benefits={[
              "unlimited foto",
              "3 konten vertikal",
              "1 videografer",
              "1 asisten videografer",
              "1 fotografer",
              "1 drone pilot",
              "1 content creator",
              "8 jam sesi dokumentasi",
              "vendor lighting indoor outdoor",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Premium"
          price="Rp 10.000.000"
          benefits={[
              "unlimited foto",
              "3 konten vertikal",
              "1 videografer",
              "2 asisten videografer",
              "1 fotografer",
              "1 drone pilot",
              "1 content creator",
              "10 jam sesi dokumentasi",
              "vendor lighting indoor outdoor",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
          <PricingCard
          title="Premium"
          price="Rp 15.000.000"
          benefits={[
              "unlimited foto",
              "3 konten vertikal",
              "1 videografer",
              "2 asisten videografer",
              "1 fotografer",
              "1 drone pilot",
              "1 content creator",
              "16 jam sesi dokumentasi(2 hari)",
              "vendor lighting indoor outdoor",
              "video edit 2-3 menit",
              "file upload sosmed + google drive",
          ]}
          />
        </div>
      ),
    },
    {
      key: "editing " as PricingTab,
      label: "Editing",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <MiniPricingCard
            title="paket 1"
            price="Rp 300.000"
            benefits={[
                " durasi 1 menit",
            ]}
            />
            <MiniPricingCard
            title="paket 2"
            price="Rp 500.000 "
            benefits={[
                " durasi 2-3 menit ",
            ]}
            />
            <MiniPricingCard
            title="paket 2"
            price="Rp 750.000"
            benefits={[
                " durasi 4-5 menit",
            ]}
            />
            <MiniPricingCard
            title="paket 4"
            price="Rp 1.000.000"
            benefits={[
                " durasi 5-7 menit",
            ]}
            />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Paket Harga
      </h2>

      <Tabs<PricingTab>
        tabs={pricingTabs}
        defaultTab={"Drone"}
      />
    </div>
  );
};

export default PricingPage;
