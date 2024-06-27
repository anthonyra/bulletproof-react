import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./landing');
        return { Component: LandingRoute };
      },
    },
    // {
    //   path: '/app',
    //   element: (
    //     <ProtectedRoute>
    //       <AppRoot />
    //     </ProtectedRoute>
    //   ),
    //   children: [
    //     {
    //       path: 'discussions',
    //       lazy: async () => {
    //         const { DiscussionsRoute } = await import(
    //           './app/discussions/discussions'
    //         );
    //         return { Component: DiscussionsRoute };
    //       },
    //       loader: discussionsLoader(queryClient),
    //     },
    //     {
    //       path: 'discussions/:discussionId',
    //       lazy: async () => {
    //         const { DiscussionRoute } = await import(
    //           './app/discussions/discussion'
    //         );
    //         return { Component: DiscussionRoute };
    //       },
    //       loader: discussionLoader(queryClient),
    //     },
    //     {
    //       path: 'users',
    //       lazy: async () => {
    //         const { UsersRoute } = await import('./app/users');
    //         return { Component: UsersRoute };
    //       },
    //       loader: usersLoader(queryClient),
    //     },
    //     {
    //       path: 'profile',
    //       lazy: async () => {
    //         const { ProfileRoute } = await import('./app/profile');
    //         return { Component: ProfileRoute };
    //       },
    //     },
    //     {
    //       path: '',
    //       lazy: async () => {
    //         const { DashboardRoute } = await import('./app/dashboard');
    //         return { Component: DashboardRoute };
    //       },
    //     },
    //   ],
    // },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./not-found');
        return { Component: NotFoundRoute };
      },
    },
  ]);
