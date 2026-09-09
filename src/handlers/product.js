const product = require('../models/product');
const ProductModel = require('../models/product');

const transformer = product => ({
            type: 'products',
            id: product.id,
            attributes: {
                name: product.name,
                price: product.price,
            },
            links: {
                self: `/api/v1/products/${product.id}`
            }
        
});

const getALL = async (request, h) => {
    const products = await ProductModel.find({});

    if (products.length === 0) {
        return h.response({
            message: 'Não foi possível encontrar nenhum produto'
        }).code(404);
    }

    return h.response({
        data: products.map(transformer)
    }).code(200);
};
const save = async (req, h) => {
        console.log(req.payload.name, req.payload.price);
        const { name , price } = req.payload;

        const product = new ProductModel;
        product.name = name;
        product.price = price;

        await product.save();

       

        return h.response(transformer(product)).code(201);
    }

const remove = async (req, h) => {
       const product = await ProductModel.findByIdAndDelete(req.params.id);

        if (!product) {
                return h.response({ message: 'Produto não encontrado' }).code(404);
        }

        return h.response().code(204);
    }
const find = async (req, h) => {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
        return h.response({
            message: 'Produto não encontrado'
        }).code(404);
    }

    return h.response({
        data: transformer(product)
    }).code(200);
};
const put = async (req, h) => {
    const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.payload,
        { new: true }
    );

    if (!product) {
        return h.response({
            message: 'Produto não encontrado'
        }).code(404);
    }

    return h.response({
        data: transformer(product)
    }).code(200);
};

const patch = async (req, h) => {
    const product = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.payload,
        { new: true }
    );
    if (!product) {
        return h.response({
            message: 'Produto não encontrado'
        }).code(404);
    }

    return h.response({
        data: transformer(product)
    }).code(200);
};


//criei um modulo geral que puxar todos os produtos
module.exports = {
    getALL,
    save,
    remove,
    find,
    put,
    patch
};