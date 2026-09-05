import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  date?: string;
  tags?: string[];
  imageUrl?: string;
}

export function ContentCard({ title, description, href, date, tags, imageUrl }: ContentCardProps) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {imageUrl && (
        <div className="w-full h-48 bg-slate-200 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags?.map(tag => (
            <span key={tag} className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} className="block group-hover:text-emerald-700 transition-colors">
          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{title}</h3>
        </Link>
        <p className="text-slate-600 mb-4 line-clamp-3">
          {description}
        </p>
        {date && (
          <div className="flex items-center text-sm text-slate-500 mt-auto pt-4 border-t border-slate-100">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
        )}
      </div>
    </div>
  );
}
