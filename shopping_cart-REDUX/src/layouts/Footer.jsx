export const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-8">
          
          {/* COPYRIGHT */}
          <p className="text-center text-xs font-medium tracking-tight text-slate-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-sky-600">
              Today Need
            </span>
            <span className="ml-1 text-slate-400">|</span> All rights reserved.
          </p>

          {/* DEVELOPER */}
          <div className="flex items-center gap-2">
            <div className="h-px w-4 bg-slate-200 hidden sm:block"></div>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
              Designed & Developed by{" "}
              <span className="cursor-pointer text-slate-900 underline decoration-sky-500/30 underline-offset-4 transition-all duration-300 hover:text-sky-600 hover:decoration-sky-600">
                Mohammad Ibrahim
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};