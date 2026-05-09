const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// الربط مع قاعدة البيانات (MongoDB)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/morocco_everything')
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.error("Database connection error:", err));

// تعريف "موديل" المنتج (Product Model)
const ProductSchema = new mongoose.Schema({
    title: String,
    price_pi: Number,
    category: String,
    location: String, // مثلاً الرباط أو مراكش
    description: String,
    seller_id: String
});

const Product = mongoose.model('Product', ProductSchema);

// مسار (Route) لجلب جميع المنتجات المعروضة في المتجر
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send("Error fetching products");
    }
});

// مسار (Route) لإضافة منتج جديد (من طرف البائع)
app.post('/api/products/add', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).send("Error saving product");
    }
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Morocco Everything server is running on port ${PORT}`);
});
