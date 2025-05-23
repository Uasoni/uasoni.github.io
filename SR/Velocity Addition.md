## Navigation

**Previous**: [[Fundamental Effects]]; **Next**: [[Lorentz Transformation]]
___
## Toy Problem

In some frame $S$, there exists a frame $S'$ moving at speed $v$. In frame $S'$, some object moves at speed $u$. The problem is to find the measured speed of this object in $S$.
## Derivation

As a concretisation, let a train (frame $S'$) move at a speed $v$ rightwards as observed by the ground frame ($S$), and a ball is chucked with speed $u$ rightwards as observed in the train frame. Let $w$ be the answer (i.e. the speed of the ball in $S$).

A possible expression for the time it takes for the ball to traverse the length of the train (proper length $L$) is to consider gaps and gap-closing speeds - i.e. since $L \rightarrow \frac{L}{\gamma}$ from the train to the ground frame, the time it takes for the ball to traverse the train in $S$ is $$t=\frac{L}{\gamma (w-v)}$$Another expression can be obtained by examining times instead of lengths. Instantiate two clocks at rest in $S'$ at the front and back of the train, synchronising so that in $S'$, the ball is released when both clocks hit 0. It takes $\frac{L}{u}$ seconds in the ground frame for the ball to traverse the length - hence the final clock must read $\frac{L}{u}$, since the reading of a clock when an event happens *at it* is frame independent.
However, taking into account the offset reading on the front clock ($-\frac{Lv}{c^2}$), we obtain the final observed time in $S$ looking at the front clock as $$t=\gamma\left(\frac{L}{u}+\frac{Lv}{c^2}\right)$$
Equating,
$$\begin{align}\frac{L}{\gamma(V-v)}&=\gamma\left(\frac{L}{u}+\frac{Lv}{c^2}\right)\\ \frac{1}{\gamma^2} \frac{1}{V-v} &= \frac{1}{u}+\frac{v}{c^2}\\ V &= v+ \left(1-\frac{v^2}{c^2}\right)\cdot \frac{1}{\frac{1}{u}+\frac{v}{c^2}} \\ &= \frac{1-\frac{v^2}{c^2}+\frac{v}{u}+\frac{v^2}{c^2}}{\frac{1}{u}+\frac{v}{c^2}}\\ &= \frac{1+\frac{v}{u}}{\frac{1}{u}+\frac{v}{c^2}}\\ &= \boxed{\frac{u+v}{1+uv}}\end{align}$$
where I have decided to switch to natural units at the very last step for no reason (implied $\frac{uv}{c^2}$ via dimensional analysis).

In fact, if we define $\beta_v = \dfrac{v}{c}$, we have $\beta = \dfrac{\beta_u+\beta_v}{1+\beta_u\beta_v}$.

To verify, we'll check important properties that should satisfy:
1. When $u,v \ll c$, $\beta_u\beta_v \rightarrow 0$ and you get $w = u+v$ which is the non-relativistic velocity addition formula as desired.
2. When $u=v=c$, $w=c$ as expected since the speed of light is invariant across reference shifts.
3. The above result is symmetric in $u, v$; this holds up via the first postulate of relativity (i.e. all inertial frames are equivalent) - so frame of $U$ sees frame of $V$ the same way that frame of $V$ sees frame of $U$.
## Problems
#### Equal Speeds I
$A$ and $B$ travel in the ground frame rightwards with $v_A = \frac{4}{5}c$ and $v_B=\frac{3}{5}c$. How fast should person $C$ travel such that in their frame $A$ and $B$ approach at equal speeds, and what is this equal speed?
##### Solution
Set ground frame velocity $v_C$ rightwards and switch to natural units ($v\coloneqq\beta$). Then we have that
$$v'_A=\frac{v_A-v_C}{1-v_Av_C}=-v'_B=\frac{v_C-v_B}{1-v_Bv_C}$$
Simple algebra yields that $(5v_C-7)(7v_C-5)=0$, of which we take $v_C=\frac{5}{7}$ since $v_C=\frac{7}{5}>1$. Hence the speed $C$ adopts in the ground frame is $\frac{5}{7}c$, and in $C$'s frame $A$ and $B$ move with speed $v'_A=-v'_B=\frac{1}{5}c$.
#### Equal Speeds II
$A$ travels rightward with speed $v$ towards person $B$ at rest, all in the ground frame. How fast should $C$ (standing between $A$ and $B$) travel rightwards such that they see $A$ and $B$ approach at equal speeds in their frame? What is the ratio of distances $BC:AC$ in the ground frame?
##### Solution
Set $u$ to be the equal speed which $A$ and $B$ move at in $C$'s frame. Then, $v_C=u$ in the ground frame also. Moving from $C$'s frame into ground frame:
$$v=\frac{u+u}{1+u^2}\implies vu^2-2u+v=0 \implies u=\frac{1-\gamma^{-1}}{v}$$, where if you are scared we can add back in the $c$'s dimensionally to obtain $u=\frac{c^2(1-\gamma^{-1})}{v}$.

In $C$'s frame, $A$ and $B$ collide at $x=0$ simultaneously. This is a frame independent event since the rear-clock effect vanishes to 0 ($\frac{Lv}{c^2}\Big |_{L=0}=0$). Hence in ground frame $C$ and $A$ both collide with $B$ simultaneously. Hence, $\frac{BC}{AC}=\frac{v_C-v_B}{v_A-v_C}$. Doing some trivial algebra yields that $\frac{BC}{AC}=\gamma$. Nice-ish.