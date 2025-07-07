---
layout: post
title: Special Relativity - Rapidity and Acceleration
date: 2025-02-03
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Invariant Interval]]; **Next**: [[Energy and Momentum]]
___
## Rapidity

Define $\phi$ as rapidity where $\tanh \phi=v$. Note that the velocity addition formula then reduces to
$$\tanh\phi'=\tanh (\phi_1+\phi_2)$$
Similarly, scaling by $\gamma$ results in nice properties:
$$\gamma = \frac{1}{\sqrt{1-v^2}}=\frac{1}{\sqrt{1-\tanh^2 \phi}}=\cosh\phi\implies\gamma v=\cosh\phi\tanh\phi=\sinh\phi$$
The Lorentz transform in terms of rapidity can be written as
$$\begin{bmatrix}x\\t\end{bmatrix}=\begin{bmatrix}\cosh \phi & \sinh \phi \\
\sinh \phi & \cosh \phi\end{bmatrix}\begin{bmatrix}x'\\t'\end{bmatrix}$$
If the previous $(\Delta s)^2=(\Delta t)^2-(\Delta x)^2$ didn't convince that Lorentz transforms are just hyperbolic rotations, this definitely should.
## Acceleration

If a frame has proper acceleration $a$, then consider the frame $S$ at time $t$ as measured by itself and the frame $S'$ at time $t+ dt$ (in frame $S$) - the frame $S'$ has speed $v' = a \, dt$ as observed by frame $S$.

We can apply the velocity addition formula - let $v(t)$ be the lab velocity of frame $S$ at time $t$ - then:
$$v(t+dt)=\frac{v(t)+a\cdot dt}{1+v(t)\cdot a \cdot dt}$$
or rather that
$$v+dv=\frac{(v+a\cdot dt)(1-v\cdot a\cdot dt)}{1-(v\cdot a \cdot dt)^2}=v-v^2\cdot a\cdot dt+a\cdot dt$$
since second-order terms $dt^2\to0$. Simplifying and solving the separable ODE:
$$v+dv=a\cdot dt(1-v^2)\implies dv=\frac{a}{\gamma^2}\cdot dt \implies \int_0^v \frac{\mathrm dv}{1-v^2}=\int_0^ta\,\mathrm dt$$
and doing basic integration,
$$\tanh^{-1}v=\int_0^t a(t)\,\mathrm dt\implies v=\tanh\left(\int_0^t a(t)\,\mathrm dt\right)$$
which can be returned back into non-natural units using dimensional analysis:
$$\boxed{v=c\tanh\left(\frac{1}{c}\int_0^ta(t)\,\mathrm dt \right)}$$
And this gives us an expression for the rapidity of an accelerating object:
$$\phi=\frac{1}{c}\int_0^ta(t)\,\mathrm dt$$
> [!note]
> In the derivation we have used $t$ to be the time in the accelerating frame (i.e. proper time).
## Problems
#### Time in Lab
An object with constant proper acceleration $a$ starts accelerating when $t=0$ in lab frame, and $t'=0$ (its own frame). At some point, the lab measures the object's clock to be $t'$ - how much time has elapsed in lab (i.e. what does the clock read in lab)?
##### Solution
We know that $$v(t')=\tanh \left( \int_0^{t'} a\,\mathrm dt \right)$$and since in lab, $dt=\gamma dt'$, we have that $$t=\int_0^tdt=\int_0^{t'}\frac{dt'}{\gamma}=\int_0^{t'}\frac{dt'}{\sqrt{1-\tanh^2(at')}}=\int_0^{t'}\cosh(at')\,\mathrm dt'=\boxed{\frac{1}{a}\sinh(at')}$$which is a nice result.
#### Speed in Lab
Same setup with the constant acceleration object. Find the speed of the object at time $t$ in the lab frame.
##### Solution
It's the same derivation, except you sub $dt=\gamma dt'$ and therefore get that $$\frac{dv}{dt}=\frac{a}{\gamma^3}$$and doing basic maths you obtain
$$v = \frac{at}{\sqrt{1+(at)^2}}$$