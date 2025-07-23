import { BaseComponent } from '../base.component';
import { expect } from 'playwright/test';

export class SelectorComponent extends BaseComponent {
	public selectByValues = async (values: string | string[]) => await this.element.selectOption(values);
	public selectByIndex = async (index: number) => await this.element.selectOption({ index: index });

	public checkListValues = async (values: string[]) => await expect(this.element).toHaveValues(values);
	public checkListValue = async (value: string) => await expect(this.element).toHaveValue(value);
}
