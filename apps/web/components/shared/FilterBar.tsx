'use client';

import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  className?: string;
}

export function FilterBar({ options, activeFilter, onFilterChange, className = '' }: FilterBarProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === option.id
              ? 'bg-emerald-800 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-emerald-700'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
