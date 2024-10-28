import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function SocialLinks() {
    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            href: 'https://twitter.com',
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:example@email.com',
        },
    ];

    return (
        <Card>
            <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                        <Button
                            key={link.label}
                            variant="outline"
                            className="flex gap-2"
                            onClick={() => window.open(link.href, '_blank')}
                        >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
