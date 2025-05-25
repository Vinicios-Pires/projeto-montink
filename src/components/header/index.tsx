import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  overrideClassName?: string;
}

const Header = ({ overrideClassName }: HeaderProps) => {
  return (
    <header
      className={classNames(
        "relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
        "text-white p-6 w-screen h-30",
        "flex items-center justify-center",
        "backdrop-blur-lg bg-opacity-90",
        "shadow-2xl border-b border-white/10",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
        "before:transform before:-skew-x-12 before:translate-x-full before:transition-transform before:duration-1000",
        "hover:before:-translate-x-full",
        overrideClassName
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-4 right-10 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute top-2 left-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex items-center space-x-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">S</span>
            </div>
          </div>
          <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl blur-md opacity-50 transform rotate-12"></div>
        </div>

        <h1 className="relative">
          <span className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent hover:from-purple-200 hover:via-pink-200 hover:to-cyan-300 transition-all duration-500">
            Smoof
          </span>
          <div className="absolute inset-0 text-4xl font-bold text-white opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm">
            Smoof
          </div>
        </h1>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex space-x-2 opacity-60">
        <div className="w-1 h-6 bg-gradient-to-b from-transparent via-purple-400 to-transparent rounded-full animate-pulse"></div>
        <div className="w-1 h-8 bg-gradient-to-b from-transparent via-pink-400 to-transparent rounded-full animate-pulse delay-200"></div>
        <div className="w-1 h-4 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full animate-pulse delay-400"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </header>
  );
};

export default Header;
