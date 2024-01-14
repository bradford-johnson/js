# js

## JavaScript notes

### Expressions and operators

#### Assignment operators

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

#### Comparison operators

| Name                       | Shorthand operator                                                                                  | Meaning                       |
| -------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------- |
| Operator                   | Description                                                                                         | Examples returning true       |
| Equal (==)                 | Returns true if the operands are equal.                                                             | 3 == var1 "3" == var13 == '3' |
| Not equal (!=)             | Returns true if the operands are not equal.                                                         | var1 != 4 var2 != "3"         |
| Strict equal (===)         | Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS. | 3 === var1                    |
| Strict not equal (!==)     | Returns true if the operands are of the same type but not equal, or are of different type.          | var1 !== "3" 3 !== '3'        |
| Greater than (>)           | Returns true if the left operand is greater than the right operand.                                 | var2 > var1 "12" > 2          |
| Greater than or equal (>=) | Returns true if the left operand is greater than or equal to the right operand.                     | var2 >= var1 var1 >= 3        |
| Less than (<)              | Returns true if the left operand is less than the right operand.                                    | var1 < var2 "2" < 12          |
| Less than or equal (<=)    | Returns true if the left operand is less than or equal to the right operand.                        | var1 <= var2 var2 <= 5        |

#### Destructuring assignment

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
