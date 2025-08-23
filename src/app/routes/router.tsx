import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <div>Home</div>,
        children: [
            {path: '/', element: <div>Home</div> }
        ]
    }
])