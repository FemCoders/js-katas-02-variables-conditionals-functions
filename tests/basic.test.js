import { getNumber, getResult, getString, getLength } from '../src/basic';

describe("Variables en JS", () => {
    it("Completa todas las constantes que faltan", () => {

        const a = 10;

        expect(a).toBe(10);
        expect(b).toBe(1.34);
        expect(c).toBeTruthy();
        expect(d).toBe("Buenos días");
        expect(e).toBe("Pepe");
        expect(f).toBe("Buenos días, pepe");
    });
    it("Completa todas las variables que faltan para que las operaciones resulten correctamente", () => {

        let a = 11;

        expect(a + b).toBe(11.34);
        expect(a * c).toBe(110);
        expect(d - e).toBe(-340);
        // investiga para qué sirven los operadores ** y %
        expect(f ** g).toBe(1000);
        expect(x % 2).toBe(0);
        expect(y % 2).toBe(1);
    });
    it("Completa todas las variables que faltan para que se cumplan las condiciones", () => {

        let a = 10;

        expect(a > 9).toBeTruthy();
        expect(a < 11).toBeTruthy();
        expect(b === 100).toBeTruthy();
        expect(c === undefined).toBeTruthy();
        expect(d !== "Hello").toBeTruthy();
        expect(n.startsWith('A')).toBeFalsy();
    });
});

describe("condicionales en javascript", () => {
    it("completa el valor del resultado esperado (expected)", () => {

        let name = "Pepe";
        let result = "KO";

        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
        if (name.length === 6) {
            result = "OK"
        };

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
    it("comparando cadenas (strings)", () => {

        let a = 'a';
        let b = 'b';
        let result;

        if (a < b) {
            result = 'pikachu';
        } else {
            result = 'charmander';
        };

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
    it("Interpolación de cadenas (strings) (1)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 5 === 0) {
            result = "Pizza con " + n;
        } else {
            result = "Pizza con " + m;
        };

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
    it("Interpolación de cadenas (strings) (2)", () => {
        let n = "Piña";
        let m = "Pepperoni";
        let q = 14;
        let result;

        // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos
        if (q % 7 === 0) {
            result = `Pizza con ${n}`;
        } else {
            result = `Pizza con ${m}`;
        };

        // substituye ??? por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
});

describe("Funciones en JS", () => {
    it('¿Cuál es el resultado de invocar la función getNumber?', () => {
        let result = getNumber();
        // substituye "???" por el valor que tiene la variable "result"
        expect(result).toBe("???");
    });
    it("¿Cuál es el resultado de invocar la función getResult?", () => {
        let result = getResult(10, 30, 2);
        // substituye "???" por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
    it("¿Cuál es el resultado de invocar la función getString?", () => {
        let result = getString("Cerebro", "Pinky");
        // substituye "???" por el valor que tiene la variable "result"        
        expect(result).toBe("???");
    });
    it("¿Cuál es el resultado de invocar la función getLength?", () => {
        // substituye "???" por el resultado en cada caso
        expect(getLength("khaleesi mother of dragons breaker of chains")).toBe("???");
        expect(getLength("sarah")).toBe("???");
        expect(getLength("bob")).toBe("???");
        expect(getLength("robertson")).toBe("???");
    });
});

