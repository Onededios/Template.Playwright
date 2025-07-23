import { Locator } from 'playwright';

export class BaseComponent {
	constructor(protected readonly element: Locator) {}

	protected find(this: Locator, selector: string, index: number = 0): Locator {
		const child = this.locator(selector);
		return  child.nth(index);
	}
}
