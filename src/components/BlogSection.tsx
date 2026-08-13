import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/zentechData';
import { BlogPost, PageRoute } from '../types';
import { Calendar, Clock, ArrowRight, X, BookOpen } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface BlogSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog-section" className="py-24 bg-[#FAF9F6] text-slate-900 relative">
      {/* Sub-Hero Banner with Yellow Safety Hats Construction Engineers Background */}
      <div className="relative pt-12 pb-16 bg-slate-900 overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop"
          alt="Engineers wearing yellow safety hard hats"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F97316]/20 border border-[#F97316]/40 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white">
            BLOGS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              LATEST INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              CONSTRUCTION TECHNOLOGY & ARCHITECTURAL GUIDES
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Read expert civil engineering perspectives, sustainable building methods, and architectural trends shaping contemporary construction.
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedArticle(post)}
                className="group bg-white border border-slate-200 hover:border-[#F97316] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image & Category Tag */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-md border border-slate-700">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] text-slate-500 font-mono">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#EA580C] transition-colors uppercase tracking-tight leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 font-normal leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#EA580C]">
                    <span className="uppercase tracking-wider">Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-slate-900 space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <div className="flex items-center space-x-3 text-xs text-[#EA580C] uppercase font-bold mb-2 font-mono">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>By {selectedArticle.author}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{selectedArticle.title}</h3>
            </div>

            <div className="prose max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
              <p className="text-sm font-semibold text-slate-900">{selectedArticle.excerpt}</p>
              {Array.isArray(selectedArticle.content) ? (
                selectedArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))
              ) : (
                <p>{selectedArticle.content}</p>
              )}
              <div className="p-4 bg-amber-50/60 rounded-xl border-l-4 border-[#F97316]">
                <p className="text-[#EA580C] font-bold italic text-xs">
                  Zentech Tip: Demand material testing certificates for TMT rebar elongation and concrete cube strength before pouring slabs.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

