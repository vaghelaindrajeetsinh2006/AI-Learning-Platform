import React from 'react';
import { 
  Code, FileCode, Cpu, Binary, Palette, MessageSquare, 
  Layers, Terminal, Globe, Sparkles, Layout, Database, Brackets
} from 'lucide-react';

interface TechSymbolProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'icon' | 'pill';
  showLabel?: boolean;
}

export const TechSymbol: React.FC<TechSymbolProps> = ({
  name,
  size = 'md',
  variant = 'badge',
  showLabel = true,
}) => {
  const normalized = name.toLowerCase().trim();

  // Determine Symbol config
  let symbolContent: React.ReactNode = null;
  let bgClass = 'bg-slate-100 text-slate-700 border-slate-200';
  let label = name;

  if (normalized.includes('html') || normalized === 'web-dev' || normalized === 'web development') {
    label = 'HTML5';
    bgClass = 'bg-orange-50 text-orange-600 border-orange-200';
    symbolContent = (
      <span className="font-mono font-extrabold tracking-tighter">
        &lt;/&gt;
      </span>
    );
  } else if (normalized.includes('css')) {
    label = 'CSS3';
    bgClass = 'bg-sky-50 text-sky-600 border-sky-200';
    symbolContent = (
      <span className="font-mono font-black text-xs">
        #css
      </span>
    );
  } else if (normalized.includes('javascript') || normalized.includes('js')) {
    label = 'JavaScript';
    bgClass = 'bg-amber-50 text-amber-600 border-amber-300';
    symbolContent = (
      <span className="font-mono font-black text-xs">
        JS
      </span>
    );
  } else if (normalized.includes('python')) {
    label = 'Python';
    bgClass = 'bg-emerald-50 text-emerald-700 border-emerald-300';
    symbolContent = (
      <span className="font-mono font-black text-xs flex items-center gap-0.5">
        <Terminal className="w-3.5 h-3.5 text-emerald-600" />
        Py
      </span>
    );
  } else if (normalized.includes('dsa') || normalized.includes('data structures') || normalized.includes('algorithms') || normalized.includes('binary') || normalized.includes('recursion')) {
    label = 'DSA & Logic';
    bgClass = 'bg-purple-50 text-purple-700 border-purple-200';
    symbolContent = (
      <span className="font-mono font-bold text-xs flex items-center gap-0.5">
        <Binary className="w-3.5 h-3.5 text-purple-600" />
        01
      </span>
    );
  } else if (normalized.includes('ai') || normalized.includes('artificial intelligence') || normalized.includes('machine learning') || normalized.includes('neural')) {
    label = 'AI / ML';
    bgClass = 'bg-amber-50 text-amber-700 border-amber-300';
    symbolContent = (
      <span className="font-mono font-extrabold text-xs flex items-center gap-0.5">
        <Cpu className="w-3.5 h-3.5 text-amber-600" />
        AI✦
      </span>
    );
  } else if (normalized.includes('ui') || normalized.includes('ux') || normalized.includes('design') || normalized.includes('wireframing')) {
    label = 'UI/UX';
    bgClass = 'bg-rose-50 text-rose-600 border-rose-200';
    symbolContent = (
      <span className="font-mono font-bold text-xs flex items-center gap-0.5">
        <Palette className="w-3.5 h-3.5 text-rose-500" />
        UI
      </span>
    );
  } else if (normalized.includes('communication') || normalized.includes('career') || normalized.includes('presentation')) {
    label = 'Comm';
    bgClass = 'bg-cyan-50 text-cyan-700 border-cyan-200';
    symbolContent = (
      <span className="font-mono font-bold text-xs flex items-center gap-0.5">
        <MessageSquare className="w-3.5 h-3.5 text-cyan-600" />
        Talk
      </span>
    );
  } else if (normalized.includes('react')) {
    label = 'React';
    bgClass = 'bg-cyan-50 text-cyan-600 border-cyan-200';
    symbolContent = <span className="font-mono font-black text-xs">⚛ React</span>;
  } else if (normalized.includes('database') || normalized.includes('sql')) {
    label = 'SQL';
    bgClass = 'bg-indigo-50 text-indigo-700 border-indigo-200';
    symbolContent = <span className="font-mono font-black text-xs flex items-center gap-0.5"><Database className="w-3 h-3"/>SQL</span>;
  } else {
    bgClass = 'bg-slate-100 text-slate-700 border-slate-200';
    symbolContent = <Brackets className="w-3.5 h-3.5" />;
  }

  if (variant === 'icon') {
    return (
      <div 
        className={`inline-flex items-center justify-center rounded-xl border font-bold shadow-2xs ${bgClass} ${
          size === 'sm' ? 'w-8 h-8 text-xs' : 
          size === 'lg' ? 'w-14 h-14 text-base' : 
          size === 'xl' ? 'w-16 h-16 text-lg' : 
          'w-11 h-11 text-sm'
        }`}
        title={name}
      >
        {symbolContent}
      </div>
    );
  }

  return (
    <span 
      className={`inline-flex items-center gap-1.5 rounded-lg border font-semibold ${bgClass} ${
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' :
        size === 'lg' ? 'px-3.5 py-1.5 text-sm' :
        'px-2.5 py-1 text-xs'
      }`}
    >
      <span className="shrink-0">{symbolContent}</span>
      {showLabel && <span>{name}</span>}
    </span>
  );
};
