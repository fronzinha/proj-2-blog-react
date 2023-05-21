import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { CreatePost } from "../pages/CreatePost";
import { Header } from "../components/Header";
import { PageContent } from "../PageContent/styles";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

     <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/create" element={<CreatePost />} />
        </Routes>
     </PageContent>
      
    </BrowserRouter>
  );
};
