import { SectionWrapper } from "./section-wrapper"

export function BackgroundSection() {
  return (
    <SectionWrapper direction="left">
      <section id="latar-belakang" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Latar Belakang</h2>
        <p className="text-blue-200 mb-6 max-w-3xl">
          Permasalahan yang ingin kami selesaikan dengan menggunakan teknologi OCR.
        </p>

        <div className="bg-blue-900/40 p-6 rounded-lg border border-blue-800 mb-8">
          <div className="flex gap-2 mb-4">
            <div className="bg-blue-800 p-2 rounded">
              <span className="font-bold">01</span>
            </div>
            <div className="flex-1">
              <p className="text-blue-100">
                Di lingkungan pendidikan, bagian administrasi kerap kali kewalahan menghadapi membludaknya data yang
                harus divalidasi, terutama saat penerimaan peserta didik baru setiap tahunnya. Volume dokumen seperti
                formulir pendaftaran siswa, tanda terima pembayaran, dan formulir acara membeludak, sehingga proses
                manual untuk memverifikasi dan menginput data menjadi sangat lambat dan penuh risiko kesalahan.
                Akibatnya, terjadi keterlambatan, inefisiensi operasional, dan potensi masalah seperti data yang hilang
                atau salah entry, yang dapat mengganggu kelancaran proses administrasi dan menimbulkan ketidakpuasan
                dari siswa maupun orang tua.
              </p>
            </div>
          </div>
        </div>

        <p className="text-blue-200 mb-6">
          Teknologi OSIAR yang kami kembangkan menawarkan solusi untuk mengotomatisasi ekstraksi data, mengonversi
          gambar teks dari dokumen ke format yang dapat dibaca mesin, sehingga meningkatkan efisiensi dan akurasi.
        </p>
      </section>
    </SectionWrapper>
  )
}

