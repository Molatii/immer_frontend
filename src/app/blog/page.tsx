import BlogCTA from "../components/blog/blogCTA";
import BlogFooter from "../components/blog/blogFooter";
import BlogHeader from "../components/blog/blogHeader";
import BlogHero from "../components/blog/blogHero";
import FeatureContent from "../components/blog/featuredContent";
import MainContent from "../components/blog/mainContent";

import { FeaturedContent, BloggersData } from "../components/blog/demoData";

const Blog = () => {
  const featuredContentData = FeaturedContent;
  const mostPopularBloggers = BloggersData;
  return (
    <div className="min-h-screen items-center justify-center w-full bg-white">
      <BlogHeader />
      <BlogHero />
      <FeatureContent featuredContentData={featuredContentData} />
      <MainContent
        LatestArticles={featuredContentData}
        PopularBloggers={mostPopularBloggers}
      />
      <BlogCTA />
      <BlogFooter />
    </div>
  );
};

export default Blog;
