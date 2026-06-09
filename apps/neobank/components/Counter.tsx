import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "preact/hooks";
import { CSSProperties } from "preact/compat";

function Number({
  mv,
  number,
  height,
}: {
  mv: ReturnType<typeof useSpring>;
  number: number;
  height: number;
}) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y,
      }}
    >
      {number}
    </motion.span>
  );
}

function normalizeNearInteger(num: number) {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value: number, place: number) {
  return Math.floor(normalizeNearInteger(value / place));
}

function Digit({
  place,
  value,
  height,
  digitStyle,
}: {
  place: number | ".";
  value: number;
  height: number;
  digitStyle?: CSSProperties;
}) {
  const isDecimal = place === ".";
  const valueRoundedToPlace = isDecimal
    ? 0
    : getValueRoundedToPlace(value, place as number);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    if (!isDecimal) animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace, isDecimal]);

  if (isDecimal) {
    return (
      <span
        class="relative inline-flex items-center justify-center"
        style={{ height, width: "fit-content", ...digitStyle }}
      >
        .
      </span>
    );
  }

  return (
    <span
      class="relative inline-flex overflow-hidden"
      style={{
        height,
        position: "relative",
        width: "1ch",
        fontVariantNumeric: "tabular-nums",
        ...digitStyle,
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

export const amountPlaces = (value: number) => {
  const n = Math.max(0, Math.round(value));
  if (n === 0) return [1];
  const s = n.toString();
  return Array.from(
    { length: s.length },
    (_, i) => 10 ** (s.length - i - 1)
  );
};

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}: {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: (number | ".")[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: string | number;
  containerStyle?: CSSProperties;
  counterStyle?: CSSProperties;
  digitStyle?: CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: CSSProperties;
  bottomGradientStyle?: CSSProperties;
}) {
  const height = fontSize + padding;
  const resolvedPlaces = places ?? amountPlaces(value);

  return (
    <span style={{ position: "relative", display: "inline-block", ...containerStyle }}>
      <span
        style={{
          fontSize,
          display: "flex",
          gap,
          overflow: "hidden",
          borderRadius,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          lineHeight: 1,
          color: textColor,
          fontWeight,
          direction: "ltr",
          ...counterStyle,
        }}
      >
        {resolvedPlaces.map((place) => (
          <Digit
            key={String(place)}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </span>
      <span
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span
          style={
            topGradientStyle ?? {
              height: gradientHeight,
              background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
            }
          }
        />
        <span
          style={
            bottomGradientStyle ?? {
              height: gradientHeight,
              background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
            }
          }
        />
      </span>
    </span>
  );
}
