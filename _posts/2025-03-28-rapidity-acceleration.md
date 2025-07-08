---
layout: post
title: SR 1.6 - Rapidity and Acceleration
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Invariant Interval]]; **Next**: [[Energy and Momentum]]
___

## Rapidity

Define <span class="inline-math">$\phi$</span> as rapidity where <span class="inline-math">$\tanh \phi=v$</span>. Note that the velocity addition formula then reduces to

<div>
$$\tanh\phi'=\tanh (\phi_1+\phi_2)$$
</div>

Similarly, scaling by <span class="inline-math">$\gamma$</span> results in nice properties:

<div>
$$\gamma = \frac{1}{\sqrt{1-v^2}}=\frac{1}{\sqrt{1-\tanh^2 \phi}}=\cosh\phi\implies\gamma v=\cosh\phi\tanh\phi=\sinh\phi$$
</div>

The Lorentz transform in terms of rapidity can be written as

<div>
$$\begin{bmatrix}x\\t\end{bmatrix}=\begin{bmatrix}\cosh \phi & \sinh \phi \\
\sinh \phi & \cosh \phi\end{bmatrix}\begin{bmatrix}x'\\t'\end{bmatrix}$$
</div>

If the previous <span class="inline-math">$(\Delta s)^2=(\Delta t)^2-(\Delta x)^2$</span> didn't convince that Lorentz transforms are just hyperbolic rotations, this definitely should.

## Acceleration

If a frame has proper acceleration <span class="inline-math">$a$</span>, then consider the frame <span class="inline-math">$S$</span> at time <span class="inline-math">$t$</span> as measured by itself and the frame <span class="inline-math">$S'$</span> at time <span class="inline-math">$t+ dt$</span> (in frame <span class="inline-math">$S$</span>) - the frame <span class="inline-math">$S'$</span> has speed <span class="inline-math">$v' = a \, dt$</span> as observed by frame <span class="inline-math">$S$</span>.

We can apply the velocity addition formula - let <span class="inline-math">$v(t)$</span> be the lab velocity of frame <span class="inline-math">$S$</span> at time <span class="inline-math">$t$</span> - then:

<div>
$$v(t+dt)=\frac{v(t)+a\cdot dt}{1+v(t)\cdot a \cdot dt}$$
</div>

or rather that

<div>
$$v+dv=\frac{(v+a\cdot dt)(1-v\cdot a\cdot dt)}{1-(v\cdot a \cdot dt)^2}=v-v^2\cdot a\cdot dt+a\cdot dt$$
</div>

since second-order terms <span class="inline-math">$dt^2\to0$</span>. Simplifying and solving the separable ODE:

<div>
$$v+dv=a\cdot dt(1-v^2)\implies dv=\frac{a}{\gamma^2}\cdot dt \implies \int_0^v \frac{\mathrm dv}{1-v^2}=\int_0^ta\,\mathrm dt$$
</div>

and doing basic integration,

<div>
$$\tanh^{-1}v=\int_0^t a(t)\,\mathrm dt\implies v=\tanh\left(\int_0^t a(t)\,\mathrm dt\right)$$
</div>

which can be returned back into non-natural units using dimensional analysis:

<div>
$$\boxed{v=c\tanh\left(\frac{1}{c}\int_0^ta(t)\,\mathrm dt \right)}$$
</div>

And this gives us an expression for the rapidity of an accelerating object:

<div>
$$\phi=\frac{1}{c}\int_0^ta(t)\,\mathrm dt$$
</div>

> In the derivation we have used <span class="inline-math">$t$</span> to be the time in the accelerating frame (i.e. proper time).

## Problems

#### Time in Lab

An object with constant proper acceleration <span class="inline-math">$a$</span> starts accelerating when <span class="inline-math">$t=0$</span> in lab frame, and <span class="inline-math">$t'=0$</span> (its own frame). At some point, the lab measures the object's clock to be <span class="inline-math">$t'$</span> - how much time has elapsed in lab (i.e. what does the clock read in lab)?

##### Solution

We know that 
<div>
$$v(t')=\tanh \left( \int_0^{t'} a\,\mathrm dt \right)$$
</div>
and since in lab, <span class="inline-math">$dt=\gamma dt'$</span>, we have that 
<div>
$$t=\int_0^tdt=\int_0^{t'}\frac{dt'}{\gamma}=\int_0^{t'}\frac{dt'}{\sqrt{1-\tanh^2(at')}}=\int_0^{t'}\cosh(at')\,\mathrm dt'=\boxed{\frac{1}{a}\sinh(at')}$$
</div>
which is a nice result.

#### Speed in Lab

Same setup with the constant acceleration object. Find the speed of the object at time <span class="inline-math">$t$</span> in the lab frame.

##### Solution

It's the same derivation, except you sub <span class="inline-math">$dt=\gamma dt'$</span> and therefore get that 
<div>
$$\frac{dv}{dt}=\frac{a}{\gamma^3}$$
</div>
and doing basic maths you obtain

<div>
$$v = \frac{at}{\sqrt{1+(at)^2}}$$
</div>
