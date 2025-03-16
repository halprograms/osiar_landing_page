"use client"

import type React from "react"

import { useState, useRef, type ChangeEvent } from "react"
import {
  Upload,
  Check,
  AlertCircle,
  Loader2,
  FileText,
  GraduationCap,
  FileCheck,
  CreditCard,
  Briefcase,
  Building,
  FileSignature,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocumentUploadProps {
  onUploadComplete?: (file: File, previewUrl: string, documentType: string) => void
}

// Document type interface
interface DocumentType {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  disabled?: boolean
  details: {
    format: string
    requirements: string[]
    usedFor: string
  }
}

export function DocumentUpload({ onUploadComplete }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [documentType, setDocumentType] = useState<string | null>(null)
  const [step, setStep] = useState<"select-type" | "upload-file">("select-type")
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Document types
  const documentTypes: DocumentType[] = [
    {
      id: "ijazah",
      name: "Ijazah",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Ijazah sekolah atau universitas",
      disabled: false,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Dokumen harus jelas dan dapat dibaca",
          "Semua informasi harus terlihat lengkap",
          "Terdapat tanda tangan dan stempel resmi",
          "Mencantumkan nama lengkap, nomor ijazah, dan tanggal penerbitan",
        ],
        usedFor: "Verifikasi pendidikan, melamar pekerjaan, atau mendaftar pendidikan lanjutan",
      },
    },
    {
      id: "ktp",
      name: "KTP",
      icon: <CreditCard className="h-8 w-8" />,
      description: "Kartu Tanda Penduduk",
      disabled: true,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Foto wajah harus jelas",
          "Semua informasi harus dapat dibaca",
          "KTP masih berlaku (tidak kadaluarsa)",
          "Tidak ada bagian yang terpotong atau tertutup",
        ],
        usedFor: "Verifikasi identitas, pembukaan rekening, atau pendaftaran layanan",
      },
    },
    {
      id: "npwp",
      name: "NPWP",
      icon: <FileCheck className="h-8 w-8" />,
      description: "Nomor Pokok Wajib Pajak",
      disabled: true,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Kartu NPWP asli (bukan surat keterangan)",
          "Nomor NPWP harus jelas dan dapat dibaca",
          "Nama dan alamat harus sesuai dengan identitas",
          "Tidak ada bagian yang rusak atau tidak terbaca",
        ],
        usedFor: "Verifikasi pajak, pembukaan rekening, atau pengajuan kredit",
      },
    },
    {
      id: "surat-kerja",
      name: "Surat Kerja",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Surat keterangan kerja",
      disabled: true,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Menggunakan kop surat resmi perusahaan",
          "Terdapat tanda tangan pejabat berwenang",
          "Mencantumkan jabatan dan masa kerja",
          "Ada stempel resmi perusahaan",
        ],
        usedFor: "Melamar pekerjaan baru, pengajuan kredit, atau visa",
      },
    },
    {
      id: "sertifikat",
      name: "Sertifikat",
      icon: <FileSignature className="h-8 w-8" />,
      description: "Sertifikat pelatihan atau kursus",
      disabled: true,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Nama peserta tertulis dengan benar",
          "Nama program atau pelatihan jelas",
          "Ada tanggal penerbitan sertifikat",
          "Terdapat tanda tangan penyelenggara",
        ],
        usedFor: "Melengkapi CV, melamar pekerjaan, atau pengembangan karir",
      },
    },
    {
      id: "lainnya",
      name: "Dokumen Lainnya",
      icon: <Building className="h-8 w-8" />,
      description: "Jenis dokumen lainnya",
      disabled: true,
      details: {
        format: "PDF, JPG, atau PNG (Maks. 5MB)",
        requirements: [
          "Dokumen harus jelas dan dapat dibaca",
          "Informasi penting harus terlihat lengkap",
          "Pastikan dokumen tidak terpotong",
          "Ukuran file tidak melebihi 5MB",
        ],
        usedFor: "Berbagai keperluan administratif atau verifikasi",
      },
    },
  ]

  const handleSelectDocumentType = (id: string) => {
    const docType = documentTypes.find((type) => type.id === id)
    if (docType?.disabled) return

    setDocumentType(id)
    setStep("upload-file")
  }

  const handleBackToTypeSelection = () => {
    setStep("select-type")
    setSelectedInfo(null)
  }

  const toggleDocumentInfo = (id: string) => {
    const docType = documentTypes.find((type) => type.id === id)
    if (docType?.disabled) return

    if (selectedInfo === id) {
      setSelectedInfo(null)
    } else {
      setSelectedInfo(id)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Reset states
    setUploadStatus("idle")
    setErrorMessage(null)

    // Validate file type
    const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"]
    if (!validTypes.includes(selectedFile.type)) {
      setErrorMessage("Format file tidak didukung. Silakan unggah file PDF, JPG, atau PNG.")
      return
    }

    // Validate file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrorMessage("Ukuran file terlalu besar. Maksimum 5MB.")
      return
    }

    setFile(selectedFile)

    // Create preview URL for images
    if (selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile)
      setPreviewUrl(url)
    } else {
      // For PDFs, use a generic icon
      setPreviewUrl("/pdf-icon.svg")
    }
  }

  const handleUpload = async () => {
    if (!file || !documentType) return

    setIsUploading(true)
    setUploadStatus("idle")

    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would upload the file to your server here
      // const formData = new FormData()
      // formData.append('document', file)
      // formData.append('documentType', documentType)
      // const response = await fetch('/api/upload', { method: 'POST', body: formData })

      setUploadStatus("success")

      if (onUploadComplete) {
        onUploadComplete(file, previewUrl || "", documentType)
      }
    } catch (error) {
      console.error("Upload error:", error)
      setUploadStatus("error")
      setErrorMessage("Terjadi kesalahan saat mengunggah dokumen. Silakan coba lagi.")
    } finally {
      setIsUploading(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const resetUpload = () => {
    setFile(null)
    setPreviewUrl(null)
    setUploadStatus("idle")
    setErrorMessage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Get selected document type name
  const selectedDocumentTypeName = documentType ? documentTypes.find((type) => type.id === documentType)?.name : null

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      {step === "select-type" ? (
        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-center mb-8">Pilih Jenis Dokumen</h3>

          {/* Document type selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {documentTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => handleSelectDocumentType(type.id)}
                className={`border rounded-xl p-4 flex flex-col items-center text-center ${
                  type.disabled
                    ? "bg-gray-100 border-gray-200 cursor-not-allowed opacity-70"
                    : "border-gray-200 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow-md"
                } ${selectedInfo === type.id ? "border-orange-400 bg-orange-50" : ""} w-[150px]`}
              >
                <div
                  className={`p-3 rounded-full text-white shadow-sm mb-3 ${
                    type.disabled ? "bg-gray-400" : "bg-gradient-to-r from-orange-500 to-red-500"
                  }`}
                >
                  {type.icon}
                </div>
                <h4 className={`font-semibold mb-1 ${type.disabled ? "text-gray-500" : "text-gray-800"}`}>
                  {type.name}
                </h4>
                <p className={`text-xs ${type.disabled ? "text-gray-400" : "text-gray-500"}`}>{type.description}</p>
                {type.disabled && (
                  <div className="mt-2 text-gray-400">
                    <Lock className="h-4 w-4 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Information panel for selected document */}
          {selectedInfo && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-2xl mx-auto animate-fadeIn">
              <h5 className="font-medium text-orange-800 mb-3">
                Informasi {documentTypes.find((type) => type.id === selectedInfo)?.name}
              </h5>

              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Format yang Diterima:</p>
                <p className="text-sm text-gray-600">
                  {documentTypes.find((type) => type.id === selectedInfo)?.details.format}
                </p>
              </div>

              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Persyaratan:</p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  {documentTypes
                    .find((type) => type.id === selectedInfo)
                    ?.details.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Digunakan Untuk:</p>
                <p className="text-sm text-gray-600">
                  {documentTypes.find((type) => type.id === selectedInfo)?.details.usedFor}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Saat ini hanya dokumen Ijazah yang dapat diverifikasi.</p>
            <p>Jenis dokumen lainnya akan tersedia dalam waktu dekat.</p>
          </div>
        </div>
      ) : !file ? (
        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md">
          <div className="flex items-center mb-6">
            <button onClick={handleBackToTypeSelection} className="text-gray-500 hover:text-gray-700 mr-4">
              ← Kembali
            </button>
            <h3 className="text-xl font-semibold">Upload {selectedDocumentTypeName}</h3>
          </div>

          <div
            onClick={triggerFileInput}
            className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 p-12 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-sm"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full mb-6 text-white shadow-md">
              <Upload className="h-12 w-12" />
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
              Upload {selectedDocumentTypeName}
            </div>
            <p className="mt-4 text-gray-600 text-sm text-center max-w-md">
              Klik untuk memilih file atau tarik dan lepas file di sini
            </p>
            <p className="mt-2 text-gray-500 text-xs text-center">Format yang didukung: PDF, JPG, PNG (Maks. 5MB)</p>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md">
          <div className="flex items-center mb-6">
            <button onClick={handleBackToTypeSelection} className="text-gray-500 hover:text-gray-700 mr-4">
              ← Kembali
            </button>
            <h3 className="text-xl font-semibold">Upload {selectedDocumentTypeName}</h3>
          </div>

          <div className="flex flex-col items-center">
            {/* Document type badge */}
            <div className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {selectedDocumentTypeName}
            </div>

            {/* Larger, more prominent image preview */}
            {previewUrl && previewUrl.startsWith("blob:") ? (
              <div className="w-full max-w-md h-64 mb-6 relative rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="object-contain w-full h-full" />
              </div>
            ) : (
              <div className="w-full max-w-md h-64 mb-6 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center rounded-lg shadow-md">
                <FileText className="h-24 w-24 text-orange-500" />
              </div>
            )}

            {/* File information */}
            <div className="text-center mb-6">
              <p className="font-semibold text-gray-800 text-lg">{file.name}</p>
              <p className="text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
            </div>

            {/* Status indicators */}
            {uploadStatus === "success" && (
              <span className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full mb-4">
                <Check className="h-5 w-5 mr-2" /> Berhasil Diunggah
              </span>
            )}

            {uploadStatus === "error" && (
              <span className="flex items-center text-red-600 bg-red-50 px-4 py-2 rounded-full mb-4">
                <AlertCircle className="h-5 w-5 mr-2" /> Gagal
              </span>
            )}

            {/* Buttons below file info */}
            <div className="flex items-center gap-3 justify-center">
              <Button
                variant="outline"
                onClick={resetUpload}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-full px-6 py-2"
              >
                Ganti
              </Button>

              {uploadStatus !== "success" && (
                <Button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-8 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Mengunggah...
                    </>
                  ) : (
                    "Unggah Sekarang"
                  )}
                </Button>
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mt-6 text-sm flex items-start border border-red-200 animate-fadeIn">
              <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

