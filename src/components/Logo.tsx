'use client';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center gap-2">
      {/* SVG Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
      >
        {/* Prism/Diamond shape */}
        <path
          d="M20 5L35 25H5L20 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        {/* Inner reflection lines */}
        <line x1="20" y1="5" x2="20" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="12.5" y1="15" x2="27.5" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>

      {/* Text */}
      <div className="hidden sm:block">
        <h1 className="font-display text-xl font-bold text-light leading-tight">
          Cienfuegos
        </h1>
        <p className="text-xs text-accent font-light tracking-widest">GLASS</p>
      </div>
    </a>
  );
};

export default Logo;
