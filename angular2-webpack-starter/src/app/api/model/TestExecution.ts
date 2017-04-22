/**
 * TestManagement Studio Backend API
 * <<Some text >>   Would respond with: ```js callbackFunction({     ... }); ``` 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface TestExecution extends models.Entity {
    test?: models.Test;

    answersGiven?: Array<models.Answer>;

    dateOfStart?: Date;

    dateOfFill?: Date;

    user?: models.User;

}
