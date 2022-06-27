import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

/**
 * react query allows to configure many behaviors to update/fetch the
 * data under certain conditions, we recommend you to read the official doc
 * https://react-query.tanstack.com/guides/important-defaults
 */

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnMount: false,
//       refetchOnReconnect: true,
//       retry: 1,
//       staleTime: 5 * 1000,
//     },
//   },
// });

type ReactQueryProviderProps = {
  children?: ReactNode;
};

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
