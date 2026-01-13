import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, ShieldCheck, Calendar } from "lucide-react";
import { setAgeVerified, isAdult } from "@/utils/ageVerification";

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: () => void;
  toolTitle?: string;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerified,
  toolTitle
}) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 120; // Max age 120
  const maxYear = currentYear - 18; // Must be at least 18

  const validateAndSubmit = useCallback(() => {
    setError('');
    setIsSubmitting(true);

    // Validate inputs
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);
    const yearNum = parseInt(year, 10);

    if (!month || !day || !year) {
      setError('Please enter your complete date of birth.');
      setIsSubmitting(false);
      return;
    }

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      setError('Please enter a valid month (1-12).');
      setIsSubmitting(false);
      return;
    }

    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      setError('Please enter a valid day (1-31).');
      setIsSubmitting(false);
      return;
    }

    if (isNaN(yearNum) || yearNum < minYear || yearNum > currentYear) {
      setError('Please enter a valid year.');
      setIsSubmitting(false);
      return;
    }

    // Create date object (months are 0-indexed)
    const dob = new Date(yearNum, monthNum - 1, dayNum);

    // Validate the date is real (e.g., not Feb 30)
    if (dob.getMonth() !== monthNum - 1 || dob.getDate() !== dayNum) {
      setError('Please enter a valid date.');
      setIsSubmitting(false);
      return;
    }

    // Check age
    if (!isAdult(dob)) {
      setError('You must be 18 years or older to access this content.');
      setIsSubmitting(false);
      return;
    }

    // Store verification
    try {
      setAgeVerified(dob);
      console.log('✅ Age verified successfully');
      setIsSubmitting(false);
      onVerified();
    } catch (err) {
      setError('Failed to verify age. Please try again.');
      setIsSubmitting(false);
    }
  }, [month, day, year, minYear, currentYear, onVerified]);

  const handleCancel = () => {
    setError('');
    setMonth('');
    setDay('');
    setYear('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => handleCancel()}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-amber-500/30 shadow-2xl shadow-amber-500/20">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="p-4 rounded-full bg-amber-500/20 animate-pulse">
              <AlertTriangle className="w-10 h-10 text-amber-400" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-bold text-amber-400">
            🔞 Age Verification Required
          </DialogTitle>
          <DialogDescription className="text-center text-gray-300 space-y-2">
            <p>
              {toolTitle ? (
                <>Access to <span className="text-amber-300 font-semibold">{toolTitle}</span> requires age verification.</>
              ) : (
                <>This content is restricted to users 18 years and older.</>
              )}
            </p>
            <p className="text-sm text-gray-400">
              Please enter your date of birth to continue.
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Date of Birth Input */}
          <div className="space-y-3">
            <Label className="text-gray-300 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date of Birth
            </Label>
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label className="text-xs text-gray-500 mb-1 block">Month</Label>
                <Input
                  type="number"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => setMonth(e.target.value.slice(0, 2))}
                  className="bg-gray-800/50 border-gray-600 text-white text-center text-lg focus:border-amber-500"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500 mb-1 block">Day</Label>
                <Input
                  type="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => setDay(e.target.value.slice(0, 2))}
                  className="bg-gray-800/50 border-gray-600 text-white text-center text-lg focus:border-amber-500"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500 mb-1 block">Year</Label>
                <Input
                  type="number"
                  placeholder="YYYY"
                  min={minYear}
                  max={currentYear}
                  value={year}
                  onChange={(e) => setYear(e.target.value.slice(0, 4))}
                  className="bg-gray-800/50 border-gray-600 text-white text-center text-lg focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm text-center">
              {error}
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-400">
            <p>
              By verifying your age, you confirm that you are 18 years of age or older 
              and agree to access age-restricted content. Your verification will be 
              remembered for 30 days.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={validateAndSubmit}
              disabled={isSubmitting || !month || !day || !year}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Verifying...' : 'Verify Age & Continue'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;
