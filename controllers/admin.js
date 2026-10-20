const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null, title, imageUrl, description, price);
  // product.save();
  /* 
    Create mehod helps us to save the data to the DB awith help of Promises
  */
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }).then(result => {
    // console.log('Created Product');
    res.redirect('/admin/products');
  }).catch(err => {
    // console.log(err);
  });


  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => {
    console.log("error is",err)
  }) 
};

exports.postEditProduct = async (req, res, next) => {
  const prodId = req.body.productId;
  try {
    const product = await Product.findByPk(prodId);
    if (!product) {
      return res.redirect('/');
    }

    product.title = req.body.title;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;

    await product.save();
    res.redirect('/admin/products');
  } catch (err) {
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.findAll();
  // findAll returns an array of Sequelize instances; read fields from an item (e.g. products[0].title), not the array.
  // console.log('products are ', products, products.title)
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  /* 
    Deletion can also be handled by first fetching the prodcut and then calling destroy on it
    const product = await Product.findByPk(prodId);
    if (product) {
      await product.destroy();
    }
  */
  Product.destroy({ where: { id: prodId } }).then(()=> {
    res.redirect('/admin/products');
  });
};
