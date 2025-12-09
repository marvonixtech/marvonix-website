import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import { BLOG_POSTS } from '../data/content';

export const BlogList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SectionTitle 
        eyebrow="Blog" 
        title="Thoughts on building better systems."
        description="No fluff. Just practical insights on automation, software development, and making technology work for you."
      />

      <div className="grid gap-10 mt-16">
        {BLOG_POSTS.map((post, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div 
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group cursor-pointer bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-2xl hover:border-[#1A3CE4]/40 dark:hover:border-[#4FD3FF]/40 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <span className="text-slate-500 text-sm font-medium mb-2 md:mb-0">{post.date}</span>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[11px] uppercase tracking-wide bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-700 font-bold">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 group-hover:text-[#1A3CE4] dark:group-hover:text-[#4FD3FF] transition-colors tracking-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-[16px]">{post.description}</p>
              <span className="text-[#1A3CE4] dark:text-[#4FD3FF] text-[13px] font-bold flex items-center tracking-wide uppercase">
                Read Post <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <button onClick={() => navigate('/blog')} className="text-blue-500 hover:underline mt-4">Back to Blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <button onClick={() => navigate('/blog')} className="text-[#1A3CE4] dark:text-[#4FD3FF] hover:underline flex items-center mb-10 text-sm font-bold tracking-wide uppercase">
        <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to all posts
      </button>
      <span className="text-slate-500 text-sm font-medium mb-4 block">{post.date}</span>
      <h1 className="text-3xl md:text-5xl font-[800] text-[#0A0F2C] dark:text-white mt-2 mb-8 leading-tight tracking-tighter">{post.title}</h1>
      <div className="flex gap-2 mb-16">
        {post.tags.map(tag => (
          <span key={tag} className="text-[11px] uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full font-bold">{tag}</span>
        ))}
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.content.map((block, i) => {
          if (block.type === 'h3') return <h3 key={i} className="text-2xl font-bold text-[#0A0F2C] dark:text-white mt-12 mb-6 tracking-tight">{block.text}</h3>
          return <p key={i} className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-[18px]">{block.text}</p>
        })}
      </div>
    </div>
  );
};
