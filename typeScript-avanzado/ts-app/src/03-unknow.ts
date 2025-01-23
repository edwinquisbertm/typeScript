let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 42;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toupperCase();

let unknownVar: unknown; // unknown es un tipo seguro que no permite hacer nada con él hasta que se haga una validación de tipo o se haga una conversión explícita.
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 42;
unknownVar = [];
unknownVar = {};

//unknownVar.doSomething();
if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}


const parse = (str: string): unknown => { // en este ejemplo se usa unknown para que el tipo de retorno sea seguro y se haga una validación de tipo antes de hacer la conversión a JSON.
  return JSON.parse(str);
}

