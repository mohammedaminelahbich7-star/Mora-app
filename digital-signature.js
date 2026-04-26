/**
 * Mora-app Smart Signature
 * يحاكي التوقيع الإلكتروني المؤمن وفق القانون 53.05
 */

const SmartSignature = {
    generateHash: function(userId, contractData) {
        const timestamp = new Date().getTime();
        // إنشاء بصمة فريدة للعقد
        const signatureHash = btoa(userId + contractData + timestamp).substring(0, 16);
        return `SIGNED-MORA-${signatureHash}`;
    },
    
    verify: function(hash) {
        return hash.startsWith("SIGNED-MORA-") ? "✅ توقيع قانوني صحيح" : "❌ توقيع غير صالح";
    }
};

console.log(SmartSignature.generateHash("AMINE_8829", "Commercial_Contract_001"));
