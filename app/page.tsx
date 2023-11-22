import Banner from "./components/Banner";
import Rowposts from "./components/Rowposts";

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <Banner />
      <Rowposts />
      <Rowposts title="Action" />
      <Rowposts title="Drama" />
      <Rowposts title="Sci-Fi" />
    </main>
  );
}
