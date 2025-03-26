import { paths } from 'src/types/apis';
import { Query } from '../Query';

export class AuthQuery extends Query {
  queryKey = ['auth'];

  getUser = () =>
    this.queryOptions({
      queryKey: [...this.queryKey, 'user'],
      queryFn: () =>
        this.queryFn<paths['/members']['get']['responses']['200']['content']['*/*']['data']>('members', true),
    });
}
