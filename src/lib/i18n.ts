import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            // Header
            getCoins: "Get Coins",

            // User Input
            enterUsername: "Enter username",

            // Recharge Section
            recharge: "Recharge",
            saveFee: "Save around 25% with a lower third-party service fee.",
            custom: "Custom",

            // Features
            inviteRewards: "Invite & Get Rewards",
            checkFeature: "Check out this new feature!",
            exchange: "Exchange",
            specialOffer: "Special offer",
            unlockCashback: "Unlock 5% cash back",

            // Buttons
            buyFor: "Buy for",
            rechargeBtn: "Recharge",
            payNow: "Pay now",
            goBack: "Go back",

            // Payment Drawer
            orderSummary: "Order summary",
            securePayment: "Secure payment",
            account: "Account",
            coins: "Coins",
            paymentMethod: "Payment method",
            addCard: "Add Credit Or Debit Card",
            applePay: "Apple Pay",
            total: "Total",

            // Custom Drawer
            coinAmount: "Coin Amount",

            // Terms
            termsText1: "By tapping",
            termsText2: "Pay",
            termsText3:
                "to make a purchase, you acknowledge that you are purchasing a limited license to access this virtual item subject to our",
            virtualItemsPolicy: "Virtual Items Policy",
            termsText4:
                ". By using any amount of Coins within 14 days after the purchase, you acknowledge and confirm that you will no longer be eligible for a refund.",
            termsText5: "To assess your tax rate in accordance with our",
            privacyPolicy: "Privacy Policy",
            termsText6: ", TikTok detected that your location is",
            location: "United States, Alta, Salt Lake, Utah",

            // Success Page
            successTitle: "Successful recharge!",
            successMessage: "were sent to",
            successNote: "This operation has been completed. It will be processed within 24 hours!",

            // Desktop Message
            desktopMessage: "Add this page to the mobile desktop for easy access with just one click",
        },
    },
    ja: {
        translation: {
            // Header
            getCoins: "コインを取得",

            // User Input
            enterUsername: "ユーザー名を入力",

            // Recharge Section
            recharge: "チャージ",
            saveFee: "サードパーティのサービス料が安く、約25%節約できます。",
            custom: "カスタム",

            // Features
            inviteRewards: "招待して報酬を獲得",
            checkFeature: "この新機能をチェック！",
            exchange: "交換",
            specialOffer: "特別オファー",
            unlockCashback: "5%キャッシュバックを解除",

            // Buttons
            buyFor: "購入",
            rechargeBtn: "チャージ",
            payNow: "今すぐ支払う",
            goBack: "戻る",

            // Payment Drawer
            orderSummary: "注文概要",
            securePayment: "安全な支払い",
            account: "アカウント",
            coins: "コイン",
            paymentMethod: "支払い方法",
            addCard: "クレジットカードまたはデビットカードを追加",
            applePay: "Apple Pay",
            total: "合計",

            // Custom Drawer
            coinAmount: "コイン数量",

            // Terms
            termsText1: "タップして",
            termsText2: "支払う",
            termsText3: "購入すると、この仮想アイテムへのアクセスに関する限定ライセンスを購入することを認めます",
            virtualItemsPolicy: "仮想アイテムポリシー",
            termsText4: "。購入後14日以内にコインを使用すると、返金の対象外となることを認め、確認します。",
            termsText5: "税率を評価するために",
            privacyPolicy: "プライバシーポリシー",
            termsText6: "に従って、TikTokはあなたの場所を検出しました",
            location: "アメリカ合衆国、アルタ、ソルトレイク、ユタ",

            // Success Page
            successTitle: "チャージ成功！",
            successMessage: "が送信されました",
            successNote: "この操作は完了しました。24時間以内に処理されます！",

            // Desktop Message
            desktopMessage: "ワンクリックで簡単にアクセスできるように、このページをモバイルデスクトップに追加してください",
        },
    },
    ko: {
        translation: {
            // Header
            getCoins: "코인 받기",

            // User Input
            enterUsername: "사용자 이름 입력",

            // Recharge Section
            recharge: "충전",
            saveFee: "제3자 서비스 수수료가 낮아 약 25% 절약할 수 있습니다.",
            custom: "맞춤",

            // Features
            inviteRewards: "초대하고 보상 받기",
            checkFeature: "이 새로운 기능을 확인하세요!",
            exchange: "교환",
            specialOffer: "특별 제안",
            unlockCashback: "5% 캐시백 잠금 해제",

            // Buttons
            buyFor: "구매",
            rechargeBtn: "충전",
            payNow: "지금 결제",
            goBack: "돌아가기",

            // Payment Drawer
            orderSummary: "주문 요약",
            securePayment: "안전한 결제",
            account: "계정",
            coins: "코인",
            paymentMethod: "결제 방법",
            addCard: "신용카드 또는 직불카드 추가",
            applePay: "Apple Pay",
            total: "합계",

            // Custom Drawer
            coinAmount: "코인 수량",

            // Terms
            termsText1: "탭하여",
            termsText2: "결제",
            termsText3: "구매하면 이 가상 아이템에 액세스하기 위한 제한된 라이선스를 구매하는 것을 인정합니다",
            virtualItemsPolicy: "가상 아이템 정책",
            termsText4: ". 구매 후 14일 이내에 코인을 사용하면 환불 대상이 아님을 인정하고 확인합니다.",
            termsText5: "세율을 평가하기 위해",
            privacyPolicy: "개인정보 보호정책",
            termsText6: "에 따라 TikTok이 귀하의 위치를 감지했습니다",
            location: "미국, 알타, 솔트레이크, 유타",

            // Success Page
            successTitle: "충전 성공!",
            successMessage: "이(가) 전송되었습니다",
            successNote: "이 작업이 완료되었습니다. 24시간 이내에 처리됩니다!",

            // Desktop Message
            desktopMessage: "한 번의 클릭으로 쉽게 액세스할 수 있도록 이 페이지를 모바일 데스크톱에 추가하세요",
        },
    },
    ar: {
        translation: {
            // Header
            getCoins: "احصل على العملات",

            // User Input
            enterUsername: "أدخل اسم المستخدم",

            // Recharge Section
            recharge: "إعادة الشحن",
            saveFee: "وفر حوالي 25٪ مع رسوم خدمة طرف ثالث أقل.",
            custom: "مخصص",

            // Features
            inviteRewards: "ادعُ واحصل على المكافآت",
            checkFeature: "تحقق من هذه الميزة الجديدة!",
            exchange: "تبادل",
            specialOffer: "عرض خاص",
            unlockCashback: "فتح استرداد نقدي بنسبة 5٪",

            // Buttons
            buyFor: "شراء مقابل",
            rechargeBtn: "إعادة الشحن",
            payNow: "ادفع الآن",
            goBack: "العودة",

            // Payment Drawer
            orderSummary: "ملخص الطلب",
            securePayment: "دفع آمن",
            account: "الحساب",
            coins: "عملات",
            paymentMethod: "طريقة الدفع",
            addCard: "أضف بطاقة ائتمان أو خصم",
            applePay: "Apple Pay",
            total: "المجموع",

            // Custom Drawer
            coinAmount: "كمية العملات",

            // Terms
            termsText1: "بالنقر على",
            termsText2: "الدفع",
            termsText3: "لإجراء عملية شراء، فإنك تقر بأنك تشتري ترخيصًا محدودًا للوصول إلى هذا العنصر الافتراضي وفقًا لـ",
            virtualItemsPolicy: "سياسة العناصر الافتراضية",
            termsText4:
                ". باستخدام أي مبلغ من العملات في غضون 14 يومًا بعد الشراء، فإنك تقر وتؤكد أنك لن تكون مؤهلاً لاسترداد الأموال.",
            termsText5: "لتقييم معدل الضريبة الخاص بك وفقًا لـ",
            privacyPolicy: "سياسة الخصوصية",
            termsText6: "، اكتشف TikTok أن موقعك هو",
            location: "الولايات المتحدة، ألتا، سولت ليك، يوتا",

            // Success Page
            successTitle: "إعادة شحن ناجحة!",
            successMessage: "تم إرسالها إلى",
            successNote: "تم إكمال هذه العملية. سيتم معالجتها في غضون 24 ساعة!",

            // Desktop Message
            desktopMessage: "أضف هذه الصفحة إلى سطح المكتب المحمول للوصول السهل بنقرة واحدة فقط",
        },
    },
    zh: {
        translation: {
            // Header
            getCoins: "获取金币",

            // User Input
            enterUsername: "输入用户名",

            // Recharge Section
            recharge: "充值",
            saveFee: "第三方服务费更低，可节省大约 25%。",
            custom: "自定义",

            // Features
            inviteRewards: "邀请并获得奖励",
            checkFeature: "看看这项新功能！",
            exchange: "兑换",
            specialOffer: "特别优惠",
            unlockCashback: "解锁 5% 现金回馈",

            // Buttons
            buyFor: "购买",
            rechargeBtn: "充值",
            payNow: "立即支付",
            goBack: "返回",

            // Payment Drawer
            orderSummary: "订单摘要",
            securePayment: "安全支付",
            account: "账号",
            coins: "金币",
            paymentMethod: "付款方式",
            addCard: "添加信用卡或借记卡",
            applePay: "Apple Pay",
            total: "总计",

            // Custom Drawer
            coinAmount: "金币数量",

            // Terms
            termsText1: "点击",
            termsText2: "支付",
            termsText3: "购买，即表示您承认您正在购买访问此虚拟物品的有限许可，受我们的",
            virtualItemsPolicy: "虚拟物品政策",
            termsText4: "约束。在购买后 14 天内使用任何数量的金币，即表示您承认并确认您将不再有资格获得退款。",
            termsText5: "为了根据我们的",
            privacyPolicy: "隐私政策",
            termsText6: "评估您的税率，TikTok 检测到您的位置是",
            location: "美国，阿尔塔，盐湖城，犹他州",

            // Success Page
            successTitle: "充值成功！",
            successMessage: "已发送至",
            successNote: "此操作已完成。将在 24 小时内处理！",

            // Desktop Message
            desktopMessage: "将此页面添加到移动桌面，只需一键即可轻松访问",
        },
    },
    es: {
        translation: {
            // Header
            getCoins: "Obtener monedas",

            // User Input
            enterUsername: "Ingrese nombre de usuario",

            // Recharge Section
            recharge: "Recargar",
            saveFee: "Ahorre alrededor del 25% con una tarifa de servicio de terceros más baja.",
            custom: "Personalizado",

            // Features
            inviteRewards: "Invita y obtén recompensas",
            checkFeature: "¡Mira esta nueva función!",
            exchange: "Intercambio",
            specialOffer: "Oferta especial",
            unlockCashback: "Desbloquear 5% de reembolso",

            // Buttons
            buyFor: "Comprar por",
            rechargeBtn: "Recargar",
            payNow: "Pagar ahora",
            goBack: "Volver",

            // Payment Drawer
            orderSummary: "Resumen del pedido",
            securePayment: "Pago seguro",
            account: "Cuenta",
            coins: "Monedas",
            paymentMethod: "Método de pago",
            addCard: "Agregar tarjeta de crédito o débito",
            applePay: "Apple Pay",
            total: "Total",

            // Custom Drawer
            coinAmount: "Cantidad de monedas",

            // Terms
            termsText1: "Al tocar",
            termsText2: "Pagar",
            termsText3:
                "para realizar una compra, reconoce que está comprando una licencia limitada para acceder a este artículo virtual sujeto a nuestra",
            virtualItemsPolicy: "Política de artículos virtuales",
            termsText4:
                ". Al usar cualquier cantidad de monedas dentro de los 14 días posteriores a la compra, reconoce y confirma que ya no será elegible para un reembolso.",
            termsText5: "Para evaluar su tasa impositiva de acuerdo con nuestra",
            privacyPolicy: "Política de privacidad",
            termsText6: ", TikTok detectó que su ubicación es",
            location: "Estados Unidos, Alta, Salt Lake, Utah",

            // Success Page
            successTitle: "¡Recarga exitosa!",
            successMessage: "fueron enviadas a",
            successNote: "¡Esta operación se ha completado. Se procesará dentro de las 24 horas!",

            // Desktop Message
            desktopMessage: "Agregue esta página al escritorio móvil para un acceso fácil con solo un clic",
        },
    },
    fr: {
        translation: {
            // Header
            getCoins: "Obtenir des pièces",

            // User Input
            enterUsername: "Entrez le nom d'utilisateur",

            // Recharge Section
            recharge: "Recharger",
            saveFee: "Économisez environ 25% avec des frais de service tiers inférieurs.",
            custom: "Personnalisé",

            // Features
            inviteRewards: "Invitez et obtenez des récompenses",
            checkFeature: "Découvrez cette nouvelle fonctionnalité!",
            exchange: "Échange",
            specialOffer: "Offre spéciale",
            unlockCashback: "Débloquer 5% de cashback",

            // Buttons
            buyFor: "Acheter pour",
            rechargeBtn: "Recharger",
            payNow: "Payer maintenant",
            goBack: "Retour",

            // Payment Drawer
            orderSummary: "Résumé de la commande",
            securePayment: "Paiement sécurisé",
            account: "Compte",
            coins: "Pièces",
            paymentMethod: "Méthode de paiement",
            addCard: "Ajouter une carte de crédit ou de débit",
            applePay: "Apple Pay",
            total: "Total",

            // Custom Drawer
            coinAmount: "Quantité de pièces",

            // Terms
            termsText1: "En appuyant sur",
            termsText2: "Payer",
            termsText3:
                "pour effectuer un achat, vous reconnaissez que vous achetez une licence limitée pour accéder à cet article virtuel soumis à notre",
            virtualItemsPolicy: "Politique des articles virtuels",
            termsText4:
                ". En utilisant n'importe quelle quantité de pièces dans les 14 jours suivant l'achat, vous reconnaissez et confirmez que vous ne serez plus éligible à un remboursement.",
            termsText5: "Pour évaluer votre taux de taxe conformément à notre",
            privacyPolicy: "Politique de confidentialité",
            termsText6: ", TikTok a détecté que votre emplacement est",
            location: "États-Unis, Alta, Salt Lake, Utah",

            // Success Page
            successTitle: "Recharge réussie!",
            successMessage: "ont été envoyées à",
            successNote: "Cette opération est terminée. Elle sera traitée dans les 24 heures!",

            // Desktop Message
            desktopMessage: "Ajoutez cette page au bureau mobile pour un accès facile en un seul clic",
        },
    },
    de: {
        translation: {
            // Header
            getCoins: "Münzen erhalten",

            // User Input
            enterUsername: "Benutzernamen eingeben",

            // Recharge Section
            recharge: "Aufladen",
            saveFee: "Sparen Sie etwa 25% mit einer niedrigeren Drittanbieter-Servicegebühr.",
            custom: "Benutzerdefiniert",

            // Features
            inviteRewards: "Einladen und Belohnungen erhalten",
            checkFeature: "Schauen Sie sich diese neue Funktion an!",
            exchange: "Austausch",
            specialOffer: "Sonderangebot",
            unlockCashback: "5% Cashback freischalten",

            // Buttons
            buyFor: "Kaufen für",
            rechargeBtn: "Aufladen",
            payNow: "Jetzt bezahlen",
            goBack: "Zurück",

            // Payment Drawer
            orderSummary: "Bestellübersicht",
            securePayment: "Sichere Zahlung",
            account: "Konto",
            coins: "Münzen",
            paymentMethod: "Zahlungsmethode",
            addCard: "Kredit- oder Debitkarte hinzufügen",
            applePay: "Apple Pay",
            total: "Gesamt",

            // Custom Drawer
            coinAmount: "Münzenmenge",

            // Terms
            termsText1: "Durch Tippen auf",
            termsText2: "Bezahlen",
            termsText3:
                "um einen Kauf zu tätigen, bestätigen Sie, dass Sie eine eingeschränkte Lizenz zum Zugriff auf diesen virtuellen Artikel gemäß unserer",
            virtualItemsPolicy: "Richtlinie für virtuelle Artikel",
            termsText4:
                " erwerben. Durch die Verwendung einer beliebigen Anzahl von Münzen innerhalb von 14 Tagen nach dem Kauf bestätigen Sie, dass Sie nicht mehr für eine Rückerstattung berechtigt sind.",
            termsText5: "Um Ihren Steuersatz gemäß unserer",
            privacyPolicy: "Datenschutzrichtlinie",
            termsText6: " zu bewerten, hat TikTok festgestellt, dass sich Ihr Standort befindet",
            location: "Vereinigte Staaten, Alta, Salt Lake, Utah",

            // Success Page
            successTitle: "Erfolgreich aufgeladen!",
            successMessage: "wurden gesendet an",
            successNote: "Dieser Vorgang wurde abgeschlossen. Er wird innerhalb von 24 Stunden bearbeitet!",

            // Desktop Message
            desktopMessage:
                "Fügen Sie diese Seite zum mobilen Desktop hinzu, um mit nur einem Klick einfach darauf zuzugreifen",
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
