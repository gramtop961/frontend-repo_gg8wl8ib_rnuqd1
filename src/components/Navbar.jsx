import { useState } from 'react';
import { Home, Newspaper, BarChart3, Info, Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda', icon: Home },
    { label: 'Berita', href: '#berita', icon: Newspaper },
    { label: 'Tentang', href: '#tentang', icon: Info },
    { label: 'Statistik', href: '#statistik', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Home className="h-5 w-5" />
            </div>
            <span className="text-gray-900">Portal Desa Sukma</span>
          </a>

          <nav className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <item.icon className="h-4 w-4 text-gray-400 group-hover:text-gray-900" />
                {item.label}
              </a>
            ))}
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <LogIn className="h-4 w-4" /> Masuk
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <item.icon className="h-4 w-4 text-gray-500" />
                  {item.label}
                </a>
              ))}
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <LogIn className="h-4 w-4" /> Masuk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
