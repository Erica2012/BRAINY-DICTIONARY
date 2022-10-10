import { useState } from "react";
import Sidebar from "../components/sidebar";
import Landingpage from "./landingpage";

const DashboardUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Landingpage sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default DashboardUser;
