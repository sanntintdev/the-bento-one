import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/types';

export function SocialLinks() {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    {SOCIAL_LINKS.map((link) => (
                        <Button
                            key={link.label}
                            variant="outline"
                            className="flex gap-2"
                            onClick={() => window.open(link.href, '_blank')}
                            disabled={!link.enable}
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
