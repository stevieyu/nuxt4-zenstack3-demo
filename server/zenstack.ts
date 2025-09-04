import { ZenStackClient } from '@zenstackhq/runtime';
import { schema } from '../zenstack/schema';
import { LibsqlDialect } from "@libsql/kysely-libsql";

export default new ZenStackClient(schema, {
    dialect: new LibsqlDialect({
        url: process.env.TURSO_DATABASE_URL || '',
        authToken: process.env.TURSO_AUTH_TOKEN,
    }),
    log: ['query', 'error']
});
