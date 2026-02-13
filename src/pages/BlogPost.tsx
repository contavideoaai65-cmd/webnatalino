import { useParams, Link, useNavigate } from "react-router-dom";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, loading, error } = useBlogPost(slug || "");
  const { posts } = useBlogPosts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-muted-foreground mt-4">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="btn-neon">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <SEO 
        title={post.title} 
        description={post.description}
        ogType="article"
      />
      <div className="container max-w-3xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Blog
        </motion.button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
        >
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-muted-foreground" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-primary hover:underline" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-muted/30 px-2 py-1 rounded text-sm text-primary" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-16 pb-16 border-b border-border"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="card-dark p-6 hover:border-primary/50 transition-all group"
                >
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {relatedPost.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(relatedPost.date).toLocaleDateString("pt-BR")}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 card-dark p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Gostou deste artigo?
          </h3>
          <p className="text-muted-foreground mb-6">
            Fale comigo no WhatsApp e vamos conversar sobre como transformar sua presença digital.
          </p>
          <a
            href="https://wa.me/5521981853032?text=Olá! Li seu artigo no blog e gostaria de conversar sobre meu projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
