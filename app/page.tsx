import { BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
        <Sparkles className="h-4 w-4 text-indigo-600" aria-hidden />
        Next.js 14 App Router
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Math AI</h1>
      <p className="max-w-2xl text-lg text-slate-600">
        TypeScript, Tailwind CSS, and Lucide Icons are ready. Use{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/app</code>
        , <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/components</code>
        , <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/lib</code>, and{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/app/api</code> as
        the project layout.
      </p>
      <div className="flex items-center gap-2 text-slate-700">
        <BookOpen className="h-5 w-5" aria-hidden />
        <span>Health check lives at /api/health</span>
      </div>
    </section>
  );
}
