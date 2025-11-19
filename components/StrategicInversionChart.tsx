import React, { useEffect, useRef, useState } from 'react';

export const StrategicInversionChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionStyle = {
    transitionProperty: 'width',
    transitionDuration: '1500ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-slate-950 p-6 md:p-10 border border-slate-700 relative overflow-hidden w-full shadow-2xl rounded-sm font-sans"
    >
      {/* Added Title as requested */}
      <div className="absolute top-0 left-0 bg-slate-800 px-3 py-1 border-b border-r border-slate-700 z-20">
           <span className="text-xs font-bold text-white uppercase tracking-widest">Misaligned Priorities</span>
      </div>

      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-4 md:gap-5 items-center mb-6 md:mb-8 mt-6">
        <div className="text-left">
          <h3 className="text-danger m-0 tracking-widest text-lg md:text-xl font-condensed font-bold uppercase">THE KINETIC REALITY</h3>
          <p className="text-slate-500 text-xs md:text-sm font-mono m-0">CSIS Threat Assessment</p>
        </div>
        <div className="hidden md:block"></div>
        <div className="text-left md:text-right">
          <h3 className="text-teal m-0 tracking-widest text-lg md:text-xl font-condensed font-bold uppercase">THE PUBLIC FUNDING</h3>
          <p className="text-slate-500 text-xs md:text-sm font-mono m-0">CRF 2025 Allocation</p>
        </div>
      </div>

      {/* ROW 1: ISLAMIST */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center mb-6">
        {/* Left Bar (Threat) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-end">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-end border-l-0 md:border-l-2 border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] md:shadow-[-5px_0_15px_rgba(239,68,68,0.3)] bg-gradient-to-r from-[#7f1d1d] to-[#EF4444]"
            style={{ width: isVisible ? '95%' : '0%', ...transitionStyle }}
          >
            <span>CRITICAL</span>
          </div>
        </div>
        
        {/* Label */}
        <div className="text-center text-slate-100 font-condensed font-bold text-lg tracking-widest border-y border-slate-700 py-2 md:border-x md:border-y-0 bg-slate-950/50 md:bg-transparent md:py-0 md:h-full flex items-center justify-center">
            ISLAMIST / DAESH
        </div>

        {/* Right Bar (Funding) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-start">
           <div className="h-full w-0" style={{ width: '0%' }}></div>
           <span className={`text-danger font-bold ml-4 font-mono text-sm animate-pulse transition-opacity duration-500 delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             0% FUNDED
           </span>
        </div>
      </div>

      {/* ROW 2: ANTISEMITISM */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center mb-6">
        {/* Left Bar (Threat) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-end">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-end border-l-0 md:border-l-2 border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] md:shadow-[-5px_0_15px_rgba(239,68,68,0.3)] bg-gradient-to-r from-[#7f1d1d] to-[#EF4444]"
            style={{ width: isVisible ? '85%' : '0%', ...transitionStyle }}
          >
            <span>HIGH</span>
          </div>
        </div>

        {/* Label */}
        <div className="text-center text-slate-100 font-condensed font-bold text-lg tracking-widest border-y border-slate-700 py-2 md:border-x md:border-y-0 bg-slate-950/50 md:bg-transparent md:py-0 md:h-full flex items-center justify-center">
            ANTISEMITISM
        </div>

        {/* Right Bar (Funding) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-start">
          <div 
            className="h-full flex items-center px-2 whitespace-nowrap font-mono text-xs font-bold text-white justify-start border-r-0 md:border-r-2 border-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] md:shadow-[5px_0_15px_rgba(20,184,166,0.3)] bg-gradient-to-r from-[#14B8A6] to-[#0f766e]"
            style={{ width: isVisible ? '10%' : '0%', ...transitionStyle }}
          >
            <span className="ml-1">LOW</span>
          </div>
        </div>
      </div>

      {/* ROW 3: FAR-RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-2 md:gap-5 items-center">
        {/* Left Bar (Threat) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-end">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-end border-gray-400 bg-slate-600"
            style={{ width: isVisible ? '30%' : '0%', ...transitionStyle }}
          >
            <span>MED</span>
          </div>
        </div>

        {/* Label */}
        <div className="text-center text-slate-100 font-condensed font-bold text-lg tracking-widest border-y border-slate-700 py-2 md:border-x md:border-y-0 bg-slate-950/50 md:bg-transparent md:py-0 md:h-full flex items-center justify-center">
            FAR-RIGHT
        </div>

        {/* Right Bar (Funding) */}
        <div className="w-full h-10 bg-white/5 relative flex items-center justify-start">
          <div 
            className="h-full flex items-center px-3 whitespace-nowrap font-mono text-xs font-bold text-white justify-start border-r-0 md:border-r-2 border-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] md:shadow-[5px_0_15px_rgba(20,184,166,0.3)] bg-gradient-to-r from-[#14B8A6] to-[#0f766e]"
            style={{ width: isVisible ? '90%' : '0%', ...transitionStyle }}
          >
            <span>OVER-INDEXED</span>
          </div>
        </div>
      </div>

      {/* FAILURE OVERLAY */}
      <div className="absolute bottom-3 right-4 text-[10px] text-danger font-mono opacity-60 tracking-widest uppercase hidden md:block">
        STRATEGIC GAP DETECTED
      </div>

    </div>
  );
};