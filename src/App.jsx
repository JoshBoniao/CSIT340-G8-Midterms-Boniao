import { useState } from "react";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import Header from "./components/Header";
import Docs from "./components/Docs";
import Guide from "./components/Guide"
function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author = "Josh Boniao" />

      <div className="flex items-end justify-between px-20 pt-10">
        <div>
         <Header />
          <Docs />
        </div>
        <div className="flex gap-6">
          <StatCard value = {read} label = "Marked as read" />
          <StatCard value = {bookmarks} label = "Bookmarks" />
        </div>
      </div>
      <main>
        <Guide />

      </main>
      
    </div>
  );
}

export default App;