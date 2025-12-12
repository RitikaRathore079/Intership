let products = require("../data/products");

// Get All Products
exports.getAllProducts = (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products,
    });
};

// Get Product By ID
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    res.status(200).json({
        success: true,
        data: product,
    });
};

// Add Product
exports.addProduct = (req, res) => {
    const newProduct = req.body;

    if (!newProduct || !newProduct.name || !newProduct.price) {
        return res.status(400).json({
            success: false,
            message: "Invalid product data",
        });
    }

    newProduct.id = products.length + 1;
    products.push(newProduct);

    res.status(201).json({
        success: true,
        data: newProduct,
    });
};

// Update Product
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    products[index] = { ...products[index], ...req.body };

    res.status(200).json({
        success: true,
        data: products[index],
    });
};

// Delete Product
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    const removed = products.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Product deleted",
        data: removed[0],
    });
};
