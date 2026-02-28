import React from 'react';
import { Target, Clock, ArrowUpRight, CheckCircle2, ChevronRight, MoreHorizontal, Bookmark, MessageSquare, Play, Calendar as CalendarIcon, ChevronLeft, MoreVertical } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-white rounded-tl-[2rem] border-t border-l border-gray-100 h-full w-full overflow-y-auto p-8 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
      
      <div className="flex flex-col xl:flex-row gap-8">
          
        {/* Main Content Area (Left) */}
        <div className="flex-1 flex flex-col gap-8">
            {/* Top Widgets Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Lessons Booked */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-gray-900 font-semibold text-[15px]">Lessons took</span>
                            <span className="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md">Details</span>
                        </div>
                        <div className="flex items-end gap-3 mt-2">
                            <h2 className="text-[52px] leading-none font-bold text-gray-900 tracking-[-0.03em]">46</h2>
                            <div className="flex items-center text-orange-500 text-sm font-semibold pb-2">
                                <ArrowUpRight size={16} className="mr-0.5 relative top-0.5" />
                                <span>11%</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-[13px] mt-4 z-10 font-medium">Lessons completed</p>
                    {/* Sparkline mock */}
                    <div className="absolute bottom-6 right-6 w-28 h-12 opacity-60">
                        <svg viewBox="0 0 100 30" className="w-full h-full stroke-orange-400 fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0,25 Q15,28 25,18 T45,22 T65,8 T80,15 T100,5" />
                        </svg>
                        <div className="absolute -bottom-8 left-0 right-0 h-10 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Skill Tracker */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm col-span-2 flex flex-col h-full">
                    <h3 className="text-gray-900 font-semibold mb-5 text-[15px]">Skill tracker</h3>
                    <div className="grid grid-cols-2 gap-8 flex-1">
                        {/* Left Side: Hours spent */}
                        <div className="flex flex-col justify-center border-r border-gray-50 pr-6">
                            <div className="flex items-end gap-1 text-gray-900 mb-2">
                                <span className="text-[52px] leading-none font-bold tracking-[-0.03em]">127</span>
                                <span className="text-xl font-bold pb-1 text-gray-400">h</span>
                            </div>
                            <p className="text-gray-400 text-[13px] font-medium">Hours spent on classes</p>
                        </div>

                        {/* Right Side: Skill Progress */}
                        <div className="space-y-4 flex flex-col justify-center">
                            <SkillBar label="Design" percentage={45} color="bg-emerald-400" />
                            <SkillBar label="Management" percentage={12} color="bg-indigo-900" />
                            <SkillBar label="Software" percentage={27} color="bg-amber-400" />
                            <button className="text-indigo-500 text-[13px] font-semibold hover:text-indigo-600 self-start mt-1 flex items-center gap-1">
                                + view 6 more skills
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Middle Widgets Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Job Feed */}
                <div className="bg-[#121212] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>
                    <h3 className="font-semibold mb-5 text-[15px] flex items-center justify-between text-gray-100">
                        Job Feed 
                        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ChevronRight size={18} className="text-white"/>
                        </button>
                    </h3>
                    
                    <div className="bg-white rounded-2xl p-5 text-gray-900 relative flex-1 flex flex-col justify-between z-10 group">
                        <div>
                            <div className="flex items-center gap-3 mb-3.5">
                                <div className="w-10 h-10 bg-gray-50 rounded-[14px] flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[15px] leading-tight mb-0.5 group-hover:text-indigo-600 transition-colors">Senior product</h4>
                                    <h4 className="font-bold text-[15px] leading-tight group-hover:text-indigo-600 transition-colors">designer</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2.5 py-1 bg-gray-100/80 rounded-[8px] text-[11px] font-semibold text-gray-600 tracking-wide">$70-90k/yr</span>
                            </div>
                        </div>
                        <button className="w-full py-2.5 bg-[#121212] text-white rounded-[14px] text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-sm">
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                            Tap on card to apply
                        </button>
                    </div>
                </div>

                {/* Mock Interview */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-between items-start mb-5">
                        <div className="flex -space-x-2.5">
                            <img src="https://i.pravatar.cc/150?u=1" className="w-9 h-9 rounded-full border-[2.5px] border-white z-20" alt="avatar" />
                            <img src="https://i.pravatar.cc/150?u=2" className="w-9 h-9 rounded-full border-[2.5px] border-white z-10 relative bg-white" alt="avatar" />
                            <div className="w-9 h-9 rounded-full bg-gray-50 border-[2.5px] border-white flex items-center justify-center text-[11px] font-bold text-gray-600 z-0 relative">
                                +3
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-indigo-50/80 text-indigo-600 px-2.5 py-1 rounded-[8px] text-[11px] font-bold tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            OFFER
                        </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug tracking-[-0.01em] mb-2">Try out our Mock<br/>interview tool</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-6 font-medium">Practice to handle interviews away with no stress</p>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                    <button className="text-indigo-600 font-semibold text-[14px] hover:text-indigo-700 transition-colors">Schedule</button>
                    <button className="w-9 h-9 rounded-full bg-indigo-50/80 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors">
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                </div>
                </div>

                {/* Upload CV */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                    <h3 className="font-semibold text-gray-900 mb-1.5 text-[15px]">Upload your CV</h3>
                    <p className="text-gray-400 text-[13px] font-medium mb-5">We will review it and provide recommendations</p>
                    
                    <div className="bg-blue-50/40 rounded-2xl flex-1 flex flex-col items-center justify-center border-[1.5px] border-blue-200/60 border-dashed cursor-pointer hover:bg-blue-50/80 transition-colors group">
                        <div className="w-12 h-12 bg-blue-100/50 rounded-[14px] flex items-center justify-center text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                        </div>
                        <span className="text-blue-600 font-semibold text-[13px]">Drag & Drop file here</span>
                    </div>
                </div>

            </div>

            {/* Course Recommendations */}
            <div className="mt-2">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-gray-900 text-[15px]">Course Recommendations</h3>
                    <button className="text-indigo-600 font-semibold text-[13px] hover:text-indigo-700">View all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CourseCard 
                        title="Figma Pro" 
                        subtitle="Advanced prototyping techniques" 
                        color="bg-pink-100" 
                        tags={['Prototyp', 'Advance']} 
                        iconColor="bg-pink-200"
                    />
                    <CourseCard 
                        title="UI Design" 
                        subtitle="Design Interfaces that Engage" 
                        color="bg-[#EAE4FF]" 
                        tags={['Principle', 'Beginner']} 
                        iconColor="bg-indigo-200"
                    />
                    <CourseCard 
                        title="Sketch Advance" 
                        subtitle="Unleash Sketch's Power" 
                        color="bg-yellow-100/80" 
                        tags={['Principle', 'Advance']} 
                        iconColor="bg-yellow-200"
                    />
                </div>
            </div>
        </div>

        {/* Right Sidebar Area */}
        <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
            {/* Calendar */}
            <div className="bg-transparent border-none p-0 flex flex-col">
                <div className="flex items-center justify-between mb-4 px-2">
                    <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400">
                        <MoreHorizontal size={20} />
                    </button>
                    <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm text-[13px] font-semibold text-gray-700 cursor-pointer">
                        <CalendarIcon size={14} className="text-gray-400"/>
                        Jun <ChevronDownIcon size={14} className="text-gray-400 ml-0.5" />
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                            <div key={day} className="text-[11px] font-bold text-gray-400 flex items-center justify-center h-6">{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center">
                        {/* Empty slots for May */}
                        <div className="text-[13px] font-semibold text-gray-300 flex items-center justify-center h-8">30</div>
                        <div className="text-[13px] font-semibold text-gray-300 flex items-center justify-center h-8">31</div>
                        
                        {/* June Days */}
                        {[1, 2, 3, 4, 5, 6].map(day => (
                            <div key={day} className="text-[13px] font-semibold text-gray-700 flex items-center justify-center h-8 hover:bg-gray-50 rounded-full cursor-pointer transition-colors w-8 mx-auto">{day}</div>
                        ))}
                        <div className="text-[13px] font-semibold text-white bg-black rounded-full flex items-center justify-center h-8 w-8 mx-auto shadow-md relative">
                            7
                            <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
                        </div>
                        <div className="text-[13px] font-semibold text-gray-700 flex items-center justify-center h-8 hover:bg-gray-50 rounded-full cursor-pointer transition-colors w-8 mx-auto relative">
                            8
                            <span className="absolute bottom-1 w-1 h-1 bg-orange-400 rounded-full"></span>
                        </div>
                        {[9, 10, 11, 12, 13, 14, 15, 16].map(day => (
                            <div key={day} className="text-[13px] font-semibold text-gray-700 flex items-center justify-center h-8 hover:bg-gray-50 rounded-full cursor-pointer transition-colors w-8 mx-auto relative">
                                {day}
                                {[10, 15].includes(day) && <span className="absolute bottom-1 w-1 h-1 bg-indigo-500 rounded-full"></span>}
                            </div>
                        ))}
                        <div className="text-[13px] font-semibold text-white bg-black rounded-full flex items-center justify-center h-8 w-8 mx-auto shadow-md relative">
                            17
                            <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
                        </div>
                         <div className="text-[13px] font-semibold text-gray-700 flex items-center justify-center h-8 hover:bg-gray-50 rounded-full cursor-pointer transition-colors w-8 mx-auto relative">
                            18
                            <span className="absolute bottom-1 w-1 h-1 bg-pink-400 rounded-full"></span>
                        </div>
                        {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(day => (
                             <div key={day} className={`text-[13px] font-semibold ${day === 24 ? 'text-white bg-black rounded-full shadow-md relative' : 'text-gray-700 hover:bg-gray-50 rounded-full cursor-pointer transition-colors'} flex items-center justify-center h-8 w-8 mx-auto`}>
                                {day}
                                {day === 24 && <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>}
                            </div>
                        ))}
                         {/* Empty slots for July */}
                         {[1, 2, 3].map(day => (
                             <div key={`n-${day}`} className="text-[13px] font-semibold text-gray-300 flex items-center justify-center h-8">{day}</div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Lessons */}
            <div className="flex flex-col mt-2">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="font-bold text-gray-900 text-[14px]">Upcoming Lessons</h3>
                    <button className="text-indigo-600 font-semibold text-[12px] hover:text-indigo-700">View all</button>
                </div>
                
                <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-gray-900">
                             <MoreVertical size={16} />
                        </button>
                    </div>
                    
                    <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-4 text-pink-500">
                        {/* Simple geometric icon */}
                         <div className="w-5 h-5 bg-pink-300 rounded-full opacity-80 mix-blend-multiply relative -left-1"></div>
                         <div className="w-5 h-5 bg-purple-300 rounded-full opacity-80 mix-blend-multiply relative -right-1"></div>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 text-lg mb-1 tracking-tight">Figma Pro</h4>
                    <p className="text-gray-400 text-[12px] font-medium leading-relaxed mb-6">Real-world project-based learning</p>
                    
                    <div className="mb-6">
                        <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-2">
                            <span>12 of 20</span>
                            <span className="text-gray-900">62%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="w-[62%] h-full bg-black rounded-full"></div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button className="flex-1 bg-[#121212] py-2.5 rounded-[12px] text-white text-[13px] font-semibold hover:bg-black transition-colors">
                            Join lesson
                        </button>
                        <button className="w-10 h-10 bg-gray-50 rounded-[12px] flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
                            <Bookmark size={18} fill="currentColor" />
                        </button>
                        <button className="w-10 h-10 bg-gray-50 rounded-[12px] flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
                            <MessageSquare size={18} fill="currentColor" />
                        </button>
                    </div>
                </div>

                {/* Community Section */}
                <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm mt-4 flex items-center justify-between">
                    <div>
                         <h4 className="font-bold text-gray-900 text-[15px] mb-0.5">1350+</h4>
                         <p className="text-gray-400 text-[11px] font-medium">Members in our community</p>
                         <div className="flex -space-x-1.5 mt-2.5">
                            <img src="https://i.pravatar.cc/150?u=a" className="w-6 h-6 rounded-full border-2 border-white relative z-30" alt="avatar" />
                            <img src="https://i.pravatar.cc/150?u=b" className="w-6 h-6 rounded-full border-2 border-white relative z-20" alt="avatar" />
                            <img src="https://i.pravatar.cc/150?u=c" className="w-6 h-6 rounded-full border-2 border-white relative z-10" alt="avatar" />
                         </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-50 rounded-[10px] text-[12px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        Join
                    </button>
                </div>
            </div>

        </div>

      </div>

    </div>
  );
};

// Helper Components
const SkillBar = ({ label, percentage, color }) => (
    <div>
        <div className="flex justify-between text-[13px] mb-2 font-medium">
            <span className="text-gray-600">{label}</span>
            <span className="text-gray-900 font-bold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-[6px]">
            <div className={`${color} h-[6px] rounded-full relative`} style={{ width: `${percentage}%` }}>
            </div>
        </div>
    </div>
);

const ChevronDownIcon = ({size, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
)

const CourseCard = ({ title, subtitle, color, tags, iconColor }) => (
    <div className={`${color} rounded-3xl p-6 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1`}>
        <div className={`mb-10 relative z-10 w-16 h-16 rounded-[16px] ${iconColor} bg-opacity-50 backdrop-blur-sm flex items-center justify-center`}>
            {/* Abstract 3D shape placeholders based on title */}
             {title.includes('Figma') && (
                 <div className="w-8 h-8 rounded-full bg-pink-400 shadow-inner"></div>
             )}
             {title.includes('UI') && (
                 <div className="w-8 h-8 rounded-xl bg-indigo-400 rotate-12 shadow-inner"></div>
             )}
             {title.includes('Sketch') && (
                 <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-transparent border-b-yellow-400 shadow-inner" style={{ transform: 'scale(0.8)' }}></div>
             )}
        </div>
        <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/40 flex items-center justify-center text-gray-700 hover:bg-white/60 transition-colors">
            <MoreVertical size={16} />
        </button>
        <h4 className="font-bold text-gray-900 text-[17px] mb-1.5 relative z-10 tracking-tight">{title}</h4>
        <p className="text-gray-600 text-[13px] font-medium mb-6 relative z-10 h-10 leading-relaxed pr-4 opacity-80">{subtitle}</p>
        <div className="flex gap-2 relative z-10 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            {tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/60 rounded-[8px]">{tag}</span>
            ))}
        </div>
    </div>
);

export default Dashboard;