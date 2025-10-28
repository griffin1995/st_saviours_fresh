import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  url?: string;
  children: React.ReactNode;
}

interface LogoImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

interface LogoTextProps {
  children: React.ReactNode;
  className?: string;
}

export function Logo({ url = '#', children }: LogoProps) {
  return (
    <Link href={url} className="flex items-center gap-2">
      {children}
    </Link>
  );
}

export function LogoImage({ src, alt, title, className = '' }: LogoImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={40}
      height={40}
      className={className}
    />
  );
}

export function LogoText({ children, className = '' }: LogoTextProps) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}