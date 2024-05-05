# Module 1

## Task 6

### Description
For this task you have to create API tests to check
[AccuWeather.com Live Weather Feeds](https://rss.accuweather.com/rss/liveweather_rss.asp).

---

### Preparation
1. Clone the template project https://github.com/dkanunik/api-with-jest-for-xml
1. Install dependencies ```npm install```

---

### Project stuff

#### Weather model:
The [WeatherModel](https://github.com/dkanunik/api-with-jest-for-xml/blob/main/model/FinanceModel.mjs) 
class contains methods to interact with Weather Feeds from test scenarios:
- get Feed via HTTP request

##### Tests:
These files contain required verifications of API. 
The test [weather.test](https://github.com/dkanunik/api-with-jest-for-xml/blob/main/tests/weather.test.mjs)
for this task contains verifications of XML documents:
- the XML document contains required tags, attributes, etc..

##### Lib:
The [XmlBodyParser ](https://github.com/dkanunik/api-with-jest-for-xml/blob/main/lib/XmlBodyParser.mjs) 
class uses "xmldom" library to parse XML document and extract data interacting with DOM items.
Follow the documentation to get familiar with 
[xmldom] (https://www.npmjs.com/package/xmldom) library  

##### Config:
This file contains different configurations of tests.
As example, this file contains endpoint of AccuWeather.com Live Weather Feeds.
So that, you are able to define it once on one place and change it if necessary.
https://github.com/dkanunik/api-with-jest-for-xml/blob/main/configs/AppConfig.cjs

--- 

### Specification
Insert verifications to verify that:
1. "Title" node contains expected value
1. every "/rss/channel/item" node contains the following child nodes:
- title
- link
- guid
- description
- pubDate

The verifications should check that:
- link node value contains a href. You have to use a regular expression.
- guid node has "isPermaLink" attribute

Use the template for test writing:  
https://github.com/dkanunik/api-with-jest-for-xml/blob/main/tests/weather.test.mjs

---

### Test run
``` npm test```

### Expected result
```
As a Weather API user
    I have to get HTTP response body
        with [Title] node
        with [Channel] items 
```

---

### Documentation
Please, use the following manuals to perform tasks:
- https://jestjs.io/docs/getting-started
- https://www.npmjs.com/package/axios
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
- https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction
- https://www.npmjs.com/package/xmldom
