import React, { useState, useCallback, useEffect } from 'react';
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
import { AlertTriangle, ShieldCheck, Calendar, X } from "lucide-react";
import { setAgeVerified, isAdult, calculateAge } from "@/utils/ageVerification";

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

  // Get current date info for validation
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 1-indexed for display
  const currentDay = today.getDate();
  
  const minYear = currentYear - 120; // Max age 120

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setMonth('');
      setDay('');
      setYear('');
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

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
      setError(`Please enter a year between ${minYear} and ${currentYear}.`);
      setIsSubmitting(false);
      return;
    }

    // Create date object (months are 0-indexed in JS)
    const dob = new Date(yearNum, monthNum - 1, dayNum);

    // Validate the date is real (e.g., not Feb 30, Apr 31, etc.)
    if (dob.getMonth() !== monthNum - 1 || dob.getDate() !== dayNum) {
      setError('That date doesn\'t exist. Please check your entry.');
      setIsSubmitting(false);
      return;
    }

    // Check if date is in the future
    if (dob > today) {
      setError('Date of birth cannot be in the future.');
      setIsSubmitting(false);
      return;
    }

    // Calculate and display age for verification
    const age = calculateAge(dob);
    console.log(`🎂 User entered DOB: ${monthNum}/${dayNum}/${yearNum} - Age: ${age}`);

    // Check age - must be exactly 18 or older
    if (!isAdult(dob)) {
      const yearsUntil18 = 18 - age;
      setError(`You must be 18 years or older. You are currently ${age} years old.`);
      setIsSubmitting(false);
      return;
    }

    // Store verification
    try {
      setAgeVerified(dob);
      console.log(`✅ Age verified: ${age} years old - Access granted`);
      setIsSubmitting(false);
      onVerified();
    } catch (err) {
      setError('Failed to verify age. Please try again.');
      setIsSubmitting(false);
    }
  }, [month, day, year, minYear, currentYear, today, onVerified]);

  const handleCancel = () => {
    setError('');
    setMonth('');
    setDay('');
    setYear('');
    onClose();
  };

  // Handle keyboard submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && month && day && year) {
      validateAndSubmit();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => handleCancel()}>
      <DialogContent 
        className="w-[95vw] max-w-[420px] p-4 sm:p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/30 rounded-2xl mx-auto"
        onKeyDown={handleKeyDown}
      >
        {/* Close button for mobile */}
        <button 
          onClick={handleCancel}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <DialogHeader className="space-y-3 sm:space-y-4 pt-2">
          <div className="flex items-center justify-center">
            <div className="p-3 sm:p-4 rounded-full bg-amber-500/20 animate-pulse">
              <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-amber-400">
            🔞 Age Verification Required
          </DialogTitle>
          <DialogDescription className="text-center text-gray-300 space-y-1 sm:space-y-2 px-2">
            <p className="text-sm sm:text-base">
              {toolTitle ? (
                <>Access to <span className="text-amber-300 font-semibold break-words">{toolTitle}</span> requires age verification.</>
              ) : (
                <>This content is restricted to users 18 years and older.</>
              )}
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Enter your date of birth to continue.
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-5 py-3 sm:py-4">
          {/* Date of Birth Input */}
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
              <Calendar className="w-4 h-4" />
              Date of Birth
            </Label>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div>
                <Label className="text-[10px] sm:text-xs text-gray-500 mb-1 block text-center">Month</Label>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 2);
                    setMonth(val);
                    // Auto-focus next field
                    if (val.length === 2) {
                      const dayInput = document.getElementById('age-day-input');
                      dayInput?.focus();
                    }
                  }}
                  className="bg-gray-800/70 border-gray-600 text-white text-center text-base sm:text-lg h-12 sm:h-14 focus:border-amber-500 focus:ring-amber-500/50 rounded-lg"
                  id="age-month-input"
                />
              </div>
              <div>
                <Label className="text-[10px] sm:text-xs text-gray-500 mb-1 block text-center">Day</Label>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 2);
                    setDay(val);
                    // Auto-focus next field
                    if (val.length === 2) {
                      const yearInput = document.getElementById('age-year-input');
                      yearInput?.focus();
                    }
                  }}
                  className="bg-gray-800/70 border-gray-600 text-white text-center text-base sm:text-lg h-12 sm:h-14 focus:border-amber-500 focus:ring-amber-500/50 rounded-lg"
                  id="age-day-input"
                />
              </div>
              <div>
                <Label className="text-[10px] sm:text-xs text-gray-500 mb-1 block text-center">Year</Label>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="YYYY"
                  min={minYear}
                  max={currentYear}
                  value={year}
                  onChange={(e) => setYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="bg-gray-800/70 border-gray-600 text-white text-center text-base sm:text-lg h-12 sm:h-14 focus:border-amber-500 focus:ring-amber-500/50 rounded-lg"
                  id="age-year-input"
                />
              </div>
            </div>
            
            {/* Current date display for reference */}
            <p className="text-[10px] sm:text-xs text-gray-500 text-center">
              Today is {currentMonth}/{currentDay}/{currentYear} • You must be born before {currentMonth}/{currentDay}/{currentYear - 18}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-2.5 sm:p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-xs sm:text-sm text-center animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-2.5 sm:p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-[10px] sm:text-xs text-gray-400">
            <p>
              By verifying, you confirm you are 18+ and agree to access age-restricted content. 
              Verification remembered for <strong className="text-amber-400">30 days</strong>.
            </p>
          </div>

          {/* Action Buttons - Stack on mobile */}
          <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 pt-1">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 h-11 sm:h-12 text-sm sm:text-base"
            >
              Cancel
            </Button>
            <Button
              onClick={validateAndSubmit}
              disabled={isSubmitting || !month || !day || !year || year.length < 4}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold h-11 sm:h-12 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Verifying...' : 'Verify & Continue'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;
