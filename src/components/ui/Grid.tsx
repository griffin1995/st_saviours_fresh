import React from 'react';

interface GridProps {
  children: React.ReactNode;
  columns: 1 | 2 | 3 | 4 | 6;
  className?: string;
}

export function Grid({ children, columns, className = '' }: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  return (
    <div className={`grid ${gridCols[columns]} ${className}`}>
      {children}
    </div>
  );
}