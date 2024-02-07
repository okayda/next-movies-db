import Image from "next/image";

export default function Error({
  title = "Not Available",
  className,
}: {
  title?: string;
  className?: string;
}) {
  // mt-16
  return (
    <div className={`h-full text-center text-[#f1f1f1] ${className}`}>
      <Image
        src="/assets/error.svg"
        alt="Error Icon"
        className="mx-auto"
        width={100}
        height={100}
      />
      <h2 className="text-[80px] font-light tracking-wider">404</h2>
      <h3 className="text-[40px] font-light">{title}</h3>
    </div>
  );
}
