# Lab 11 - Definite Integrals

### 1. $\int_{0}^{2} (x + 4) dx$

**Using the Definition of the Definite Integral:**

*   Let $f(x) = x+4$ on $[a, b] = [0, 2]$.
*   $\Delta x = \frac{b-a}{n} = \frac{2-0}{n} = \frac{2}{n}$
*   For a right Riemann sum, $x_k^* = x_k = a + k\Delta x = 0 + k\left(\frac{2}{n}\right) = \frac{2k}{n}$.
*   $f(x_k) = x_k + 4 = \frac{2k}{n} + 4$.

The definite integral is the limit of the Riemann sum:
$$
\begin{aligned}
\int_{0}^{2} (x + 4) dx &= \lim_{n \to \infty} \sum_{k=1}^{n} f(x_k) \Delta x \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{2k}{n} + 4\right) \left(\frac{2}{n}\right) \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{4k}{n^2} + \frac{8}{n}\right) \\
&= \lim_{n \to \infty} \left[ \sum_{k=1}^{n} \frac{4k}{n^2} + \sum_{k=1}^{n} \frac{8}{n} \right] \\
&= \lim_{n \to \infty} \left[ \frac{4}{n^2} \sum_{k=1}^{n} k + \frac{1}{n} \sum_{k=1}^{n} 8 \right] \\
&\text{b/c } \sum k = \frac{n(n+1)}{2} \text{ and } \sum c = nc \\
&= \lim_{n \to \infty} \left[ \frac{4}{n^2} \left(\frac{n(n+1)}{2}\right) + \frac{1}{n}(8n) \right] \\
&= \lim_{n \to \infty} \left[ \frac{\cancel{4}^2 \cdot \cancel{n}(n+1)}{\cancel{2}_1 \cdot \cancel{n^2}_n} + \frac{8\cancel{n}}{\cancel{n}} \right] \\
&= \lim_{n \to \infty} \left[ \frac{2(n+1)}{n} + 8 \right] \\
&= \lim_{n \to \infty} \left[ \frac{2n+2}{n} + 8 \right] \\
&= \lim_{n \to \infty} \left[ 2 + \frac{2}{n} + 8 \right] \\
&= \lim_{n \to \infty} \left[ 10 + \frac{2}{n} \right] \\
&= 10 + 0 = 10
\end{aligned}
$$

**Check using Fundamental Theorem of Calculus (FTC):**
$$
\int_{0}^{2} (x + 4) dx = \left[ \frac{x^2}{2} + 4x \right]_{0}^{2} = \left(\frac{2^2}{2} + 4(2)\right) - \left(\frac{0^2}{2} + 4(0)\right) = (2 + 8) - 0 = 10 \quad \checkmark
$$

### 2. $\int_{1}^{5} (2x - 5) dx$

**Using the Definition of the Definite Integral:**

*   Let $f(x) = 2x-5$ on $[a, b] = [1, 5]$.
*   $\Delta x = \frac{5-1}{n} = \frac{4}{n}$
*   $x_k = a + k\Delta x = 1 + k\left(\frac{4}{n}\right) = 1 + \frac{4k}{n}$.
*   $f(x_k) = 2\left(1 + \frac{4k}{n}\right) - 5 = 2 + \frac{8k}{n} - 5 = \frac{8k}{n} - 3$.

$$
\begin{aligned}
\int_{1}^{5} (2x - 5) dx &= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{8k}{n} - 3\right) \left(\frac{4}{n}\right) \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{32k}{n^2} - \frac{12}{n}\right) \\
&= \lim_{n \to \infty} \left[ \frac{32}{n^2} \sum_{k=1}^{n} k - \frac{1}{n} \sum_{k=1}^{n} 12 \right] \\
&= \lim_{n \to \infty} \left[ \frac{32}{n^2} \left(\frac{n(n+1)}{2}\right) - \frac{1}{n}(12n) \right] \\
&= \lim_{n \to \infty} \left[ \frac{\cancel{32}^{16} \cdot \cancel{n}(n+1)}{\cancel{2}_1 \cdot \cancel{n^2}_n} - \frac{12\cancel{n}}{\cancel{n}} \right] \\
&= \lim_{n \to \infty} \left[ \frac{16(n+1)}{n} - 12 \right] \\
&= \lim_{n \to \infty} \left[ 16\left(1 + \frac{1}{n}\right) - 12 \right] \\
&= 16(1+0) - 12 = 4
\end{aligned}
$$

