import { lazy } from 'react';

const AudditionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import(
        '../components/AudditionaIInformation/Cast' /* webpackChunkName: "CastView" */
      ),
    ),
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import(
        '../components/AudditionaIInformation/Reviews' /* webpackChunkName: "ReviewsView" */
      ),
    ),
  },
];

export default AudditionalRoutes;
