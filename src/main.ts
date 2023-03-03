import * as core from '@actions/core';
import { camelCase } from './methods/camelCase';
import { capitalize } from './methods/capitalize';
import { lowerCase } from './methods/lowerCase';
import { deburr } from './methods/deburr';
import { kebabCase } from './methods/kebabCase';

async function run(): Promise<void> {
    try {
        const method: string = core.getInput('method');
        const value: string = core.getInput('value');

        switch(method) {
            case 'lowerCase':
                core.setOutput('value', lowerCase(value));
                break;
            case 'camelCase':
                core.setOutput('value', camelCase(value));
                break;
            case 'capitalize':
                core.setOutput('value', capitalize(value));
                break;
            case 'deburr':
                core.setOutput('value', deburr(value));
                break;
            case 'kebabCase':
                core.setOutput('value', kebabCase(value));
                break;
            default:
                throw new Error(`${method} - not implemented.`);
        }
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();
