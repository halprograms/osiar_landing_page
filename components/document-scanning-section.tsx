"use client"

import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"
import { DocumentUpload } from "./document-upload"
import { CheckCircle, FileText, Calendar, User, Copy, Check } from "lucide-react"

interface DocumentInfo {
  fileName: string
  fileSize: string
  uploadDate: string
  status: "verified" | "processing" | "error"
  previewUrl: string
}

export function DocumentScanningSection() {
  const [documentInfo, setDocumentInfo] = useState<DocumentInfo | null>(null)
  const [copied, setCopied] = useState(false)

  const handleUploadComplete = (file: File, previewUrl: string) => {
    // In a real app, this would come from the server after processing
    setDocumentInfo({
      fileName: file.name,
      fileSize: (file.size / 1024).toFixed(1) + " KB",
      uploadDate: new Date().toLocaleDateString("id-ID"),
      status: "verified",
      previewUrl,
    })
  }

  const copyExtractedText = () => {
    const extractedText = `
Nama: John Doe
NIK: 3175********
Tanggal Lahir: 01-01-1990
Alamat: Jl. Sudirman No. 123, Jakarta
    `.trim()

    navigator.clipboard
      .writeText(extractedText)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  }

  return (
    <SectionWrapper direction="up">
      <section id="scan-dokumen" className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Scan Dokumen Anda Di Sini</h2>
          <p className="text-blue-200 mb-8">
            Submit dokumen Anda untuk mencoba prototype dari produk yang kami kembangkan
          </p>

          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto mb-8">
            <DocumentUpload onUploadComplete={handleUploadComplete} />
          </div>

          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto text-gray-500">
            <div className="h-4 mb-4">{/* Empty space to maintain layout */}</div>

            {documentInfo ? (
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    {documentInfo.previewUrl && documentInfo.previewUrl.startsWith("blob:") ? (
                      <img
                        src={documentInfo.previewUrl || "/placeholder.svg"}
                        alt="Document preview"
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <FileText className="h-8 w-8 text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{documentInfo.fileName}</h3>

                    <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Tanggal: {documentInfo.uploadDate}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        <span>Ukuran: {documentInfo.fileSize}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">Dokumen telah diverifikasi</span>
                    </div>

                    <div className="mt-3 p-3 bg-blue-50 text-blue-800 rounded-md text-sm relative group">
                      <div className="flex justify-between items-start">
                        <p className="font-medium mb-1">Hasil Ekstraksi:</p>
                        <button
                          onClick={copyExtractedText}
                          className="p-1 rounded-md hover:bg-blue-100 transition-colors"
                          aria-label="Copy extracted text"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-blue-600" />
                          )}
                        </button>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-blue-700">
                        <li>
                          Nama: <span className="font-medium">John Doe</span>
                        </li>
                        <li>
                          NIK: <span className="font-medium">3175********</span>
                        </li>
                        <li>
                          Tanggal Lahir: <span className="font-medium">01-01-1990</span>
                        </li>
                        <li>
                          Alamat: <span className="font-medium">Jl. Sudirman No. 123, Jakarta</span>
                        </li>
                      </ul>
                      {copied && (
                        <div className="absolute right-3 top-8 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md">
                          Teks disalin!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-400">Informasi tentang dokumen akan muncul di sini.</p>
            )}
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}

