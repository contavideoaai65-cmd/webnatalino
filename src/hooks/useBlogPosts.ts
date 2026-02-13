import { useState, useEffect } from "react";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Get list of blog files
        const response = await fetch("/blog");
        if (!response.ok) throw new Error("Failed to fetch blog directory");

        // For now, we'll manually list the posts
        // In production, you'd want a proper backend endpoint
        const postFiles = [
          "001-por-que-pequenas-empresas-precisam-de-site.md",
          "002-landing-pages-que-convertem.md",
        ];

        const loadedPosts: BlogPost[] = [];

        for (const file of postFiles) {
          const postResponse = await fetch(`/blog/${file}`);
          if (!postResponse.ok) continue;

          const markdown = await postResponse.text();
          const { data, content } = matter(markdown);

          loadedPosts.push({
            slug: data.slug || file.replace(".md", ""),
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString().split("T")[0],
            author: data.author || "Anonymous",
            description: data.description || "",
            category: data.category || "General",
            tags: data.tags || [],
            content,
          });
        }

        // Sort by date (newest first)
        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(loadedPosts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postFiles = [
          "001-por-que-pequenas-empresas-precisam-de-site.md",
          "002-landing-pages-que-convertem.md",
        ];

        for (const file of postFiles) {
          const response = await fetch(`/blog/${file}`);
          if (!response.ok) continue;

          const markdown = await response.text();
          const { data, content } = matter(markdown);

          if (data.slug === slug || file.replace(".md", "") === slug) {
            setPost({
              slug: data.slug || file.replace(".md", ""),
              title: data.title || "Untitled",
              date: data.date || new Date().toISOString().split("T")[0],
              author: data.author || "Anonymous",
              description: data.description || "",
              category: data.category || "General",
              tags: data.tags || [],
              content,
            });
            setError(null);
            return;
          }
        }

        setError("Post not found");
        setPost(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};
