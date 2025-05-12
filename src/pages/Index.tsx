
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import SectionTitle from '@/components/SectionTitle';
import Newsletter from '@/components/Newsletter';
import { featuredArticle, articles, trendingArticles } from '@/data/mockArticles';

const Index = () => {
  // Split articles into groups for different sections
  const editorsPicks = articles.slice(0, 3);
  const latestArticles = articles.slice(3, 6);
  const moreArticles = articles.slice(6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Featured Article (Hero) */}
        <section className="mb-8">
          <FeaturedArticle 
            id={featuredArticle.id}
            image={featuredArticle.image}
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            category={featuredArticle.category}
            author={featuredArticle.author}
          />
        </section>
        
        <div className="container mx-auto px-4">
          {/* Editor's Picks */}
          <SectionTitle title="Editor's Picks" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorsPicks.map(article => (
              <ArticleCard
                key={article.id}
                id={article.id}
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
          
          {/* Latest Articles */}
          <SectionTitle title="Latest Articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map(article => (
              <ArticleCard
                key={article.id}
                id={article.id}
                image={article.image}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                size="medium"
              />
            ))}
          </div>
          
          {/* Feature Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
            {/* Main column */}
            <div className="lg:col-span-8">
              <SectionTitle title="In Depth" />
              <div className="space-y-8">
                {moreArticles.map(article => (
                  <div key={article.id} className="border-b border-gray-200 pb-8 last:border-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-5">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover" 
                        />
                      </div>
                      <div className="md:col-span-7">
                        <span className="inline-block text-xs uppercase font-sans tracking-wider mb-1 text-gray-500">
                          {article.category}
                        </span>
                        <h3 className="font-playfair text-xl font-bold mb-2">
                          <Link to={`/article/${article.id}`} className="hover:underline">
                            {article.title}
                          </Link>
                        </h3>
                        <p className="text-gray-700 text-sm mb-2">{article.excerpt}</p>
                        <p className="text-xs font-sans italic text-gray-500">{article.author} • {article.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <SectionTitle title="Trending" />
              <div className="bg-gray-100 p-6">
                <div className="space-y-6">
                  {trendingArticles.map((article, index) => (
                    <div key={article.id} className={index !== 0 ? "pt-6 border-t border-gray-200" : ""}>
                      <ArticleCard
                        id={article.id}
                        image={article.image}
                        title={article.title}
                        category={article.category}
                        size="small"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
