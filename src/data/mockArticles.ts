
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

export const featuredArticle: Article = {
  id: 1,
  title: "The Resurgence of Analog in a Digital World",
  excerpt: "How vintage technologies are finding new life in our hyperconnected society, creating nostalgic spaces for authentic experiences.",
  content: "Long-form content goes here...",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  category: "Technology",
  author: "Alexandra Rivera",
  date: "May 10, 2025"
};

export const articles: Article[] = [
  {
    id: 2,
    title: "The Architecture of Tomorrow: Sustainable Urban Environments",
    excerpt: "Exploring how architects and urban planners are reimagining city spaces for a more sustainable and community-focused future.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Design",
    author: "Marcus Chen",
    date: "May 9, 2025"
  },
  {
    id: 3,
    title: "The Silent Revolution in Modern Agriculture",
    excerpt: "How AI and robotics are transforming farming practices while addressing global food security challenges.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Science",
    author: "Elena Petrova",
    date: "May 8, 2025"
  },
  {
    id: 4,
    title: "Rediscovering the Art of Conversation",
    excerpt: "In an era of short-form communication, the value of meaningful dialogue is being recognized anew.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Culture",
    author: "James Wilson",
    date: "May 7, 2025"
  },
  {
    id: 5,
    title: "The Psychology Behind Minimal Living",
    excerpt: "Understanding why minimalism appeals to the overwhelmed mind and how it shapes our relationship with possessions.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Living",
    author: "Sarah Johnson",
    date: "May 6, 2025"
  },
  {
    id: 6,
    title: "The New Wave of Independent Filmmaking",
    excerpt: "How digital tools are democratizing cinema and allowing new voices to emerge in the global film landscape.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1505209033803-ea86bef34a5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Arts",
    author: "Daniel Rodriguez",
    date: "May 5, 2025"
  },
  {
    id: 7,
    title: "Rethinking Education for the 21st Century",
    excerpt: "Educators and policy makers are reimagining learning environments to better prepare students for an uncertain future.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Education",
    author: "Olivia Taylor",
    date: "May 4, 2025"
  },
  {
    id: 8,
    title: "The Quiet Return of Slow Travel",
    excerpt: "Moving beyond tourist checkboxes, travelers are seeking deeper connections with fewer destinations.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Travel",
    author: "Thomas Green",
    date: "May 3, 2025"
  },
  {
    id: 9,
    title: "The Evolution of Modern Political Discourse",
    excerpt: "Analyzing how social media and changing demographics are reshaping political communication.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Politics",
    author: "Nora Ahmed",
    date: "May 2, 2025"
  },
];

export const trendingArticles: Article[] = [
  {
    id: 10,
    title: "The Renaissance of Artisanal Craftsmanship",
    excerpt: "Exploring the renewed interest in handmade goods in response to mass production.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Lifestyle",
    author: "Beatrice Wong",
    date: "May 1, 2025"
  },
  {
    id: 11,
    title: "Culinary Traditions at Risk of Disappearing",
    excerpt: "How globalization threatens regional food practices and the efforts to preserve them.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Food",
    author: "Carlos Mendez",
    date: "April 30, 2025"
  },
  {
    id: 12,
    title: "The Return of Vinyl Records in the Streaming Era",
    excerpt: "Understanding why physical media endures in an age of unlimited digital access.",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Music",
    author: "Amara Jackson",
    date: "April 29, 2025"
  },
];
