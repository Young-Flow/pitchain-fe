import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Fetcher {
  private instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 5 * 1000,
    withCredentials: true,
  });

  public async doFetch<T>(config: AxiosRequestConfig): Promise<T> {
    const {
      data: { data },
    } = await this.instance<{ data: T }>({
      ...config,
    });

    return data;
  }
}
