import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  embedHtml: string;
}

const InstagramEmbed = ({ url, embedHtml }: InstagramEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reload Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="instagram-embed-container flex justify-center"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};

export default InstagramEmbed;

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
