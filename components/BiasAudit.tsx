import React, { useState, useMemo } from 'react';
import { AUDIT_DATA } from '../constants';
import { AuditCard } from './AuditCard';
import { Modal } from './Modal';
import { AuditEntry } from '../types';

export const BiasAudit: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState<string>('All');
  const [selectedEntry, setSelectedEntry] = useState<AuditEntry | null>(null);

  const filteredData = useMemo(() => {
    return AUDIT_DATA.filter(entry => {
      const matchesSearch = entry.organization.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            entry.project_title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRisk = riskFilter === 'All' || entry.risk_level === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [searchTerm, riskFilter]);

  return (
    <section id="audit" className="container mx-auto px-4 mb-24 scroll-mt-24">
      <div className="border-b border-slate-800 pb-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-condensed font-bold text-white uppercase flex items-center gap-4">
              The Bias Audit
            </h2>
            <p className="text-slate-400 font-mono mt-2 text-sm">
              Forensic scoring of 19 funded projects. <br/>
              <a href="#methodology" className="text-orange hover:underline underline-offset-4">
                Read about our Scoring Methodology &rarr;
              </a>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
              <input 
                type="text" 
                placeholder="SEARCH DATABASE..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-slate-900 border border-slate-700 text-white text-xs font-mono rounded-none focus:ring-1 focus:ring-orange focus:border-orange block pl-10 p-3 placeholder-slate-600 uppercase tracking-wider"
              />
            </div>
            
            <div className="relative">
               <select
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value)}
                  className="w-full md:w-48 bg-slate-900 border border-slate-700 text-white text-xs font-mono rounded-none focus:ring-1 focus:ring-orange focus:border-orange block p-3 uppercase tracking-wider"
               >
                  <option value="All">ALL RISK LEVELS</option>
                  <option value="Very High">Very High Risk</option>
                  <option value="High">High Risk</option>
                  <option value="Medium">Medium Risk</option>
               </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((entry, index) => (
          <AuditCard key={index} entry={entry} onClick={setSelectedEntry} />
        ))}
        
        {filteredData.length === 0 && (
            <div className="col-span-full text-center py-20 border border-dashed border-slate-800">
                <p className="text-slate-500 font-mono uppercase">No records found.</p>
            </div>
        )}
      </div>

      <Modal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
    </section>
  );
};