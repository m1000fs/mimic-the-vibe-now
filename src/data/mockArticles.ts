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
  title: "Murderbot: The AI That'd Rather Watch TV Than Save the World",
  excerpt:
    "In a future where security androids are built to protect humans, one self-aware unit hacks its own programming to pursue a simple desire: binge-watching soap operas. Based on Martha Wells' acclaimed series, Murderbot explores the ironic journey of a robot seeking solitude amidst chaos",
  content: "Long-form content goes here...",
  image:
    "/attached_assets/hdtv.webp",
  category: "AI in Culture",
  author: "Randolph Mbecheun",
  date: "May 10, 2025",
};

export const articles: Article[] = [
  {
    id: 2,
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    excerpt:
      "Exploring how architects and urban planners are reimagining city spaces for a more sustainable and community-focused future.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "/attached_assets/imagenet.png",
    category: "Research Papers",
    author: "Randolph Mbecheun",
    date: "May 9, 2025",
  },
  {
    id: 3,
    title:
      "Early internet and Technology Booms: Historical Timeline and Lessons for the AI Era",
    excerpt:
      "How AI and robotics are transforming farming practices while addressing global food security challenges.",
    content: "Lorem ipsum dolor sit amet...",
    image: "/attached_assets/ChatGPT Image 13. Mai 2025, 12_53_50.png",
    category: "History",
    author: "Randolph Mbecheun",
    date: "May 8, 2025",
  },
  {
    id: 4,
    title: "Pause Giant AI Experiments: An Open Letter",
    excerpt:
      "We call on all AI labs to immediately pause for at least 6 months the training of AI Systems more powerfull than GPT-4",
    content: "Lorem ipsum dolor sit amet...",
    image: "/attached_assets/fli_logo_white-300x204.webp",
    category: "Culture",
    author: "Randolph Mbecheun",
    date: "May 7, 2025",
  },
  {
    id: 5,
    title: "Natural Language Processing (NLP): Concepts, Techniques, and Real-World Applications",
    excerpt:
      "This article breaks down the essentials of Natural Language Processing (NLP), covering key techniques like tokenization, parsing, and word embeddings, as well as real-world uses in translation, chatbots, and text analysis. It also highlights popular tools like spaCy and Hugging Face that power today’s language technologies.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "/attached_assets/imagenet.png",
    category: "Living",
    author: "Randolph Mbecheun",
    date: "May 6, 2025",
  },
  {
    id: 6,
    title: "Andrej Karparthy",
    excerpt:
      "How digital tools are democratizing cinema and allowing new voices to emerge in the global film landscape.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "/attached_assets/Andrej Karparthy.jpg",
    category: "People & power",
    author: "Randolph Mbecheun",
    date: "May 5, 2025",
  },
  {
    id: 7,
    title: "Rethinking Education for the 21st Century",
    excerpt:
      "Educators and policy makers are reimagining learning environments to better prepare students for an uncertain future.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Education",
    author: "Randolph Mbecheun",
    date: "May 4, 2025",
  },
  {
    id: 8,
    title: "The Quiet Return of Slow Travel",
    excerpt:
      "Moving beyond tourist checkboxes, travelers are seeking deeper connections with fewer destinations.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Travel",
    author: "Randolph Mbecheun",
    date: "May 3, 2025",
  },
  {
    id: 9,
    title: "The Evolution of Modern Political Discourse",
    excerpt:
      "Analyzing how social media and changing demographics are reshaping political communication.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "/attached_assets/mcp.jpg",
    category: "Politics",
    author: "Randolph Mbecheun",
    date: "May 2, 2025",
  },
];

export const trendingArticles: Article[] = [
  {
    id: 10,
    title: "model context protocol",
    excerpt:
      "Exploring the renewed interest in handmade goods in response to mass production.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "/attached_assets/mcp.jpg",
    category: "Tools & API",
    author: "Randolph Mbecheun",
    date: "May 1, 2025",
  },
  {
    id: 11,
    title: "Culinary Traditions at Risk of Disappearing",
    excerpt:
      "How globalization threatens regional food practices and the efforts to preserve them.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Food",
    author: "Randolph Mbecheun",
    date: "April 30, 2025",
  },
  {
    id: 12,
    title: "The Return of Vinyl Records in the Streaming Era",
    excerpt:
      "Understanding why physical media endures in an age of unlimited digital access.",
    content: "Lorem ipsum dolor sit amet...",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    category: "Music",
    author: "Randolph Mbecheun",
    date: "April 29, 2025",
  },
];