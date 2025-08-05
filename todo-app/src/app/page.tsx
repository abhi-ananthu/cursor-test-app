'use client';

import { useTodos } from '@/hooks/useTodos';
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import TodoFilters from '@/components/TodoFilters';

export default function Home() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Todo App
            </h1>
            <p className="text-gray-600">
              Stay organized and get things done
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <AddTodo onAdd={addTodo} />
            
            <div className="mb-6">
              <TodoFilters
                filter={filter}
                onFilterChange={setFilter}
                stats={stats}
                onClearCompleted={clearCompleted}
              />
            </div>

            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
