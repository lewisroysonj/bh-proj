import { Route, Routes } from "react-router";
import PagesHome from "../../pages/home";
import LayoutMain from "../../layouts/main";

const routes = [
  {
    path: "/",
    Element: PagesHome,
  },
];

function RoutesRoot() {
  return (
    <>
      <Routes>
        {routes.map(({ path, Element }) => {
          const Layout = Element?.Layout ? Element.Layout : LayoutMain;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default RoutesRoot;
