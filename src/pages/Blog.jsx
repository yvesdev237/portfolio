import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <Section title="Blog" subtitle="Articles, tutorials, and web development insights">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600 focus:outline-none"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            <button
              onClick={() => {
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          {paginatedPosts.length > 0 ? (
            <>
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {paginatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <Card className="h-full overflow-hidden hover:shadow-2xl cursor-pointer">
                        {/* Image */}
                        <div className="relative h-40 overflow-hidden bg-gray-300 dark:bg-gray-700">
                          <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700 text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{post.readTime}</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Read →</span>
                          </div>
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
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300'
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
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
