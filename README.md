# js

JavaScript notes

## Expressions and operators

### Assignment operators

| Name                            | Shorthand operator | Meaning          |
| ------------------------------- | ------------------ | ---------------- |
| Assignment                      | x = f()            | x = f()          |
| Addition assignment             | x += f()           | x = x + f()      |
| Subtraction assignment          | x -= f()           | x = x - f()      |
| Multiplication assignment       | x \*= f()          | x = x \* f()     |
| Division assignment             | x /= f()           | x = x / f()      |
| Remainder assignment            | x %= f()           | x = x % f()      |
| Exponentiation assignment       | x \*\*= f()        | x = x \*\* f()   |
| Left shift assignment           | x <<= f()          | x = x << f()     |
| Right shift assignment          | x >>= f()          | x = x >> f()     |
| Unsigned right shift assignment | x >>>= f()         | x = x >>> f()    |
| Bitwise AND assignment          | x &= f()           | x = x & f()      |
| Bitwise XOR assignment          | x ^= f()           | x = x ^ f()      |
| Bitwise OR assignment           | x \|= f()          | x = x \| f()     |
| Logical AND assignment          | x &&= f()          | x && (x = f())   |
| Logical OR assignment           | x \|\|= f()        | x \|\| (x = f()) |
| Nullish coalescing assignment   | x ??= f()          | x ?? (x = f())   |

### Comparison operators

| Operator | Description | Example |
|---|---|---|
| Remainder (%) | Binary operator. Returns the integer remainder of dividing the two operands. | 12 % 5 returns 2. |
| Increment (++) | Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one. | If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4. |
| Decrement (--) | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator. | If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2. |
| Unary negation (-) | Unary operator. Returns the negation of its operand. | If x is 3, then -x returns -3. |
| Unary plus (+) | Unary operator. Attempts to convert the operand to a number, if it is not already. | +"3" returns 3. +true returns 1. |
| Exponentiation operator (**) | Calculates the base to the exponent power, that is, base^exponent | 2 ** 3 returns 8. 10 ** -1 returns 0.1. |

### Arithmetic operators

| Operator | Description | Example |
|---|---|---|
| Remainder (%) | Binary operator. Returns the integer remainder of dividing the two operands. | 12 % 5 returns 2. |
| Increment (++) | Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one. | If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4. |
| Decrement (--) | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator. | If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2. |
| Unary negation (-) | Unary operator. Returns the negation of its operand. | If x is 3, then -x returns -3. |
| Unary plus (+) | Unary operator. Attempts to convert the operand to a number, if it is not already. | +"3" returns 3. +true returns 1. |
| Exponentiation operator (**) | Calculates the base to the exponent power, that is, base^exponent | 2 ** 3 returns 8. 10 ** -1 returns 0.1. |

## Destructuring assignment

```js
// without destructuring assignment
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];
```

```js
// with destructuring assignment
const foo = ["one", "two", "three"];

const [one, two, three] = foo;
```
