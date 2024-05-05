# Module 1

## Task 7

### Description

For this task you have to create API tests to check
[Pastebin website](https://pastebin.com/) to share code snippets.
For this task you have to practice HTTP data sending.
Your test should contain verifications of successful data sending.

---

### Preparation
1. Clone the template project https://github.com/dkanunik/api-with-jest-for-data
1. Install dependencies ```npm install```
1. Sign up to Pastebin.
1. Follow to [API page](https://pastebin.com/doc_api#1) and keep your Unique Developer API Key

---

### Project stuff

#### Paste model:
The [PasteModel](https://github.com/dkanunik/api-with-jest-for-data/blob/main/model/Paste.mjs) 
class contains methods to interact with Paste website from test scenarios:
- send data via HTTP request to create a code snippet
- get data via HTTP request to verify a code snippet successful creation

##### Tests:
These files contain required verifications of API. 
The test [paste.test](https://github.com/dkanunik/api-with-jest-for-data/blob/main/tests/paste.test.mjs)
contains test scenarios that should be updated to get completed tests. 

##### Lib:

- The [TokenProvider](https://github.com/dkanunik/api-with-jest-for-data/blob/main/lib/TokenProvider.mjs)
class is responsible for tokens extraction. They are required to perform API call to Pastebin service.

- The [InputTestDataProvider](https://github.com/dkanunik/api-with-jest-for-data/blob/main/lib/InputTestDataProvider.mjs)
class is responsible for test data extraction. You have to update the "getTestData" method to be able to extract 
test data in accordance with file name.

##### Data:
This directory contains test data. 

- Please, have a look that data for [test](https://github.com/dkanunik/api-with-jest-for-data/blob/main/tests/paste.test.mjs#L15) 
is stored on the [data/post_data/case1.json](https://github.com/dkanunik/api-with-jest-for-data/blob/main/data/post_data/case1.json) file
You have to take care that it be put to InputTestDataProvider class.

- The [data/tokens](https://github.com/dkanunik/api-with-jest-for-data/blob/main/data/tokens/) dir have to contain your Unique Developer API Keys.
You have to create a text file with token and put it to this dir. Then define token file name on test to perform API call. 
Have a look at the example on [paste.test.mjs](https://github.com/dkanunik/api-with-jest-for-data/blob/b35d906f05321a7b8b86f9876a896a5ab5471056/tests/paste.test.mjs#L7)


##### Config:
This file contains different configurations of tests.
[AppConfig](https://github.com/dkanunik/api-with-jest-for-data/blob/main/configs/AppConfig.cjs)
file contains endpoint of [Pastebin website](https://pastebin.com/).
So that, you are able to define it once on one place and change it if necessary.

--- 

### Specification
1. Complete [test](https://github.com/dkanunik/api-with-jest-for-data/blob/main/tests/paste.test.mjs#L6)
You have to send plain text using POST method of HTTP request and add verification to make sure that the code snippet
was created successfully. You can verify code 200.    

Develop "getTestData" method to extract file content from files located on "<projectDir>/data/post_data" directory
to be able to define POST body dynamically. Send the data to create a code snippet with the data read from defined file.
Put your verifications to test to verify that the created code snippet has been created with the 10-min expiration timeout.
Use the [template](https://github.com/dkanunik/api-with-jest-for-data/blob/main/tests/paste.test.mjs#L15) for this case.

---

### Test run
``` npm test```

### Expected result
```
As a Paste API user
    I need to be able to create Paste and get
        200 for a valid data
        
    I need to be able to create Paste with
        10 min expiration time
          
```

---

### Documentation
Please, use the following manuals to perform tasks:
- https://jestjs.io/docs/getting-started
- https://www.npmjs.com/package/axios
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
