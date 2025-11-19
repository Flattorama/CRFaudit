import React from 'react';

export const MechanismFailure: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase mb-16 text-center">The Mechanism of Failure</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Column 1 */}
          <div className="border-l-2 border-slate-800 pl-6 hover:border-danger transition-colors group">
            <h3 className="text-xl font-condensed font-bold text-white uppercase mb-4 group-hover:text-danger">The Agnostic Trap</h3>
            <p className="text-slate-400 leading-relaxed">
              We are funding "social cohesion" instead of counter-terrorism. By using vague terms like "polarization" and "grievance-based violence," the government avoids naming the specific Islamist ideology driving today's terror plots.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="border-l-2 border-slate-800 pl-6 hover:border-danger transition-colors group">
            <h3 className="text-xl font-condensed font-bold text-white uppercase mb-4 group-hover:text-danger">The Exclusion of Expertise</h3>
            <p className="text-slate-400 leading-relaxed">
              Despite a historic surge in Antisemitism, zero major Jewish security bodies (like CIJA) were listed as primary partners. The people most at risk are locked out of the room.
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="border-l-2 border-slate-800 pl-6 hover:border-danger transition-colors group">
            <h3 className="text-xl font-condensed font-bold text-white uppercase mb-4 group-hover:text-danger">The 'Prevent' Warning</h3>
            <p className="text-slate-400 leading-relaxed">
              We are repeating the UK's mistakes. Without definitions like the IHRA (used by 0 projects), "anti-hate" programs can be weaponized against Jewish students, labeling their identity as a "provocation."
            </p>
          </div>
        </div>

        {/* Cycle of Exclusion Diagram */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 max-w-4xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-danger to-slate-800"></div>
           
           <h3 className="text-center font-mono text-slate-500 uppercase tracking-widest text-sm mb-12">Fig 2. The Policy Filter</h3>

           <div className="flex flex-col items-center">
              
              {/* INPUTS */}
              <div className="flex justify-center gap-16 mb-4 w-full">
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-teal/20 border-2 border-teal flex items-center justify-center mb-2">
                       <i className="fa-solid fa-flag text-teal text-2xl"></i>
                    </div>
                    <span className="text-xs font-bold text-teal uppercase">Far-Right</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-danger/20 border-2 border-danger flex items-center justify-center mb-2 animate-bounce">
                       <i className="fa-solid fa-bomb text-danger text-2xl"></i>
                    </div>
                    <span className="text-xs font-bold text-danger uppercase">Islamist</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-danger/20 border-2 border-danger flex items-center justify-center mb-2 animate-bounce" style={{animationDelay: '0.1s'}}>
                       <i className="fa-solid fa-star-of-david text-danger text-2xl"></i>
                    </div>
                    <span className="text-xs font-bold text-danger uppercase">Antisemitism</span>
                 </div>
              </div>

              {/* ARROWS DOWN */}
              <div className="flex justify-center gap-16 mb-2 w-full text-slate-600">
                 <i className="fa-solid fa-arrow-down text-2xl"></i>
                 <i className="fa-solid fa-arrow-down text-2xl text-danger"></i>
                 <i className="fa-solid fa-arrow-down text-2xl text-danger"></i>
              </div>

              {/* THE FILTER */}
              <div className="w-full max-w-2xl h-16 bg-slate-800 border-2 border-slate-600 flex items-center justify-center relative mb-8 shadow-lg z-10">
                 <span className="font-condensed font-bold text-xl text-slate-300 uppercase tracking-wider">
                    Policy Filter: Ideological Agnosticism
                 </span>
                 {/* Bouncing off visual */}
                 <div className="absolute -top-4 left-1/2 ml-4 text-danger text-4xl font-bold transform rotate-12 opacity-50">×</div>
                 <div className="absolute -top-4 right-1/2 mr-4 text-danger text-4xl font-bold transform -rotate-12 opacity-50">×</div>
              </div>

              {/* OUTPUT */}
              <div className="border-l-2 border-r-2 border-b-2 border-slate-700 rounded-b-lg p-8 w-64 text-center bg-slate-800/50">
                 <div className="font-condensed font-bold text-white text-lg uppercase mb-2">Funded Projects</div>
                 <div className="text-teal font-mono text-xs">
                    Research on Far-Right<br/>& Generic Social Programs
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};