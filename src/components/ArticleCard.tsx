
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id?: number;
  image: string;
  title: string;
  excerpt?: string;
  category: string;
  author?: string;
  size?: 'small' | 'medium' | 'large';
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id = 1, // Default ID if not provided
  image,
  title,
  excerpt,
  category,
  author,
  size = 'medium',
}) => {
  return (
    <article className={`mb-6 animate-fade-in-up`}>
      <Link to={`/article/${id}`} className="block group">
        <div className="mb-3">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105
              ${size === 'large' ? 'h-72' : size === 'medium' ? 'h-56' : 'h-40'}`}
          />
        </div>
        <div>
          <span className="inline-block text-xs uppercase font-sans tracking-wider mb-1 text-gray-500">
            {category}
          </span>
          <h3 className={`font-playfair font-bold leading-tight mb-2
            ${size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
          {excerpt && size !== 'small' && (
            <p className="font-sans text-gray-700 text-sm mb-1 line-clamp-2">{excerpt}</p>
          )}
          {author && <p className="text-xs font-sans italic text-gray-500">{author}</p>}
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
