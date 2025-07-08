---
layout: post
title: SR 1.5 - Invariant Interval
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Minkowski Diagrams]]; **Next**: [[Rapidity and Acceleration]]
___

## Minkowski Distance

Distance on the Minkowski diagram (using <span class="inline-math">$x$</span> and <span class="inline-math">$ct$</span> axes) is given by 
<div>
$$(\Delta s)^2=(c\Delta t)^2-(\Delta x)^2$$
</div>
and is invariant on hyperbolic rotation. An analogy is the Euclidean metric, where distance is measured as 
<div>
$$(\Delta s)^2=(\Delta x)^2+(\Delta y)^2$$
</div>
and is invariant on circle (?) rotation. Turns out Minkowski spaces and Lorentz transforms have a lot to do with hyperbolic geometry (e.g. events in frame <span class="inline-math">$S'$</span> trace out a hyperbola in frame <span class="inline-math">$S$</span> when varying <span class="inline-math">$\gamma_{S'}$</span>, rapidity defined via <span class="inline-math">$\tanh \phi = \beta$</span> comes with nice properties, etc.)

### Proof

Can be proved by just inserting a dummy Lorentz transform (i.e. a hyperbolic rotation). Natural units are adopted and <span class="inline-math">$\Delta$</span> is dropped for notational convenience (<span class="inline-math">$s^2=x^2-t^2$</span>):

