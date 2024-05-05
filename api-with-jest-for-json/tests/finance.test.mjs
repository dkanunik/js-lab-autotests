import FinanceModel from '../model/FinanceModel';
import JsonBodyParser from "../lib/JsonBodyParser";

describe('As a FinanceModel API user', () => {
    describe('I have to get HTTP response body', () => {
        test('with [Symbol] property', async () => {
            // TODO: define valid path to extract data for Symbol property
            const SYMBOL_PATH = ' ... ';
            let {data} = await FinanceModel.getFinanceData();
            const value = JsonBodyParser.getValueForPath(data, SYMBOL_PATH);

            //  TODO: insert verifications to verify that Symbol property contains a value
            //  corresponding test data: AAPL...
            // ...
        });

        test('with [range] property', async () => {
            // TODO: define valid path to extract data for Range property
            const RANGE_PATH = ' ... ';
            let {data} = await FinanceModel.getFinanceData();
            const value = JsonBodyParser.getValueForPath(data, RANGE_PATH);

            //  TODO: insert verifications to verify that Symbol property contains a value
            //  corresponding test data: 1d, 2d...
            // ...
        });

        test('with [tradingPeriods] property', async () => {
            // TODO: define valid path to extract data for TradingPeriods property
            const TRADING_PATH = ' ... ';
            let {data} = await FinanceModel.getFinanceData();
            const value = JsonBodyParser.getValueForPath(data, TRADING_PATH);

            // TODO: insert verifications to verify that TradingPeriods property contains a
            // non empty array
            // ...
        });

        test('with [currentTradingPeriod] property', async () => {
            // TODO: define valid path to extract data for CurrentTradingPeriod property
            let {data} = await FinanceModel.getFinanceData();
            const value = JsonBodyParser.getValueForPath(data, ...);

            //  TODO: insert verifications
            // The test should check that
            // CurrentTradingPeriod property contains 3 objects: pre, regular, post
            // ...
        });

        test('with [error] property', async () => {
            // TODO: define valid path to extract data for error property
            let {data} = await FinanceModel.getFinanceData();
            const value = JsonBodyParser.getValueForPath(data, ...);

            //  TODO: insert verifications
            // The test should check that code property contains
            // "Unprocessable Entity" value when an invalid range was used.
            // ...
        });
    });
});
