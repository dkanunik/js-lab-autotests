'use strict';

import {Validator} from 'jsonschema';

import * as fs from 'fs';
import * as path from 'path';

const SCHEMAS_DIR = 'data/schemas/';
class JsonSchemaValidator {

    static isValid(schemaFilePath, data) {
        const schemaObj = JsonSchemaValidator.getSchemaObj(schemaFilePath);
        const validator = new Validator();
        return validator.validate(data, schemaObj, {nestedErrors: true});
    }

    static getSchemaObj(fileName) {
        let schemaObj = {};
        const filePath = path.join(SCHEMAS_DIR, `${fileName}.json`);
        try {
            const schemaStr = fs.readFileSync(filePath, 'utf8');
            schemaObj = JSON.parse(schemaStr);
        } catch (e) {
            console.log(e.stack);
        }
        return schemaObj;
    }

}

export default JsonSchemaValidator;
