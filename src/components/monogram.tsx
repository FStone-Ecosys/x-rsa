/** Abstract placeholder art: dark gradient, magenta/cyan glow, initials. No photos of people. */
export function Monogram({
  label,
  hue = 330,
  className = "",
}: {
  label: string;
  hue?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden bg-bg ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 30% 25%, hsl(${hue} 85% 50% / 0.55), transparent 60%), radial-gradient(circle at 80% 85%, rgb(24 212 224 / 0.22), transparent 55%), linear-gradient(160deg, #141017, #050308)`,
      }}
    >
      <span className="font-display text-fg/90 drop-shadow-[0_0_18px_rgb(225_29_138_/_0.7)]">
        {label}
      </span>
    </div>
  );
}
