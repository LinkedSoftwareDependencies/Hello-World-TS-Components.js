import { ComponentsManager } from 'componentsjs';
import * as path from 'path';
export * from './MyClass';

run();

async function run() {
    const manager = await ComponentsManager.build({
        mainModulePath: path.join(__dirname, '..') , // Path to your npm package's root
    });
    await manager.configRegistry.register('config.jsonld');
    const myInstance = await manager.instantiate('urn:my-package:myInstance');
}