import { useEffect, useRef } from "react";

const GLEAM_COMPETITION_URL =
  "https://gleam.io/BTYaY/predictmarkets-250000-giveaway";

function embedGleamWidget(container, html) {
  container.innerHTML = html;

  container.querySelectorAll("script").forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

export function GiveawayPage() {
  const gleamRef = useRef(null);

  useEffect(() => {
    if (!gleamRef.current) return;

    const embedCode = `<a class="e-widget generic-loader" href="${GLEAM_COMPETITION_URL}" rel="nofollow">PredictMarkets $250,000 Giveaway</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>`;

    embedGleamWidget(gleamRef.current, embedCode);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(0,128,237,0.28) 0%, transparent 70%), #ffffff",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        <div className="w-full max-w-[1037px]">
          <h1
            className="text-black text-center text-[30px] md:text-[45px] leading-[38px] md:leading-[53px] tracking-[-2.56px] font-normal"
            style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
          >
            PredictMarkets $250,000 Giveaway!🎉
          </h1>
        </div>

        <div ref={gleamRef} className="w-full max-w-[1037px]" />
      </div>
    </div>
  );
}
