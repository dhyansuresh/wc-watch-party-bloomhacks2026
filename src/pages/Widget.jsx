import { useEffect, useRef } from "react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

export default function SportBusyWidget() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    
    if (!iframe || iframe.dataset.sbReady) return;
    
    iframe.dataset.sbReady = "1";
    
    try {
      const url = new URL("https://www.sportbusy.com/embed/world-cup?h=100%");
      url.searchParams.set("sb_parent", window.location.href);
      iframe.src = url.toString();
    } catch (error) {
      console.error("Failed to initialize SportBusy widget iframe source:", error);
    }
  }, []);

  return (
    <div className="page-wrapper">
        <iframe
          ref={iframeRef}
          id="sportbusy-embed"
          width="100%"
          height="500"
          style={{ border: "none", borderRadius: "12px", overflow: "hidden" }}
          loading="lazy"
          title="SportBusy World Cup 2026 Widget"
        />
    </div>
  );
}