/**
 * Mora-app Inheritance Calculator (Moroccan Family Code)
 * محرك حساب الأنصبة الشرعية وفق مدونة الأسرة المغربية
 */

const InheritanceEngine = {
    calculateSimple: function(heirs) {
        let report = "--- تحليل الأنصبة الشرعية (Mora-AI) ---\n";
        
        // مثال لمنطق حساب بسيط (الزوجة والابناء)
        if (heirs.includes("WIFE") && heirs.includes("SON")) {
            report += "• للزوجة الثمن (1/8) لوجود الفرع الوارث.\n";
            report += "• للأبناء الباقي تعصيباً.\n";
        } else if (heirs.includes("WIFE") && !heirs.includes("SON")) {
            report += "• للزوجة الربع (1/4) لعدم وجود الفرع الوارث.\n";
        }

        report += "--------------------------------------\n";
        report += "ملاحظة: هذه الحسابات مبنية على قواعد مدونة الأسرة المغربية.";
        return report;
    }
};

console.log(InheritanceEngine.calculateSimple(["WIFE", "SON"]));
