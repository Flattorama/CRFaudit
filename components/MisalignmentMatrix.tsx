import React from 'react';

export const MisalignmentMatrix: React.FC = () => {
  return (
    <section id="matrix" className="container mx-auto px-4 py-24 scroll-mt-24 border-b border-slate-800">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase">The Misalignment Matrix</h2>
        <div className="h-px flex-grow bg-slate-800"></div>
      </div>

      <div className="overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-2xl relative">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950 text-slate-500 uppercase font-mono text-xs tracking-widest border-b border-slate-700">
              <th className="px-6 py-6 font-semibold w-1/4">The Threat (Intel)</th>
              <th className="px-6 py-6 font-semibold w-1/4">The Reality (Plots)</th>
              <th className="px-6 py-6 font-semibold w-1/4">The Funding (CRF)</th>
              <th className="px-6 py-6 font-semibold w-1/4 text-right">The Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            
            {/* Row 1: Antisemitism */}
            <tr className="hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-8 align-top">
                <div className="font-condensed font-bold text-white text-2xl mb-2">ANTISEMITISM</div>
                <div className="text-sm text-slate-400 font-mono">Core driver of violent extremism</div>
              </td>
              <td className="px-6 py-8 align-top">
                <p className="text-slate-300 font-sans leading-relaxed text-sm">Central to 3 of 4 cited domestic plots (Ottawa, Toronto, NYC).</p>
              </td>
              <td className="px-6 py-8 align-top">
                <p className="text-slate-400 font-mono text-sm mb-2">Named in only 2 projects; always diluted.</p>
                <div className="text-danger font-bold uppercase text-sm tracking-wider">0 Dedicated Interventions</div>
              </td>
              <td className="px-6 py-8 align-top text-right">
                <span className="bg-danger text-white px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm">
                  Severe Gap
                </span>
              </td>
            </tr>

            {/* Row 2: Islamist / Daesh - WITH EXHIBIT A */}
            <tr className="bg-slate-800/30 relative group border-l-4 border-danger">
              <td className="px-6 py-12 align-top">
                <div className="font-condensed font-bold text-danger text-2xl mb-2">ISLAMIST / DAESH</div>
                <div className="text-sm text-slate-400 font-mono">Critical Priority</div>
                <p className="text-xs text-slate-500 mt-2">Only threat stream named in operational disruptions.</p>
              </td>
              <td className="px-6 py-12 align-top relative">
                <p className="text-slate-300 font-sans leading-relaxed text-sm mb-4">Toronto Father-Son plot (Axes/Machetes), Ottawa Youth plot (Explosives).</p>
                
                {/* Exhibit A Attachment */}
                <div className="absolute top-4 right-4 lg:-right-32 lg:top-2 w-48 bg-paper rotate-2 shadow-xl border border-slate-400 p-2 z-10 hidden lg:block transform transition-transform hover:scale-105 hover:rotate-0 duration-300">
                   {/* Paperclip visual using CSS */}
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-8 bg-slate-300 rounded-full border border-slate-400 z-20"></div>
                   <div className="bg-slate-900 p-2 h-24 flex items-center justify-center overflow-hidden relative mb-2">
                      <i className="fa-solid fa-gavel text-6xl text-slate-800 absolute"></i>
                      <div className="text-slate-500 text-[10px] font-mono absolute bottom-1 left-1">EXHIBIT A</div>
                   </div>
                   <p className="text-[9px] font-mono leading-tight text-slate-700 uppercase">
                      <strong>EVIDENCE:</strong> Weapons acquired by Daesh-inspired suspects in Toronto, July 2024.
                   </p>
                </div>
              </td>
              <td className="px-6 py-12 align-top">
                <p className="text-slate-400 font-mono text-sm mb-2">Total Silence.</p>
                <div className="text-danger font-bold uppercase text-sm tracking-wider">0 Projects Explicitly Name</div>
              </td>
              <td className="px-6 py-12 align-top text-right">
                <span className="bg-danger text-white px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  Total Failure
                </span>
              </td>
            </tr>

            {/* Row 3: Far-Right */}
            <tr className="hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-8 align-top">
                <div className="font-condensed font-bold text-teal text-2xl mb-2">FAR-RIGHT / IMVE</div>
                <div className="text-sm text-slate-400 font-mono">Monitor</div>
              </td>
              <td className="px-6 py-8 align-top">
                <p className="text-slate-300 font-sans leading-relaxed text-sm">Zero specific plots cited as 2024-2025 operational examples.</p>
              </td>
              <td className="px-6 py-8 align-top">
                <p className="text-slate-400 font-mono text-sm mb-2">Primary focus of 3 major research projects.</p>
                <div className="text-teal font-bold uppercase text-sm tracking-wider">Heavily Resourced</div>
              </td>
              <td className="px-6 py-8 align-top text-right">
                <span className="bg-teal text-slate-900 px-3 py-1 font-condensed font-bold uppercase tracking-widest text-sm rounded-sm">
                  Over-Indexed
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
};