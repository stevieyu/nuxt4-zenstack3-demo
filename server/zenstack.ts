import { ZenStackClient } from '@zenstackhq/runtime';
import { schema } from '../zenstack/schema';
import SQLite from 'better-sqlite3';


export default new ZenStackClient(schema, {
    dialectConfig: {database: new SQLite('./zenstack/dev.db')},
    log: ['query', 'error']
});
