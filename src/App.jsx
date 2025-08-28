import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {CaseStudy1Page} from "./pages/CaseStudy1Page";
import {CaseStudy2Page} from "./pages/CaseStudy2Page";
import {CaseStudy3Page} from "./pages/CaseStudy3Page";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="Home" element={<Home />}/>
          <Route path="CaseStudy1Page" element={<CaseStudy1Page />}/>
          <Route path="CaseStudy2Page" element={<CaseStudy2Page />}/>
          <Route path="CaseStudy3Page" element={<CaseStudy3Page />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
