import FinanceModel from '../model/FinanceModel';
import JsonSchemaValidator from '../lib/JsonSchemaValidator';

describe('As a FinanceModel API user', () => {
    describe('I have to get JSON with', () => {
        test('chart object', async() => {
            const {data} = await FinanceModel.getFinanceData();
            const result = JsonSchemaValidator.isValid('simple', data);
            if (!result.valid) {
                console.log(`Error message: ${JSON.stringify(result.errors)}`);
            }
            expect(result.valid).toBe(true);
        });

    });

    describe('I have to get JSON with meta object containing', () => {
        test('all required properties', async() => {
            //TODO: Define a custom schema to check meta's all properties and their values types:
            // currency as string, firstTradeDate as number with 10 digits,
            // currentTradingPeriod as object with inner objects,
            // validRanges with predefined enum list
        });
    });
});
