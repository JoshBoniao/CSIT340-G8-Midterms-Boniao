import Controls from "./Controls"
import Header from "./Header"
function Docs ({handleRead, handleBookmark, handleReset}) {
    return (
        <div>
          <Header />
          <div className="mt-6 flex gap-4">
            <Controls handle = {handleRead} label = "Mark as read" />
            <Controls handle = {handleBookmark} label = "Bookmark" />
            <Controls handle = {handleReset} label = "Reset" />
          </div>
        </div>
    )
}
export default Docs