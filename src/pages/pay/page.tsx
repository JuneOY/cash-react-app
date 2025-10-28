import { useState, useEffect } from "react";
import { X, ChevronDown, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const allContacts = [
  { name: "Felecie Bergamo", username: "$forceps", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "mmr", username: "$motionmanryann", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "ynspaid", username: "$2ShiestyBam", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Cedric Daniel", username: "$ced4L2011", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Aaron Seechan", username: "$AaronSeechan", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Adrian Robinson", username: "$adriandr17", avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Arati Gerner", username: "$aratig", avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Alice Johnson", username: "$alicej", avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Bob Smith", username: "$bobsmith", avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Carol White", username: "$carolw", avatar: "https://i.pravatar.cc/150?img=10" },
  { name: "David Brown", username: "$davidb", avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Emma Davis", username: "$emmad", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Frank Miller", username: "$frankm", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Grace Lee", username: "$gracelee", avatar: "https://i.pravatar.cc/150?img=14" },
  { name: "Henry Wilson", username: "$henryw", avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "Iris Chen", username: "$irisc", avatar: "https://i.pravatar.cc/150?img=16" },
  { name: "Jack Taylor", username: "$jackt", avatar: "https://i.pravatar.cc/150?img=17" },
  { name: "Kate Anderson", username: "$katea", avatar: "https://i.pravatar.cc/150?img=18" },
  { name: "Leo Martinez", username: "$leom", avatar: "https://i.pravatar.cc/150?img=19" },
  { name: "Mia Garcia", username: "$miag", avatar: "https://i.pravatar.cc/150?img=20" },
  { name: "Noah Thomas", username: "$noaht", avatar: "https://i.pravatar.cc/150?img=21" },
  { name: "Olivia Moore", username: "$oliviam", avatar: "https://i.pravatar.cc/150?img=22" },
  { name: "Peter Jackson", username: "$peterj", avatar: "https://i.pravatar.cc/150?img=23" },
  { name: "Quinn Harris", username: "$quinnh", avatar: "https://i.pravatar.cc/150?img=24" },
  { name: "Rachel Clark", username: "$rachelc", avatar: "https://i.pravatar.cc/150?img=25" },
  { name: "Sam Lewis", username: "$saml", avatar: "https://i.pravatar.cc/150?img=26" },
  { name: "Tina Walker", username: "$tinaw", avatar: "https://i.pravatar.cc/150?img=27" },
  { name: "Uma Hall", username: "$umah", avatar: "https://i.pravatar.cc/150?img=28" },
  { name: "Victor Allen", username: "$victora", avatar: "https://i.pravatar.cc/150?img=29" },
  { name: "Wendy Young", username: "$wendyy", avatar: "https://i.pravatar.cc/150?img=30" },
  { name: "Xavier King", username: "$xavierk", avatar: "https://i.pravatar.cc/150?img=31" },
  { name: "Yara Wright", username: "$yaraw", avatar: "https://i.pravatar.cc/150?img=32" },
  { name: "Zoe Scott", username: "$zoes", avatar: "https://i.pravatar.cc/150?img=33" },
];

const generateFuzzyContact = (searchTerm: string) => {
  const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Taylor", "Clark", "Scott", "Hall",
    "Johnson", "Moore", "Martin", "Anderson", "Thompson", "Garcia", "Martinez", "Robinson", "Rodriguez",
    "Lewis", "Lee", "Walker", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Green",
    "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips",
    "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed",
    "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres"];

  const chars = searchTerm.toLowerCase().split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  const shuffled = chars.join('');

  const firstName = shuffled.charAt(0).toUpperCase() + shuffled.slice(1);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = `${firstName} ${lastName}`;

  const username = `$${firstName.toLowerCase()}${lastName.toLowerCase().slice(0, 3)}${Math.floor(Math.random() * 99)}`;
  const avatar = `https://i.pravatar.cc/150?u=${username}`;

  return { name: fullName, username, avatar };
};

interface PayPageProps {
  initialAmount?: string;
  onPaySuccess: (amount: string, recipient: string) => void;
  onClose: () => void;
}


function PayPage({ initialAmount = "500", onPaySuccess, onClose }: PayPageProps) {
  const [amount, setAmount] = useState(initialAmount);
  const [recipient, setRecipient] = useState("");
  const [note, setNote] = useState("");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState(allContacts.slice(0, 6));
  const [isSelectionInProgress, setIsSelectionInProgress] = useState(false);

  useEffect(() => {
    if (initialAmount && initialAmount !== "0") {
      setAmount(initialAmount);
    }
  }, [initialAmount]);

  useEffect(() => {
    if (isSelectionInProgress) {
      setIsSelectionInProgress(false);
      return;
    }

    const searchTerm = recipient.toLowerCase().trim();

    if (!searchTerm) {
      setFilteredContacts(allContacts.slice(0, 6));
      setIsSearching(false);
      return;
    }

    if (searchTerm.length < 2) {
      setFilteredContacts([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    const timeoutId = setTimeout(() => {
      const realResults = allContacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm) || contact.username.toLowerCase().includes(searchTerm),
      );

      let generatedResults: any[] = [];

      if (realResults.length === 0) {
        generatedResults = Array.from({ length: 20 }, () => generateFuzzyContact(searchTerm));
      }

      setFilteredContacts([...realResults, ...generatedResults]);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [recipient]);

  const handlePay = () => {
    if (recipient && note) {
      onPaySuccess(amount, recipient);
    }
  };

  const selectContact = (contact: typeof allContacts[0]) => {
    setIsSelectionInProgress(true);
    setRecipient(contact.name);
    setSelectedContact(contact.username);
  };

  const isPayButtonEnabled = recipient.trim().length > 0 && note.trim().length > 0;

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-transparent">
          <X className="size-8" />
        </Button>
        <div className="text-3xl font-semibold">${amount}</div>
        <Button
          onClick={handlePay}
          disabled={!isPayButtonEnabled}
          size="lg"
          className={`px-8 py-2.5 rounded-full text-base font-medium transition-all ${isPayButtonEnabled
            ? "bg-black hover:bg-black/90 text-white"
            : "bg-gray-300 text-gray-400 cursor-not-allowed hover:bg-gray-300"
            }`}
        >
          Pay
        </Button>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Form Fields */}
        <div className="flex-shrink-0 bg-white">
          {/* To Field */}
          <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-200">
            <div className="text-lg font-medium w-8">To</div>
            <Input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Name, $Cashtag, Phone, Email"
              className="flex-1 text-lg border-none shadow-none focus-visible:ring-0 px-0 placeholder:text-gray-400"
            />
          </div>

          {/* For Field */}
          <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-200">
            <div className="text-lg font-medium w-8">For</div>
            <Input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note (required)"
              className="flex-1 text-lg border-none shadow-none focus-visible:ring-0 px-0 placeholder:text-gray-400"
            />
            <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-transparent hover:text-gray-600">
              <Sparkles className="w-5 h-5" />
            </Button>
          </div>

          {/* Use Field */}
          <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-200">
            <div className="text-lg font-medium w-8">Use</div>
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#EB001B]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#FF5F00] -ml-2"></div>
                </div>
              </div>
              <div className="text-base whitespace-nowrap">Mastercard debit card 2969</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Scrollable section with sticky header */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* Sticky header */}
          <div className="flex-shrink-0 px-6 pt-3 pb-2 bg-white border-b border-gray-100 sticky top-0 z-10">
            <h2 className="text-2xl font-bold">Suggested</h2>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {isSearching ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            ) : filteredContacts.length > 0 ? (
              <div className="space-y-1">
                {filteredContacts.map((contact) => (
                  <button
                    key={contact.username}
                    onClick={() => selectContact(contact)}
                    className="flex items-center gap-4 w-full py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-lg"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="text-lg font-medium">{contact.name}</div>
                      <div className="text-base text-gray-500">{contact.username}</div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${selectedContact === contact.username ? "border-black border-[6px]" : "border-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">No contacts found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayPage;