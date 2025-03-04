import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { NavigationRoute, Route, registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();

// cache images
const imageRoute = new Route(
  ({ request, sameOrigin }) => {
    return sameOrigin && request.destination === "image";
  },
  new NetworkFirst({
    cacheName: "images",
  }),
);
registerRoute(imageRoute);

// cache navigations
const navigationRoute = new NavigationRoute(
  new NetworkFirst({
    cacheName: "navigation",
    networkTimeoutSeconds: 3,
  }),
);
registerRoute(navigationRoute);
