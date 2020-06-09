import { RequestLogger } from 'testcafe';

const url = 'http://httpbin.org/status/500';

const logger = RequestLogger({ url, method: 'get' }, {
    logResponseHeaders: true,
    logResponseBody: true
});

fixture`Status code`
    .page(url)
    .requestHooks(logger);

test('Success', async t => {
    await t
        .expect(logger.contains(r => r.response.statusCode === 500)).ok();
    console.log(logger.requests);
});