// Single-color SVG recreation of the Eco-Pathways emblem: a broken ring
// (the original's two-tone arcs unified into one color) around a sprout.
// Uses `currentColor` so it inherits whatever text color it's placed in.
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="33"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="89.8 13.8"
        transform="rotate(102 50 50)"
      />
      <path
        d="M50 73 L50 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 57 C40 57 35 51 35 42 C44 43 49 48 50 57 Z"
        fill="currentColor"
      />
      <path
        d="M50 57 C60 57 65 51 65 42 C56 43 51 48 50 57 Z"
        fill="currentColor"
      />
    </svg>
  );
}
