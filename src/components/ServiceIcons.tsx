import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Grävning: Heavy excavator boom, hydraulic arm & tooth bucket digging into soil
 */
export function GravningIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Machine crawler track base */}
      <rect x="5" y="28" width="16" height="6" rx="3" />
      <circle cx="8" cy="31" r="1" fill={color} />
      <circle cx="13" cy="31" r="1" fill={color} />
      <circle cx="18" cy="31" r="1" fill={color} />
      {/* Cabin body */}
      <path d="M8 28V20H16L18 28" />
      {/* Articulated boom & arm */}
      <path d="M16 22L23 10L30 18" />
      {/* Excavator bucket with digging teeth */}
      <path d="M30 18L35 22L32 29L26 26Z" />
      <line x1="35" y1="22" x2="37" y2="25" />
      <line x1="33.5" y1="26" x2="35.5" y2="29" />
      {/* Ground cut line */}
      <path d="M22 34H35" strokeDasharray="2 2" />
    </svg>
  );
}

/**
 * 2. Byggnation: House construction frame, roof rafters & hammer
 */
export function ByggnationIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Roof truss / rafters */}
      <polyline points="6 18 20 6 34 18" />
      <line x1="20" y1="6" x2="20" y2="18" />
      <line x1="12" y1="13" x2="20" y2="18" />
      <line x1="28" y1="13" x2="20" y2="18" />
      {/* Timber wall frame */}
      <rect x="9" y="18" width="22" height="16" />
      <line x1="16" y1="18" x2="16" y2="34" />
      <line x1="23" y1="18" x2="23" y2="34" />
      <line x1="9" y1="26" x2="31" y2="26" />
      {/* Base foundation line */}
      <line x1="6" y1="34" x2="34" y2="34" />
    </svg>
  );
}

/**
 * 3. Betong: 3D concrete foundation slab & finishing float / trowel
 */
export function BetongIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Isometric concrete foundation slab */}
      <polygon points="20 8 35 15 20 22 5 15" />
      <polygon points="5 15 20 22 20 32 5 25" />
      <polygon points="35 15 20 22 20 32 35 25" />
      {/* Rebar grid lines on top slab */}
      <line x1="12" y1="11.5" x2="27" y2="18.5" opacity="0.6" />
      <line x1="27" y1="11.5" x2="12" y2="18.5" opacity="0.6" />
      {/* Concrete trowel float handle & blade */}
      <path d="M16 12L24 16" strokeWidth="2.6" />
      <path d="M20 14V9.5L24 8.5" />
    </svg>
  );
}

/**
 * 4. Maskinförare: Heavy equipment operator steering / joystick controls & industrial gear
 */
export function MaskinforareIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Industrial cogwheel / steering circle */}
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="4.5" fill={color} fillOpacity="0.15" />
      {/* Control spokes */}
      <line x1="20" y1="7" x2="20" y2="15.5" />
      <line x1="9.5" y1="26" x2="16.5" y2="22.5" />
      <line x1="30.5" y1="26" x2="23.5" y2="22.5" />
      {/* Gear teeth notches around rim */}
      <line x1="20" y1="4" x2="20" y2="7" />
      <line x1="33" y1="12.5" x2="36" y2="14" />
      <line x1="7" y1="12.5" x2="4" y2="14" />
      <line x1="29.5" y1="29.5" x2="32" y2="32" />
      <line x1="10.5" y1="29.5" x2="8" y2="32" />
    </svg>
  );
}

/**
 * 5. Skogsentreprenad: Spruce trees beside a winding forest road
 */
export function SkogIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Tall spruce */}
      <path d="M12 5L6 15H9L4.5 23H19.5L15 15H18L12 5Z" />
      <line x1="12" y1="23" x2="12" y2="28" />
      {/* Small spruce */}
      <path d="M28 11L24 18H26L23 24H33L30 18H32L28 11Z" />
      <line x1="28" y1="24" x2="28" y2="27" />
      {/* Winding forest road */}
      <path d="M17 36C19 32 24 31 27 29" />
      <path d="M25 36C26.5 33.5 30 32.5 34 31" />
      <path d="M21.5 35L22.5 33.5" strokeDasharray="1.5 2" />
    </svg>
  );
}

/**
 * 6. Fastighetsservice: House with snow on the roof and a tree beside it
 */
export function FastighetIcon({ color = '#c28447', size = 38, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', ...style }}
    >
      {/* Roof with snow layer */}
      <path d="M4 19L16 8L28 19" />
      <path d="M7.5 14.5C10 13 13 10.5 16 8C19 10.5 22 13 24.5 14.5" opacity="0.6" />
      {/* House body */}
      <path d="M7 17V33H25V17" />
      <rect x="13" y="24" width="6" height="9" />
      {/* Tree */}
      <circle cx="32" cy="20" r="4.5" />
      <line x1="32" y1="24.5" x2="32" y2="33" />
      {/* Ground */}
      <line x1="3" y1="33" x2="37" y2="33" />
    </svg>
  );
}

export function ServiceIcon({ type, color, size = 38 }: { type: string; color?: string; size?: number }) {
  switch (type) {
    case 'markarbeten':
    case 'gravning':
    case 'gravning-markarbete':
      return <GravningIcon color={color} size={size} />;
    case 'byggnation':
    case 'nybyggnation':
    case 'smahusbyggnation':
      return <ByggnationIcon color={color} size={size} />;
    case 'grundlaggning':
    case 'betong':
      return <BetongIcon color={color} size={size} />;
    case 'skogsentreprenad':
      return <SkogIcon color={color} size={size} />;
    case 'fastighetsservice':
      return <FastighetIcon color={color} size={size} />;
    case 'maskinforare':
    case 'maskintjanster':
    case 'totalentreprenad':
    case 'ombyggnation':
      return <MaskinforareIcon color={color} size={size} />;
    default:
      return <GravningIcon color={color} size={size} />;
  }
}

export default ServiceIcon;
