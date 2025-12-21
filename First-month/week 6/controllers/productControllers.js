//Method 1 — Using .save()
const newProduct = new product({
 "name": "Laptop",
"price": 55000,
"category": "Electronics",
"description": "HP Laptop",
"stock": 10
});
await newProduct.save();


//Method 2 — .create()
const Product = await Product.create({
    "name": "Mouse",
"price": 50000,
"category": "Electronics",
"description": "Wireless Mouse",
"stock": 10
});