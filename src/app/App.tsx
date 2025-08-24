import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../shared/api/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import GlobalErrorMessage from "../shared/components/GlobalErrorMessage";
import GlobalLoading from "../shared/components/GlobalLoading";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalErrorMessage />
      <GlobalLoading />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
