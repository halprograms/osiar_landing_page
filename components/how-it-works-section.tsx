import { SectionWrapper } from "./section-wrapper"
import Image from "next/image"
import { FileCheck, FileX } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Upload Dokumen",
      description: "Unggah dokumen yang ingin diproses melalui platform OSIAR",
    },
    {
      number: 2,
      title: "Validasi Dokumen",
      description: "Sistem memeriksa kualitas dan kelengkapan dokumen yang diunggah",
      validation: true,
    },
    {
      number: 3,
      title: "Proses OCR",
      description: "Sistem mengekstrak teks dari dokumen valid dengan akurasi tinggi",
    },
    {
      number: 4,
      title: "Ekstraksi Data",
      description: "Mengidentifikasi dan mengekstrak informasi penting dari dokumen",
    },
    {
      number: 5,
      title: "Validasi Data",
      description: "Memverifikasi akurasi data yang diekstrak dengan algoritma AI",
    },
    {
      number: 6,
      title: "Hasil",
      description: "Data terstruktur siap digunakan dalam sistem Anda",
    },
  ]

  return (
    <SectionWrapper direction="up">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bagaimana Cara OSIAR Bekerja?</h2>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            OSIAR menggunakan teknologi OCR canggih untuk mengotomatisasi proses ekstraksi dan validasi data dari
            dokumen Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Flowchart - Visible on medium screens and up */}
          <div className="hidden md:block bg-blue-900/30 p-8 rounded-2xl border border-blue-800/50 overflow-hidden h-[800px]">
            <div className="relative w-full h-full">
              <Image
                src="/osiar-workflow-validation.svg"
                alt="OSIAR Workflow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30 transition-all duration-300 hover:bg-blue-900/30"
              >
                <div className="flex items-start gap-5">
                  <div className="bg-blue-800/30 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-blue-200 text-base">{step.description}</p>
                  </div>
                </div>

                {/* Document Validation Branch (only for step 2) */}
                {step.validation && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 pl-[4.5rem]">
                    <div className="bg-red-900/20 p-5 rounded-lg border border-red-800/30 flex items-center">
                      <div className="bg-red-800/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <FileX className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-red-400 mb-1">Dokumen Tidak Valid</h4>
                        <p className="text-sm text-red-300">Proses dihentikan, dokumen ditolak</p>
                      </div>
                    </div>

                    <div className="bg-green-900/20 p-5 rounded-lg border border-green-800/30 flex items-center">
                      <div className="bg-green-800/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <FileCheck className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-green-400 mb-1">Dokumen Valid</h4>
                        <p className="text-sm text-green-300">Lanjut ke proses OCR</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[7rem] mt-[1.5rem] h-[3rem] w-0.5 bg-blue-800/50"></div>
                )}
              </div>
            ))}
          </div>

          {/* Flowchart - Visible only on small screens */}
          <div className="md:hidden bg-blue-900/30 p-6 rounded-2xl border border-blue-800/50 overflow-hidden h-[650px]">
            <div className="relative w-full h-full">
              <Image
                src="/osiar-workflow-validation.svg"
                alt="OSIAR Workflow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

