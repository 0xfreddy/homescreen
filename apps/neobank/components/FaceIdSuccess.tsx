import { useEffect, useRef } from "preact/hooks";

const CSS = `
.fid-wrapper {
  width: 80px;
  height: 80px;
  position: relative;
}

.fid-wrapper svg {
  position: absolute;
  fill: #aaa;
  stroke: #aaa;
}

.fid-wrapper.fid-active .fid-default {
  opacity: 0;
  transform: scale(1.2);
  transition: opacity 1.5s, transform 1s;
  fill: lightblue;
  stroke: lightblue;
}

.fid-circle {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: transparent;
  box-sizing: border-box;
  position: absolute;
  opacity: 0;
}

.fid-wrapper.fid-active .fid-circle {
  opacity: 1;
  transition: opacity 0.7s, transform 2.2s;
}

.fid-circle.fid-green  { border: 3px solid #88ef88; }
.fid-circle.fid-blue   { border: 3px solid #0aaaf7; }
.fid-circle.fid-purple { border: 3px solid #ea54ea; }

.fid-wrapper.fid-active .fid-green  { transform: rotateX(360deg); }
.fid-wrapper.fid-active .fid-blue   { transform: rotateY(360deg); }
.fid-wrapper.fid-active .fid-purple { transform: rotateY(360deg) rotateX(360deg); }

.fid-wrapper.fid-completed .fid-purple {
  border: 3px solid #fff;
  transition: border 0.7s;
}

.fid-tick { opacity: 0; }

.fid-wrapper.fid-completed .fid-tick {
  stroke-dasharray: 49.497474670410156;
  stroke-dashoffset: 0;
  animation: fid-dash 0.6s linear forwards;
  stroke-opacity: 1;
  transition: stroke-opacity 0.1s step;
  opacity: 1;
}

@keyframes fid-dash {
  0%   { stroke-dashoffset: 49.497474670410156; stroke-opacity: 1; }
  60%  { stroke-dashoffset: 49.497474670410156; }
  100% { stroke-dashoffset: 0; stroke-opacity: 1; }
}
`;

export const FaceIdSuccess = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    el.classList.add("fid-active");
    const t = setTimeout(() => el.classList.add("fid-completed"), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <style>{CSS}</style>

      <div ref={wrapperRef} class="fid-wrapper">
        {/* Default face-id outline */}
        <svg class="fid-default" version="1.1" viewBox="0 0 30 30" style={{ width: 80, height: 80 }}>
          <path
            d="M12.062 20c.688.5 1.688 1 2.938 1s2.25-.5 2.938-1M20 12v2M10 12v2M15 12v4a1 1 0 0 1-1 1"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          />
          <g fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
            <path d="M26 9V6a2 2 0 0 0-2-2h-3M9 4H6a2 2 0 0 0-2 2v3M21 26h3a2 2 0 0 0 2-2v-3M4 21v3a2 2 0 0 0 2 2h3" />
          </g>
        </svg>

        {/* Spinning rings */}
        <div class="fid-circle fid-green" />
        <div class="fid-circle fid-blue" />
        <div class="fid-circle fid-purple" />

        {/* Tick SVG */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" style={{ width: 80, height: 80 }}>
          <path
            class="fid-tick"
            stroke="#FFF"
            stroke-width="5"
            fill="none"
            stroke-linecap="butt"
            stroke-linejoin="butt"
            d="M 25,45 35,55 60,30"
          />
        </svg>
      </div>

      <p style={{ color: "white", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em" }}>
        Payment confirmed
      </p>
    </div>
  );
};
