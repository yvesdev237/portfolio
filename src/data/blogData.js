export const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    slug: 'getting-started-with-react-hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
    content: `# Getting Started with React Hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from function components.

## What are Hooks?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### Common Hooks

1. **useState** - Lets you add state to functional components
2. **useEffect** - Lets you perform side effects in functional components
3. **useContext** - Lets you subscribe to React context without introducing nesting

## Why use Hooks?

- Simpler code
- Reusable logic
- Better code organization
- Easier to test

## Example

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

This is just the beginning. Start exploring and building amazing applications with React Hooks!`,
    category: 'React',
    author: 'Yves Dev',
    date: '2025-01-15',
    readTime: '5 min read',
    image: 'https://via.placeholder.com/400x200?text=React+Hooks',
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 2,
    title: 'Tailwind CSS Best Practices',
    slug: 'tailwind-css-best-practices',
    excerpt: 'Master the art of building beautiful UIs with Tailwind CSS utility classes.',
    content: `# Tailwind CSS Best Practices

Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.

## Key Benefits

- **Rapid Development**: Build designs without leaving your HTML
- **Consistency**: Maintain design consistency across your project
- **Responsive Design**: Built-in responsive prefixes for all utilities

## Best Practices

1. Use meaningful class names
2. Extract components when necessary
3. Leverage the config file for customization
4. Use @apply for repeated patterns

Learn more about Tailwind CSS and start building beautiful interfaces today!`,
    category: 'CSS',
    author: 'Yves Dev',
    date: '2025-01-10',
    readTime: '7 min read',
    image: 'https://via.placeholder.com/400x200?text=Tailwind+CSS',
    tags: ['CSS', 'Tailwind', 'Design']
  },
  {
    id: 3,
    title: 'JavaScript ES6 Features You Should Know',
    slug: 'javascript-es6-features',
    excerpt: 'A comprehensive guide to modern JavaScript features that will level up your coding skills.',
    content: `# JavaScript ES6 Features You Should Know

ES6 (ECMAScript 2015) brought significant improvements to JavaScript.

## Key Features

- **Arrow Functions**: Concise syntax for function expressions
- **Destructuring**: Extract values from arrays or properties from objects
- **Template Literals**: Easier string interpolation
- **Classes**: Syntactic sugar for object-oriented programming
- **Promises**: Better handling of asynchronous operations
- **Modules**: Import and export code between files

Start using these features in your projects for cleaner, more maintainable code!`,
    category: 'JavaScript',
    author: 'Yves Dev',
    date: '2025-01-05',
    readTime: '6 min read',
    image: 'https://via.placeholder.com/400x200?text=JavaScript+ES6',
    tags: ['JavaScript', 'ES6', 'Programming']
  }
];

export const categories = ['React', 'CSS', 'JavaScript', 'Web Design', 'Performance'];
