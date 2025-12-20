// import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  imageProfile? : string;
};

export default function TestimonialCard({
  name,
  role,
  message,
}: Testimonial) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-55 md:w-85 transition-all duration-300  hover:-translate-y-2 hover:shadow-2xl ">
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        “{message}”
      </p>

      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 rounded-full relative bg-gray-300" >
          <Image className="rounded-full w-10 h-10" width={10} height={10} src={imageProfile} alt="userprofile"/>
        </div>  */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <span className="text-xs text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}