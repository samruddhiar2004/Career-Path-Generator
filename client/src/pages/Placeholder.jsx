import React from 'react';

const Placeholder = ({ title }) => {
    return (
        <div className="bg-white rounded-tl-[2rem] border-t border-l border-gray-100 h-full w-full overflow-y-auto p-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)] flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-500">This page is under construction. Please refer to the Dashboard for the main implementation.</p>
            </div>
        </div>
    );
};

export default Placeholder;
