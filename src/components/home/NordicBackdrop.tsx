export function NordicBackdrop() {
  return (
    <div className="home-hero" aria-hidden>
      <svg
        className="home-hero-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a3a72" />
            <stop offset="18%" stopColor="#8a4e7a" />
            <stop offset="38%" stopColor="#d27b7a" />
            <stop offset="55%" stopColor="#f0b08a" />
            <stop offset="68%" stopColor="#f6d0b4" />
            <stop offset="100%" stopColor="#c9a0b8" />
          </linearGradient>
          <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9a8b4" />
            <stop offset="22%" stopColor="#c48aa4" />
            <stop offset="55%" stopColor="#6a7ea8" />
            <stop offset="100%" stopColor="#3a4e72" />
          </linearGradient>
          <radialGradient id="hero-sun" cx="72%" cy="42%" r="18%">
            <stop offset="0%" stopColor="#fff4d8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ffd2a8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd2a8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
          </linearGradient>
          <filter id="hero-soft" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="hero-mist" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <rect width="1600" height="900" fill="url(#hero-sky)" />
        <circle cx="1180" cy="390" r="220" fill="url(#hero-sun)" />
        <ellipse cx="980" cy="300" rx="340" ry="70" fill="#f8dcc8" opacity="0.28" filter="url(#hero-mist)" />
        <ellipse cx="420" cy="250" rx="280" ry="60" fill="#e8c0d0" opacity="0.22" filter="url(#hero-mist)" />

        <path
          d="M0 430c200-36 360 8 560 18 210 10 320-48 520-18 170 26 280 10 520-40v70H0z"
          fill="#c98aa0"
          opacity="0.35"
          filter="url(#hero-soft)"
        />

        <rect y="500" width="1600" height="400" fill="url(#hero-water)" />
        <path d="M0 500h1600v40H0z" fill="url(#hero-haze)" />
        <path
          d="M0 520c180 18 340-22 520-8 200 16 340 48 560 8 180-32 300-10 520 16v24H0z"
          fill="#f0c8c0"
          opacity="0.28"
        />
        <path
          d="M0 560c220-20 400 20 640 8 220-12 360 30 960-8v30H0z"
          fill="#ffffff"
          opacity="0.08"
        />

        <path
          d="M-40 640c200-80 380-40 560 8 160 42 260-36 430-12 200 28 300 70 690 10v254H-40z"
          fill="#3d536e"
          opacity="0.55"
        />
        <path
          d="M180 710c90-64 190-52 250 0 48 40 110 8 170 4l36 186H140z"
          fill="#2f445c"
          opacity="0.7"
        />
        <path
          d="M1020 740c100-70 230-58 310 0 48 36 96 12 180 8v152H1000z"
          fill="#2c3f54"
          opacity="0.65"
        />
      </svg>
      <div className="home-hero-veil" />
    </div>
  );
}
