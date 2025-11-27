import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import { blogPosts } from '../../data/blogData';

const BlogPreview = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Section 
      title="Latest Blog Posts"
      subtitle="Tips, tutorials, and insights on web development"
      className="bg-gray-50 dark:bg-gray-900"
    >
      {recentPosts.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-gray-300 dark:bg-gray-700">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg">View All Blog Posts</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            📝 No blog posts yet. Check back soon for insights and tutorials!
          </p>
        </div>
      )}
    </Section>
  );
};

export default BlogPreview;
