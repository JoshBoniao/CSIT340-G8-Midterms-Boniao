import Controls from "./Controls"
import Header from "./Header"
import StatCard from "./StatCard"
function Docs ({handleRead, handleBookmark, handleReset, read, bookmarks}) {
    return (
      <div className="flex items-end justify-between px-20 pt-10" >
        <div>
          <Header />
          <div className="mt-6 flex gap-4">
            <Controls handle = {handleRead} label = "Mark as read" />
            <Controls handle = {handleBookmark} label = "Bookmark" />
            <Controls handle = {handleReset} label = "Reset" />
            <div className="flex gap-6 ">
            </div>
              <StatCard value = {read} label = "Marked as read" />
              <StatCard value = {bookmarks} label = "Bookmarks" />
          </div>
        </div>
      </div>
    )
}
export default Docs