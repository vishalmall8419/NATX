import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import Overview from "./Pages/Dashboard/Overview";
import Trade from "./Pages/Dashboard/Trade";
import Staking from "./Pages/Dashboard/Staking";
import GovernanceDash from "./Pages/Dashboard/GovernanceDash";
import Settings from "./Pages/Dashboard/Settings";
import CustomCursor from "./Components/CustomCursor";

// Info Pages
import Whitepaper from "./Pages/Info/Whitepaper";
import DeveloperDocs from "./Pages/Info/DeveloperDocs";
import NodeSetupGuide from "./Pages/Info/NodeSetupGuide";
import PrivacyPolicy from "./Pages/Info/PrivacyPolicy";
import TermsOfService from "./Pages/Info/TermsOfService";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Info Pages */}
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/docs" element={<DeveloperDocs />} />
        <Route path="/node-guide" element={<NodeSetupGuide />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="trade" element={<Trade />} />
          <Route path="staking" element={<Staking />} />
          <Route path="governance" element={<GovernanceDash />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
