import Header from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
