
import { useState } from "react";
import { Filter, X, DollarSign, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface AdvancedSearchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onFiltersChange: (filters: any) => void;
}

const AdvancedSearchFilters = ({ isOpen, onClose, onFiltersChange }: AdvancedSearchFiltersProps) => {
  const [filters, setFilters] = useState({
    pricing: [],
    rating: [0],
    features: [],
    platform: [],
    industry: []
  });

  const pricingOptions = [
    { id: 'free', label: 'Free', icon: '🆓' },
    { id: 'freemium', label: 'Freemium', icon: '⭐' },
    { id: 'paid', label: 'Paid', icon: '💎' },
    { id: 'enterprise', label: 'Enterprise', icon: '🏢' }
  ];

  const featureOptions = [
    { id: 'api', label: 'API Access', icon: '🔌' },
    { id: 'nocode', label: 'No-Code', icon: '🎯' },
    { id: 'collaboration', label: 'Team Collaboration', icon: '👥' },
    { id: 'integration', label: 'Integrations', icon: '🔗' },
    { id: 'mobile', label: 'Mobile App', icon: '📱' },
    { id: 'opensource', label: 'Open Source', icon: '🔓' }
  ];

  const platformOptions = [
    { id: 'web', label: 'Web Browser', icon: '🌐' },
    { id: 'desktop', label: 'Desktop App', icon: '💻' },
    { id: 'mobile', label: 'Mobile App', icon: '📱' },
    { id: 'api', label: 'API Only', icon: '⚡' }
  ];

  const industryOptions = [
    { id: 'marketing', label: 'Marketing', icon: '📈' },
    { id: 'development', label: 'Development', icon: '💻' },
    { id: 'design', label: 'Design', icon: '🎨' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' }
  ];

  const handleFilterChange = (filterType: string, value: any) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters = {
      pricing: [],
      rating: [0],
      features: [],
      platform: [],
      industry: []
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-cyan-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Advanced Filters</h2>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={clearAllFilters} size="sm">
                Clear All
              </Button>
              <Button variant="ghost" onClick={onClose} size="sm">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pricing */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-cyan-400" />
                Pricing Model
              </h3>
              <div className="space-y-2">
                {pricingOptions.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={option.id}
                      checked={filters.pricing.includes(option.id)}
                      onCheckedChange={(checked) => {
                        const newPricing = checked 
                          ? [...filters.pricing, option.id]
                          : filters.pricing.filter(p => p !== option.id);
                        handleFilterChange('pricing', newPricing);
                      }}
                    />
                    <label htmlFor={option.id} className="text-gray-300 cursor-pointer flex items-center">
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2 text-cyan-400" />
                Minimum Rating
              </h3>
              <div className="space-y-4">
                <Slider
                  value={filters.rating}
                  onValueChange={(value) => handleFilterChange('rating', value)}
                  max={5}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Any Rating</span>
                  <span className="text-cyan-400">{filters.rating[0]}+ Stars</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                Features
              </h3>
              <div className="space-y-2">
                {featureOptions.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`feature-${option.id}`}
                      checked={filters.features.includes(option.id)}
                      onCheckedChange={(checked) => {
                        const newFeatures = checked 
                          ? [...filters.features, option.id]
                          : filters.features.filter(f => f !== option.id);
                        handleFilterChange('features', newFeatures);
                      }}
                    />
                    <label htmlFor={`feature-${option.id}`} className="text-gray-300 cursor-pointer flex items-center">
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Platform</h3>
              <div className="space-y-2">
                {platformOptions.map(option => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`platform-${option.id}`}
                      checked={filters.platform.includes(option.id)}
                      onCheckedChange={(checked) => {
                        const newPlatform = checked 
                          ? [...filters.platform, option.id]
                          : filters.platform.filter(p => p !== option.id);
                        handleFilterChange('platform', newPlatform);
                      }}
                    />
                    <label htmlFor={`platform-${option.id}`} className="text-gray-300 cursor-pointer flex items-center">
                      <span className="mr-2">{option.icon}</span>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry (Full Width) */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-3">Industry Focus</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {industryOptions.map(option => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`industry-${option.id}`}
                    checked={filters.industry.includes(option.id)}
                    onCheckedChange={(checked) => {
                      const newIndustry = checked 
                        ? [...filters.industry, option.id]
                        : filters.industry.filter(i => i !== option.id);
                      handleFilterChange('industry', newIndustry);
                    }}
                  />
                  <label htmlFor={`industry-${option.id}`} className="text-gray-300 cursor-pointer flex items-center">
                    <span className="mr-2">{option.icon}</span>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <div className="mt-8 text-center">
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3"
            >
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedSearchFilters;
