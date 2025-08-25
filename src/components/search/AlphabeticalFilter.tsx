import { Button } from "@/components/ui/button";

interface AlphabeticalFilterProps {
  selectedRange: string | null;
  onRangeSelect: (range: string | null) => void;
}

const alphabetRanges = [
  { label: "A–C", value: "A-C", pattern: /^[A-Ca-c]/ },
  { label: "D–F", value: "D-F", pattern: /^[D-Fd-f]/ },
  { label: "G–I", value: "G-I", pattern: /^[G-Ig-i]/ },
  { label: "J–L", value: "J-L", pattern: /^[J-Lj-l]/ },
  { label: "M–O", value: "M-O", pattern: /^[M-Om-o]/ },
  { label: "P–R", value: "P-R", pattern: /^[P-Rp-r]/ },
  { label: "S–U", value: "S-U", pattern: /^[S-Us-u]/ },
  { label: "V–X", value: "V-X", pattern: /^[V-Xv-x]/ },
  { label: "Y–Z", value: "Y-Z", pattern: /^[Y-Zy-z]/ },
  { label: "#", value: "0-9", pattern: /^[0-9]/ },
];

const AlphabeticalFilter = ({ selectedRange, onRangeSelect }: AlphabeticalFilterProps) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
          Browse by Name
        </h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {alphabetRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => onRangeSelect(selectedRange === range.value ? null : range.value)}
            className={`
              relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
              ${selectedRange === range.value 
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50' 
                : 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/20'
              }
              backdrop-blur-sm
            `}
          >
            <span className="relative z-10">{range.label}</span>
            {selectedRange !== range.value && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
        ))}
        
        {/* Clear filter button */}
        {selectedRange && (
          <button
            onClick={() => onRangeSelect(null)}
            className="px-4 py-3 rounded-xl font-medium text-sm text-gray-400 hover:text-cyan-300 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export { AlphabeticalFilter, alphabetRanges };
export default AlphabeticalFilter;