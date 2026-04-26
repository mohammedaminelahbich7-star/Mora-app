/**
 * Mora-app Pi Payment Integration
 * بوابة الدفع الخاصة بالمتجر الشامل
 */

const MoraPayment = {
    // دالة إتمام عملية الشراء
    createPayment: function(productTitle, amountPi) {
        console.log(`بدء عملية الدفع لمنتج: ${productTitle}`);
        
        // استدعاء Pi SDK (يفترض وجود المكتبة في ملف Index.html)
        try {
            const payment = Pi.createPayment({
                amount: amountPi,
                memo: `شراء ${productTitle} عبر تطبيق Mora-app`,
                metadata: { productId: "MORA-9922", sellerId: "Amin-Store" },
            }, {
                onReadyForServerApproval: (paymentId) => {
                    console.log("الدفع بانتظار موافقة السيرفر: " + paymentId);
                    // هنا نرسل الـ paymentId لسيرفرك للتأكد من المعاملة
                },
                onReadyForServerCompletion: (paymentId, txid) => {
                    console.log("تمت المعاملة بنجاح! TXID: " + txid);
                    alert("مبروك! تم شراء المنتج بنجاح ✅");
                },
                onCancel: (paymentId) => { console.log("تم إلغاء العملية."); },
                onError: (error, payment) => { console.error("خطأ في الدفع: ", error); },
            });
        } catch (err) {
            console.error("تأكد من تشغيل التطبيق داخل Pi Browser.");
        }
    }
};

// مثال: عند الضغط على زر شراء هاتف بـ 0.003 Pi
// MoraPayment.createPayment("iPhone 15", 0.003);
