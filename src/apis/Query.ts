import { InfiniteData, infiniteQueryOptions, QueryKey, queryOptions } from '@tanstack/react-query';
import { Fetcher } from './Fetcher';
import { AuthToken } from '@utils/Token';

export abstract class Query extends Fetcher {
  abstract queryKey: QueryKey;

  queryFn<T>(url: string, auth: boolean = false) {
    return this.doFetch<T>({
      method: 'get',
      url,
      headers: {
        Authorization: auth ? `Bearer ${AuthToken.getToken('accessToken')}` : undefined,
      },
    });
  }

  infiniteQueryFn<T>(url: string) {
    return ({ pageParam }: { pageParam: number }) =>
      this.doFetch<T>({
        method: 'get',
        url: `${url}&skip=${pageParam}`,
        headers: {
          Authorization: AuthToken.getToken('accessToken'),
        },
      });
  }

  queryOptions = <
    TQueryFnData = unknown,
    TError = { code: number; message: string },
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: Parameters<typeof queryOptions<TQueryFnData, TError, TData, TQueryKey>>[0],
  ) => queryOptions(options);

  infiniteQueryOptions = <
    TQueryFnData,
    TError = { code: number; message: string },
    TData = InfiniteData<TQueryFnData>,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
  >(
    options: Parameters<typeof infiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>>[0],
  ) => infiniteQueryOptions(options);
}
