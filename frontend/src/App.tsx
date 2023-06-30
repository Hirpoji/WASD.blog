import Header from "./components/Header";
import FullPost from "./pages/FullPost";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App mx-auto max-w-5xl mt-12 mb-12 pl-5 pr-5 relative">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow mb-20">
          {/* <Home /> */}
          <FullPost />
        </div>
      </div>
    </div>
  );
}

export default App;