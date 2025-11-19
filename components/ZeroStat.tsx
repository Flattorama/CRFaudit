import React from 'react';

export const ZeroStat: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* The Zero Statistic */}
        <div className="text-center mb-20">
          <div className="inline-flex items-baseline justify-center gap-4 font-condensed font-black text-white leading-none">
            <span className="text-[8rem] md:text-[12rem] text-danger tracking-tighter">0</span>
            <span className="text-4xl md:text-6xl text-slate-600 uppercase">of 19</span>
          </div>
          <p className="text-xl font-mono text-slate-400 mt-4 max-w-2xl mx-auto">
            Projects explicitly name <span className="text-white bg-danger/20 px-1">"Islamist Extremism"</span> or <span className="text-white bg-danger/20 px-1">"Antisemitism"</span> as a primary focus.
          </p>
        </div>

        {/* Text Block */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-condensed font-bold text-white uppercase mb-6">The Sound of Silence</h2>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            This isn't an oversight; it's a systemic gap. While CSIS disrupts Daesh-inspired plots in Toronto and Ottawa involving machetes and explosives, the Community Resilience Fund (CRF) has effectively 'ghosted' the issue. We found that the portfolio is heavily over-indexed on 'ideology-agnostic' social programs and Far-Right research, leaving the primary lethal threat vectors completely unfunded.
          </p>
        </div>

        {/* Timeline: The Kinetic Reality */}
        <div className="max-w-6xl mx-auto">
           <h3 className="text-white font-condensed font-bold text-2xl uppercase mb-12 pl-4 border-l-4 border-danger">
             Timeline: The Kinetic Reality
           </h3>
           
           <div className="relative border-t-2 border-slate-800 mt-20">
              {/* The Fuse Line - Active Threat (Red) */}
              <div className="absolute top-[-2px] left-0 h-[2px] bg-danger w-3/4 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              
              {/* The Fuse Line - Bureaucratic Silence (Grey) */}
              <div className="absolute top-[-2px] left-3/4 h-[2px] bg-slate-700 w-1/4"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                 
                 {/* Point 1 */}
                 <div className="relative pt-8 md:pt-12 pl-4 md:pl-0 md:text-center">
                    <div className="absolute top-[-7px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-danger rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse"></div>
                    <div className="text-danger font-mono text-xs font-bold mb-2">LATE 2023</div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">Ottawa Youth Plot</h4>
                    <p className="text-slate-500 text-xs">Explosives / Jewish Target</p>
                 </div>

                 {/* Point 2 */}
                 <div className="relative pt-8 md:pt-12 pl-4 md:pl-0 md:text-center">
                    <div className="absolute top-[-7px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-danger rounded-full shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
                    <div className="text-danger font-mono text-xs font-bold mb-2">JULY 2024</div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">Toronto Father-Son Plot</h4>
                    <p className="text-slate-500 text-xs">ISIS Axe/Machete Attack Thwarted</p>
                 </div>

                 {/* Point 3 */}
                 <div className="relative pt-8 md:pt-12 pl-4 md:pl-0 md:text-center">
                    <div className="absolute top-[-7px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-danger rounded-full shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
                    <div className="text-danger font-mono text-xs font-bold mb-2">SEPT 2024</div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">NYC Border Plot</h4>
                    <p className="text-slate-500 text-xs">Mass Shooting at Jewish Center</p>
                 </div>

                 {/* Point 4 - The Disconnect */}
                 <div className="relative pt-8 md:pt-12 pl-4 md:pl-0 md:text-center">
                    <div className="absolute top-[-10px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-slate-800 border-2 border-teal rounded-full flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                    </div>
                    <div className="text-teal font-mono text-xs font-bold mb-2">OCT 20, 2025</div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">CRF Funding Announced</h4>
                    <p className="text-slate-500 text-xs">$36.9M Released. <span className="text-danger font-bold">0% for Islamist Threats</span></p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};