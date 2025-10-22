// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./index.css";

interface SuccessPageProps {
  amount: string;
  recipient: string;
  onDone: () => void;
}

function SuccessPage({ amount, recipient, onDone }: SuccessPageProps) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [amount, setAmount] = useState("500");
  // const [recipient, setRecipient] = useState("Arati Gerner");

  // useEffect(() => {
  //   // 解析 URL 参数
  //   const searchParams = new URLSearchParams(location.search);
  //   const urlAmount = searchParams.get("amount");
  //   const urlRecipient = searchParams.get("recipient");

  //   if (urlAmount) setAmount(urlAmount);
  //   if (urlRecipient) setRecipient(urlRecipient.replace(",", ""));
  // }, [location]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center pt-30 px-6">
        {/* 对勾图标动画 */}
        <div className="w-32 h-32 rounded-full bg-[#4CAF50] flex items-center justify-center mb-12 shadow-lg animate-bounce-in">
          <Check
            className="w-16 h-16 text-white animate-fade-in"
            strokeWidth={3.5}
          />
        </div>

        {/* 文字动画 */}
        <div className="animate-fade-slide-up">
          <h1 className="text-4xl font-bold text-center leading-tight">
            You sent ${amount} to
          </h1>
          <h1 className="text-4xl font-bold text-center leading-tight mt-1">
            {recipient}
          </h1>
        </div>
      </div>

      {/* Done Button */}
      <div className="px-6 pb-12">
        <Button
          onClick={onDone}
          size="lg"
          className="w-full bg-black hover:bg-black/90 text-white text-xl font-medium py-7 rounded-full shadow-sm animate-fade-in-delayed"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;