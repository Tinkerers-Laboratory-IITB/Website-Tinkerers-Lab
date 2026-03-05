import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Legacy from "./pages/Legacy";
import Contribute from "./pages/Contribute";
import HowTLFunctions from "./pages/HowTLFunctions";
import Impact from "./pages/Impact";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Newsletter from "./pages/Newsletter";
import ComingSoon from "./pages/ComingSoon";
import TeamDirectory from "./pages/TeamDirectory";
import ProjectDetail from "./pages/ProjectDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/events" component={Events} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/legacy" component={Legacy} />
      <Route path="/contribute" component={Contribute} />
      <Route path="/how-tl-functions" component={HowTLFunctions} />
      <Route path="/impact" component={Impact} />
      <Route path="/policies" component={Policies} />
      <Route path="/contact" component={Contact} />
      <Route path="/booking" component={Booking} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/team" component={TeamDirectory} />
      <Route path="/project/:slug" component={ProjectDetail} />
      <Route path="/alumni" component={ComingSoon} />
      <Route path="/mentors" component={ComingSoon} />
      <Route path="/partners" component={ComingSoon} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
