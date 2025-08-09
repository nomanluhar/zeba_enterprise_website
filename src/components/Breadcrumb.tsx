'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const paths = segments.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    href: '/' + segments.slice(0, index + 1).join('/'),
  }));

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {paths.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>/</span>
            <Link
              href={item.href}
              className={`hover:underline ${index === paths.length - 1 ? 'font-semibold text-gray-800' : 'text-blue-600'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
