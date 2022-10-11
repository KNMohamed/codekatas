import Compiler from './compiler';
import pass1Result from './fixtures/pass1result';
import pass2Result from './fixtures/pass2result';
import simulate from './simulate';

const prog = '[ x y z ] ( 2*3*x + 5*y - 3*z ) / (1 + 3 + 2*2)';

describe('Compiler', () => {
  it('should create an instance', () => {
    const compiler = new Compiler();
  });
  it('should do pass 1', () => {
    const compiler = new Compiler();
    expect(compiler.pass1(prog)).toDeepEqual(pass1Result);
  });
  it('should do pass 2', () => {
    const compiler = new Compiler();
    expect(compiler.pass2(pass1Result)).toDeepEqual(pass2Result);
  });
  it('should do pass 3', () => {
    const compiler = new Compiler();
    const p3 = compiler.pass3(pass2Result);
    expect(simulate(p3, [4, 0, 0])).toEqual(3);
    expect(simulate(p3, [4, 8, 0])).toEqual(8);
    expect(simulate(p3, [4, 8, 16])).toEqual(2);
  });
});
