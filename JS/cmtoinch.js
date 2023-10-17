function cmToIn(length) {
    return length / 2.54;
   }
   function intoCm(length) {
    return length * 2.54;
   }
   function convert(fn, length) {
    return fn(length);
   }
   // Convert to inches
   let inches = convert(cmToIn, 10);
   console.log(inches); // 3.9......
   // Convert to cms
   let cm = convert(intoCm, 10);
   console.log(cm); // 25.4
   let cm2 = convert(cmToIn, convert(intoCm, 10));
   // Explanations
   // convert(cmToIn, 25.4); => 25.4 / 2.54 => 10
   console.log(cm2); // 10
   let cm3 = convert(cmToIn, convert(intoCm, convert(intoCm, 10)));
   // Explanations
   // let cm3 = convert(cmToIn, convert(intoCm, 25.4));
   // let cm3 = convert(cmToIn, 64.516);
   // let cm3 = 25.4;
   console.log(cm3); // 25.4
   // QN. What will be the output?
   // 1. convert(cmToIn, convert(intoCm, convert(cmToIn, convert(intoCm,
   convert(cmToIn, 50);
   // 2. convert(cmToIn, convert(intoCm, convert(cmToIn, convert(cmToIn,
   convert(intoCm, convert(cmToIn, 100)) 