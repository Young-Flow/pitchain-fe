import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Fetcher {
  private instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5 * 1000,
    withCredentials: true,
  });

  public async doFetch<T>(config: AxiosRequestConfig): Promise<T> {
    const { data } = await this.instance<T>({
      ...config,
    });

    return data;
  }
}
