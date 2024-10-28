import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AvailabilityCard() {
    const availableFor = ['Full-time positions', 'Contract work', 'Freelance projects'];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Available For</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {availableFor.map((item) => (
                        <Badge key={item} variant="secondary">
                            {item}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
