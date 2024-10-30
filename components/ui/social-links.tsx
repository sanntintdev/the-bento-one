import { LucideIcon } from 'lucide-react';

type SocialLinkProps = {
    href: string;
    icon: LucideIcon;
    label: string;
};

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
            aria-label={label}
        >
            <Icon size={20} className="text-gray-600" />
        </a>
    );
}
