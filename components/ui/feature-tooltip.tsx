import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

interface TooltipWrapperProps {
    children: React.ReactNode;
    message?: string;
    status?: 'coming-soon' | 'in-progress' | 'beta';
    className?: string;
}

export function FeatureTooltip({
    children,
    message = 'Coming Soon!',
    status = 'coming-soon',
    className,
}: TooltipWrapperProps) {
    const styles = {
        'coming-soon': 'bg-red-50 text-red-600 border-red-100',
        'in-progress': 'bg-yellow-50 text-yellow-600 border-yellow-100',
        beta: 'bg-blue-50 text-blue-600 border-blue-100',
    };

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent side="top" className={`${styles[status]} ${className}`}>
                    {message}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
