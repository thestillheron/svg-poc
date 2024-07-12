import { Boundaries } from "../types";

export const DebugBorder: React.FC<Boundaries> = ({
  origin,
  height,
  width,
}) => {
  const strokeColor = "red";

  return (
    <>
      <line
        x1={origin}
        x2={origin}
        y1={origin}
        y2={height}
        stroke={strokeColor}
        strokeWidth={1}
      />
      <line
        x1={origin}
        x2={width}
        y1={height}
        y2={height}
        stroke={strokeColor}
        strokeWidth={1}
      />
      <line
        x1={width}
        x2={width}
        y1={origin}
        y2={height}
        stroke={strokeColor}
        strokeWidth={1}
      />
      <line
        x1={origin}
        x2={width}
        y1={origin}
        y2={origin}
        stroke={strokeColor}
        strokeWidth={1}
      />
    </>
  );
};
