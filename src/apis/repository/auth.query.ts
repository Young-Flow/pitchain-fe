import { paths } from 'src/types/apis';
import { Query } from '../Query';

export class AuthQuery extends Query {
  queryKey = ['auth'];

  getUser = () =>
    this.queryOptions({
      queryKey: [...this.queryKey, 'user'],
      queryFn: () => this.queryFn<paths['/oauth2/login']['post']['responses']['COMMON200']['content']>('user'),
    });
}
