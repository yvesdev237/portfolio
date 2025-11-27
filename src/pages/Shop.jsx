import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { products, productCategories } from '../data/shopData';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <Section title="Shop" subtitle="Digital products and templates">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Filters</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <div className="space-y-2">
                    {['All', ...productCategories].map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {paginatedProducts.length > 0 ? (
                <>
                  <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                  >
                    {paginatedProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link to={`/shop/${product.slug}`}>
                          <Card className="h-full overflow-hidden hover:shadow-2xl cursor-pointer">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-300 dark:bg-gray-700">
                              <motion.img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                              />
                              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                                ${product.price}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {product.category}
                              </p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                {product.description}
                              </p>

                              {/* Rating & Downloads */}
                              <div className="flex items-center gap-2 mb-4">
                                <div className="flex">
                                  {[...Array(Math.round(product.rating))].map((_, i) => (
                                    <span key={i} className="text-yellow-400">⭐</span>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  ({product.downloads})
                                </span>
                              </div>

                              {/* CTA */}
                              <Button className="w-full">View Details</Button>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <motion.button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            currentPage === i + 1
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                          }`}
                        >
                          {i + 1}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No products found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Shop;
