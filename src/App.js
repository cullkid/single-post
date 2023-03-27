import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/SinglePost/SinglePost";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/single-post" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
