import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex mb-4 text-sm text-slate-500">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <a href={crumb.href} className="hover:text-emerald-700">{crumb.label}</a>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-emerald-900">{title}</h1>
        {description && (
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
