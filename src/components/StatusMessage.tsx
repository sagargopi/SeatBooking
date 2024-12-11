import React from 'react';
import { AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  message: { text: string; type: 'success' | 'error' } | null;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={`p-4 rounded-md mb-6 flex items-center gap-2 ${
      message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
    }`}>
      <AlertCircle className="w-5 h-5" />
      <p>{message.text}</p>
    </div>
  );
};