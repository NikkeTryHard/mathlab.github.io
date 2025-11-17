# Lab 11 - Definite Integrals

### 1. $\int_{0}^{2} (x + 4)\,dx$

**Using the Definition of the Definite Integral:**

- Let $f(x)=x+4$ on $[a,b]=[0,2]$.
- $\Delta x=\dfrac{b-a}{n}=\dfrac{2}{n}$; right endpoints: $x_k=a+k\Delta x=\dfrac{2k}{n}$.
- $f(x_k)=\dfrac{2k}{n}+4$.

**Scratch Work (show all steps):**
$$
\begin{aligned}
\int_{0}^{2}(x+4)\,dx&=\lim_{n\to\infty}\sum_{k=1}^{n}f(x_k)\,\Delta x\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{2k}{n}+4\right)\left(\frac{2}{n}\right)\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{4k}{n^2}+\frac{8}{n}\right)\\
&=\lim_{n\to\infty}\left[\frac{4}{n^2}\sum_{k=1}^{n}k+\frac{8}{n}\sum_{k=1}^{n}1\right]\quad\text{(By linearity of $\Sigma$)}\\
&=\lim_{n\to\infty}\left[\frac{4}{n^2}\cdot\frac{n(n+1)}{2}+\frac{8}{n}\cdot n\right]\\
&=\lim_{n\to\infty}\left[\frac{4n(n+1)}{2n^2}+8\right]\\
&=\lim_{n\to\infty}\left[\frac{\cancel{4}^{\,2}\,n(n+1)}{\cancel{2}^{\,1}\,n^2}+8\right]\\
&=\lim_{n\to\infty}\left[\frac{2\,\cancel{n}\,(n+1)}{\cancel{n^2}^{\,n}}+8\right]\\
&=\lim_{n\to\infty}\left[\frac{2(n+1)}{n}+8\right]\\
&=\lim_{n\to\infty}\left[2+\frac{2}{n}+8\right]\\
&=10+\lim_{n\to\infty}\frac{2}{n}\quad\text{(By limit property $\lim\limits_{n\to\infty}\frac{c}{n}=0$)}\\
&=10
\end{aligned}
$$

**Final Answer:** $\boxed{10}$

**Verification via FTC:**
$$\text{Antiderivative }F(x)=\frac{x^2}{2}+4x$$
$$F(2)=\frac{2^2}{2}+4\cdot2=2+8=10\quad\text{and}\quad F(0)=0$$
$$\text{Difference }F(2)-F(0)=10-0=10$$

### 2. $\int_{1}^{5} (2x-5)\,dx$

**Using the Definition of the Definite Integral:**

- Let $f(x)=2x-5$ on $[1,5]$.
- $\Delta x=\dfrac{4}{n}$; $x_k=1+\dfrac{4k}{n}$; $f(x_k)=\dfrac{8k}{n}-3$.

**Scratch Work:**
$$
\begin{aligned}
\int_{1}^{5}(2x-5)\,dx&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{8k}{n}-3\right)\left(\frac{4}{n}\right)\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{32k}{n^2}-\frac{12}{n}\right)\\
&=\lim_{n\to\infty}\left[\frac{32}{n^2}\sum_{k=1}^{n}k-\frac{12}{n}\sum_{k=1}^{n}1\right]\quad\text{(By linearity of $\Sigma$)}\\
&=\lim_{n\to\infty}\left[\frac{32}{n^2}\cdot\frac{n(n+1)}{2}-\frac{12}{n}\cdot n\right]\\
&=\lim_{n\to\infty}\left[\frac{32n(n+1)}{2n^2}-12\right]\\
&=\lim_{n\to\infty}\left[\frac{\cancel{32}^{\,16}\,n(n+1)}{\cancel{2}^{\,1}\,n^2}-12\right]\\
&=\lim_{n\to\infty}\left[\frac{16\,\cancel{n}\,(n+1)}{\cancel{n^2}^{\,n}}-12\right]\\
&=\lim_{n\to\infty}\left[\frac{16(n+1)}{n}-12\right]\\
&=\lim_{n\to\infty}\left[\frac{16n+16}{n}-12\right]=\lim_{n\to\infty}\left[16+\frac{16}{n}-12\right]\\
&=4+\lim_{n\to\infty}\frac{16}{n}=4
\end{aligned}
$$

**Final Answer:** $\boxed{4}$

**Verification via FTC:**
$$\text{Antiderivative }F(x)=x^2-5x$$
$$F(5)=25-25=0\quad\text{and}\quad F(1)=1-5=-4$$
$$\text{Difference }F(5)-F(1)=0-(-4)=4$$

### 3. $\int_{0}^{4} x^2\,dx$

