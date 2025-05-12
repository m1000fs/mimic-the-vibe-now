
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <SectionTitle title="About The Daily Chronicle" />
          
          <div className="max-w-3xl mx-auto">
            <div className="prose lg:prose-xl mb-12">
              <p className="text-xl font-serif first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                The Daily Chronicle is dedicated to exploring the intersections of culture, politics, and ideas through thoughtful journalism.
              </p>
              
              <p>
                Founded in 2025, The Daily Chronicle aims to deliver nuanced perspectives on the most compelling stories of our time. Our publication brings together diverse voices and viewpoints, creating a space for in-depth analysis and reflection.
              </p>
              
              <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              
              <p>
                We believe that thoughtful, well-crafted journalism can deepen understanding, foster empathy, and inspire meaningful action. In an age of information overload, we're committed to providing context, nuance, and insight.
              </p>
              
              <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">Our Team</h2>
              
              <p>
                Our editorial team consists of experienced journalists, emerging writers, and subject matter experts from around the world. We value multiple perspectives and voices that challenge conventional thinking.
              </p>
              
              <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              
              <p>
                For general inquiries: <a href="mailto:info@dailychronicle.com" className="text-black underline">info@dailychronicle.com</a>
              </p>
              
              <p>
                For editorial submissions: <a href="mailto:submissions@dailychronicle.com" className="text-black underline">submissions@dailychronicle.com</a>
              </p>
              
              <p>
                For advertising opportunities: <a href="mailto:advertising@dailychronicle.com" className="text-black underline">advertising@dailychronicle.com</a>
              </p>
              
              <div className="bg-gray-100 p-6 mt-8">
                <p className="italic">
                  "Our goal is to illuminate the complex issues of our time through careful reporting and thoughtful writing. We invite our readers to engage with ideas that matter."
                </p>
                <p className="text-right font-bold mt-2">— The Editors</p>
              </div>
            </div>
          </div>
          
          <div className="my-12">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
              alt="The Daily Chronicle Team" 
              className="w-full h-96 object-cover" 
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              The Daily Chronicle editorial office in New York City
            </p>
          </div>
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
