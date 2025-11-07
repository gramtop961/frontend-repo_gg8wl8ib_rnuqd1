import { ArrowRight, Users, Building2, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Portal Informasi & Ruang Mesin Desa</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Satu Portal, Semua Data Desa Sukma
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Etalase publik yang indah dan sistem administrasi kependudukan (SAK) terpusat. Laporan otomatis, tanpa input ganda.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#statistik" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Lihat Statistik
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#berita" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                Baca Berita
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { icon: Users, label: 'Penduduk', value: '3.214 Jiwa' },
                { icon: Building2, label: 'Dusun', value: '5' },
                { icon: LineChart, label: 'UMKM', value: '128' },
                { icon: Users, label: 'KK', value: '897' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-emerald-600" />
                  <dt className="mt-2 text-sm text-gray-500">{label}</dt>
                  <dd className="text-lg font-semibold text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135?q=80&w=1400&auto=format&fit=crop"
                alt="Desa"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
