import type { Highlight } from "@/src/data/highlights";

export default function Highlights({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon;

  return (
    <div className="flex gap-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 p-3.5">
        <Icon className="h-10 w-10 text-blue-600" aria-hidden="true" />
      </div>
      <div className="flex flex-col font-dm-sans">
        <h3 className="font-semibold text-lg text-[#0F172A] mb-1">{highlight.title}</h3>
        <p className="text-slate-400 text-sm">{highlight.description}</p>
      </div>
    </div>
  );
}
