import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { QrCode, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [amount, setAmount] = useState("0")
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleNumberClick = (num: string) => {
    setPressedKey(num)
    setTimeout(() => setPressedKey(null), 150)

    if (amount === "0") {
      setAmount(num)
    } else {
      setAmount(amount + num)
    }
  }

  const handleDecimal = () => {
    setPressedKey(".")
    setTimeout(() => setPressedKey(null), 150)

    if (!amount.includes(".")) {
      setAmount(amount + ".")
    }
  }

  const handleBackspace = () => {
    setPressedKey("back")
    setTimeout(() => setPressedKey(null), 150)

    if (amount.length === 1) {
      setAmount("0")
    } else {
      setAmount(amount.slice(0, -1))
    }
  }

  const handlePay = () => {
    navigate(`/pay?amount=${amount}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#5AC05A] to-[#4CAF50] flex flex-col">
      {/* Status Bar - 可选 */}
      {/* <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <div className="text-base font-semibold text-white">14:34</div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <div className="w-1 h-1 rounded-full bg-white/60"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <div className="w-5 h-2.5 border-2 border-white rounded-sm relative">
            <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-white"></div>
          </div>
        </div>
      </div> */}

      {/* Top Icons */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-10 w-10">
          <QrCode className="size-7" strokeWidth={2.5} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-11 h-11 rounded-full bg-white hover:bg-white/90 flex items-center justify-center"
        >
          <User className="size-6 text-[#5AC05A]" />
        </Button>
      </div>

      {/* Amount Display */}
      <div className="flex-1 flex items-center justify-center">
        <div key={amount} className="text-white text-7xl font-bold tracking-tight animate-in zoom-in-95 duration-100">
          ${amount}
        </div>
      </div>

      {/* Number Pad */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className={`text-white text-4xl font-light h-14 flex items-center justify-center transition-all duration-150 active:scale-90 ${pressedKey === num.toString() ? "scale-90 bg-white/20 rounded-2xl" : "scale-100"
                }`}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button
            onClick={handleDecimal}
            className={`text-white text-4xl font-light h-14 flex items-center justify-center transition-all duration-150 active:scale-90 ${pressedKey === "." ? "scale-90 bg-white/20 rounded-2xl" : "scale-100"
              }`}
          >
            .
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className={`text-white text-4xl font-light h-14 flex items-center justify-center transition-all duration-150 active:scale-90 ${pressedKey === "0" ? "scale-90 bg-white/20 rounded-2xl" : "scale-100"
              }`}
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className={`text-white text-4xl font-light h-14 flex items-center justify-center transition-all duration-150 active:scale-90 ${pressedKey === "back" ? "scale-90 bg-white/20 rounded-2xl" : "scale-100"
              }`}
          >
            ‹
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button variant="ghost" size="lg" className="text-white text-xl font-normal h-12 hover:bg-white/10">
            Request
          </Button>
          <Button
            onClick={handlePay}
            variant="ghost"
            size="lg"
            className="text-white text-xl font-normal h-12 w-full hover:bg-white/10"
          >
            Pay
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#4CAF50] border-t border-white/10">
        <div className="flex items-center justify-around px-6 py-3 pb-4">
          <button className="text-white active:opacity-70 transition-opacity">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <button className="text-white active:opacity-70 transition-opacity">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </button>
          <button className="text-white active:opacity-70 transition-opacity">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
            </svg>
          </button>
          <button className="text-white active:opacity-70 transition-opacity">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-white active:opacity-70 transition-opacity">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}