// src/support/world.ts
import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';

class CustomWorld {
  attach: IWorldOptions['attach'];
  parameters: IWorldOptions['parameters'];
  browser: any;
  context: any;
  page: any;

  constructor({ attach, parameters }: IWorldOptions) {
    this.attach = attach;
    this.parameters = parameters;
  }
}

setWorldConstructor(CustomWorld);
