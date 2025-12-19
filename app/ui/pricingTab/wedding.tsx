import SubTabs from "../animation/WeddingSubTabs";
import PricingCard from "../cards/pricingCard";
import MiniPricingCard from "../cards/miniPricingCard";
type WeddingSubTabKey = "Wedding" | "Pre-Wedding" | "Engagment";

const WeddingSubTabs = () => {
  const subTabs = [
    {
      key: "Wedding" as WeddingSubTabKey,
      label: "Wedding",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            jenis="Wedding"
            title="standard package"
            price="Rp 2.500.000"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 drone pilot",
                "all foto edit",
                "video edit 2 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="Bronze package"
            price="Rp 3.000.000"
            jenis="Wedding"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 drone pilot",
                "all foto edit",
                "cetak foto album eksklusif 4r 120 foto",
                "video edit 2 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            jenis="Wedding"
            title="silver package"
            price="Rp 5.000.000"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 pilot drone",
                "all foto edit",
                "cetak foto album eksklusif 4r 120 foto",
                "cetak wedding book 1 isi 10 sheet",
                "video reels 1 menit potrait",
                "video edit 3 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            jenis="Wedding"
            title="Gold package"
            price="Rp 8.000.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "cetak foto 16RL + bingkai (3)",
                "cetak foto album eksklusif 4r 150 foto",
                "cetak wedding book 1 isi 10 sheet",
                "video reels 1 menit potrait",
                "video teaser 1 menit",
                "video edit 3 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            jenis="Wedding"
            title="Diamond package"
            price="Rp 10.000.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "1 assistant lighting",
                "lighting video",
                "Background foto",
                "All foto edit",
                "cetak foto 22RL + bingkai (2)",
                "cetak foto 16RL + bingkai (5)",
                "cetak foto album eksklusif 4r 200 foto",
                "cetak wedding book 1 isi 15 sheet",
                "video reels 1 menit potrait",
                "video teaser 1 menit",
                "video edit 3 menit",
                "8 jam kerja"
            ]}
            />
        </div>
      ),
    },
    {
      key: "Pre-Wedding" as WeddingSubTabKey,
      label: "Pre-Wedding",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            jenis=""
            title="Pre-Wedding package"
            price="Rp 3.500.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "1 assistant lighting",
                "lighting video",
                "Background foto",
                "All foto edit",
                "cetak foto 16RL + frame putih(laminasi cavas)",
                "1 video reels",
                "video edit 1-2 menit",
                "8 jam kerja"
            ]}
            />
        </div>
      ),
    },
    {
      key: "Engagment" as WeddingSubTabKey,
      label: "Engagment",
      content: (
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            jenis="Engagment"
            title="Foto"
            price="Rp 1.500.000"
            benefits={[
                "1 fotografer",
                "unlimited foto",
                "cetak album foto eksklusif 4R 80 foto",
                "upload file via google drive",
                "8 jam kerja",
            ]}
            />
            <PricingCard
            jenis="Engagment"
            title="Video"
            price="Rp 1.500.000"
            benefits={[
                "1 videografer",
                "1 video edit 1-2 menit",
                "upload file via google drive",
                "4 jam kerja",
            ]}
            />
        </div>
      ),
    },
    {
      key: "Additional" as WeddingSubTabKey,
      label: "Additional",
      content: (
        <div className="flex flex-wrap  justify-center gap-6">
          <MiniPricingCard
            jenis="[Additional]"
            title="Cetak album costum cover +100 foto 4R"
            price="Rp 500.000"
            benefits={[
            
            ]}
            />
            <MiniPricingCard
            jenis="[Additional]"
            title="Cetak 16R + bingkai"
            price="Rp 300.000"
            benefits={[

            ]}
            />
            <MiniPricingCard
            jenis="[Additional]"
            title="Copy File Flashdisk"
            price="Rp 200.000"
            benefits={[
            ]}
            />
            <MiniPricingCard
            jenis="[Additional]"
            title="Copy File mentah"
            price="Rp 300.000"
            benefits={[
            ]}
            />
            <MiniPricingCard
            jenis="[Additional]"
            title="Video Shooting"
            price="Rp 2.500.000"
            benefits={[
            ]}
            />
            <MiniPricingCard
            jenis="[Additional]"
            title="Akad/Pemberkatan terpisah"
            price="Rp 1.000.000"
            benefits={[
            ]}
            />
        </div>
      ),
    },
  ];

  return (
    <SubTabs<WeddingSubTabKey>
      tabs={subTabs}
      defaultTab={"Wedding"}
    />
  );
};

export default WeddingSubTabs;
