interface Rectangle {
    height: number,
    width: number,
    hello: (a:number) => number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10,
    hello: (a) => {console.log(a); return 1}
  };
  
  console.log(rectangle.hello(10));