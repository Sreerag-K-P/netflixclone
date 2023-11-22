import Banner from "./components/Banner";
import Rowposts from "./components/Rowposts";

export default function Home() {
  return (
    <main className="bg-zinc-900 ">
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <Rowposts />
        <Rowposts title="Action" />
        <Rowposts title="Drama" />
        <Rowposts title="Sci-Fi" />
      </div>
    </main>
  );
}
