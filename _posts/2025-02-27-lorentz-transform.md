---
layout: post
title: SR 1.3 - Lorentz Transformation
tags: [SR, Notes]
---

## Derivation

Consider a frame <span class="inline-math">$S'$</span> moving at some speed <span class="inline-math">$v$</span> in the positive x direction relative to another frame <span class="inline-math">$S$</span>. We aim to find a transformation such that we can write coordinates <span class="inline-math">$(x,t)$</span> in <span class="inline-math">$S$</span> in terms of <span class="inline-math">$(x',t')$</span> in <span class="inline-math">$S'$</span>. Specifically, 
<div>
$$\Delta x=f_x(\Delta x',\Delta t'),\, \Delta t=f_t(\Delta x',\Delta t')$$
</div>
for a pair of functions <span class="inline-math">$f_x, f_t$</span>. These functions must satisfy a number of properties for specific reasons:
1. Must be of form <span class="inline-math">$f(\Delta x',\Delta t')= C_1 g_1(\Delta x') + C_2 g_2(\Delta t')$</span> for constants <span class="inline-math">$C_1,C_2$</span>. The constant assumption arises from homogenous space; if not constant, some <span class="inline-math">$\Delta x'_1 = [a_s, a_e]$</span> would be distinguishable from <span class="inline-math">$\Delta x_2' = [b_s, b_e]$</span> (or <span class="inline-math">$\Delta t'$</span>).
2. Must be homogenous in <span class="inline-math">$\Delta x'$</span> and <span class="inline-math">$\Delta t'$</span>; this is because if <span class="inline-math">$\Delta x' = v' \Delta t'$</span> then <span class="inline-math">$\Delta x = v \Delta t$</span> - i.e. non-accelerating motion remains non-accelerating across frame shift; the only way this can occur is if <span class="inline-math">$\Delta x'$</span> and <span class="inline-math">$\Delta t'$</span> have the same power.
3. Must be linear in <span class="inline-math">$\Delta x'$</span> and <span class="inline-math">$\Delta t'$</span> - when <span class="inline-math">$v = 0$</span> we should obtain <span class="inline-math">$\Delta x = \Delta x'$</span> and <span class="inline-math">$\Delta t = \Delta t'$</span>.

We can then write out the effects which we know in terms of <span class="inline-math">$x,t,x',t'$</span>:
1. Rear-Clock Effect: <span class="inline-math">$\Delta t=0\implies \Delta t'=-\frac{v\Delta x'}{c^2}$</span>.
2. Time Dilation: <span class="inline-math">$\Delta x' = 0 \implies \Delta t = \gamma \Delta t'$</span>.
3. Length Contraction: <span class="inline-math">$\Delta t' = 0 \implies \Delta x = \frac{\Delta x'}{\gamma}$</span>.
4. Velocity Observation: <span class="inline-math">$\Delta x=0 \implies \Delta x' = -v\Delta t'$</span>

