import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

export const actionRun = (method: string, value: string) => {
    process.env['INPUT_METHOD'] = method;
    process.env['INPUT_VALUE'] = value;
    const np = process.execPath;
    const ip = path.join(__dirname, '..', '..', 'lib', 'main.js');
    const options: cp.ExecFileSyncOptions = {
      env: process.env,
    };
    return cp.execFileSync(np, [ip], options).toString();
}
