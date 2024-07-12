import { DebugBorder } from "../Shapes/DebugBorder";

/**
 * Shows two parallel lines exactly one third of the screen apart.
 */
export const ParallelLines = () => {
  const origin = 0;
  const height = 300;
  const width = 300;
  const start = 50;
  const lineOneStart = (width / 3) * 1;
  const lineTwoStart = (width / 3) * 2;

  return (
    <div className="flex flex-row justify-center items-center w-full h-full">
      <svg className="py-4 w-[500px] h-[500px]" viewBox="0 0 300 300">
        <DebugBorder origin={origin} height={height} width={width} />
        <line
          x1={lineOneStart}
          y1={start}
          x2={lineOneStart}
          y2={height}
          stroke="white"
          strokeWidth={1}
        />
        <line
          x1={lineTwoStart}
          y1={start}
          x2={lineTwoStart}
          y2={height}
          stroke="white"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
};
