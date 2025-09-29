import { usePathname } from "next/navigation";
import { IoArrowUpSharp } from "react-icons/io5";

export default function BackToTop() {
  const currentRoute = usePathname();

  if (currentRoute !== "/") return null;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute h-screen w-full">
      <button
        type="button"
        className="fixed bottom-4 right-3 z-50 rounded-full border border-white/0  bg-black/80 p-5 text-white backdrop-blur-lg dark:border-offwhite/50"
        onClick={handleClick}
      >
        <IoArrowUpSharp color="white" />
      </button>
    </div>
  );
}
