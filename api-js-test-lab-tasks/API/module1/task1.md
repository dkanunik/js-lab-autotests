# Module 1

## Task 1

### Description
For this task you have to create API tests to check 
[Yahoo public API](https://query1.finance.yahoo.com/v8/finance/chart/AAPL?region=EQWEQWE&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance).

---

### Preparation
1. Clone the template project https://github.com/dkanunik/api-with-jest-simple
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
https://github.com/dkanunik/api-with-jest-simple/blob/main/model/FinanceModel.mjs

##### Tests:
These files contain required verifications of API. As example:
- HTTP response code is 200
- HTTP response header 'content-type' contains 'application/json;charset=utf-8' value
- HTTP response body contains a JSON document with specific keys and values 
- etc..

Use "finance.test" file to define required verifications of Yahoo API:
 https://github.com/dkanunik/api-with-jest-simple/blob/main/tests/finance.test.mjs

##### Config:
This file contains different configurations of tests. 
As example, this file contains endpoint of Yahoo API Service. 
So that, you are able to define it once on one place and change it if necessary.
https://github.com/dkanunik/api-with-jest-simple/blob/main/configs/AppConfig.cjs

---

### Specification

#### Task 1 <a name="task1">§</a> 

Please pay your attention that Finance models method is used for API calling:
https://github.com/dkanunik/api-with-jest-simple/blob/main/tests/finance.test.mjs#L13

This method is noneffective because the HTTP request parameters were hardcoded.
The Model should support ability to define values for HTTP request parameters.
There is a need to develop a method for Finance model to be able to define the following parameters dynamically:
- company
- region
- interval
- range

---

#### Task 2 <a name="task2">§</a>

Have a look at the URL:

``` 
    .../chart/AAPL?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance
```

Develop 4 test cases and tests for them to verify that the HTTP response code equals 200
when the following parameters are being put to Finance.getFinanceData() method:
- company
- region
- interval
- range
- some combinations of parameters: company + interval, etc..

To be able to use it as a template:
``` 
    /chart/`${COMPANY}`?region=`${TEMPLATE}`&lang=`${LANG}`&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance
```

finance.test.mjs
```
    ...
     let { status } = await Finance.getFinanceData({company:'AAPL'});
    ...
```

---

#### Task 3 <a name="task3">§</a>

- develop 1 test case and test for it to verify that the HTTP response code equals 422 when an invalid
  range is used
- develop 1 test case and test for it to verify that the HTTP response code equals 404 when a nonexistent company
  is uesed

Use the template for test writing:
https://github.com/dkanunik/api-with-jest-simple/blob/main/tests/finance.test.mjs#L17

---

### Test run
``` npm test```

### Expected result
```
As a Finance API user
    I have to get HTTP response code
        200 for a valid range
        422 for a invalid range
        404 for a nonexistent company
        200 for a valid company
        200 for a valid range
        200 for a valid interval
        200 for a valid region
```

---

### Documentation
Please, use the following manuals to perform tasks:
- https://jestjs.io/docs/getting-started
- https://www.npmjs.com/package/axios
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
