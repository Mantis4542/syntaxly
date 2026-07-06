import { defineConfig } from '@playwright/test';

export default defineConfig({
	outputDir: '.test-results',
	webServer: { command: 'npm run build && npm run preview', port: 4173 },
	testMatch: '**/*.e2e.{ts,js}'
});
