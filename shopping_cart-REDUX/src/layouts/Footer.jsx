export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row sm:py-6">
          {/* COPYRIGHT */}
          <p className="text-center text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-sky-400">
              Today Need
            </span>
            . All rights reserved.
          </p>

          {/* DEVELOPER */}
          <p className="text-center text-[11px] font-medium tracking-[0.15em] text-slate-500 uppercase sm:text-xs">
            Designed & Developed by{" "}
            <span className="text-slate-300 transition-colors duration-300 hover:text-sky-400">
              Mohammad Ibrahim
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};