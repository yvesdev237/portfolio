import React from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              layout
              className="lg:col-span-2"
            >
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="p-6 flex gap-6">
                      {/* Image */}
                      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          ${item.price.toFixed(2)} each
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit px-3 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="hover:text-blue-600 transition-colors"
                          >
                            <FiMinus size={18} />
                          </button>
                          <span className="font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="hover:text-blue-600 transition-colors"
                          >
                            <FiPlus size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right flex flex-col justify-between">
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 dark:hover:text-red-400 transition-colors flex items-center gap-2"
                        >
                          <FiTrash2 size={20} />
                          Remove
                        </button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link to="/shop" className="inline-block mt-6">
                <Button variant="secondary">Continue Shopping</Button>
              </Link>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                {/* Summary Details */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Shipping:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$0.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between mb-8">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button size="lg" className="w-full mb-3">
                  Proceed to Checkout
                </Button>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
                >
                  Clear Cart
                </button>

                {/* Info Box */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 <strong>Tip:</strong> All digital products are delivered instantly after purchase!
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        ) : (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Browse our shop and add some amazing products to your cart!
            </p>
            <Link to="/shop">
              <Button size="lg" className="flex items-center justify-center gap-2">
                <FiShoppingCart size={20} />
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cart;
