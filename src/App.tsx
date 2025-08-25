
import * as React from 'react'
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import MainCategoryPage from "./pages/MainCategoryPage";
import ToolDetail from "./pages/ToolDetail";
import SimilarToolsPage from "./pages/SimilarTools";
import NotFound from "./pages/NotFound";
import DisclaimersPage from "./pages/DisclaimersPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/main-category/:mainCategoryName" element={<MainCategoryPage />} />
              <Route path="/tool/:toolId" element={<ToolDetail />} />
              <Route path="/similar-tools/:toolId" element={<SimilarToolsPage />} />
              <Route path="/disclaimers" element={<DisclaimersPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Tiny floating clone button */}
            <a
              href="https://lovable.dev/projects/10fbcd5c-0359-4bd0-9c40-9c7ac9b72765/remix"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs px-2 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
              style={{ fontSize: '8px' }}
            >
              CLONE THIS WEBSITE
            </a>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
