
import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  id?: number;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id = 1, // Default ID if not provided
  image,
  title,
  excerpt,
  category,
  author,
}) => {
  return (
    <article className="animate-fade-in">
      <Link to={`/article/${id}`} className="block group">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-white">
              <span className="inline-block bg-black px-2 py-1 text-xs uppercase font-sans tracking-wider mb-2">
                {category}
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                {title}
              </h2>
              <p className="font-sans text-sm md:text-base opacity-90 mb-2 max-w-2xl">
                {excerpt}
              </p>
              <p className="text-sm font-sans italic">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedArticle;
