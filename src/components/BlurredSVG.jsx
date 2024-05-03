const BlurredSVG = ({ width = 704, height = 532, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.3" filter="url(#filter0_f_20_161)">
        <ellipse
          cx={width * 0.2756}
          cy={height * 0.3585}
          rx="360"
          ry="190.703"
          fill="#B30DEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_20_161"
          x={width * -0.4489}
          y={height * -0.2823}
          width={width * 1.4489}
          height={height * 1.2806}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_20_161"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlurredSVG;
