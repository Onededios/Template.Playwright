import { Locator } from 'playwright';

export class BaseComponent {
	constructor(private readonly mainLocator: Locator) {}
}
