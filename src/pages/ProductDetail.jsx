import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiCheckCircle } from 'react-icons/fi';
import { products } from '../data/shopData';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useCart } from '../hooks/useCart';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        {/* Breadcrumb */}
        <Link to="/shop" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
          ← Back to Shop
        </Link>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-700">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
              {product.category}
            </div>

            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(Math.round(product.rating))].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.downloads} downloads)
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              {product.longDescription}
            </p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-2">Price</p>
              <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-3">Features</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FiShoppingCart size={20} />
                  {added ? 'Added to Cart!' : 'Add to Cart'}
                </Button>
              </motion.div>
              <a href={product.demoLink} className="flex-1">
                <Button variant="secondary" size="lg" className="w-full">
                  View Demo
                </Button>
              </a>
            </div>

            {/* Success Message */}
            {added && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <FiCheckCircle size={20} />
                Product added to your cart!
              </motion.div>
            )}

            {/* Info Box */}
            <Card className="p-6 mt-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300">
                ✨ <strong>Instant Download:</strong> Receive access to all files immediately after purchase.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section title="Related Products" className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, i) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/shop/${relatedProduct.slug}`}>
                    <Card className="h-full cursor-pointer">
                      <div className="relative h-40 overflow-hidden bg-gray-300 dark:bg-gray-700">
                        <motion.img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-bold">
                          ${relatedProduct.price.toFixed(2)}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
};

export default ProductDetail;
