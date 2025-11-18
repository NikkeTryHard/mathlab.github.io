# Lab 12 - Substitution Rule

### 1. $\int (\sin x \cos x) \, dx$

**Method 1: Substitution $u = \sin x$**

- Let $u = \sin x$.
- Differentiating with respect to $x$: $\frac{du}{dx} = \cos x \implies du = \cos x \, dx$.
- Substitute into the integral:
  $$ \int (\underbrace{\sin x}_{u}) (\underbrace{\cos x \, dx}_{du}) = \int u \, du $$

**Scratch Work:**
$$
\begin{aligned}
\int u \, du &= \frac{u^2}{2} + C_1 \quad \text{(Power Rule)} \\
&\text{Substitute back } u = \sin x: \\
&= \frac{(\sin x)^2}{2} + C_1 = \frac{1}{2}\sin^2 x + C_1
\end{aligned}
$$

**Method 2: Substitution $u = \cos x$**

- Let $u = \cos x$.
- Differentiating with respect to $x$: $\frac{du}{dx} = -\sin x \implies du = -\sin x \, dx \implies -du = \sin x \, dx$.
- Substitute into the integral:
  $$ \int (\underbrace{\cos x}_{u}) (\underbrace{\sin x \, dx}_{-du}) = \int u (-du) = -\int u \, du $$

**Scratch Work:**
$$
\begin{aligned}
-\int u \, du &= -\left(\frac{u^2}{2}\right) + C_2 \\
&\text{Substitute back } u = \cos x: \\
&= -\frac{1}{2}\cos^2 x + C_2
\end{aligned}
$$

**Explanation of Equivalence:**
We must show that $\frac{1}{2}\sin^2 x + C_1$ is equivalent to $-\frac{1}{2}\cos^2 x + C_2$.
Using the Pythagorean Identity: $\sin^2 x + \cos^2 x = 1 \iff \sin^2 x = 1 - \cos^2 x$.

$$
\begin{aligned}
\text{Result 1} &= \frac{1}{2}\sin^2 x + C_1 \\
&= \frac{1}{2}(1 - \cos^2 x) + C_1 \quad \text{(Substitution)} \\
&= \frac{1}{2} - \frac{1}{2}\cos^2 x + C_1 \quad \text{(Distribute)} \\
&= -\frac{1}{2}\cos^2 x + \left(\frac{1}{2} + C_1\right)
\end{aligned}
$$
$\because C_1$ is an arbitrary constant, $\left(\frac{1}{2} + C_1\right)$ is also an arbitrary constant. Let $C_2 = \frac{1}{2} + C_1$.
$\therefore$ The two answers differ only by a constant, making them equivalent families of antiderivatives.

**Final Answer:** $\boxed{\frac{1}{2}\sin^2 x + C \quad \text{or} \quad -\frac{1}{2}\cos^2 x + C}$

---

### 2. Wine Temperature Rate $n(t) = -18e^{-0.65t}$

**(a) Temperature Drop by 7 pm**

- Start time $t=0$ is 4 pm. End time 7 pm is $t=3$.
- The total change in temperature is the definite integral of the rate $n(t)$ from $t=0$ to $t=3$.
- $\Delta \text{Temp} = \int_{0}^{3} -18e^{-0.65t} \, dt$.

**Scratch Work:**
$$
\begin{aligned}
\text{Let } u &= -0.65t \implies du = -0.65 \, dt \implies dt = \frac{du}{-0.65}. \\
\text{Limits: } &t=0 \to u=0; \quad t=3 \to u=-0.65(3)=-1.95. \\
\int_{0}^{3} -18e^{-0.65t} \, dt &= \int_{0}^{-1.95} -18 e^u \left(\frac{du}{-0.65}\right) \\
&= \frac{-18}{-0.65} \int_{0}^{-1.95} e^u \, du \\
&= \frac{1800}{65} \left[ e^u \right]_{0}^{-1.95} = \frac{360}{13} \left( e^{-1.95} - e^0 \right) \\
&\approx 27.6923 \left( 0.14227 - 1 \right) \\
&\approx 27.6923 (-0.8577) \\
&\approx -23.75
\end{aligned}
$$
The integral yields a negative value, indicating a decrease. The magnitude of the drop is $23.75$.