**Using the Definition of the Definite Integral:**

- Let $f(x)=x^2$ on $[0,4]$; $\Delta x=\dfrac{4}{n}$; $x_k=\dfrac{4k}{n}$; $f(x_k)=\dfrac{16k^2}{n^2}$.

**Scratch Work:**
$$
\begin{aligned}
\int_{0}^{4}x^2\,dx&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{16k^2}{n^2}\right)\left(\frac{4}{n}\right)\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}\frac{64k^2}{n^3}\\
&=\lim_{n\to\infty}\frac{64}{n^3}\sum_{k=1}^{n}k^2=\lim_{n\to\infty}\frac{64}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}\\
&=\lim_{n\to\infty}\frac{64n(n+1)(2n+1)}{6n^3}\\
&=\lim_{n\to\infty}\frac{\cancel{64}^{\,32}\,(n(n+1)(2n+1))}{\cancel{6}^{\,3}\,n^3}\\
&=\lim_{n\to\infty}\frac{32}{3}\cdot\frac{\cancel{n}\,(n+1)(2n+1)}{\cancel{n^3}^{\,n^2}}\\
&=\frac{32}{3}\lim_{n\to\infty}\frac{(n+1)(2n+1)}{n^2}\\
&=\frac{32}{3}\lim_{n\to\infty}\left(\frac{n+1}{n}\right)\left(\frac{2n+1}{n}\right)\quad\text{(By Product Rule for Limits)}\\
&=\frac{32}{3}\left(\lim_{n\to\infty}\frac{n+1}{n}\right)\left(\lim_{n\to\infty}\frac{2n+1}{n}\right)\\
&=\frac{32}{3}\cdot(1)\cdot(2)=\frac{64}{3}
\end{aligned}
$$

**Final Answer:** $\boxed{\dfrac{64}{3}}$

**Verification via FTC:**
$$\text{Antiderivative }F(x)=\frac{x^3}{3}$$
$$F(4)=\frac{64}{3}\quad\text{and}\quad F(0)=0$$
$$\text{Difference }F(4)-F(0)=\frac{64}{3}-0=\frac{64}{3}$$

### 4. $\int_{0}^{2}(-2x^3)\,dx$

**Using the Definition of the Definite Integral:**

- Let $f(x)=-2x^3$ on $[0,2]$; $\Delta x=\dfrac{2}{n}$; $x_k=\dfrac{2k}{n}$; $f(x_k)=-\dfrac{16k^3}{n^3}$.

**Scratch Work:**
$$
\begin{aligned}
\int_{0}^{2}(-2x^3)\,dx&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(-\frac{16k^3}{n^3}\right)\left(\frac{2}{n}\right)\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}-\frac{32k^3}{n^4}=\lim_{n\to\infty}-\frac{32}{n^4}\sum_{k=1}^{n}k^3\\
&=\lim_{n\to\infty}-\frac{32}{n^4}\cdot\left(\frac{n^2(n+1)^2}{4}\right)\\
&=\lim_{n\to\infty}-\frac{32n^2(n+1)^2}{4n^4}\\
&=\lim_{n\to\infty}-\frac{\cancel{32}^{\,8}\,n^2(n+1)^2}{\cancel{4}^{\,1}\,n^4}\\
&=\lim_{n\to\infty}-8\cdot\frac{\cancel{n^2}\,(n+1)^2}{\cancel{n^4}^{\,n^2}}\\
&=-8\lim_{n\to\infty}\frac{(n+1)^2}{n^2}=-8\left(\lim_{n\to\infty}\frac{n+1}{n}\right)^2\\
&=-8\,(1)^2=-8
\end{aligned}
$$

**Final Answer:** $\boxed{-8}$

**Verification via FTC:**
$$\text{Antiderivative }F(x)=-\frac{x^4}{2}$$
$$F(2)=-\frac{16}{2}=-8\quad\text{and}\quad F(0)=0$$
$$\text{Difference }F(2)-F(0)=-8-0=-8$$

### 5. $\int_{-3}^{-1}(4x^2-2)\,dx$

**Using the Definition of the Definite Integral:**

- Let $f(x)=4x^2-2$ on $[-3,-1]$; $\Delta x=\dfrac{2}{n}$; $x_k=-3+\dfrac{2k}{n}$.
- By the binomial formula $(a+b)^2=a^2+2ab+b^2$,
  Let $a=-3$ and $b=\dfrac{2k}{n}$. Then
  $$\left(-3+\frac{2k}{n}\right)^2=a^2+2ab+b^2=(-3)^2+2(-3)\left(\frac{2k}{n}\right)+\left(\frac{2k}{n}\right)^2=9-\frac{12k}{n}+\frac{4k^2}{n^2}$$
