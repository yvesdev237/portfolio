import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import { products } from '../../data/shopData';

const ShopPreview = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Section 
      title="Shop"
      subtitle="Check out my digital products and templates"
      className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800"
    >
      {featuredProducts.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-300 dark:bg-gray-700">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${product.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {product.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(Math.round(product.rating))].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ({product.downloads} downloads)
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a href={product.demoLink} className="flex-1">
                        <Button variant="secondary" className="w-full">
                          Demo
                        </Button>
                      </a>
                      <Link to={`/shop/${product.slug}`} className="flex-1">
                        <Button className="w-full">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            🛍️ Shop section coming soon! Start building your collection of digital products.
          </p>
        </div>
      )}
    </Section>
  );
};

export default ShopPreview;
