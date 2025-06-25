import { Toaster } from "sonner"; // Sonner toaster (corrected import)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Fixed missing provider import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Replace this with an actual TooltipProvider or remove if not using one
// Local pages (make sure these files exist in ./pages/)
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard.tsx";
import Repositories from "./components/Repositories.js";
import Integrations from "./components/Integrations.js";
import Reports from "./components/Reports.js";
import Login from "./components/Login.js";
import SubscriptionPage from "./components/SubscriptionPage.js";
import OrganizationSettings from "./components/OrganizationSettings.js";
import ApiKeys from "./components/ApiKey.js";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster richColors closeButton position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route
          path="/organizationSettingConfig"
          element={<OrganizationSettings />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/apiKey" element={<ApiKeys />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
