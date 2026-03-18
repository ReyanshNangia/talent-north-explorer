import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Linkedin } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import logoImg from "@/assets/logo-transparent.png";

// ─── TOGGLE THIS TO SWITCH BETWEEN COMING SOON AND LIVE SITE ───
const COMING_SOON = false;
// ───────────────────────────────────────────────────────────────

const ComingSoon = () => (
  <div style={{
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "2rem",
    textAlign: "center",
  }}>
    <img
      src={logoImg}
      alt="Talent North"
      style={{ height: "80px", marginBottom: "2.5rem" }}
    />
    <h1 style={{
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: "700",
      color: "#1a1a2e",
      marginBottom: "1rem",
      letterSpacing: "-0.02em",
    }}>
      Coming Soon
    </h1>
    <p style={{
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      color: "#6b7280",
      maxWidth: "480px",
      lineHeight: "1.7",
      marginBottom: "2.5rem",
    }}>
      Our website is launching soon. In the meantime, connect with us on LinkedIn.
    </p>
    <a
      href="https://www.linkedin.com/in/prafulnangia/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        backgroundColor: "#00558c",
        color: "#ffffff",
        padding: "0.85rem 2rem",
        borderRadius: "0.5rem",
        fontWeight: "600",
        fontSize: "1rem",
        textDecoration: "none",
        transition: "opacity 0.2s",
      }}
      onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
      onMouseOut={e => (e.currentTarget.style.opacity = "1")}
    >
      <Linkedin size={20} />
      Connect on LinkedIn
    </a>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  if (COMING_SOON) return <ComingSoon />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
