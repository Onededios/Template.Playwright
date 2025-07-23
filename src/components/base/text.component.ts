import { expect } from './../../../node_modules/playwright/types/test.d';
import { BaseComponent } from '../base.component';

export class TextComponent extends BaseComponent {
	public async getTextAsync(): Promise<string> {
		const raw = await this.element.textContent();
		if (raw == null) throw new Error("Could not get element's text");
		return raw;
	}

	public checkTextAsync = async (text: string | RegExp, caseSensitive = false) => expect(this.element).toHaveText(text, { ignoreCase: caseSensitive });
}
