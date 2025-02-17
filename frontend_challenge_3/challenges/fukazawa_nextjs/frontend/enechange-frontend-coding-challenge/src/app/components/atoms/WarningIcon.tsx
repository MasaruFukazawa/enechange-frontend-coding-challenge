import React from 'react';

interface WarningIconProps {
  warningIconSize?: number;
}

const WarningIcon: React.FC<WarningIconProps> = ({
  warningIconSize = 24 
}) => {
  return (
    <svg
      width={warningIconSize}
      height={warningIconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      aria-hidden="true" // スクリーンリーダーに無視させる
    >
      {/* 白い三角形 */}
      <polygon points="12,2 2,22 22,22" className="fill-white stroke-red-400" strokeWidth="2" />

      {/* ビックリマーク（小さめ） */}
      <line x1="12" y1="12" x2="12" y2="16" className="stroke-red-400" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.5" className="fill-red-400" />
    </svg>
  );
};

export default WarningIcon;