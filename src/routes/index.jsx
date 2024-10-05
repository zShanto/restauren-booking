import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/main/Home";
import Main from "../loyouts/main/main";
import Foods from "../pages/main/Foods";
import Food from "../pages/main/Food";
import About from "../pages/main/About";
import TermsAndConditions from "../pages/main/TermsAndConditions";


const router = createBrowserRouter([
    {
        path: "/",
       
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/foods",
                element: <Foods />
            },
            {
                path: "/foods/:id",
                element: <Food />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            }
        ]
    },
    
])

export default router;