**Check using FTC:**
$$
\int_{1}^{5} (2x - 5) dx = \left[ x^2 - 5x \right]_{1}^{5} = (5^2 - 5(5)) - (1^2 - 5(1)) = (25 - 25) - (1 - 5) = 0 - (-4) = 4 \quad \checkmark
$$

### 3. $\int_{0}^{4} (x^2) dx$

**Using the Definition of the Definite Integral:**

*   Let $f(x) = x^2$ on $[a, b] = [0, 4]$.
*   $\Delta x = \frac{4-0}{n} = \frac{4}{n}$
*   $x_k = 0 + k\left(\frac{4}{n}\right) = \frac{4k}{n}$.
*   $f(x_k) = \left(\frac{4k}{n}\right)^2 = \frac{16k^2}{n^2}$.

$$
\begin{aligned}
\int_{0}^{4} x^2 dx &= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{16k^2}{n^2}\right) \left(\frac{4}{n}\right) \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} \frac{64k^2}{n^3} \\
&= \lim_{n \to \infty} \frac{64}{n^3} \sum_{k=1}^{n} k^2 \\
&\text{b/c } \sum k^2 = \frac{n(n+1)(2n+1)}{6} \\
&= \lim_{n \to \infty} \frac{64}{n^3} \left(\frac{n(n+1)(2n+1)}{6}\right) \\
&= \lim_{n \to \infty} \frac{\cancel{64}^{32} \cdot \cancel{n}(n+1)(2n+1)}{\cancel{6}_3 \cdot \cancel{n^3}_{n^2}} \\
&= \frac{32}{3} \lim_{n \to \infty} \frac{(n+1)(2n+1)}{n^2} \\
&= \frac{32}{3} \lim_{n \to \infty} \left(\frac{n+1}{n} \cdot \frac{2n+1}{n}\right) \\
&= \frac{32}{3} \lim_{n \to \infty} \left(1+\frac{1}{n}\right) \left(2+\frac{1}{n}\right) \\
&= \frac{32}{3} (1 \cdot (1+0) \cdot (2+0)) = \frac{32}{3} \cdot 2 = \frac{64}{3}
\end{aligned}
$$

**Check using FTC:**
$$
\int_{0}^{4} x^2 dx = \left[ \frac{x^3}{3} \right]_{0}^{4} = \frac{4^3}{3} - \frac{0^3}{3} = \frac{64}{3} \quad \checkmark
$$

### 4. $\int_{0}^{2} (-2x^3) dx$

**Using the Definition of the Definite Integral:**

*   Let $f(x) = -2x^3$ on $[a, b] = [0, 2]$.
*   $\Delta x = \frac{2-0}{n} = \frac{2}{n}$
*   $x_k = 0 + k\left(\frac{2}{n}\right) = \frac{2k}{n}$.
*   $f(x_k) = -2\left(\frac{2k}{n}\right)^3 = -2\left(\frac{8k^3}{n^3}\right) = -\frac{16k^3}{n^3}$.

$$
\begin{aligned}
\int_{0}^{2} -2x^3 dx &= \lim_{n \to \infty} \sum_{k=1}^{n} \left(-\frac{16k^3}{n^3}\right) \left(\frac{2}{n}\right) \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} -\frac{32k^3}{n^4} \\
&= \lim_{n \to \infty} -\frac{32}{n^4} \sum_{k=1}^{n} k^3 \\
&\text{b/c } \sum k^3 = \left(\frac{n(n+1)}{2}\right)^2 = \frac{n^2(n+1)^2}{4} \\
&= \lim_{n \to \infty} -\frac{32}{n^4} \left(\frac{n^2(n+1)^2}{4}\right) \\
&= \lim_{n \to \infty} -\frac{\cancel{32}^8 \cdot \cancel{n^2}(n+1)^2}{\cancel{4}_1 \cdot \cancel{n^4}_{n^2}} \\
&= -8 \lim_{n \to \infty} \frac{(n+1)^2}{n^2} \\
&= -8 \lim_{n \to \infty} \left(\frac{n+1}{n}\right)^2 \\
&= -8 \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^2 \\
&= -8 (1+0)^2 = -8
\end{aligned}
$$

