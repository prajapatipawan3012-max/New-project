import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center ink-panel border hairline-silver text-silver shadow-lg shadow-ink/30 transition-colors hover:bg-royal hover:border-royal hover:text-white cursor-pointer"
    >
      <ArrowUp size={18} />
    </button>
  );
}
