import React, { useState } from 'react';
import { FileText, RefreshCw } from 'lucide-react';

export default function PolymerInput({ onSubmit, isLoading }) {
  const [polymerName, setPolymerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (polymerName.trim()) {
      onSubmit(polymerName);
    }
  };

  const handlePolymerNameChange = (e) => {
    setPolymerName(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold">Polymer Name Input</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Polymer Name</label>
          <input
            type="text"
            value={polymerName}
            onChange={handlePolymerNameChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter polymer name (e.g., Polyethylene)"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !polymerName.trim()}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            'Predict Properties'
          )}
        </button>
      </form>
    </div>
  );
}