**Check using FTC:**
$$
\int_{0}^{2} -2x^3 dx = \left[ -2\frac{x^4}{4} \right]_{0}^{2} = \left[ -\frac{x^4}{2} \right]_{0}^{2} = \left(-\frac{2^4}{2}\right) - \left(-\frac{0^4}{2}\right) = -\frac{16}{2} - 0 = -8 \quad \checkmark
$$

### 5. $\int_{-3}^{-1} (4x^2 - 2) dx$

**Using the Definition of the Definite Integral:**

*   Let $f(x) = 4x^2-2$ on $[a, b] = [-3, -1]$.
*   $\Delta x = \frac{-1 - (-3)}{n} = \frac{2}{n}$
*   $x_k = a + k\Delta x = -3 + k\left(\frac{2}{n}\right) = -3 + \frac{2k}{n}$.
*   $f(x_k) = 4\left(-3 + \frac{2k}{n}\right)^2 - 2 = 34 - \frac{48k}{n} + \frac{16k^2}{n^2}$.

$$
\begin{aligned}
\int_{-3}^{-1} (4x^2 - 2) dx &= \lim_{n \to \infty} \sum_{k=1}^{n} \left(34 - \frac{48k}{n} + \frac{16k^2}{n^2}\right) \left(\frac{2}{n}\right) \\
&= \lim_{n \to \infty} \sum_{k=1}^{n} \left(\frac{68}{n} - \frac{96k}{n^2} + \frac{32k^2}{n^3}\right) \\
&= \lim_{n \to \infty} \left[ \frac{68}{n}\sum_{k=1}^{n}1 - \frac{96}{n^2}\sum_{k=1}^{n}k + \frac{32}{n^3}\sum_{k=1}^{n}k^2 \right] \\
&= \lim_{n \to \infty} \left[ \frac{68\cancel{n}}{\cancel{n}} - \frac{96}{n^2}\left(\frac{n(n+1)}{2}\right) + \frac{32}{n^3}\left(\frac{n(n+1)(2n+1)}{6}\right) \right] \\
&= \lim_{n \to \infty} \left[ 68 - \frac{\cancel{96}^{48} \cdot \cancel{n}(n+1)}{\cancel{2}_1 \cdot \cancel{n^2}_n} + \frac{\cancel{32}^{16} \cdot \cancel{n}(n+1)(2n+1)}{\cancel{6}_3 \cdot \cancel{n^3}_{n^2}} \right] \\
&= \lim_{n \to \infty} \left[ 68 - 48\frac{n+1}{n} + \frac{16}{3}\frac{(n+1)(2n+1)}{n^2} \right] \\
&= \lim_{n \to \infty} \left[ 68 - 48\left(1+\frac{1}{n}\right) + \frac{16}{3}\left(1+\frac{1}{n}\right)\left(2+\frac{1}{n}\right) \right] \\
&= 68 - 48(1+0) + \frac{16}{3}(1+0)(2+0) \\
&= 68 - 48 + \frac{32}{3} = 20 + \frac{32}{3} = \frac{60}{3} + \frac{32}{3} = \frac{92}{3}
\end{aligned}
$$

**Check using FTC:**
$$
\begin{aligned}
\int_{-3}^{-1} (4x^2 - 2) dx &= \left[ \frac{4x^3}{3} - 2x \right]_{-3}^{-1} \\
&= \left(\frac{4(-1)^3}{3} - 2(-1)\right) - \left(\frac{4(-3)^3}{3} - 2(-3)\right) \\
&= \left(-\frac{4}{3} + 2\right) - \left(\frac{4(\cancel{-27}^{-9})}{\cancel{3}_1} + 6\right) \\
&= \left(-\frac{4}{3} + \frac{6}{3}\right) - (-36 + 6) \\
&= \frac{2}{3} - (-30) = \frac{2}{3} + 30 = \frac{2}{3} + \frac{90}{3} = \frac{92}{3} \quad \checkmark
\end{aligned}
$$

