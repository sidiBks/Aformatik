import App from "@/App";
import FifthSemOld from "@/pages/FifthSemOld";
import FirstYear from "@/pages/FirstYear";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import SecondYear from "@/pages/SecondYear";
import SixthSemOld from "@/pages/SixthSemOld";
import ThirdYear from "@/pages/ThirdYear";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/ci1',
                element: <FirstYear />,
                children: [
                    {
                        index: true,
                        element: <FifthSemOld />
                    },
                    {
                        path: '/ci1/s5_old',
                        element: <FifthSemOld />
                    },
                    {
                        path: '/ci1/s6_old',
                        element: <SixthSemOld />
                    }
                ]
            },
            {
                path: '/ci2',
                element: <SecondYear />
            },
            {
                path: '/ci3',
                element: <ThirdYear />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
])

export default router