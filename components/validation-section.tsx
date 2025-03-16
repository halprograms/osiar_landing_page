import { SectionWrapper } from "./section-wrapper"
import { Clock, DollarSign, TrendingDown, CheckCircle } from "lucide-react"

export function ValidationSection() {
  return (
    <SectionWrapper direction="left">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Validasi OSIAR vs Manual</h2>
          <p className="text-blue-200 mb-12 max-w-3xl">
            Perbandingan biaya, waktu, dan efisiensi antara validasi menggunakan OSIAR dengan validasi manual
            tradisional
          </p>

          <div className="bg-blue-900/30 rounded-2xl p-8 backdrop-blur-sm border border-blue-800/50 mb-12">
            {/* Cost Comparison */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-300 mr-2" />
                <h3 className="text-xl font-semibold text-white">Biaya yang Dibutuhkan</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Validasi Manual</span>
                    <span className="text-blue-200 font-semibold">80%</span>
                  </div>
                  <div className="h-8 bg-blue-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Validasi OSIAR</span>
                    <span className="text-blue-200 font-semibold">20%</span>
                  </div>
                  <div className="h-8 bg-blue-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-800/30 p-4 rounded-lg">
                <div className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-blue-100 text-sm">
                    OSIAR mengurangi biaya operasional hingga <span className="font-bold text-green-400">60%</span>{" "}
                    dibandingkan dengan validasi manual tradisional.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Comparison */}
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-300 mr-2" />
                <h3 className="text-xl font-semibold text-white">Waktu yang Diperlukan</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Validasi Manual</span>
                    <span className="text-blue-200 font-semibold">75%</span>
                  </div>
                  <div className="h-8 bg-blue-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Validasi OSIAR</span>
                    <span className="text-blue-200 font-semibold">10%</span>
                  </div>
                  <div className="h-8 bg-blue-950/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-800/30 p-4 rounded-lg">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-blue-100 text-sm">
                    OSIAR memproses dokumen hingga <span className="font-bold text-green-400">10x lebih cepat</span>{" "}
                    dibandingkan dengan metode manual, menghemat waktu berharga staf Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
              <div className="bg-blue-800/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Akurasi Tinggi</h3>
              <p className="text-blue-200">
                Tingkat akurasi mencapai 99% dalam ekstraksi data dari berbagai jenis dokumen.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
              <div className="bg-blue-800/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Skalabilitas</h3>
              <p className="text-blue-200">Mampu menangani volume dokumen yang besar tanpa penurunan performa.</p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30">
              <div className="bg-blue-800/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Keamanan Data</h3>
              <p className="text-blue-200">
                Sistem enkripsi canggih menjamin keamanan data sensitif dalam proses validasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

