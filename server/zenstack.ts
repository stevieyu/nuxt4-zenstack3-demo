import { ZenStackClient } from '@zenstackhq/runtime';
import { schema } from '../zenstack/schema';
import { SqliteDialect } from 'kysely';
import SQLite from 'better-sqlite3';


export default new ZenStackClient(schema, {
    dialect: new SqliteDialect({ database: new SQLite('./zenstack/dev.db') }),
    log: ['query', 'error']
});