<div>
$$
\begin{align}
s^2&=-x^2+t^2\\
&=-\gamma^2(x'+vt')^2+\gamma^2(vx'+t')^2\\
&=\gamma^2(-(x')^2-2vx't'-(vt')^2+(vx')^2+2vx't'+(t')^2)\\
&=\gamma^2(-(1-v^2)(x')^2+(1-v^2)(t')^2)\\
&=-(x')^2+(t')^2 = (s')^2
\end{align}
$$
</div>

as desired.

> The three dimensional invariant interval (space-time interval) is given by
> 
<div>
$$s^2=t^2-x^2-y^2-z^2$$
</div>

> omitting <span class="inline-math">$\Delta$</span>. Generally, the metric is called the *Minkowski metric*,
> 
<div>
$$(\eta)_{\alpha \beta} \equiv\begin{bmatrix}-1 & 0 & 0 & 0\\0 & 1 & 0 & 0\\0 & 0 & 1 & 0\\0 & 0 & 0 & 1\end{bmatrix}$$
</div>

> where <span class="inline-math">$x^0\coloneqq t,(x^1,x^2,x^3)\coloneqq (x,y,z)$</span>.

## Corollaries

### Characterisation of Event Pairs

For some reason textbooks look at these three regions below:

<div style="text-align:center">
  <img src="/assets/images/separation_invariant.png" alt="separation_invariant.png" width="400px" />
</div>

Pretty much if you set the origin to be an event, you can characterise any other event as time-like separated (<span class="inline-math">$(\Delta s)^2>0$</span>), space-like separated (<span class="inline-math">$(\Delta s)^2<0$</span>), or light-like separated (<span class="inline-math">$(\Delta s)^2=0$</span>).

### Time-Like (<span class="inline-math">$s^2 > 0$</span>)

When <span class="inline-math">$s^2>0$</span>, <span class="inline-math">$x^2<(ct)^2$</span>, or more intuitively, <span class="inline-math">$\left| \frac{x}{t} \right|<c$</span>. This means that there exists a frame <span class="inline-math">$S'$</span> which can move at a valid speed <span class="inline-math">$v < c$</span> such that the two events happen at the same location in <span class="inline-math">$S'$</span>. This statement is equivalent to saying there is a line with slope <span class="inline-math">$>1$</span> which passes through both points in <span class="inline-math">$S$</span> (the line corresponds to a vertical line in <span class="inline-math">$S'$</span>).

When <span class="inline-math">$x'=0$</span> (i.e. in said frame <span class="inline-math">$S'$</span> which sees the events at the same location),
<div>
$$s^2=(ct')^2-(x')^2=(ct')^2\implies ct'=|s|=\sqrt{s^2}$$
</div>
so the time separation between the events is <span class="inline-math">$\frac{|s|}{c}$</span>. This is the *proper time* between the events, since it is observed stationary in a frame.

### Space-Like (<span class="inline-math">$s^2<0$</span>)

How can <span class="inline-math">$s^2 < 0$</span>? I guess <span class="inline-math">$s\in \mathbb C$</span> now. Either way, it means <span class="inline-math">$\left|\frac{x}{t}\right|>c$</span>. This means there exists a frame <span class="inline-math">$S'$</span> which can move at <span class="inline-math">$v < c$</span> such that the two events happen simultaneously in <span class="inline-math">$S'$</span>. This statement is equivalent to saying there is a line with slope <span class="inline-math">$< 1$</span> which passes through both points in <span class="inline-math">$S$</span> (corresponding to horizontal line in <span class="inline-math">$S'$</span>).

When <span class="inline-math">$t'=0$</span> (i.e. in said frame <span class="inline-math">$S'$</span> which sees the events simultaneously), 
<div>
$$s^2=(ct')^2-(x')^2=-(x')^2\implies x'=|s|=\sqrt{-s^2}$$
</div>
so the spatial separation between the events is the magnitude of complex number <span class="inline-math">$s$</span>. This is the *proper length*, since it is observed in a frame of simultaneity (i.e. it lies on the x axis).

### Light-Like (<span class="inline-math">$s^2=0$</span>)

It's separated like light. <span class="inline-math">$\left|\frac{x}{t}\right|=c$</span>. There are no frames <span class="inline-math">$S'$</span> where <span class="inline-math">$x'=0$</span> or <span class="inline-math">$t'=0$</span> since that would imply <span class="inline-math">$v=c$</span>.

## Proper Time, Properly

For a set of time-like separated events with spacetime interval <span class="inline-math">$\Delta s$</span>, proper time can be measured as <span class="inline-math">$c\Delta\tau=|\Delta s'|=|\Delta s|$</span>, where <span class="inline-math">$s'$</span> is the spacetime interval in a "here" frame. Can figure out proper time for a general object by adding small 'bits' of it along an object's worldline (treating it as a set of events). Specifically,

<div>
$$
\begin{align}
(ds)^2&=(c\cdot dt)^2-(dx)^2 \\
\implies c^2(d\tau)^2 &= (c\cdot dt)^2-(dx)^2 
\end{align}
$$
</div>
 
so naturally

<div>
$$d\tau=\sqrt{\frac{c^2-\frac{dx}{dt}}{c^2}}\,dt=\sqrt{1-\frac{v^2}{c^2}}\,dt=\frac{dt}{\gamma} \implies \tau=\int \frac{\mathrm{d}t}{\gamma}$$
</div>
which is pretty cool.

## Problems

#### Twin Paradox III

Literally the exact same setup again, but solve it by considering the spacetime interval.

##### Solution

Can use the spacetime interval to derive the proper time formulation above - in which case the problem becomes trivial -

<div>
$$t_A=\frac{2L}{v},\, t_B= \tau_B = \int_0^{\frac{L}{v}}\frac{\mathrm dt}{\gamma}+\int_{\frac{L}{v}}^{\frac{2L}{v}}\frac{\mathrm dt}{\gamma}=\frac{2L}{\gamma}=\frac{t_A}{\gamma}$$
</div>

#### Cooked Particle

The velocity of a particle along 1D is given by 
<div>
$$u(t)=\sqrt{1-\frac{1}{\left(kt+1 \right)^2}}$$
</div>
(natural units). Find the proper time of the particle as a function of lab time - i.e. <span class="inline-math">$\tau(t)$</span>, and the position of the particle (in lab frame) as a function of its proper time - i.e. <span class="inline-math">$x(\tau)$</span>.

##### Solution

<div>
$$\frac{1}{\gamma(t)}= \frac{1}{kt+1} \implies \tau = \int \frac{\mathrm dt}{kt+1}=\boxed{\ln|kt+1|}$$
</div>
since at <span class="inline-math">$t=0,\tau=0$</span>. Furthermore,

<div>
$$
\begin{align}
x(t)&=\int_0^t u(t') \,\mathrm dt' \\
&=\int_0^t \sqrt{1-\frac{1}{(kt+1)^2}}\,\mathrm dt \\
&=\frac{1}{k}\left(\sqrt{(kt+1)^2-1}-\sec^{-1}(kt+1)\right) \\
\implies x(\tau)&=\boxed{\frac{1}{k}\left(\sqrt{e^{2k\tau}-1}-\tan^{-1}\sqrt{e^{2k\tau}-1}\right)}
\end{align}
$$
</div>
