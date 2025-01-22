import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className="b-rose-600 space-y-32">
      <Hero />
      <Category />
      <Trending />
    </main>
  );
}
