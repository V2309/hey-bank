import React from 'react';

interface DoughnutChartProps {
  percentage1?: number; // e.g. 70
  percentage2?: number; // e.g. 30
  size?: number;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  percentage1 = 65,
  percentage2 = 35,
  size = 110,
}) => {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Segment 1 (Primary Blue #175CD3)
  const offset1 = circumference - (percentage1 / 100) * circumference;

  // Segment 2 (Light Sky Blue #38BDF8)
  const offset2 = circumference - (percentage2 / 100) * circumference;
  const rotation2 = (percentage1 / 100) * 360;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F3F4F6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* First slice (Sky Blue) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#38BDF8"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset2}
          strokeLinecap="round"
          fill="transparent"
          style={{
            transformOrigin: 'center',
            transform: `rotate(${rotation2}deg)`,
          }}
        />

        {/* Second slice (Brand Blue #175CD3) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#175CD3"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset1}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    </div>
  );
};
