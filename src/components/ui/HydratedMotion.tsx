type HydratedMotionProps = {
  children: React.ReactNode;
  fullAnimation?: any;
  reducedAnimation?: any;
  fallback?: React.ReactNode;
  className?: string;
};

// Static wrapper component - no animations
export function HydratedMotion({
  children,
  className = '',
}: HydratedMotionProps) {
  return <div className={className}>{children}</div>;
}
