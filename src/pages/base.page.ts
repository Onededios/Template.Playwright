import { Page } from 'playwright';

export class BasePage {
	constructor(private readonly page: Page) {}
}
