import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CountdownBadgeProps {
  daysRemaining: number;
  className?: string;
}

const CountdownBadge: React.FC<CountdownBadgeProps> = ({ daysRemaining, className }) => {
  const getStatusColor = (days: number) => {
    if (days > 180) return 'bg-success-500';
    if (days > 60) return 'bg-warning-500';
    return 'bg-error-500';
  };

  return (
    <div
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium',
        getStatusColor(daysRemaining),
        className
      )}
    >
      <Clock className="w-4 h-4 mr-1.5" />
      <span>{daysRemaining} days remaining</span>
    </div>
  );
};

export default CountdownBadge;