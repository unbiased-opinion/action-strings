import * as core from '@actions/core';
import { toLower } from './methods/toLower';

async function run(): Promise<void> {
    try {
        const method: string = core.getInput('method');
        const value: string = core.getInput('value');

    switch(method) {
        case 'toLower':
            core.setOutput('value', toLower(value));
            break;
        default:
            throw new Error(`${method} - not implemented.`);
    }
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();
