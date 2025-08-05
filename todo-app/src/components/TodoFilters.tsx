'use client';

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export default function TodoFilters({ filter, onFilterChange, stats, onClearCompleted }: TodoFiltersProps) {
  const filters = [
    { key: 'all' as const, label: 'All', count: stats.total },
    { key: 'active' as const, label: 'Active', count: stats.active },
    { key: 'completed' as const, label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-1">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              filter === f.key
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            }`}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>
      
      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          Clear completed ({stats.completed})
        </button>
      )}
    </div>
  );
}