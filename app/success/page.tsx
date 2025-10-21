"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const amount = searchParams.get("amount") || "500"
  const recipient = searchParams.get("recipient") || "Arati Gerner"

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Status Bar */}
      {/* <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <div className="text-xl font-semibold">14:35</div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-900"></div>
          </div>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <div className="w-6 h-3 border-2 border-gray-900 rounded-sm relative">
            <div className="absolute inset-0.5 bg-gray-900 rounded-[1px]"></div>
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-gray-900"></div>
          </div>
        </div>
      </div> */}

      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center pt-30 px-6">
        <div className="w-32 h-32 rounded-full bg-[#4CAF50] flex items-center justify-center mb-12 shadow-lg animate-bounce-in">
          <Check className="w-16 h-16 text-white" strokeWidth={3.5} />
        </div>

        <div className="animate-fade-slide-up">
          <h1 className="text-4xl font-bold text-center leading-tight">You sent ${amount} to</h1>
          <h1 className="text-4xl font-bold text-center leading-tight mt-1">{recipient.replace(",", "")}</h1>
        </div>
      </div>

      {/* Done Button */}
      <div className="px-6 pb-12">
        <Button
          onClick={() => router.push("/")}
          size="lg"
          className="w-full bg-black hover:bg-black/90 text-white text-xl font-medium py-7 rounded-full shadow-sm"
        >
          Done
        </Button>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SuccessPageContent />
    </Suspense>
  )
}
