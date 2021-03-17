import { lazy } from 'react';

const AudditionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../components/Cast' /* webpackChunkName: "CastView" */),
    ),
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../components/Reviews' /* webpackChunkName: "ReviewsView" */),
    ),
  },
];

export default AudditionalRoutes;
