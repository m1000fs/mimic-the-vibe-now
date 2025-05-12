
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will respond shortly.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <SectionTitle title="Contact Us" />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-6">
                  Have a question, comment, or story idea? We'd love to hear from you. 
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Editorial</h3>
                    <p>editorial@dailychronicle.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Subscriptions</h3>
                    <p>subscriptions@dailychronicle.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Advertising</h3>
                    <p>advertising@dailychronicle.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-1">Office</h3>
                  <address className="not-italic">
                    123 Publishing Street<br />
                    New York, NY 10001<br />
                    United States
                  </address>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 font-sans uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
