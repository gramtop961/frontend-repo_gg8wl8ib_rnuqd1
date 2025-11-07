import { useMemo } from 'react';
import { BarChart3, PieChart, Users, Wallet } from 'lucide-react';

const mockResidents = [
  { dusun: 'Sukma Timur', gender: 'L', pekerjaan: 'Petani', kk: true },
  { dusun: 'Sukma Timur', gender: 'P', pekerjaan: 'Ibu Rumah Tangga', kk: false },
  { dusun: 'Sukma Barat', gender: 'L', pekerjaan: 'Buruh', kk: true },
  { dusun: 'Sukma Barat', gender: 'P', pekerjaan: 'Pelajar', kk: false },
  { dusun: 'Sukma Utara', gender: 'L', pekerjaan: 'Wiraswasta', kk: true },
  { dusun: 'Sukma Selatan', gender: 'P', pekerjaan: 'Petani', kk: false },
  { dusun: 'Sukma Selatan', gender: 'L', pekerjaan: 'Pelajar', kk: false },
  { dusun: 'Sukma Tengah', gender: 'P', pekerjaan: 'Guru', kk: false },
];

const mockAPBDes = [
  { kategori: 'Pendapatan', nilai: 1200 },
  { kategori: 'Belanja', nilai: 1050 },
  { kategori: 'Pembiayaan', nilai: 80 },
];

const mockBantuan = [
  { program: 'BLT Dana Desa', kuota: 35 },
  { program: 'Beasiswa Sukma Cerdas', kuota: 20 },
  { program: 'Bantuan Pangan', kuota: 50 },
];

function simpleGroupCount(arr, key) {
  return arr.reduce((acc, cur) => {
    const k = typeof key === 'function' ? key(cur) : cur[key];
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});
}

export default function StatsSection() {
  const byDusun = useMemo(() => {
    const g = mockResidents.reduce((acc, r) => {
      const name = r.dusun;
      if (!acc[name]) acc[name] = { L: 0, P: 0, kkL: 0, kkP: 0, total: 0 };
      acc[name][r.gender] += 1;
      if (r.kk) {
        if (r.gender === 'L') acc[name].kkL += 1; else acc[name].kkP += 1;
      }
      acc[name].total += 1;
      return acc;
    }, {});
    return g;
  }, []);

  const pekerjaanData = useMemo(() => simpleGroupCount(mockResidents, 'pekerjaan'), []);

  const totalKK = useMemo(() => Object.values(byDusun).reduce((s, v) => s + v.kkL + v.kkP, 0), [byDusun]);
  const totalJiwa = useMemo(() => mockResidents.length, []);

  return (
    <section id="statistik" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Statistik Desa</h2>
            <p className="mt-1 text-sm text-gray-600">Contoh visualisasi otomatis dari SAK & data manual</p>
          </div>
          <BarChart3 className="h-6 w-6 text-emerald-600" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700"><Users className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">Rekap Penduduk per Dusun</span></div>
            <div className="mt-4 space-y-3">
              {Object.entries(byDusun).map(([dusun, v]) => (
                <div key={dusun} className="grid grid-cols-5 items-center gap-2 text-sm">
                  <div className="col-span-2 font-medium text-gray-900">{dusun}</div>
                  <div className="text-blue-700">L {v.L}</div>
                  <div className="text-pink-700">P {v.P}</div>
                  <div className="text-gray-700">KK {v.kkL + v.kkP}</div>
                </div>
              ))}
              <div className="mt-3 border-t pt-3 text-sm text-gray-700">
                Total Jiwa: <span className="font-semibold text-gray-900">{totalJiwa}</span> • Total KK: <span className="font-semibold text-gray-900">{totalKK}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700"><PieChart className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">Kelompok Pekerjaan</span></div>
            <div className="mt-4 space-y-2">
              {Object.entries(pekerjaanData).map(([pekerjaan, count]) => (
                <div key={pekerjaan} className="flex items-center gap-3">
                  <div className="w-40 text-sm text-gray-700">{pekerjaan}</div>
                  <div className="h-2 flex-1 rounded-full bg-emerald-100">
                    <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${(count / totalJiwa) * 100}%` }} />
                  </div>
                  <div className="w-10 text-right text-sm font-medium text-gray-900">{count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-700"><Wallet className="h-4 w-4 text-emerald-600" /><span className="text-sm font-semibold">APBDes & Program Bantuan</span></div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900">APBDes</h4>
              <ul className="mt-2 space-y-1 text-sm">
                {mockAPBDes.map((r) => (
                  <li key={r.kategori} className="flex items-center justify-between">
                    <span className="text-gray-700">{r.kategori}</span>
                    <span className="font-medium text-gray-900">Rp{r.nilai.toLocaleString('id-ID')},00</span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-4 text-sm font-semibold text-gray-900">Program Bantuan</h4>
              <ul className="mt-2 space-y-1 text-sm">
                {mockBantuan.map((b) => (
                  <li key={b.program} className="flex items-center justify-between">
                    <span className="text-gray-700">{b.program}</span>
                    <span className="font-medium text-gray-900">{b.kuota} KK</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
