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
    <div className="mb-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Browse by Name</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {alphabetRanges.map((range) => (
          <Button
            key={range.value}
            variant={selectedRange === range.value ? "premium" : "outline"}
            size="sm"
            onClick={() => onRangeSelect(selectedRange === range.value ? null : range.value)}
            className="h-10 px-4 text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            {range.label}
          </Button>
        ))}
        
        {/* Clear filter button */}
        {selectedRange && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRangeSelect(null)}
            className="h-10 px-4 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

export { AlphabeticalFilter, alphabetRanges };
export default AlphabeticalFilter;