**Final Answer (a):** $\boxed{23.75^\circ \text{F}}$

**(b) Temperature at 7 pm**

- Initial Temp $T(0) = 70^\circ \text{F}$.
- $T(3) = T(0) + \int_{0}^{3} n(t) \, dt$.

**Scratch Work:**
$$
\begin{aligned}
T(3) &= 70 + (-23.75) \\
&= 46.25
\end{aligned}
$$

**Final Answer (b):** $\boxed{46.25^\circ \text{F}}$

**(c) Antiderivative $N(t)$**

- We seek $N(t) = \int n(t) \, dt = \int -18e^{-0.65t} \, dt$.

**Scratch Work:**
$$
\begin{aligned}
N(t) &= \frac{-18}{-0.65}e^{-0.65t} + C \quad \text{(Using u-sub from part a)} \\
&= \frac{360}{13}e^{-0.65t} + C \\
&\approx 27.69e^{-0.65t} + C
\end{aligned}
$$
*Note:* In the context of temperature $T(t)$, we can solve for $C$.
$T(0) = 70 \implies 27.69e^{0} + C = 70 \implies 27.69 + C = 70 \implies C \approx 42.31$.
So the specific temperature function is $T(t) \approx 27.69e^{-0.65t} + 42.31$.

**Final Answer (c):** $\boxed{N(t) = \frac{360}{13}e^{-0.65t} + C}$

**(d) Graphs of $n(t)$ and $N(t)$**

- **$n(t) = -18e^{-0.65t}$:**
  - At $t=0$, $n(0) = -18$.
  - As $t \to \infty$, $e^{-0.65t} \to 0$, so $n(t) \to 0$ from the negative side.
  - Horizontal Asymptote: $y = 0$.
- **$N(t) \approx 27.69e^{-0.65t} + 42.31$ (Temperature):**
  - At $t=0$, $N(0) = 70$.
  - As $t \to \infty$, $27.69e^{-0.65t} \to 0$, so $N(t) \to 42.31$.
  - Horizontal Asymptote: $y \approx 42.31$.

**(e) Contextual Explanation**

- **Why asymptotes exist:** According to Newton's Law of Cooling, an object will cool until it reaches the ambient temperature of its surroundings (thermal equilibrium).
- **Temperature ($N(t)$) as $t \to \infty$:** The wine is cooling toward the temperature inside the refrigerator. $\therefore$ The asymptote $y \approx 42.31$ represents the fridge temperature.
- **Rate of change ($n(t)$) as $t \to \infty$:** As the wine gets closer to the fridge temperature, the cooling slows down. Eventually, the temperature stops changing. $\therefore$ The rate approaches $0$.

**(f) Locating Solution to (a)**

- **On graph $n(t)$:** The solution to (a) (the net change) corresponds to the **signed area** between the curve $n(t)$ and the t-axis (horizontal axis) from $t=0$ to $t=3$.
- **On graph $N(t)$:** The solution to (a) corresponds to the **vertical displacement** (change in y-values) between the points at $t=0$ and $t=3$. Specifically, $N(3) - N(0)$.

---

### 3. $\int_a^b (cx + d)^2 \, dx$

**Method 1: Integration by Substitution**

- Let $u = cx + d$.
- Then $du = c \, dx \implies dx = \frac{1}{c} \, du$.
- Change Limits:
  - Lower: $x=a \implies u = ca+d$.
  - Upper: $x=b \implies u = cb+d$.

