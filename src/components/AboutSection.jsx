import { Building, Users2, Store, Map } from 'lucide-react';

const aparat = [
  { jabatan: 'Kepala Desa', nama: 'Sutarma', kontak: '0812-1234-5678' },
  { jabatan: 'Sekretaris Desa', nama: 'Rina Sasmita', kontak: '0813-5555-9911' },
];

const lembaga = [
  { nama: 'BPD', ketua: 'Heri Kurniawan' },
  { nama: 'PKK', ketua: 'Siti Aminah' },
  { nama: 'Karang Taruna', ketua: 'Bima Putra' },
];

const umkm = [
  { nama: 'Kopi Sukma', sektor: 'Kuliner', pemilik: 'Dewi' },
  { nama: 'Batik Sukma', sektor: 'Kerajinan', pemilik: 'Yanto' },
  { nama: 'Sayur Organik Sejahtera', sektor: 'Pertanian', pemilik: 'Lia' },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tentang Desa</h2>
            <p className="mt-1 text-sm text-gray-600">Profil singkat desa, perangkat, lembaga, UMKM, dan batas wilayah</p>
          </div>
          <Building className="h-6 w-6 text-emerald-600" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700"><Users2 className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">Perangkat Desa</span></div>
            <ul className="mt-3 divide-y">
              {aparat.map((a) => (
                <li key={a.jabatan} className="flex items-center justify-between py-2 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">{a.jabatan}</p>
                    <p className="text-gray-600">{a.nama}</p>
                  </div>
                  <a href={`tel:${a.kontak}`} className="text-emerald-700 hover:text-emerald-800">{a.kontak}</a>
                </li>
              ))}
            </ul>

            <h4 className="mt-5 text-sm font-semibold text-gray-900">Lembaga Desa</h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {lembaga.map((l) => (
                <li key={l.nama} className="rounded-lg border border-gray-200 p-3 text-sm">
                  <div className="font-medium text-gray-900">{l.nama}</div>
                  <div className="text-gray-600">Ketua: {l.ketua}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700"><Store className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">UMKM Desa</span></div>
            <ul className="mt-3 grid gap-3">
              {umkm.map((u) => (
                <li key={u.nama} className="flex items-center justify-between rounded-lg border border-gray-200 p-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">{u.nama}</p>
                    <p className="text-gray-600">{u.sektor} • {u.pemilik}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">Aktif</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-gray-700"><Map className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">Potensi Desa</span></div>
                <p className="mt-2 text-sm text-gray-600">Pertanian organik, wisata sungai, dan kerajinan batik tulis menjadi unggulan ekonomi desa.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-2 text-gray-700"><Map className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">Batas Wilayah</span></div>
                <p className="mt-2 text-sm text-gray-600">Utara: Desa Lestari • Timur: Desa Rukun • Selatan: Desa Maju • Barat: Desa Damai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
