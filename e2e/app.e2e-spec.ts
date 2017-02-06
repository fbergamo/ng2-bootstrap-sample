import { Ng2BootstrapSamplePage } from './app.po';

describe('ng2-bootstrap-sample App', function() {
  let page: Ng2BootstrapSamplePage;

  beforeEach(() => {
    page = new Ng2BootstrapSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
