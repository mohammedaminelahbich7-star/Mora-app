/**
 * Mora-app Seller Trust Score Engine
 * نظام تقييم البائعين لتعزيز الأمان التجاري
 */

const TrustEngine = {
    calculateScore: function(completedSales, returns, rating) {
        // حساب المعادلة: (المبيعات الناجحة - المرتجعات) + (متوسط التقييم * 10)
        let score = (completedSales - (returns * 2)) + (rating * 10);
        
        let badge;
        if (score >= 100) badge = "بائع موثوق ذهبي 🏆";
        else if (score >= 50) badge = "بائع فضي 🥈";
        else badge = "بائع جديد 🌱";

        return {
            points: score,
            badge: badge,
            compliance: "ملتزم بشروط حماية المستهلك المغربية ✅"
        };
    },

    updateSellerProfile: function(sellerId, feedback) {
        console.log(`تحديث سجل البائع ${sellerId} بناءً على التقييم: ${feedback}`);
        // سيتم ربط هذا النظام بقاعدة البيانات لاحقاً
    }
};

// مثال: بائع قام بـ 20 عملية بيع ناجحة، ومرتجع واحد، وتقييمه 4.5/5
console.log(TrustEngine.calculateScore(20, 1, 4.5));