**Scratch Work:**
$$
\begin{aligned}
\int_{a}^{b} (cx+d)^2 \, dx &= \int_{ca+d}^{cb+d} u^2 \left(\frac{1}{c} \, du\right) \\
&= \frac{1}{c} \left[ \frac{u^3}{3} \right]_{ca+d}^{cb+d} \\
&= \frac{1}{3c} \left[ (cb+d)^3 - (ca+d)^3 \right]
\end{aligned}
$$

**Method 2: Expansion (Algebraic Confirmation)**

- Expand the integrand: $(cx+d)^2 = c^2x^2 + 2cdx + d^2$.
- Integrate term by term using Power Rule.

**Scratch Work:**
$$
\begin{aligned}
\int_{a}^{b} (c^2x^2 + 2cdx + d^2) \, dx &= \left[ \frac{c^2x^3}{3} + \frac{2cdx^2}{2} + d^2x \right]_{a}^{b} \\
&= \left[ \frac{c^2x^3}{3} + cdx^2 + d^2x \right]_{a}^{b} \\
&= \left(\frac{c^2b^3}{3} + cdb^2 + d^2b\right) - \left(\frac{c^2a^3}{3} + cda^2 + d^2a\right)
\end{aligned}
$$

**Verification of Equivalence:**
We expand the result from Method 1 to see if it matches Method 2.
$$
\begin{aligned}
\text{Method 1 Result} &= \frac{1}{3c} \left[ (cb+d)^3 - (ca+d)^3 \right] \\
\text{Using } (A+B)^3 &= A^3 + 3A^2B + 3AB^2 + B^3: \\
(cb+d)^3 &= c^3b^3 + 3c^2b^2d + 3cbd^2 + d^3 \\
(ca+d)^3 &= c^3a^3 + 3c^2a^2d + 3cad^2 + d^3 \\
\text{Difference} &= c^3(b^3-a^3) + 3c^2d(b^2-a^2) + 3cd^2(b-a) + (d^3-d^3) \\
\text{Multiply by } \frac{1}{3c}: & \\
&= \frac{c^3(b^3-a^3)}{3c} + \frac{3c^2d(b^2-a^2)}{3c} + \frac{3cd^2(b-a)}{3c} \\
&= \frac{c^2}{3}(b^3-a^3) + cd(b^2-a^2) + d^2(b-a) \\
&= \left(\frac{c^2b^3}{3} + cdb^2 + d^2b\right) - \left(\frac{c^2a^3}{3} + cda^2 + d^2a\right)
\end{aligned}
$$
$\therefore$ The results are identical.

**Final Answer:** $\boxed{\frac{1}{3c} \left[ (cb+d)^3 - (ca+d)^3 \right]}$

---

# Lab 12 Supplement: Substitution Rule

### 1. Antiderivative of $f(x) = \sec^2 x \tan x$

**Method 1: $u = \tan x$**
- $du = \sec^2 x \, dx$.
- Integral: $\int (\tan x)(\sec^2 x \, dx) = \int u \, du$.
- Result: $\frac{1}{2}u^2 + C = \boxed{\frac{1}{2}\tan^2 x + C_1}$.

**Method 2: $u = \sec x$**
- $du = \sec x \tan x \, dx$.
- Rewrite integrand: $\sec^2 x \tan x = \sec x (\sec x \tan x)$.
- Integral: $\int u \, du$.
- Result: $\frac{1}{2}u^2 + C = \boxed{\frac{1}{2}\sec^2 x + C_2}$.

**Method 3: $u = \sec^2 x$**
- $du = 2\sec x \cdot (\sec x)' \, dx = 2\sec x (\sec x \tan x) \, dx = 2\sec^2 x \tan x \, dx$.
- $\therefore \sec^2 x \tan x \, dx = \frac{1}{2} \, du$.
- Integral: $\int \frac{1}{2} \, du = \frac{1}{2}u + C$.
- Result: $\boxed{\frac{1}{2}\sec^2 x + C_3}$.

