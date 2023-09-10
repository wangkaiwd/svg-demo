const Semicircle = () => {
  return (
    <svg width="750" height="200" viewBox="0 0 750 750">
      <defs>
        <linearGradient id="spinner-gradient">
          <stop offset="0%" stopOpacity="0.18" stopColor="#FFEAB5"/>
          <stop offset="100%" stopOpacity="1" stopColor="#FFEAB6"/>
        </linearGradient>
      </defs>
      <ellipse
        cx="375"
        cy="375"
        rx="375"
        ry="100"
        strokeWidth="16"
        stroke="#FFF"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="746"
      >
      </ellipse>
      <ellipse
        cx="375"
        cy="375"
        rx="375"
        ry="100"
        strokeWidth="16"
        stroke="url(#spinner-gradient)"
        fill="none"
        strokeDasharray="746 1492"
        strokeLinecap="round"
      >
      </ellipse>
    </svg>
  );
};

export default Semicircle;
