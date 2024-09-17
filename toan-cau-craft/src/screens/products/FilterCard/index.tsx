import React from "react";
import { X } from "lucide-react";

interface FilterCardProps {
  content: string;
  onRemove?: () => void;
}

export const FilterCard: React.FC<FilterCardProps> = ({ content, onRemove }) => {
  return (
    <div className="flex items-center bg-blue-100 text-blue-700 py-1 px-3 rounded-full mr-2">
      <span className="mr-2">{content}</span>
      {onRemove && (
        <button
          className="text-blue-700 hover:text-blue-900 focus:outline-none"
          onClick={onRemove}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