### 6. Isaac's Claim

**(a) Provide an example of a function where the antiderivative is not possible, or at least extremely difficult, to calculate to show that the FTC is not always efficient.**

Isaac's claim is incorrect because the Fundamental Theorem of Calculus has conditions. Specifically, Part 2 of the FTC, $\int_{a}^{b} f(x)dx = F(b) - F(a)$, requires that $f$ be continuous on the interval $[a, b]$. If $f$ is not continuous, the theorem cannot be applied directly.

Consider the step function:
$$
f(x) = \begin{cases} 0 & \text{if } x < 1 \\ 2 & \text{if } x \ge 1 \end{cases}
$$
Let's evaluate the integral on the interval $[0, 3]$.

This function has a jump discontinuity at $x=1$, which is within the interval $[0, 3]$. ∴ $f(x)$ is not continuous on $[0, 3]$. Because of this, there is no single elementary function $F(x)$ such that $F'(x) = f(x)$ for all $x \in [0, 3]$. Thus, the FTC cannot be used in one step. We must rely on geometric methods or Riemann sums.

**(b) For that function and an appropriate subinterval of its domain, find the right Riemann sum and the left Riemann sum for $n = 8$, then estimate the area of the function on the subinterval.**

*   Function: $f(x)$ as defined above.
*   Interval: $[0, 3]$, $n=8$.
*   $\Delta x = \frac{3-0}{8} = \frac{3}{8} = 0.375$.
*   Grid points: $x_k = k \cdot \Delta x = \frac{3k}{8}$.
    *   $x_0=0, x_1=0.375, x_2=0.75, x_3=1.125, ..., x_8=3$.
*   The discontinuity is at $x=1$. We need to see which grid points are less than 1.
    *   $x_0=0 < 1$
    *   $x_1=0.375 < 1$
    *   $x_2=0.75 < 1$
    *   $x_3=1.125 > 1$.
    *   So, $f(x_0), f(x_1), f(x_2)$ will be 0. All subsequent $f(x_k)$ will be 2.

**Right Riemann Sum ($R_8$):**
$$
\begin{aligned}
R_8 &= \sum_{k=1}^{8} f(x_k) \Delta x = \Delta x [f(x_1) + f(x_2) + f(x_3) + f(x_4) + f(x_5) + f(x_6) + f(x_7) + f(x_8)] \\
&= \frac{3}{8} [f(0.375) + f(0.75) + f(1.125) + f(1.5) + f(1.875) + f(2.25) + f(2.625) + f(3.0)] \\
&= \frac{3}{8} [0 + 0 + 2 + 2 + 2 + 2 + 2 + 2] \\
&= \frac{3}{8} [2 \times 6] = \frac{3}{8} [12] = \frac{36}{8} = \frac{9}{2} = 4.5
\end{aligned}
$$

**Left Riemann Sum ($L_8$):**
$$
\begin{aligned}
L_8 &= \sum_{k=0}^{7} f(x_k) \Delta x = \Delta x [f(x_0) + f(x_1) + f(x_2) + f(x_3) + f(x_4) + f(x_5) + f(x_6) + f(x_7)] \\
&= \frac{3}{8} [f(0) + f(0.375) + f(0.75) + f(1.125) + f(1.5) + f(1.875) + f(2.25) + f(2.625)] \\
&= \frac{3}{8} [0 + 0 + 0 + 2 + 2 + 2 + 2 + 2] \\
&= \frac{3}{8} [2 \times 5] = \frac{3}{8} [10] = \frac{30}{8} = \frac{15}{4} = 3.75
\end{aligned}
$$

**Area Estimate:**
$$
\text{Area} \approx \frac{L_8 + R_8}{2} = \frac{3.75 + 4.5}{2} = \frac{8.25}{2} = 4.125
$$

*(For reference, the exact area is found by splitting the integral at the discontinuity: $\int_{0}^{1} 0 dx + \int_{1}^{3} 2 dx = 0 + [2x]_{1}^{3} = 2(3) - 2(1) = 4$.)*

