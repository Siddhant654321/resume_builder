import Homepage from "./Screens/HomePage";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import HomePageBottom from "./components/HomePageBottom";
import Navbar from "./components/Navbar";
import TestimonialsSection from "./components/TestimonialsSection";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const Layout = ({ children }) => (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Homepage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
