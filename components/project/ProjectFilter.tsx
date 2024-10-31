import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
    currentFilter: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFilterChange: (filter: any) => void;
}

export function ProjectFilter({ currentFilter, onFilterChange }: ProjectFilterProps) {
    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'backend', label: 'Backend' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full Stack' },
    ];

    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
                <motion.div key={filter.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        variant={currentFilter === filter.id ? 'default' : 'outline'}
                        onClick={() => onFilterChange(filter.id)}
                        size="sm"
                    >
                        {filter.label}
                    </Button>
                </motion.div>
            ))}
        </div>
    );
}