**Explanation of Equivalence:**
Method 1 yields $\frac{1}{2}\tan^2 x + C_1$. Methods 2 and 3 yield $\frac{1}{2}\sec^2 x + C$.
Using the identity $\sec^2 x = \tan^2 x + 1$:
$$ \frac{1}{2}\sec^2 x + C_2 = \frac{1}{2}(\tan^2 x + 1) + C_2 = \frac{1}{2}\tan^2 x + \underbrace{\left(\frac{1}{2} + C_2\right)}_{\text{New Constant } C_1} $$
$\because$ The functions differ only by a constant, they are equivalent antiderivatives.

---

### 2. $\int_0^1 (x\sqrt{x + 3}) \, dx$

**Method 1: Substitution $u = x + 3$**

- $u = x + 3 \implies x = u - 3$.
- $du = dx$.
- Limits: $x=0 \to u=3$; $x=1 \to u=4$.

**Scratch Work:**
$$
\begin{aligned}
\int_{0}^{1} x\sqrt{x+3} \, dx &= \int_{3}^{4} (u-3)\sqrt{u} \, du \\
&= \int_{3}^{4} (u \cdot u^{1/2} - 3u^{1/2}) \, du \\
&= \int_{3}^{4} (u^{3/2} - 3u^{1/2}) \, du \\
&= \left[ \frac{2}{5}u^{5/2} - 3\left(\frac{2}{3}u^{3/2}\right) \right]_{3}^{4} \\
&= \left[ \frac{2}{5}u^{5/2} - 2u^{3/2} \right]_{3}^{4} \\
\text{Evaluate at 4: } & \frac{2}{5}(32) - 2(8) = \frac{64}{5} - \frac{80}{5} = -\frac{16}{5} \\
\text{Evaluate at 3: } & \frac{2}{5}(3^{2.5}) - 2(3^{1.5}) = \frac{2}{5}(9\sqrt{3}) - 2(3\sqrt{3}) = \frac{18\sqrt{3}}{5} - \frac{30\sqrt{3}}{5} = -\frac{12\sqrt{3}}{5} \\
\text{Total: } & -\frac{16}{5} - \left(-\frac{12\sqrt{3}}{5}\right) = \frac{12\sqrt{3}-16}{5}
\end{aligned}
$$

**Method 2: Substitution $u = \sqrt{x + 3}$**

- $u = \sqrt{x+3} \implies u^2 = x+3 \implies x = u^2 - 3$.
- Differentiating $x = u^2 - 3 \implies dx = 2u \, du$.
- Limits: $x=0 \to u=\sqrt{3}$; $x=1 \to u=\sqrt{4}=2$.

**Scratch Work:**
$$
\begin{aligned}
\int_{0}^{1} x\sqrt{x+3} \, dx &= \int_{\sqrt{3}}^{2} (u^2-3)(u)(2u \, du) \\
&= \int_{\sqrt{3}}^{2} (u^2-3)(2u^2) \, du \\
&= \int_{\sqrt{3}}^{2} (2u^4 - 6u^2) \, du \\
&= \left[ \frac{2u^5}{5} - \frac{6u^3}{3} \right]_{\sqrt{3}}^{2} = \left[ \frac{2}{5}u^5 - 2u^3 \right]_{\sqrt{3}}^{2} \\
\text{Evaluate at 2: } & \frac{2}{5}(32) - 2(8) = \frac{64}{5} - 16 = -\frac{16}{5} \\
\text{Evaluate at } \sqrt{3}: & \frac{2}{5}(\sqrt{3})^5 - 2(\sqrt{3})^3 = \frac{2}{5}(9\sqrt{3}) - 2(3\sqrt{3}) = \frac{18\sqrt{3}}{5} - 6\sqrt{3} = -\frac{12\sqrt{3}}{5} \\
\text{Total: } & -\frac{16}{5} - \left(-\frac{12\sqrt{3}}{5}\right) = \frac{12\sqrt{3}-16}{5}
\end{aligned}
$$

**Final Answer:** $\boxed{\frac{12\sqrt{3}-16}{5}}$