import { IfAuthenticatedDirective } from './if-authenticated.directive';

describe('IfAuthenticatedDirective', () => {
  it('should create an instance', () => {
    const templateRefMock = {} as any;
    const viewContainerMock = {} as any;
    const directive = new IfAuthenticatedDirective(
      templateRefMock,
      viewContainerMock
    );
    expect(directive).toBeTruthy();
  });
});
