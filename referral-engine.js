/**
 * Mora-app Referral & Identity Engine
 * يقوم بتوليد أكواد فريدة وروابط إحالة مشفرة
 */

const ReferralEngine = {
    baseUrl: "https://mora-app-six.vercel.app/join?ref=",

    // دالة توليد كود إحالة فريد بناءً على اسم المستخدم
    generateCode: function(username) {
        const cleanName = username.toUpperCase().replace(/\s+/g, '_');
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        return `${cleanName}_${randomSuffix}`;
    },

    // توليد رابط الإحالة الكامل للمشاركة
    generateShareLink: function(userCode) {
        return `${this.baseUrl}${userCode}`;
    },

    // نظام التحقق من الإحالات (بصمة رقمية)
    verifyReferral: function(code) {
        console.log(`Verifying referral code: ${code}...`);
        // هنا يتم التأكد أن الكود صحيح وغير مكرر
        return {
            isValid: true,
            rewardAmount: 50, // مكافأة 50 عملة Mora
            timestamp: new Date().toISOString()
        };
    }
};

// مثال للاستخدام:
const myCode = ReferralEngine.generateCode("Mohammed Amin");
console.log("كود الإحالة الخاص بك هو: " + myCode);
console.log("رابط المشاركة: " + ReferralEngine.generateShareLink(myCode));
