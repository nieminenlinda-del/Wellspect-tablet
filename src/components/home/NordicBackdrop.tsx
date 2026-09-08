export function NordicBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4c4b0" />
          <stop offset="28%" stopColor="#f0b8a4" />
          <stop offset="55%" stopColor="#c9d7e6" />
          <stop offset="100%" stopColor="#8fb4cc" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6fa0bb" />
          <stop offset="100%" stopColor="#3d6f8c" />
        </linearGradient>
        <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6d8ea6" />
          <stop offset="100%" stopColor="#3c5d74" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <ellipse cx="1180" cy="210" rx="90" ry="90" fill="#fff3e2" opacity="0.55" />
      <path d="M0 430c180-40 320-10 480 20 170 32 300-30 470-10 190 22 310 70 650 10v80H0z" fill="#d7c0b4" opacity="0.35" />
      <rect y="500" width="1600" height="400" fill="url(#water)" />
      <path d="M0 500c220 30 420-20 640 10 200 26 360 70 960 8v40H0z" fill="#8fb8cc" opacity="0.55" />
      <path d="M-40 620c180-90 340-70 500-20 140 44 220-40 390-20 210 26 280 90 760 20v320H-40z" fill="url(#rock)" />
      <path d="M220 700c80-70 170-60 230-10 40 34 90 10 140 6l40 204H180z" fill="#4d7188" opacity="0.85" />
      <path d="M980 730c90-80 210-70 290-8 50 38 90 16 160 10v168H960z" fill="#567b91" />
    </svg>
  );
}
