import { LucideIcon } from 'lucide-react';

type NavigationItemProps = {
    id: string;
    icon: LucideIcon;
    label: string;
    isActive: boolean;
    onClick: () => void;
};

export function NavigationItem({ id, icon: Icon, label, isActive, onClick }: NavigationItemProps) {
    return (
        <a
            href={`#${id}`}
            aria-label={label}
            className={`
            flex h-10 w-10 items-center justify-center rounded-full
            transition-all duration-300 hover:bg-gray-100
            ${isActive ? 'bg-gray-200' : ''}
        `}
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                onClick();
            }}
        >
            {/* <span className="text-sm font-medium text-gray-600">{label}</span> */}
            <Icon size={20} className="text-gray-600" />
        </a>
    );
}
