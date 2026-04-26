// Mora Legal AI Engine - v1.0
// محرك تحليل العقود والاستشارات القانونية الآلي

const LegalEngine = {
    // قاعدة معرفية مبسطة تعتمد على القانون المغربي
    legalDatabase: {
        "SALE": {
            law: "قانون الالتزامات والعقود (D.O.C)",
            advice: "يجب التأكد من أهلية المتعاقدين وتحديد المبيع والثمن بدقة. يخضع البيع العقاري للتسجيل والتحفيظ لضمان الحقوق.",
            requiredDocs: ["شهادة الملكية", "نسخة من بطاقة التعريف", "عقد البيع الابتدائي"]
        },
        "RENT": {
            law: "القانون رقم 67.12 المتعلق بالكراء التجاري أو السكني",
            advice: "يُنصح بتحرير عقد كتابي ثابت التاريخ وتضمين بيان وصفي للمحل لتجنب النزاعات المستقبلية.",
            requiredDocs: ["عقد الكراء", "توصيل الضمانة"]
        },
        "GIFT": {
            law: "مدونة الحقوق العينية (الهبة)",
            advice: "الهبة تتطلب عقدًا رسمياً يحرره موثق أو عدول، وتتوقف صحتها على الحوز الملكي الفعلي.",
            requiredDocs: ["رسم الهبة", "إذن من المحكمة إذا تعلق الأمر بقاصر"]
        }
    },

    // دالة تحليل الطلب
    analyzeRequest: function(userContext) {
        console.log("Analyzing legal context for: " + userContext.type);
        
        const info = this.legalDatabase[userContext.type];
        
        if (info) {
            return {
                status: "success",
                legalReference: info.law,
                recommendation: info.advice,
                checklist: info.requiredDocs,
                disclaimer: "هذه النصيحة آلية واستشارية، يرجى مراجعة محامٍ مختص للتوثيق الرسمي."
            };
        } else {
            return { status: "error", message: "نوع المعاملة غير مدرج حالياً في قاعدة البيانات الذكية." };
        }
    }
};

// مثال للاستخدام:
const userQuery = { type: "RENT", payload: "كراء شقة بمدينة مراكش" };
const result = LegalEngine.analyzeRequest(userQuery);
console.log(result);
