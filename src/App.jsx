import Homepage from "./Screens/HomePage";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
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
