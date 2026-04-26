/**
 * Mora-app Economy & Reward System
 * نظام المكافآت: الإحالات + مشاهدة الإعلانات
 */

const MoraEconomy = {
    coinsPerAd: 5,        // عدد العملات لكل إعلان
    coinsPerReferral: 50, // عدد العملات لكل إحالة ناجحة
    
    userAccount: {
        balance: 0,
        referralCode: "MORA_AMINE_2026",
        adWatchCount: 0
    },

    // دالة مكافأة الإعلانات
    watchAdReward: function() {
        this.userAccount.balance += this.coinsPerAd;
        this.userAccount.adWatchCount++;
        return `تمت إضافة ${this.coinsPerAd} Mora Coins لرصيدك.`;
    },

    // دالة نظام الإحالة (Referral)
    processReferral: function(newUserId) {
        this.userAccount.balance += this.coinsPerReferral;
        console.log(`إحالة ناجحة! المستخدم الجديد: ${newUserId}`);
        return `مبروك! حصلت على ${this.coinsPerReferral} عملة بفضل دعوتك لـ ${newUserId}`;
    }
};

console.log("Mora Economy Module Activated! 💰");
