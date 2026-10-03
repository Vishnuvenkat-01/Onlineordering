interface VegToggleProps {
  vegOnly: boolean;
  onChange: (val: boolean) => void;
}

export default function VegToggle({ vegOnly, onChange }: VegToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-neutral-700">Veg Only</span>
      <button
        id="veg-toggle"
        role="switch"
        aria-checked={vegOnly}
        onClick={() => onChange(!vegOnly)}
        className={`relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300 focus:outline-none ${
          vegOnly ? 'bg-green-500' : 'bg-neutral-300'
        }`}
      >
        <span
          className={`inline-flex items-center justify-center absolute w-5 h-5 rounded-full shadow-sm transition-transform duration-300 ${
            vegOnly ? 'translate-x-8 bg-white' : 'translate-x-1 bg-white'
          }`}
        >
          {vegOnly ? (
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
          )}
        </span>
      </button>
      {vegOnly && (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
          🌱 Veg
        </span>
      )}
    </div>
  );
}
