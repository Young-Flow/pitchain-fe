import { UseMutationOptions } from '@tanstack/react-query';
import { Fetcher } from './Fetcher';

export abstract class Mutation extends Fetcher {
  mutationFn<T, V>(url: string, method: 'post' | 'put' | 'patch' | 'delete', data?: V) {
    return this.doFetch<T>({
      method,
      url,
      data,
    });
  }

  mutationOptions = <
    TData = unknown,
    TError = { code: number; message: string },
    TVariables = void,
    TContext = unknown,
  >(
    options: UseMutationOptions<TData, TError, TVariables, TContext>,
  ): UseMutationOptions<TData, TError, TVariables, TContext> => options;
}