- Thus $f(x_k)=4\left(9-\frac{12k}{n}+\frac{4k^2}{n^2}\right)-2=34-\frac{48k}{n}+\frac{16k^2}{n^2}$.

**Scratch Work:**
$$
\begin{aligned}
\int_{-3}^{-1}(4x^2-2)\,dx&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(34-\frac{48k}{n}+\frac{16k^2}{n^2}\right)\left(\frac{2}{n}\right)\\
&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{68}{n}-\frac{96k}{n^2}+\frac{32k^2}{n^3}\right)\\
&=\lim_{n\to\infty}\left[\frac{68}{n}\sum_{k=1}^{n}1-\frac{96}{n^2}\sum_{k=1}^{n}k+\frac{32}{n^3}\sum_{k=1}^{n}k^2\right]\quad\text{(By linearity of $\Sigma$)}\\
&=\lim_{n\to\infty}\left[\frac{68}{n}\cdot n-\frac{96}{n^2}\cdot\frac{n(n+1)}{2}+\frac{32}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}\right]\\
&=\lim_{n\to\infty}\left[68-\frac{96n(n+1)}{2n^2}+\frac{32n(n+1)(2n+1)}{6n^3}\right]\\
&=\lim_{n\to\infty}\left[68-\frac{\cancel{96}^{\,48}\,n(n+1)}{\cancel{2}^{\,1}\,n^2}+\frac{\cancel{32}^{\,16}\,n(n+1)(2n+1)}{\cancel{6}^{\,3}\,n^3}\right]\\
&=\lim_{n\to\infty}\left[68-48\cdot\frac{\cancel{n}\,(n+1)}{\cancel{n^2}^{\,n}}+\frac{16}{3}\cdot\frac{\cancel{n}\,(n+1)(2n+1)}{\cancel{n^3}^{\,n^2}}\right]\\
&=\lim_{n\to\infty}\left[68-48\cdot\frac{n+1}{n}+\frac{16}{3}\cdot\frac{(n+1)(2n+1)}{n^2}\right]\\
&=\lim_{n\to\infty}68\;\;\; -\;\;\;48\lim_{n\to\infty}\left(1+\frac{1}{n}\right)\;\;\;+\;\;\;\frac{16}{3}\lim_{n\to\infty}\left(\frac{n+1}{n}\right)\left(\frac{2n+1}{n}\right)\\
&=68-48(1)+\frac{16}{3}(1\cdot2)=68-48+\frac{32}{3}=\frac{92}{3}
\end{aligned}
$$

**Final Answer:** $\boxed{\dfrac{92}{3}}$

**Verification via FTC:**
$$\text{Antiderivative }F(x)=\frac{4x^3}{3}-2x$$
$$F(-1)=-\frac{4}{3}+2=\frac{2}{3}\quad\text{and}\quad F(-3)=-36+6=-30$$
$$\text{Difference }F(-1)-F(-3)=\frac{2}{3}-(-30)=\frac{92}{3}$$

### 6. Isaac's Claim

**(a) Clarification of FTC conditions and antiderivative language:**

Part 2 of the FTC states that if $f$ is continuous on $[a,b]$ and $F$ is an antiderivative of $f$ on $[a,b]$, then $\int_a^b f(x)\,dx=F(b)-F(a)$. For the step function
$$
f(x)=\begin{cases}0,&x<1\\2,&x\ge 1\end{cases}
$$
on $[0,3]$, $f$ has a jump at $x=1$ and is not continuous on $[0,3]$. A piecewise antiderivative exists,
$$
F(x)=\begin{cases}C_1,&x<1\\2x+C_2,&x\ge1\end{cases},
$$
but the continuity hypothesis of the FTC on the whole interval fails, so we do not apply FTC in a single step across the discontinuity. We instead split the domain or use geometric/Riemann-sum reasoning.

**(b) Right and Left Riemann sums for $n=8$ on $[0,3]$ (with justification):**

- $\Delta x=\dfrac{3}{8}$; grid points $x_k=\dfrac{3k}{8}$.
- Discontinuity at $x=1$ implies $f(x_k)=0$ when $x_k<1$ and $f(x_k)=2$ when $x_k\ge1$.

Right sum $R_8$:
$$
\begin{aligned}
R_8&=\Delta x\sum_{k=1}^{8}f(x_k)=\frac{3}{8}\,[0+0+2+2+2+2+2+2]=\frac{36}{8}=\frac{9}{2}=4.5
\end{aligned}
$$

Left sum $L_8$:
$$
\begin{aligned}
L_8&=\Delta x\sum_{k=0}^{7}f(x_k)=\frac{3}{8}\,[0+0+0+2+2+2+2+2]=\frac{30}{8}=\frac{15}{4}=3.75
\end{aligned}
$$

