import { EmployeeProjectPage } from './app.po';

describe('employee-project App', function() {
  let page: EmployeeProjectPage;

  beforeEach(() => {
    page = new EmployeeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
