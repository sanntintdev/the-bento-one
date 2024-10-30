import {
    Briefcase,
    Code2,
    FolderCode,
    Github,
    LampDesk,
    Linkedin,
    Mail,
    MessageCircle,
    RssIcon,
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
    { id: 'hero', icon: LampDesk, label: 'Home' },
    { id: 'projects', icon: FolderCode, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'contact', icon: MessageCircle, label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
    { href: 'https://github.com/sanntintdev', icon: Github, label: 'GitHub', enable: true },
    {
        href: 'https://www.linkedin.com/public-profile/settings',
        icon: Linkedin,
        label: 'LinkedIn',
        enable: true,
    },
    { href: 'mailto:sanntintaung.dev@email.com', icon: Mail, label: 'Email', enable: true },
    { href: 'https://medium.com', icon: RssIcon, label: 'Medium', enable: false },
] as const;