Area discussion: averaging $\dfrac{L_8+R_8}{2}$ is an ad hoc estimate and is not guaranteed for jump discontinuities. The exact area is obtained by splitting at the discontinuity:
$$
\int_{0}^{3}f(x)\,dx=\int_{0}^{1}0\,dx+\int_{1}^{3}2\,dx=0+[2x]_{1}^{3}=4.
$$

---

# Lab 11 Supplement

### 1. Graphical Problem

**(a) Difficulty:**
Right Riemann sum for $n=4$ on $[0,8]$ uses right endpoints $x=2,4,6,8$, where $f$ is not defined. Therefore $f(x_k)$ cannot be directly evaluated at those points.

**(b) Two Methods:**
- Use different sample points: left or midpoint sums where $f$ is defined.
- Use limits at removable discontinuities: replace $f(x_k)$ with $\lim_{x\to x_k^-}f(x)$.

**(c) Approximations (using limits for right endpoints):**
- $\Delta x=2$; endpoints $2,4,6,8$ with $\lim_{x\to 2^-}f(x)=4$, $\lim_{x\to 4^-}f(x)=9$, $\lim_{x\to 6^-}f(x)=5$, $\lim_{x\to 8^-}f(x)=3$.
- $R_4=2(4+9+5+3)=42$.
- Over/under analysis: on $[6,8]$ the graph is V-shaped with value $3$ at $x=8$ but reaches $4$ near $x=7$; since $3<4$, using the right endpoint underestimates area on $[6,8]$. The other intervals match the stated behavior.

**(d) Exact Area (geometric decomposition):**
- Rectangle: width $2$, height $3$, area $6$.
- Triangle on $[6,8]$: base length $=8-6=2$, max height $=4-3=1$, area $=\dfrac{1}{2}(2)(1)=1$.
- Two trapezoids on $[0,2]$ and $[2,4]$ with areas $9$ and $16$ respectively.
- Total $=9+16+10+7=42$.

### 2. True or False

**(a) True (with theorem reference).**
For constant $f(x)=c$ on $[a,b]$, $A=c(b-a)$. For any $n$, $\Delta x=\dfrac{b-a}{n}$. By linearity of summation (Theorem: $\sum(a_k+b_k)=\sum a_k+\sum b_k$ and $\sum c\,a_k=c\sum a_k$),
$$R_n=\sum_{k=1}^{n}c\,\Delta x=c\sum_{k=1}^{n}\Delta x=c\,n\,\frac{b-a}{n}=c(b-a)$$
and similarly $L_n=c(b-a)$.

**(b) True.**
For linear $f$, trapezoid area on $[x_{k-1},x_k]$ equals midpoint rectangle: $\dfrac{f(x_{k-1})+f(x_k)}{2}\,\Delta x=f\big(\tfrac{x_{k-1}+x_k}{2}\big)\,\Delta x$.

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

Joan's substitution is correct; explicitly factor the integrand first: $\sec^3\theta\tan\theta=\sec^2\theta\cdot(\sec\theta\tan\theta)$.
$$
\int \sec^3\theta\tan\theta\,d\theta=\int \big(\sec^2\theta\big)\big(\sec\theta\tan\theta\big)\,d\theta
$$
Let $u=\sec\theta$ so $du=\sec\theta\tan\theta\,d\theta$.
$$
\int \sec^2\theta\,(\sec\theta\tan\theta)\,d\theta=\int u^2\,du=\frac{u^3}{3}+C=\frac{\sec^3\theta}{3}+C
$$

### 2. Joaquin's Integral

Joaquin's substitution is correct; solve for $x$ and change limits.
$$\int_{2}^{7}\frac{x}{\sqrt{x+2}}\,dx\quad\text{with }u=x+2,\;du=dx,\;x=u-2,$$
limits: $x=2\Rightarrow u=4$, $x=7\Rightarrow u=9$.
$$
\begin{aligned}
\int_{2}^{7}\frac{x}{\sqrt{x+2}}\,dx&=\int_{4}^{9}\frac{u-2}{\sqrt{u}}\,du=\int_{4}^{9}\left(u^{1/2}-2u^{-1/2}\right)du\\
&=\left[\frac{2}{3}u^{3/2}-4u^{1/2}\right]_{4}^{9}\\
&=\left(\frac{2}{3}\cdot27-4\cdot3\right)-\left(\frac{2}{3}\cdot8-4\cdot2\right)\\
&=(18-12)-\left(\frac{16}{3}-8\right)=6-\left(-\frac{8}{3}\right)=\frac{26}{3}
\end{aligned}
$$

**Final Answer:** $\boxed{\dfrac{26}{3}}$