# Module 1

## Task 5

### Description
For this task you have to create API tests to check
[Yahoo public API](https://query1.finance.yahoo.com/v8/finance/chart/AAPL?region=EQWEQWE&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance).

---

### Preparation
1. Clone the template project https://github.com/dkanunik/api-with-jest-for-json
1. Install dependencies ```npm install```

---

### Project stuff

#### Finance model:
This class contains methods to interact with Yahoo API from test scenarios.
As example:
- get finance data using GET request
- send finance data using POST request
- etc..

So that, you can define a method once and use it on numerous scenarios.

Use "FinanceModel" class to define required HTTP requests to Yahoo API:
https://github.com/dkanunik/api-with-jest-for-json/blob/main/model/FinanceModel.mjs

##### Tests:
These files contain required verifications of API. As example:
- HTTP response code is 200
- HTTP response header 'content-type' contains 'application/json;charset=utf-8' value
- HTTP response body contains a JSON document with specific keys and values
- etc..

Use "finance.test" file to define required verifications of Yahoo API:
https://github.com/dkanunik/api-with-jest-for-json/blob/main/tests/finance.test.mjs

##### Lib:
The [JsonBodyParser](https://github.com/dkanunik/api-with-jest-for-json/blob/main/lib/JsonBodyParser.mjs) 
class uses "jsonpath" library to parse JSON document and extract data in accordance 
with the defined path. Follow the documentation to get familiar with
[jsonpath] (https://www.npmjs.com/package/jsonpath) library  

##### Config:
This file contains different configurations of tests.
As example, this file contains endpoint of Yahoo API Service.
So that, you are able to define it once on one place and change it if necessary.
https://github.com/dkanunik/api-with-jest-for-json/blob/main/configs/AppConfig.cjs

--- 

### Specification
Insert verifications to verify that:
- "Symbol" property contains a value corresponding test data: AAPL.. 
- "Symbol" property contains a value corresponding test data: 1d, 2d...
- "TradingPeriods" property contains a non-empty array
- "CurrentTradingPeriod" property contains 3 objects: pre, regular, post
- "Code" property contains "Unprocessable Entity" value when an invalid range is being used.

Use the template for test writing:  
https://github.com/dkanunik/api-with-jest-for-json/blob/main/tests/finance.test.mjs

---

### Test run
``` npm test```

### Expected result
```
As a FinanceModel API user
    I have to get HTTP response body
        with [Symbol] property
        with [range] property
        with [tradingPeriods] property
        with [currentTradingPeriod] property
        with [error] property
```

---

### Documentation
Please, use the following manuals to perform tasks:
- https://jestjs.io/docs/getting-started
- https://www.npmjs.com/package/axios
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- https://www.npmjs.com/package/jsonpath