---

# Lab 11 Supplement

### 1. Graphical Problem

**(a) Difficulty:**
The right Riemann sum for $n=4$ on $[0, 8]$ requires evaluating the function at the right endpoints $x_1=2, x_2=4, x_3=6, x_4=8$. The problem states that the function is not defined at these points. ∴ Stephen cannot evaluate $f(x_k)$ for any of the required sample points.

**(b) Two Methods:**
1.  **Use different sample points:** Stephen could use a left Riemann sum (using $x=0, 2, 4, 6$) or a midpoint Riemann sum (using $x=1, 3, 5, 7$), where the function is defined.
2.  **Use limits:** Since the function has removable discontinuities (holes) at the endpoints, he could use the limit of the function as $x$ approaches the endpoint from the left. E.g., use $\lim_{x \to 2^-} f(x)$ instead of $f(2)$.

**(c) Approximations:**
Using Method 2 (limits) to perform the right Riemann sum:
*   $\Delta x = \frac{8-0}{4} = 2$.
*   Endpoints: $x=2, 4, 6, 8$.
*   Values from graph:
    *   $\lim_{x \to 2^-} f(x) = 4$
    *   $\lim_{x \to 4^-} f(x) = 9$
    *   $\lim_{x \to 6^-} f(x) = 5$
    *   $\lim_{x \to 8^-} f(x) = 3$
*   Area $\approx R_4 = \Delta x \sum_{k=1}^{4} \lim_{x \to x_k^-} f(x) = 2(4+9+5+3) = 2(21) = 42$.

This is a mix of overestimates and underestimates.
*   On $[0,2]$, $f(x)$ is decreasing $\implies$ right sum is an **underestimate**.
*   On $[2,4]$, $f(x)$ is increasing $\implies$ right sum is an **overestimate**.
*   On $[4,6]$, $f(x)$ is constant $\implies$ right sum is **exact**.
*   On $[6,8]$, $f(x)$ increases then decreases $\implies$ the estimate is complex, but likely an **underestimate** for that interval.

**(d) Exact Area:**
Yes, an exact area can be found. The function is composed of simple geometric shapes (trapezoids, a rectangle, and a triangle) whose areas can be calculated exactly.
*   Area 1 (Trapezoid on $[0,2]$): $\frac{1}{2}(5+4)(2) = 9$
*   Area 2 (Trapezoid on $[2,4]$): $\frac{1}{2}(7+9)(2) = 16$
*   Area 3 (Rectangle on $[4,6]$): $(5)(2) = 10$
*   Area 4 (Triangle on $[6,8]$): $\frac{1}{2}(2)(1) + (2)(3) = 1+6 = 7$ (base on y=3, triangle height 1)
*   Total Area = $9 + 16 + 10 + 7 = 42$.

### 2. True or False

**(a) True.**
If $f(x) = c$ on $[a,b]$, the exact area is a rectangle with area $A = c(b-a)$.
For any $n$, $\Delta x = \frac{b-a}{n}$.
The right Riemann sum is $R_n = \sum_{k=1}^{n} f(x_k)\Delta x = \sum_{k=1}^{n} c \cdot \Delta x = nc\Delta x = n \cdot c \cdot \frac{b-a}{\cancel{n}} = c(b-a)$.
The left Riemann sum is $L_n = \sum_{k=0}^{n-1} f(x_k)\Delta x = \sum_{k=0}^{n-1} c \cdot \Delta x = nc\Delta x = c(b-a)$.
∵ $L_n = R_n = A$, the statement is true.

**(b) True.**
For a linear function, the area under the curve on a subinterval $[x_{k-1}, x_k]$ is a trapezoid. The area of this trapezoid is $\frac{f(x_{k-1}) + f(x_k)}{2} \Delta x$.
For a linear function, the average height is the height at the midpoint: $\frac{f(x_{k-1}) + f(x_k)}{2} = f\left(\frac{x_{k-1} + x_k}{2}\right) = f(x_k^*)$.
∴ The area of the midpoint rectangle, $f(x_k^*)\Delta x$, is exactly the area of the trapezoid on that subinterval. Summing over all subintervals gives the exact integral.

