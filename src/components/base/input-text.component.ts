import { TextComponent } from './text.component';

export class InputTextComponent extends TextComponent {
	public async type(text: string) {
		await this.element.fill(text);
		await this.checkTextAsync(text);
	}
}
