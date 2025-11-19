import React from 'react';
import { AuditEntry } from '../types';

interface AuditCardProps {
  entry: AuditEntry;
  onClick: (entry: AuditEntry) => void;
}

export const AuditCard: React.FC<AuditCardProps> = ({ entry, onClick }) => {
  let badgeClass = "";
  let borderClass = "";
  
  if (entry.risk_level === "Very High") {
    badgeClass = "bg-danger text-white";
    borderClass = "border-l-4 border-l-danger";
  } else if (entry.risk_level === "High") {
    badgeClass = "bg-warning text-slate-900";
    borderClass = "border-l-4 border-l-warning";
  } else {
    badgeClass = "bg-success text-white";
    borderClass = "border-l-4 border-l-success";
  }

  return (
    <div 
      onClick={() => onClick(entry)}
      className={`group bg-slate-900 border border-slate-700 ${borderClass} p-6 cursor-pointer transition-all hover:bg-slate-800 relative overflow-hidden`}
    >
      {/* Top Row: ID and Badge */}
      <div className="flex justify-between items-start mb-4">
        {/* Reference ID hidden as per design requirements */}
        <span className="hidden font-mono text-[10px] text-slate-500 uppercase tracking-widest">
           REF: {entry.organization.substring(0,3).toUpperCase()}-25
        </span>
        <span className={`${badgeClass} ml-auto text-[10px] uppercase font-bold px-2 py-1 rounded-sm tracking-wider`}>
          {entry.risk_level} Risk
        </span>
      </div>

      {/* Title */}
      <h4 className="text-xl font-condensed font-bold text-white mb-2 uppercase leading-tight group-hover:text-orange transition-colors">
        {entry.organization}
      </h4>
      
      {/* Project Title */}
      <p className="text-xs font-mono text-slate-400 mb-6 line-clamp-2 h-8 border-b border-slate-800 pb-2">
        {entry.project_title}
      </p>

      {/* Data Block */}
      <div className="bg-slate-950 p-4 border border-slate-800 mb-4 relative pr-28 min-h-[80px] flex flex-col justify-center">
         
         {/* Mini Progress Bars */}
         <div className="space-y-3">
            <div className="flex items-center gap-2">
               <div className="w-28 text-[8px] text-slate-500 uppercase text-right leading-tight">Far-Right Focus</div>
               <div className="flex-grow h-1 bg-slate-800">
                  <div className="h-full bg-teal" style={{width: `${(entry.breakdown_scores.far_right_focus/4)*100}%`}}></div>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-28 text-[8px] text-slate-500 uppercase text-right text-danger font-bold leading-tight">Ignores Islamist Threat</div>
               <div className="flex-grow h-1 bg-slate-800">
                  <div className="h-full bg-danger" style={{width: `${(entry.breakdown_scores.islamist_focus/4)*100}%`}}></div>
               </div>
            </div>
         </div>

         {/* The Severity Stamp */}
         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-baseline justify-end leading-none pointer-events-none">
            <span 
              className="font-condensed font-bold text-[3.5rem] text-danger tracking-tighter" 
              style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
            >
                {entry.total_score}
            </span>
            <span className="text-2xl text-slate-600 mx-1 font-light">/</span>
            <span className="font-mono text-lg text-slate-500 font-medium">20</span>
         </div>

      </div>

      <div className="text-right">
         <span className="text-[10px] font-mono text-orange uppercase tracking-widest group-hover:underline underline-offset-4 decoration-orange">
            View Forensic Detail &rarr;
         </span>
      </div>
    </div>
  );
};