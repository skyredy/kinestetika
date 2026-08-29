import { useState } from 'react';
import { media, type MediaKey } from '../../data/media';

type Props = {
  name: MediaKey;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function Img({ name, sizes = '(max-width: 900px) 100vw, 50vw', className = '', imgClassName = '', priority = false }: Props) {
  const asset = media[name];
  const [loaded, setLoaded] = useState(false);
  if (!asset) return null;

  return (
    <div
      className={`relative overflow-hidden bg-line ${className}`}
      style={{ backgroundImage: `url(${asset.lqip})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img
        src={asset.src}
        srcSet={asset.srcSet}
        sizes={sizes}
        alt={asset.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-[900ms] ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  );
}
