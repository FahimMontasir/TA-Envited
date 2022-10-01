import { Suspense, lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component: LazyExoticComponent<() => JSX.Element>) => () => {
  return (
    <Suspense fallback={"loading..."}>
      <Component />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/create",
      element: <CreateEvent />,
    },
    {
      path: "/event",
      element: <Event />,
    },
  ]);
}

const HomePage = Loadable(lazy(() => import("../pages/landing")));
const CreateEvent = Loadable(lazy(() => import("../pages/create-event")));
const Event = Loadable(lazy(() => import("../pages/event")));
