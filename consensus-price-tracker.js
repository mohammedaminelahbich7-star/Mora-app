/**
 * Mora-app GVC Consensus Price Tracker
 * تتبع سعر الإجماع العالمي لعملة Pi داخل التطبيق
 */

const ConsensusTracker = {
    // السعر الذي يطمح له المجتمع (مثال لربط المنطق)
    globalConsensusPrice: 314159, // GCV $
    currencySymbol: "π",

    // دالة تحويل سعر المنتج من الدولار/الدرهم إلى Pi بناءً على الإجماع
    convertToPi: function(priceInMAD) {
        const exchangeRate = 10.5; // سعر الدرهم مقابل الدولار تقريباً
        const priceInUSD = priceInMAD / exchangeRate;
        const piValue = priceInUSD / this.globalConsensusPrice;
        
        return {
            original: priceInMAD + " MAD",
            piPrice: piValue.toFixed(8) + " " + this.currencySymbol,
            notice: "تم الحساب بناءً على سعر الإجماع العالمي (GCV)"
        };
    }
};

// مثال: تحويل سعر هاتف بـ 5000 درهم
console.log(ConsensusTracker.convertToPi(5000));
