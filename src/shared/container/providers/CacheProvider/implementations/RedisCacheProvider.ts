import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Redis, { Redis as RedisClient } from 'ioredis';

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis();
  }

  save(key: string, value: string): Promise<void> {}

  recover(key: string): Promise<string> {}

  invalidate(key: string): Promise<void> {}
}
