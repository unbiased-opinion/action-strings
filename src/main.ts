import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const func: string = core.getInput('function');
    core.setOutput('output', func);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
