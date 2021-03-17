import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const AudditionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: false,
    route: true,
    navLink: true,
    component: Cast,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: false,
    route: true,
    navLink: true,
    component: Reviews,
  },
];

export default AudditionalRoutes;
