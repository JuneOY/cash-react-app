import { useState } from "react";
import { QrCode, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import PayPage from "./pay/page";
import SuccessPage from "./success/page";

type View = "home" | "pay" | "success";

export default function HomePage() {
    const [amount, setAmount] = useState("0");
    const [pressedKey, setPressedKey] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<View>("home");
    const [payData, setPayData] = useState({ amount: "", recipient: "" });

    // 数字键盘处理函数
    const handleNumberClick = (num: string) => {
        setPressedKey(num);
        setTimeout(() => setPressedKey(null), 150);

        if (amount === "0") {
            setAmount(num);
        } else {
            setAmount(amount + num);
        }
    };

    const handleDecimal = () => {
        setPressedKey(".");
        setTimeout(() => setPressedKey(null), 150);

        if (!amount.includes(".")) {
            setAmount(amount + ".");
        }
    };

    const handleBackspace = () => {
        setPressedKey("back");
        setTimeout(() => setPressedKey(null), 150);

        if (amount.length === 1) {
            setAmount("0");
        } else {
            setAmount(amount.slice(0, -1));
        }
    };

    const handlePay = () => {
        setCurrentView("pay");
    };

    const handlePaySuccess = (amount: string, recipient: string) => {
        setPayData({ amount, recipient });
        setCurrentView("success");
    };

    const handleDone = () => {
        setCurrentView("home");
        setAmount("0"); // 重置金额
    };

    const handleClosePay = () => {
        setCurrentView("home");
    };

    // 根据当前视图渲染不同的组件
    const renderCurrentView = () => {
        switch (currentView) {
            case "pay":
                return (
                    <PayPage
                        initialAmount={amount}
                        onPaySuccess={handlePaySuccess}
                        onClose={handleClosePay}
                    />
                );
            case "success":
                return (
                    <SuccessPage
                        amount={payData.amount}
                        recipient={payData.recipient}
                        onDone={handleDone}
                    />
                );
            case "home":
            default:
                return (
                    <>
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
                                {/* 底部导航图标 */}
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-[#5AC05A] to-[#4CAF50] flex flex-col">
            {renderCurrentView()}
        </div>
    );
}