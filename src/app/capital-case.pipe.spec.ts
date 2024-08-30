import { CapitalcasePipe } from './capital-case.pipe';

describe('CapitalCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalcasePipe();
    expect(pipe).toBeTruthy();
  });
});
