class Compiler {
  compile(program) {
    return this.pass3(this.pass2(this.pass1(program)));
  }

  tokenize(program) {
    // Turn a program string into an array of tokens.  Each token
    // is either '[', ']', '(', ')', '+', '-', '*', '/', a variable
    // name or a number (as a string)
    // eslint-disable-next-line no-useless-escape
    const regex = /\s*([-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+)\s*/g;
    return (
      program
        .replace(regex, ':$1')
        .substring(1)
        .split(':')
        // eslint-disable-next-line no-bitwise
        .map((tok) => (Number.isNaN(tok) ? tok : tok | 0))
    );
  }

  pass1(program) {
    const tokens = this.tokenize(program);
    // return un-optimized AST
  }

  pass2(ast) {
    // return AST with constant expressions reduced
  }

  pass3(ast) {
    // return assembly instructions
  }
}

export default Compiler;