**(c) False.**
The statement is not true for all constants $a, c$. It is only true if the interval $[0, 2\pi/c]$ corresponds to an integer number of full periods of the trigonometric function. The period of $\sin(ax)$ is $2\pi/a$.
**Counterexample:** Let $a=1, c=4$. The integral is $\int_{0}^{\pi/2} \sin(x)dx$.
$\int_{0}^{\pi/2} \sin(x)dx = [-\cos(x)]_{0}^{\pi/2} = (-\cos(\pi/2)) - (-\cos(0)) = 0 - (-1) = 1 \neq 0$.

**(d) False.**
The variable of integration, $x$, cannot be treated as a constant and factored out of the integral.
**Counterexample:** Let $f(x)=1$ and the interval be $[0, 2]$.
LHS: $\int_{0}^{2} x \cdot 1 dx = \left[\frac{x^2}{2}\right]_{0}^{2} = \frac{2^2}{2} - 0 = 2$.
RHS: $x \int_{0}^{2} 1 dx = x [x]_{0}^{2} = x(2-0) = 2x$.
∵ $2 \neq 2x$ (in general), the property is false.

---

# Substitution Rule Lab Preparation

### 1. Joan's Integral

Joan's substitution is correct, she just needs to rewrite the integrand first.
$$
\int \sec^3\theta \tan\theta d\theta
$$
Rewrite the integrand to isolate the derivative part:
$$
\int \sec^3\theta \tan\theta d\theta \iff \int (\sec^2\theta) (\sec\theta \tan\theta) d\theta
$$
Now, let $u = \sec\theta$.
Then $\frac{du}{d\theta} = \sec\theta \tan\theta \implies du = \sec\theta \tan\theta d\theta$.
Substitute $u$ and $du$ into the rewritten integral:
$$
\begin{aligned}
\int (\sec^2\theta) (\sec\theta \tan\theta) d\theta &= \int u^2 du \\
&= \frac{u^3}{3} + C
\end{aligned}
$$
Finally, substitute back for $u$:
$$
\frac{u^3}{3} + C \iff \frac{\sec^3\theta}{3} + C
$$

### 2. Joaquin's Integral

Joaquin's substitution is correct, he just needs to solve for $x$ in terms of $u$.
$$
\int_{2}^{7} \frac{x}{\sqrt{x+2}}dx
$$
Let $u = x+2$.
This implies two things:
1.  $du = dx$.
2.  $x = u - 2$.

Next, change the limits of integration from $x$-values to $u$-values:
*   Lower limit: when $x=2 \implies u = 2+2 = 4$.
*   Upper limit: when $x=7 \implies u = 7+2 = 9$.

Now, substitute everything into the integral:
$$
\begin{aligned}
\int_{2}^{7} \frac{x}{\sqrt{x+2}}dx &\iff \int_{4}^{9} \frac{u-2}{\sqrt{u}} du \\
&\iff \int_{4}^{9} \left(\frac{u}{\sqrt{u}} - \frac{2}{\sqrt{u}}\right) du \\
&\iff \int_{4}^{9} \left(u^{1/2} - 2u^{-1/2}\right) du \\
&= \left[ \frac{u^{3/2}}{3/2} - 2\frac{u^{1/2}}{1/2} \right]_{4}^{9} \\
&= \left[ \frac{2}{3}u^{3/2} - 4u^{1/2} \right]_{4}^{9} \\
&= \left( \frac{2}{3}(9)^{3/2} - 4(9)^{1/2} \right) - \left( \frac{2}{3}(4)^{3/2} - 4(4)^{1/2} \right) \\
&= \left( \frac{2}{\cancel{3}_1}(\cancel{27}^9) - 4(3) \right) - \left( \frac{2}{3}(8) - 4(2) \right) \\
&= (18 - 12) - \left(\frac{16}{3} - 8\right) \\
&= 6 - \left(\frac{16}{3} - \frac{24}{3}\right) \\
&= 6 - \left(-\frac{8}{3}\right) \\
&= 6 + \frac{8}{3} \\
&= \frac{18}{3} + \frac{8}{3} = \frac{26}{3}
\end{aligned}
$$