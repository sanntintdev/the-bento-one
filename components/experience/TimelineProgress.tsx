import { MotionValue } from 'framer-motion';

interface TimelineProgressProps {
    progress: MotionValue<number>;
}

export function TimelineProgress({ progress }: TimelineProgressProps) {
    return (
        <div className="absolute left-0 top-0 h-full md:left-8">
            {/* Single container for line with fixed width */}
            <div className="relative h-full w-[2px]">
                {/* Background line */}
                <div className="absolute h-full w-full bg-muted" />

                {/* Progress line */}
                <div
                    className="absolute h-full w-full origin-top bg-primary"
                    style={{ transform: `scaleY(${progress})` }}
                />

                {/* Static Circle */}
                <div className="sticky top-1/2">
                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-primary" />
                </div>
            </div>
        </div>
    );
}
