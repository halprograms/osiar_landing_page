import { SectionWrapper } from "./section-wrapper"
import { Mail, Phone, Send, User, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <SectionWrapper direction="down">
      <section className="bg-gradient-to-b from-black to-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Punya pertanyaan atau ingin tahu lebih lanjut tentang OSIAR? Jangan ragu untuk menghubungi kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-2xl shadow-xl border border-blue-800/50">
                <h3 className="text-2xl font-bold mb-6 text-white">Informasi Kontak</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-100">Telepon</h4>
                      <p className="text-blue-300">123-456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-100">Email</h4>
                      <p className="text-blue-300">Admin@osiar.id</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-100">Alamat</h4>
                      <p className="text-blue-300">Jl. Sudirman No. 123, Jakarta Pusat</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-blue-800/50">
                  <h4 className="text-lg font-medium text-blue-100 mb-4">Jam Operasional</h4>
                  <div className="grid grid-cols-2 gap-2 text-blue-300">
                    <div>Senin - Jumat:</div>
                    <div>09:00 - 17:00</div>
                    <div>Sabtu:</div>
                    <div>09:00 - 14:00</div>
                    <div>Minggu:</div>
                    <div>Tutup</div>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-blue-950">Konsultasi Lebih Lanjut</h3>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Jakarta Pusat, Jakarta"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white bg-blue-900"
                      placeholder="Jelaskan kebutuhan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

