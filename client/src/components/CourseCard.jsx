import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const CourseCard = ({ title, subtitle, color, icon: IconPath }) => {
  return (
    <div className="flex-1 bento-card flex flex-col justify-between min-w-[250px]">
      <div className="flex justify-between items-start mb-4">
        {/* Course Icon with dynamic background color */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
          <img src={IconPath} alt={title} className="w-6 h-6 object-contain" />
        </div>
        <button className="text-slate-300 hover:text-slate-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase">
          Popular
        </span>
        <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase">
          Advance
        </span>
      </div>
    </div>
  );
};

export default CourseCard;