import { Link } from "react-router-dom";

export default function HowToBuyPageCta({ caption, buttonText, to }) {
  return (
    <div className="flex flex-col items-center gap-5 pt-2">
      <p className="text-center font-['Inter',sans-serif] text-[13px] text-black/60 md:text-[14px]">{caption}</p>
      <Link to={to} className="btn_primary inline-flex min-w-[240px] items-center justify-center no-underline">
        {buttonText}
      </Link>
    </div>
  );
}