Can write all of these in alternate forms by switching frames (i.e. <span class="inline-math">$\Delta x \leftrightarrow \Delta x'$</span> etc.) but written like this to find the constants <span class="inline-math">$C_1,C_2,C_3,C_4$</span> in the transform: 
<div>
$$\Delta x = C_1\Delta x' + C_2 \Delta t' ,\, \Delta t = C_3\Delta x' + C_4 \Delta t'$$
</div>
We get pretty quickly that <span class="inline-math">$C_1=\gamma, C_2=\gamma v,C_3=\frac{\gamma v}{c^2},C_4=\gamma$</span>, or that 
<div>
$$\begin{align}\Delta x &= \gamma(\Delta x' + v\Delta t') \\ \Delta t &= \gamma\left( \frac{v}{c^2}\Delta x' + \Delta t' \right)\end{align}$$
</div>

## Properties

1. When <span class="inline-math">$v \ll c$</span>, <span class="inline-math">$\gamma \rightarrow 1$</span> so the transformations reduce to 
<div>
$$x=x'+vt', \, t=t'$$
</div>
which are the Galilean transformations referred to earlier (N.B. An additional requirement is that <span class="inline-math">$\frac{v}{c^2}x'\ll t'$</span> for the time transformation to reduce).
2. Working in natural units we have 
<div>
$$x=\gamma(x'+vt'),\, t=\gamma(vx'+t')$$
</div>
which is nice and symmetric in space and time.
3. The Lorentz transformation can also be represented as a symmetric matrix: 
<div>
$$\begin{bmatrix}x\\t\end{bmatrix}=\begin{bmatrix}\gamma&v\gamma\\ v\gamma&\gamma\end{bmatrix}\begin{bmatrix}x'\\t'\end{bmatrix}\iff \begin{bmatrix}x\\t\end{bmatrix}=\mathbf L \begin{bmatrix}x'\\t'\end{bmatrix}$$
</div>

## Passive Transformation

Lorentz transformation currently introduced maps points in <span class="inline-math">$S'$</span> to corresponding points in <span class="inline-math">$S$</span>. A **passive transformation** looks at mapping the *axes* of <span class="inline-math">$S'$</span> onto the coordinate space of <span class="inline-math">$S$</span> - i.e. where <span class="inline-math">$S'$</span> would lie if superimposed onto <span class="inline-math">$S$</span>.

This can be achieved with basic linear algebra; looking at the Lorentz transform matrix, <span class="inline-math">$\begin{bmatrix}1\\ 0\end{bmatrix}$</span> (in <span class="inline-math">$S'$</span>) maps to <span class="inline-math">$\begin{bmatrix}\gamma\\v\gamma\end{bmatrix}$</span> (in <span class="inline-math">$S$</span>) and <span class="inline-math">$\begin{bmatrix}0\\1\end{bmatrix}$</span> maps to <span class="inline-math">$\begin{bmatrix}v\gamma\\\gamma\end{bmatrix}$</span>. In textbooks which don't use natural units the <span class="inline-math">$ct$</span> axis is introduced (instead of the <span class="inline-math">$t$</span> axis), with the matrix 
<div>
$$\begin{bmatrix}x\\ct\end{bmatrix}=\begin{bmatrix}\gamma&\beta\gamma\\\beta\gamma&\gamma\end{bmatrix}\begin{bmatrix}x'\\ct'\end{bmatrix}$$
</div>

representing the Lorentz transform, and yielding <span class="inline-math">$(1,0)\rightarrow(\gamma,\beta\gamma)$</span>, etc.

It is algebraically obvious that since <span class="inline-math">$\mathbf L$</span> is symmetric, <span class="inline-math">$\tan\theta_1=\tan\theta_2$</span> where <span class="inline-math">$\theta_1,\theta_2$</span> are the angles between the <span class="inline-math">$S'$</span> x/y axes to the <span class="inline-math">$S$</span> x/y axes respectively.
Furthermore, 1 unit on the <span class="inline-math">$S'$</span> axis corresponds to 'distance' 
<div>
$$\sqrt{\gamma^2+\beta^2\gamma^2}=\gamma \sqrt{1+\beta^2}=\boxed{\sqrt{\frac{1+\beta^2}{1-\beta^2}}}$$
</div>
 in the frame of <span class="inline-math">$S$</span>. Passive transformation acts as a method of quickly visualising the matrix transformation.

> For subsequent notes <span class="inline-math">$c=1$</span> unless there is <span class="inline-math">$c$</span> team just check dimensions its not deep

## Problems

#### Twin Paradox I

Consider a person <span class="inline-math">$A$</span> standing at rest a proper distance <span class="inline-math">$L$</span> away from a planet, at rest in their frame. Person <span class="inline-math">$B$</span> is person <span class="inline-math">$A$</span>'s twin, and starts beside <span class="inline-math">$A$</span> with the same age. They start travelling toward the distant planet with speed <span class="inline-math">$v$</span> measured in <span class="inline-math">$A$</span>'s frame - when they reach the planet they turn back and travel towards <span class="inline-math">$A$</span> with the same speed <span class="inline-math">$v$</span>. Who is younger when the two meet again?

##### Solution

There are in reality 3 frames - planet frame (<span class="inline-math">$A$</span>), <span class="inline-math">$B$</span> forward frame (<span class="inline-math">$B_1$</span>), and <span class="inline-math">$B$</span> returning frame (<span class="inline-math">$B_2$</span>). On the journey ahead we have transformation information about <span class="inline-math">$A,B_1$</span> and on the journey back we have information about <span class="inline-math">$A,B_2$</span>, so we'll project all time information from <span class="inline-math">$A$</span> to <span class="inline-math">$B$</span> frames.

In <span class="inline-math">$A$</span>, create events representing <span class="inline-math">$B$</span> reaching the planet at <span class="inline-math">$\left( L, \frac{L}{v} \right)$</span> and <span class="inline-math">$B$</span> coming home at <span class="inline-math">$\left( 0, \frac{2L}{v} \right)$</span>. The first event has corresponding coordinates in <span class="inline-math">$B_1$</span> given by

<div>
$$
\begin{align}
x &= \gamma(x'-vt') \\
t &= \gamma(-vx'+t')
\end{align}

\implies
\left( L, \frac{L}{v} \right) \rightarrow \left( 0,\frac{L\gamma}{v}-Lv\gamma \right)
$$
</div>

 and so elapsed time is <span class="inline-math">$T_1=\frac{L\gamma}{v}-Lv\gamma = \frac{Lv}{\gamma}$</span>.

Switching between <span class="inline-math">$B_1$</span> and <span class="inline-math">$B_2$</span> sees a shift in the planes of simultaneity; in <span class="inline-math">$B_2$</span> the event is 
<div>
$$\left( L, \frac{L}{v} \right) \to \left( 2L\gamma, \frac{L\gamma}{v} + Lv\gamma \right)$$
</div>

Note there is no extra elapsed 'time' of <span class="inline-math">$2Lv\gamma$</span> on <span class="inline-math">$B$</span>'s clock. The instantaneous gain of time resulting from changing planes of simultaneity goes unnoticed on <span class="inline-math">$B$</span>'s clock - precisely the resolution to the paradox. The home event in <span class="inline-math">$B_2$</span> is 
<div>
$$\left( 0, \frac{2L}{v} \right) \to \left( 2L\gamma, \frac{2L\gamma}{v} \right)$$
</div>
which is a time <span class="inline-math">$T_2=\frac{2L\gamma}{v}- \frac{L\gamma}{v} - Lv\gamma= \frac{L\gamma}{v}-Lv\gamma= \frac{Lv}{\gamma}$</span> longer. Hence, the reading on <span class="inline-math">$B$</span>'s clock is <span class="inline-math">$T_1+T_2=\frac{2L}{v\gamma}$</span> as desired, aging less than <span class="inline-math">$A$</span> by a factor of <span class="inline-math">$\gamma$</span>.

#### Transverse Velocity Addition

Given an object travelling in frame <span class="inline-math">$S'$</span> with a velocity of <span class="inline-math">$\mathbf u'$</span>, with <span class="inline-math">$S'$</span> moving at a speed <span class="inline-math">$v$</span> (positive x-axis) in frame <span class="inline-math">$S$</span>, it cannot be said that the observed velocity <span class="inline-math">$\mathbf u$</span> of the object in <span class="inline-math">$S$</span> is <span class="inline-math">$(u'_x+v)\hat i+u'_y \hat j$</span>. Find <span class="inline-math">$u_x$</span> and <span class="inline-math">$u_y$</span> as expressions in <span class="inline-math">$u'_x,u'_y,v$</span>.

##### Solution

The Lorentz transformations in two dimensions for <span class="inline-math">$v$</span> aligned with x-axis are:

<div>
$$
\begin{align}
\Delta x &= \gamma(\Delta x'+v\Delta t') \\
\Delta t &= \gamma(v\Delta x'+\Delta t') \\
\Delta y &= \Delta y'
\end{align}
$$
</div>

So we have that <span class="inline-math">$u'_x=\frac{x'}{t'}$</span>, <span class="inline-math">$u'_y=\frac{y'}{t'}$</span> and we wish to find <span class="inline-math">$\mathbf u = \frac{x}{t} \hat{i} + \frac{y}{t} \hat{j}$</span>.

<div>
$$u_x=\frac{x}{t}=\frac{\gamma(x'+vt')}{\gamma(vx'+t')}=\frac{\frac{x'}{t'}+v}{v\frac{x'}{t'}+1}=\frac{u_x+v}{1+u_xv}$$
</div>
which is the standard longitudinal velocity addition formula. For transverse,

<div>
$$u_y=\frac{y}{t}=\frac{y'}{\gamma(vx'+t')}=\frac{\frac{y'}{t'}}{\gamma\left( v \frac{x'}{t'}+1 \right)}=\frac{u_y}{\gamma(1+u_xv)}$$
</div>
which is the desired transverse velocity addition formula.
