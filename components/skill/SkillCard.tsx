import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
    skill: {
        id: string;
        name: string;
        icon: LucideIcon;
        description: string;
        proficiency: number;
        tools: string[];
        accentColor: string;
        size?: string;
    };
    index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
    const { name, icon: Icon, description, tools, accentColor, size = 'default' } = skill;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                'group',
                size === 'large' && 'md:col-span-1 md:row-span-1',
                index === 0 && 'md:col-span-1 md:row-span-1' // First card is always large
            )}
        >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div
                    className={cn(
                        'relative h-full p-6',
                        size === 'large' ? 'space-y-6' : 'space-y-4'
                    )}
                >
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div
                            className={cn('rounded-xl', size === 'large' ? 'p-4' : 'p-3')}
                            style={{ backgroundColor: `${accentColor}15` }}
                        >
                            <Icon
                                className={cn(
                                    'transition-transform group-hover:scale-110',
                                    size === 'large' ? 'h-7 w-7' : 'h-5 w-5'
                                )}
                                style={{ color: accentColor }}
                            />
                        </div>
                        <h3
                            className={cn(
                                'font-semibold tracking-tight',
                                size === 'large' ? 'text-2xl' : 'text-lg'
                            )}
                        >
                            {name}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{description}</p>

                    {/* Tools/Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <Badge
                                key={tool}
                                variant="secondary"
                                className="transition-all duration-300 group-hover:bg-accent"
                            >
                                {tool}
                            </Badge>
                        ))}
                    </div>

                    {/* Proficiency Indicator */}
                    <div
                        className="absolute bottom-0 left-0 h-1 w-full bg-muted"
                        style={{ opacity: 0.2 }}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full"
                            style={{ backgroundColor: accentColor }}
                        />
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
