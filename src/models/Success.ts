/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../helpers';
/**
 * 
 * @export
 * @interface Success
 */
export interface Success {
    /**
     * 
     * @type {boolean}
     * @memberof Success
     */
    success: boolean;
}

export function SuccessFromJSON(json: any): Success {
    return SuccessFromJSONTyped(json, false);
}

export function SuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Success {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
    };
}

export function SuccessToJSON(value?: Success | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}


