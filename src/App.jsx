import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsList from './components/NewsList';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Pemerintah Desa Sukma. Semua hak dilindungi.</p>
          <div className="text-sm text-gray-500">Single Source of Truth • Laporan otomatis dari SAK</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <NewsList />
        <AboutSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
