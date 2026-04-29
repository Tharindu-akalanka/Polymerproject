import React, { useRef } from 'react';
import { CheckCircle2, Circle, Paperclip, Upload } from 'lucide-react';

const StepCard = ({ step, isAuthenticated, onToggle, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(step.id, file.name);
    }
  };
  return (
    <div 
      className={`glass-card p-4 transition-all duration-300 flex items-center justify-between ${
        step.completed ? 'border-eco-light shadow-eco-light/20' : 'hover:border-eco-light/50'
      } ${isAuthenticated ? 'cursor-pointer' : ''}`}
      onClick={() => isAuthenticated && onToggle(step.id)}
    >
      <div className="flex items-center gap-4">
        <div className={`transition-colors duration-300 ${step.completed ? 'text-eco-light' : 'text-gray-400'}`}>
          {step.completed ? (
            <CheckCircle2 size={28} className="animate-in zoom-in duration-300" />
          ) : (
            <Circle size={28} />
          )}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold text-lg transition-colors duration-300 ${step.completed ? 'text-white' : 'text-gray-300'}`}>
            {step.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
            <p className={`text-sm ${step.completed ? 'text-eco-light' : 'text-gray-500'}`}>
              {step.completed ? 'Completed' : 'Pending'}
            </p>
            {step.attachment && (
              <div className="flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-md w-fit">
                <Paperclip size={12} />
                <span className="truncate max-w-[150px]">{step.attachment}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {isAuthenticated && (
          <>
            <div>
              <input 
                type="file" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-colors flex items-center justify-center"
                title="Upload file"
              >
                <Upload size={18} />
              </button>
            </div>
            <div className="relative">
              <div className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                step.completed ? 'bg-eco-light' : 'bg-gray-600'
              }`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  step.completed ? 'left-5' : 'left-1'
                }`} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepCard;
