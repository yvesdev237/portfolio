import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-96 overflow-hidden bg-gray-300 dark:bg-gray-700 mb-12"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose dark:prose-invert max-w-none mb-12 text-gray-700 dark:text-gray-300"
        >
          <div className="whitespace-pre-wrap text-lg leading-relaxed">
            {post.content}
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Section title="Related Articles" className="mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, i) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full cursor-pointer">
                      <div className="relative h-40 overflow-hidden bg-gray-300 dark:bg-gray-700">
                        <motion.img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {relatedPost.readTime}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
