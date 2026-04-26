/**
 * Mora-app Global Marketplace Engine
 * محرك إدارة المنتجات: إلكترونيات، سيارات، عقارات، ومنتجات استهلاكية
 */

const MoraMarket = {
    categories: ["ELECTRONICS", "VEHICLES", "REAL_ESTATE", "GENERAL_ITEMS"],
    
    // دالة إضافة منتج جديد للمتجر
    postListing: function(title, category, priceMAD) {
        if (!this.categories.includes(category)) {
            return "فئة غير مدعومة حالياً.";
        }

        const piPrice = (priceMAD / 314159 / 10.5).toFixed(8); // الربط بسعر الإجماع GCV

        return {
            id: "PROD-" + Math.floor(Math.random() * 10000),
            title: title,
            category: category,
            price: priceMAD + " MAD",
            piValue: piPrice + " π",
            status: "AVAILABLE",
            legalCheck: "خاضع لضمان مدونة التجارة المغربية ✅"
        };
    },

    // نظام حماية المشتري (Escrow Simulation)
    buyNow: function(productId) {
        return `تم حجز المنتج ${productId}. سيتم تحويل العملات للبائع بعد تأكيد الاستلام لضمان الأمان.`;
    }
};

// تجربة إضافة سيارة للمتجر
console.log(MoraMarket.postListing("Dacia Sandero 2022", "VEHICLES", 120000));
