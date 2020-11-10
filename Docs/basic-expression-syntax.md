# Basic Expression Syntax
Expressions (sometimes incorrectly referred to as equations) are written much like you would enter them on a traditional calculator. For instance you might write something like this:

```
1/2+3
```

The above expression could be stated as '1 divided by 2 plus 3'. The result here would be `3.5`.

**You can use parenthesis at any point to override the order of operations:**

```
1/(2+3)
```

The above expression could now be stated as '1 divided by the sum of 2 and 3'. 
The result would be `0.2`.

**Implicit multiplication is allowed, but (as you might expect) only against constants.**

```
3 + 2 pi
```

Note: *Behind the scenes, **AfterMath** is using a tool called [MathJS](https://mathjs.org/). Specifically, it's using the '[evaluate](https://mathjs.org/docs/expressions/parsing.html)' function. This is a very powerful math evaluation system. If you're reading this section, I think there is a good chance you have seen a syntax something like this before.*

[Full Expression Docs From MathJS](https://mathjs.org/docs/expressions/syntax.html)
