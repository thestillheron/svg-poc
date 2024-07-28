import { useState } from "react";
import { DebugBorder } from "../Shapes/DebugBorder";

interface Branch {
  x: number;
  nodes: {
    y: number;
  }[];
}

/**
 * Shows two parallel lines exactly one third of the screen apart.
 */
export const LiveData = () => {
  const [numLines, setNumLines] = useState(2);
  const [numNodesPerLine, setNum] = useState(2);

  // Start from the bottom and add the nodes an equal distance apart
  // but do not put a node at the top of the line
  const origin = 0;
  const height = 300;
  const width = 300;
  const lineStart = 50;
  const lineEnd = height - 30;
  const lineLength = lineEnd - lineStart;
  const distanceBetweenNodes = lineLength / numNodesPerLine;

  const branches: Branch[] = Array.from({ length: numLines }, (_, i) => {
    const x = (width / (numLines + 1)) * (i + 1);
    return {
      x,
      nodes: Array.from({ length: numNodesPerLine }, (_, j) => {
        const y = lineEnd - distanceBetweenNodes * j;
        return { y };
      }),
    };
  });

  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-row justify-start p-4">
        <label className="pr-2">Number of lines:</label>
        <input
          className="pr-2"
          type="number"
          value={numLines}
          onChange={(e) => setNumLines(parseInt(e.target.value))}
        />
        <label className="pr-2">Number of nodes per line:</label>
        <input
          className="pr-2"
          type="number"
          value={numNodesPerLine}
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <svg className="py-4 w-[500px] h-[500px]" viewBox="0 0 300 300">
          <DebugBorder origin={origin} height={height} width={width} />
          {branches.map((branch) => (
            <>
              <line
                x1={branch.x}
                y1={lineStart}
                x2={branch.x}
                y2={lineEnd}
                color="#ff7a64"
                stroke="#ff7a64"
                strokeWidth={1}
              />
              {branch.nodes.map((node) => (
                <circle cx={branch.x} cy={node.y} r={5} fill="#ff7a64" />
              ))}
            </>
          ))}
        </svg>
      </div>
    </div>
  );
};
