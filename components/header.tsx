import { Calculator } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-4">
        <Calculator className="h-5 w-5 text-indigo-600" aria-hidden />
        <span className="font-semibold tracking-tight">Math AI</span>
      </div>
    </header>
  );
}
