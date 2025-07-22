import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
	timeout: 60000, // Global timeout for each test
	retries: 2, // Retry failed tests
	workers: 4, // Run tests in parallel (4 workers)
	use: {
		headless: true,
	},
	projects: [
		{
			name: 'Chrome',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'Firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'WebKit',
			use: { ...devices['Desktop Safari'] },
		},
	],
});
