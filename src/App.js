import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componants/Header";
import 'swiper/css';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import Home from "./Componants/Home";
import Footer from "./Componants/Footer";
import Posts from "./Componants/Posts";
import SinglePostPage from "./Componants/SinglePostPage";

const App = ()=>{
  return(   
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={ <Home/> } />
        </Route>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/post/:slug" element={<SinglePostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;