type NavigationItemProps = {
    id: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
};

export function NavigationItem({ id, label, isActive, onClick }: NavigationItemProps) {
    return (
        <a
            href={`#${id}`}
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
            <span className="text-sm font-medium text-gray-600">{label.charAt(0)}</span>
        </a>
    );
}
