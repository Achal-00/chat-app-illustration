import React, { useEffect } from "react";
import { gsap } from "gsap";
import ContentSection from "./ContentSection/ContentSection";
import IllustrationSection from "./IllustrationSection/IllustrationSection";

export default function App() {
  useEffect(() => {
    const onPageLoad = () => {
      let tl = gsap.timeline();
      tl.to(".main-container", { display: "grid" })
        .fromTo(
          ".left-des",
          { y: "-100dvh", opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo(
          ".right-des",
          { y: "100dvh", opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "<"
        )
        .fromTo(
          ".main-content",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 2 }
        );
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="hidden font-custom-font-family min-h-[100dvh] portrait:grid-rows-[0.6fr_0.4fr] landscape:grid-cols-2 relative overflow-hidden main-container">
      <IllustrationSection />
      <ContentSection />
      <div className="bg-gradient-to-b from-gradient-from to-gradient-to absolute w-1/2 landscape:w-[35%] h-1/2 landscape:h-[90%] rounded-br-full landscape:rounded-b-full top-0 left-0 landscape:left-[10%] landscape:-translate-x-1/2 left-des"></div>
      <div className="bg-app-background absolute w-1/2 landscape:w-[35%] h-1/2 landscape:h-[90%] rounded-tl-full landscape:rounded-t-full bottom-0 right-0 landscape:right-[5%] landscape:translate-x-1/2 right-des"></div>
    </div>
  );
}
