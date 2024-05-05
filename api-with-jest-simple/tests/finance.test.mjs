import FinanceModel from '../model/FinanceModel';

describe('As a FinanceModel API user', () => {
    describe('I have to get HTTP response code', () => {
        xtest('200 for a valid range', async() => {

            //TODO: replace this method with FinanceModel.getFinanceData(...) method
            // to be able to define different test conditions:
            // - company
            // - region
            // - interval
            // - range
            const { status } = await FinanceModel.getFinanceDataForAAPL();
            expect(status).toBe(200);
        });

        xtest('422 for a invalid range', async() => {
            // TODO: put required parameter to simulate the required test condition
            const { status } = await FinanceModel.getFinanceData();

            //  TODO: insert verifications
            // ...
        });

        xtest('404 for a nonexistent company', async() => {
            // TODO: put required parameter to simulate the required test condition
            const { status } = await FinanceModel.getFinanceData();

            //  TODO: insert verifications
            // ...
        });
    });

    describe('I have to get values for response headers', () => {
        xtest('content-type', async() => {
            const { headers } = await FinanceModel.getFinanceData();
            expect(headers['content-type']).toBe('application/json;charset=utf-8');
        });

        xtest('x-request-id', async() => {
            const { headers } = await FinanceModel.getFinanceData();

            //  TODO: insert verifications for "x-request-id" header
            //  You have to use regular expression to verify a headers unique value:
            //  "d5f838b8-fe84-4f2a-b950-7a07f13264a7"
            // ...

        });
    });
});
