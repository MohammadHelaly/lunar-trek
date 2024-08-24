import { Routes } from "@/lib/router/routes";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AnimatedOutlet from "@/lib/router/animated-outlet";
import ScrollToTop from "@/components/scroll-to-top";
import Background from "@/components/background";
import LandingPage from "@/pages/landing-page";
import GlobeExplorationPage from "@/pages/globe-exploration-page";
import UnrealEngineExplorationPage from "@/pages/unreal-engine-exploration-page";

const routes = [
  {
    element: (
      <>
        <ScrollToTop />
        <Background />
        <AnimatedOutlet />
      </>
    ),
    children: [
      {
        path: Routes.HOME,
        element: <LandingPage />,
      },
      {
        path: Routes.GLOBE_EXPLORATION,
        element: <GlobeExplorationPage />,
      },
      {
        path: Routes.UNREAL_ENGINE_EXPLORATION,
        element: <UnrealEngineExplorationPage />,
      },
      {
        path: Routes.WILDCARD,
        element: <Navigate to={Routes.HOME} replace />,
      },
    ],
  },
];

const options = {};

const router = createBrowserRouter(routes, options);

export default router;
