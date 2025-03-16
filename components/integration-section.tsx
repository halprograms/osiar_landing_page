import { SectionWrapper } from "./section-wrapper"
import { GraduationCap, Landmark, Stethoscope } from "lucide-react"

export function IntegrationSection() {
  return (
    <SectionWrapper direction="right">
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-950 to-blue-900">
        <h2 className="text-3xl font-bold mb-8">Integrasi OSIAR ke Berbagai Sektor</h2>
        <p className="text-blue-200 mb-8">OSIAR dapat diintegrasikan ke berbagai sektor</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg text-blue-950 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Pendidikan</h3>
            </div>
            <p>Solusi tepat digunakan untuk memverifikasi dan memvalidasi data dari SMP hingga Perguruan Tinggi.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-blue-950 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Landmark className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Pemerintahan</h3>
            </div>
            <p>Verifikasi dokumen untuk pendaftaran CPNS menggunakan OSIAR.</p>
          </div>

          <div className="bg-white p-6 rounded-lg text-blue-950 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Kesehatan</h3>
            </div>
            <p>OSIAR digunakan untuk memverifikasi dokumen dalam administrasi BPJS.</p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

