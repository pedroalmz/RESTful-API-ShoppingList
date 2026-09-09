const productsHandler = require('./handlers/product');
module.exports = [
{
    method: 'GET',
    path: '/api/v1/products',
    //Essa handler e importada do product.js
    handler: productsHandler.getALL
},    
    {
    method: 'GET',
    path: '/api/v1/products/{id}',
    //Essa handler e importada do product.js
    handler: productsHandler.find
},
    {
    method: 'POST',
    path: '/api/v1/products',
    //Essa handler e importada do product.js
    handler: productsHandler.save
},
 {
    method: 'DELETE',
    path: '/api/v1/products/{id}',
    //Essa handler e importada do product.js
    handler: productsHandler.remove
},
{
    method: 'PUT',
    path: '/api/v1/products/{id}',
    //Essa handler e importada do product.js
    handler: productsHandler.put
},
{
    method: 'PATCH',
    path: '/api/v1/products/{id}',
    //Essa handler e importada do product.js
    handler: productsHandler.patch
}
]