
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ToolDetail from "./pages/ToolDetail";
import CategoryPage from "./pages/CategoryPage";
import MainCategoryPage from "./pages/MainCategoryPage";
import SimilarTools from "./pages/SimilarTools";
import NotFound from "./pages/NotFound";
import DisclaimerPopup from "./components/DisclaimerPopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tool/:toolId" element={<ToolDetail />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/main-category/:mainCategoryName" element={<MainCategoryPage />} />
            <Route path="/similar/:toolId" element={<SimilarTools />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <DisclaimerPopup />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
