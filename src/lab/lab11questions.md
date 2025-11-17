### Lab 11 - Definite Integrals

Show all work on a separate sheet of paper with justifications where necessary.
Answers should be clearly marked or boxed.
Print first and last names of each group member at the top of the page.

Recall that if $f$ is integrable on $[a, b]$, then the Definite Integral of $f$ from a to b is given by

$\int_{a}^{b} f(x)dx = \lim_{\Delta x_k \to 0} \sum_{k=1}^{n} f(x_k^*) \Delta x_k$

for any partition of $[a, b]$ and any points $x_k^*$. To simplify these calculations, we use equally spaced grid points and right Riemann sums. That is, for each value of $n$, we let $\Delta x_k = \Delta x$ for $k = 1, 2, ..., n$.

In exercises 1-5, use the definition of the Definite Integral and right Riemann sums obtained from the Lab 10 supplement to evaluate the following definite integrals. Check your solutions using the Fundamental Theorem of Calculus.

1. $\int_{0}^{2} (x + 4) dx$
2. $\int_{1}^{5} (2x - 5) dx$
3. $\int_{0}^{4} (x^2) dx$
4. $\int_{0}^{2} (-2x^3) dx$
5. $\int_{-3}^{-1} (4x^2 - 2) dx$

The following sums will be of help. For $n$ a positive integer and $c$ a real number:

$\sum_{k=1}^{n} c = nc$

$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$

$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$

$\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$

6. Isaac claims that since he knows how to use the Fundamental Theorem of Calculus to find the integral of functions he does not need to know how to take a Riemann sum.

(a) Provide an example of a function where the antiderivative is not possible, or at least extremely difficult, to calculate to show that the FTC is not always efficient.

(b) For that function and an appropriate subinterval of its domain, find the right Riemann sum and the left Riemann sum for $n = 8$, then estimate the area of the function on the subinterval.

---

### Lab 11 Supplement

1. Given the following graph of a function $f(x)$, Stephen attempted to approximate the area under the curve using four equal sized subintervals ($n = 4$) with a right Riemann sum. Note that the function is not defined at the following points: $x = 0, 2, 4, 6, 8$.

(a) What difficulty, if any, will Stephen encounter when attempting to calculate the Riemann sum?

(b) List at least two methods Stephen could use to better approximate the area under the curve.

(c) Using the methods listed in (b) find the approximations of the area under the curve. Are these overestimates or underestimates?

(d) Can an exact area bounded by the function and the x-axis be found? Explain your answer.

*[Line segment from (0,5) to (2,4) with open endpoints; line segment from (2,7) to (4,9) with open endpoints; line segment from (4,5) to (6,5) with open endpoints; polyline from (6,3) to (7,4) to (8,3) with open endpoints at (6,3) and (8,3) and a closed, sharp corner at (7,4)]*

2. True or False. For exercises (a)-(d), if the statement is True, explain or show why. If False, explain why it is not true and/or give a counterexample. Note: $a, b, c, d$ and $n$ are constants, $f, g$ are functions and $x$ is the independent variable.

(a) If $f$ is a constant function on the interval $[a, b]$, then the right and left Riemann sums give the exact value of $\int_{a}^{b} f(x)dx$, for any positive integer $n$.

(b) If $f$ is a linear function on the interval $[c, d]$, then a midpoint Riemann sum gives the exact value of $\int_{c}^{d} f(x)dx$, for any positive integer $n$.

(c) $\int_{0}^{2\pi/c} \sin(ax)dx = \int_{0}^{2\pi/c} \cos(ax)dx = 0$

(d) Property 4 of Table 5.4 (found on page 360 of your textbook) implies that $\int_{a}^{b} xf(x)dx = x\int_{a}^{b} f(x)dx$.

---

### Substitution Rule Lab Preparation

1. Joan tried integrating the indefinite integral $\int \sec^3\theta \tan\theta d\theta$ using the substitution rule, but she decided it was impossible. For example, when she tried substituting $u = \sec\theta$, she found that $\frac{du}{d\theta} = \sec\theta \tan\theta$ and therefore $du = \sec\theta \tan\theta d\theta$. "That leaves an extra $\sec\theta$!" she lamented. Help Joan rewrite the integrand and use $u = \sec\theta$ to integrate $\int \sec^3\theta \tan\theta d\theta$.

2. Joaquin tried integrating the definite integral $\int_{2}^{7} \frac{x}{\sqrt{x+2}}dx$ using the substitution rule, but decided it was impossible. For example, when he tried substituting $u = x + 2$, he found that $\frac{du}{dx} = 1$ and therefore $du = dx$. "But what about the $x$ in the numerator? How to substitute for that?" he moaned. Help Joaquin write that $x$ in terms of $u$ and evaluate the definite integral.