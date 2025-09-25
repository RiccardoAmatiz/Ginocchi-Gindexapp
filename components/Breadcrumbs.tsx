import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  path: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="p-2 text-sm text-gray-400">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link to={item.path} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </>
            ) : (
              <span className="text-white font-bold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
