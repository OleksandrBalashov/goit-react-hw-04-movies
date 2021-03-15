import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const AudditionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: false,
    component: Cast,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: false,
    component: Reviews,
  },
];

export default AudditionalRoutes;
