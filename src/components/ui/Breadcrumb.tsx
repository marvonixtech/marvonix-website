import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 text-slate-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
