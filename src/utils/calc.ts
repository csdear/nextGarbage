const calculator = (() => {
    const add = (a:number, b:number) => a + b;
    const sub = (a:number, b:number) => a - b;
    const mul = (a:number, b:number) => a * b;
    const div = (a:number, b:number) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

  const FireTimesTen = ( numberRec: number ): void => {
    const numberHere = 10;
    console.log(`Fire Times 10 : ${numberHere * numberRec}`);
  };

  export { calculator, FireTimesTen };