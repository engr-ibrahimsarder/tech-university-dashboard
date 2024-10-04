import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <App></App>
    }
])
export default router;