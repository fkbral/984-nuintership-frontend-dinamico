import "./App.css";
import SumOne from "./components/SumOne";
import PostFeedPage from "./pages/PostFeedPage";
import PostFeedWithReactQueryPage from "./pages/PostFeedWithReactQueryPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PostFeedWithReactQueryPage,
  },
  {
    path: "/shopping-list",
    Component: ShoppingListPage,
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export { App };
