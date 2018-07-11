import { by, browser, element } from 'protractor';
import {} from 'jasmine';

import { HomePage } from './pages/home.page';

describe('Conduit App E2E Test Suite', () => {
	const homePage = new HomePage();
	describe('home page should work fine', () => {
		beforeAll(() => {
			homePage.getPage();
		});
		
		it('should have right title', () => {
			homePage.getPageTitle()
				.then((title: string) => {
					expect(title).toEqual('Conduit');
				});
		})
		
	})
})