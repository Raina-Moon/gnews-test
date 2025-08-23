import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../shared/api/queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
