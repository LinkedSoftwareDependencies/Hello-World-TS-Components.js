import { ComponentsManager } from 'componentsjs';

export * from './MyClass';

run();

async function run() {
    const manager = await ComponentsManager.build({
        mainModulePath: process.cwd(), // Path to your npm package's root
    });
    await manager.configRegistry.register('config.jsonld');
    const myInstance = await manager.instantiate('urn:my-package:myInstance');
}