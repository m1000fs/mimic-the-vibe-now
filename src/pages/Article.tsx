
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Newsletter from '@/components/Newsletter';
import { articles, trendingArticles } from '@/data/mockArticles';
import ArticleCard from '@/components/ArticleCard';
import { ArrowLeft } from 'lucide-react';

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  // Find the requested article from our mock data
  const allArticles = [...articles, ...trendingArticles];
  const article = allArticles.find(a => a.id === Number(articleId));
  
  // If article not found, show a message
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="font-playfair text-3xl mb-4">Article Not Found</h1>
            <p className="mb-6">We couldn't find the article you're looking for.</p>
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex items-center text-black px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Return Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related articles from the same category
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8">
          {/* Article Header */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="mb-4">
              <span className="inline-block text-xs uppercase font-sans tracking-wider mb-2 text-gray-500">
                {article.category}
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-xl font-serif mb-6 text-gray-700">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By {article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Photo illustration for The Daily Chronicle
            </p>
          </div>
          
          {/* Article Content */}
          <div className="max-w-2xl mx-auto">
            <div className="prose lg:prose-xl">
              <p className="text-xl font-serif first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <p>
                Nulla facilisi. Morbi in tempus arcu. Sed vehicula mi neque, vel interdum nunc placerat quis. Duis rutrum consequat feugiat. Aliquam ut est massa. Etiam ac nisi a lectus facilisis semper in et augue. Sed vel commodo ipsum. Nullam quis sapien ante. Cras aliquet massa vel dictum vehicula.
              </p>
              
              <p>
                Proin nec tincidunt lectus, vel finibus nunc. Nullam eget leo gravida, pretium leo ac, cursus erat. Nulla facilisi. Duis justo elit, pharetra ut lorem eget, elementum sodales lacus. Proin tincidunt, erat at consequat pellentesque, ligula diam tristique felis, nec volutpat tortor quam at risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
              
              <blockquote>
                "In a world where digital distractions multiply by the day, the act of immersing oneself in a thoughtfully crafted long-form piece has become a radical form of attention."
              </blockquote>
              
              <p>
                Suspendisse potenti. Aliquam convallis fermentum ipsum eget sagittis. Cras tempor, mi non malesuada tincidunt, nisi massa consequat odio, id tincidunt nibh urna vitae nulla. Praesent orci nulla, aliquet nec sollicitudin et, tincidunt vel enim. Nunc pulvinar, urna nec elementum malesuada, turpis justo cursus erat, vitae condimentum nisi justo in enim.
              </p>
              
              <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">The Changing Landscape</h2>
              
              <p>
                Vivamus ac dui lacus. Donec dolor justo, faucibus et lacus vel, eleifend volutpat nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Integer sollicitudin libero ac massa finibus, ut fringilla metus finibus. Suspendisse id erat enim.
              </p>
              
              <p>
                Quisque ac tempor magna. Suspendisse vitae neque vel nunc lobortis pellentesque. Aenean finibus magna et magna dapibus ullamcorper. Donec maximus dolor at ultricies dictum. Quisque ac purus dictum, sagittis dolor ac, sodales erat. Ut quis leo vitae eros hendrerit rutrum. Suspendisse potenti. Aliquam nec elit eget eros tempor fermentum vel ut risus.
              </p>
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        <div className="container mx-auto px-4 py-12">
          <SectionTitle title="Related Articles" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                size="medium"
              />
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
