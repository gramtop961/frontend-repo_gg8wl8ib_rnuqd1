import { Newspaper } from 'lucide-react';

const demoNews = [
  {
    id: 1,
    title: 'Musyawarah Desa: Penyusunan APBDes 2026',
    excerpt: 'Pemerintah Desa Sukma mengadakan musyawarah untuk menyusun APBDes 2026 dengan partisipasi warga.',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1200&auto=format&fit=crop',
    date: '07 Nov 2025',
  },
  {
    id: 2,
    title: 'UMKM Expo: Produk Lokal Mendunia',
    excerpt: 'Puluhan UMKM desa menampilkan produk unggulannya dalam expo tingkat kabupaten.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    date: '02 Nov 2025',
  },
  {
    id: 3,
    title: 'Gotong Royong: Bersih-Bersih Sungai',
    excerpt: 'Warga bergotong royong membersihkan aliran sungai sebagai bagian dari program lingkungan.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    date: '25 Okt 2025',
  },
];

export default function NewsList() {
  return (
    <section id="berita" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Berita Desa</h2>
            <p className="mt-1 text-sm text-gray-600">Rangkuman informasi terbaru dari Desa Sukma</p>
          </div>
          <Newspaper className="h-6 w-6 text-emerald-600" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoNews.map((news) => (
            <article key={news.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={news.image} alt={news.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <time className="text-xs text-gray-500">{news.date}</time>
                <h3 className="mt-1 line-clamp-2 text-base font-semibold text-gray-900">{news.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{news.excerpt}</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">Baca selengkapnya →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
