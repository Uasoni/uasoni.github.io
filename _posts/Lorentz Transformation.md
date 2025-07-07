---
layout: post
title: Special Relativity - Lorentz Transformation
date: 2025-02-03
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Velocity Addition]]; **Next**: [[Minkowski Diagrams]]
___
## Derivation

Consider a frame $S'$ moving at some speed $v$ in the positive x direction relative to another frame $S$. We aim to find a transformation such that we can write coordinates $(x,t)$ in $S$ in terms of $(x',t')$ in $S'$. Specifically, $$\Delta x=f_x(\Delta x',\Delta t'),\, \Delta t=f_t(\Delta x',\Delta t')$$for a pair of functions $f_x, f_t$. These functions must satisfy a number of properties for specific reasons:
1. Must be of form $f(\Delta x',\Delta t')= C_1 g_1(\Delta x') + C_2 g_2(\Delta t')$ for constants $C_1,C_2$. The constant assumption arises from homogenous space; if not constant, some $\Delta x'_1 = [a_s, a_e]$ would be distinguishable from $\Delta x_2' = [b_s, b_e]$ (or $\Delta t'$).
2. Must be homogenous in $\Delta x'$ and $\Delta t'$; this is because if $\Delta x' = v' \Delta t'$ then $\Delta x = v \Delta t$ - i.e. non-accelerating motion remains non-accelerating across frame shift; the only way this can occur is if $\Delta x'$ and $\Delta t'$ have the same power.
3. Must be linear in $\Delta x'$ and $\Delta t'$ - when $v = 0$ we should obtain $\Delta x = \Delta x'$ and $\Delta t = \Delta t'$.

We can then write out the effects which we know in terms of $x,t,x',t'$:
1. Rear-Clock Effect: $\Delta t=0\implies \Delta t'=-\frac{v\Delta x'}{c^2}$.
2. Time Dilation: $\Delta x' = 0 \implies \Delta t = \gamma \Delta t'$.
3. Length Contraction: $\Delta t' = 0 \implies \Delta x = \frac{\Delta x'}{\gamma}$.
4. Velocity Observation: $\Delta x=0 \implies \Delta x' = -v\Delta t'$

Can write all of these in alternate forms by switching frames (i.e. $\Delta x \leftrightarrow \Delta x'$ etc.) but written like this to find the constants $C_1,C_2,C_3,C_4$ in the transform: $$\Delta x = C_1\Delta x' + C_2 \Delta t' ,\, \Delta t = C_3\Delta x' + C_4 \Delta t'$$We get pretty quickly that $C_1=\gamma, C_2=\gamma v,C_3=\frac{\gamma v}{c^2},C_4=\gamma$, or that $$\begin{align}\Delta x &= \gamma(\Delta x' + v\Delta t') \\ \Delta t &= \gamma\left( \frac{v}{c^2}\Delta x' + \Delta t' \right)\end{align}$$
## Properties

1. When $v \ll c$, $\gamma \rightarrow 1$ so the transformations reduce to $$x=x'+vt', \, t=t'$$which are the Galilean transformations referred to earlier (N.B. An additional requirement is that $\frac{v}{c^2}x'\ll t'$ for the time transformation to reduce).
2. Working in natural units we have $$x=\gamma(x'+vt'),\, t=\gamma(vx'+t')$$which is nice and symmetric in space and time.
3. The Lorentz transformation can also be represented as a symmetric matrix: $$\begin{bmatrix}x\\t\end{bmatrix}=\begin{bmatrix}\gamma&v\gamma\\ v\gamma&\gamma\end{bmatrix}\begin{bmatrix}x'\\t'\end{bmatrix}\iff \begin{bmatrix}x\\t\end{bmatrix}=\mathbf L \begin{bmatrix}x'\\t'\end{bmatrix}$$
## Passive Transformation

Lorentz transformation currently introduced maps points in $S'$ to corresponding points in $S$. A **passive transformation** looks at mapping the *axes* of $S'$ onto the coordinate space of $S$ - i.e. where $S'$ would lie if superimposed onto $S$.

This can be achieved with basic linear algebra; looking at the Lorentz transform matrix, $\begin{bmatrix}1\\0\end{bmatrix}$ (in $S'$) maps to $\begin{bmatrix}\gamma\\v\gamma\end{bmatrix}$ (in $S$) and $\begin{bmatrix}0\\1\end{bmatrix}$ maps to $\begin{bmatrix}v\gamma\\\gamma\end{bmatrix}$. In textbooks which don't use natural units the $ct$ axis is introduced (instead of the $t$ axis), with the matrix $$\begin{bmatrix}x\\ct\end{bmatrix}=\begin{bmatrix}\gamma&\beta\gamma\\\beta\gamma&\gamma\end{bmatrix}\begin{bmatrix}x'\\ct'\end{bmatrix}$$
representing the Lorentz transform, and yielding $(1,0)\rightarrow(\gamma,\beta\gamma)$, etc.

It is algebraically obvious that since $\mathbf L$ is symmetric, $\tan\theta_1=\tan\theta_2$ where $\theta_1,\theta_2$ are the angles between the $S'$ x/y axes to the $S$ x/y axes respectively.
Furthermore, 1 unit on the $S'$ axis corresponds to 'distance' $$\sqrt{\gamma^2+\beta^2\gamma^2}=\gamma \sqrt{1+\beta^2}=\boxed{\sqrt{\frac{1+\beta^2}{1-\beta^2}}}$$ in the frame of $S$. Passive transformation acts as a method of quickly visualising the matrix transformation.

> [!note]
> For subsequent notes $c=1$ unless there is $c$ team just check dimensions its not deep
## Problems
#### Twin Paradox I
Consider a person $A$ standing at rest a proper distance $L$ away from a planet, at rest in their frame. Person $B$ is person $A$'s twin, and starts beside $A$ with the same age. They start travelling toward the distant planet with speed $v$ measured in $A$'s frame - when they reach the planet they turn back and travel towards $A$ with the same speed $v$. Who is younger when the two meet again?
##### Solution
There are in reality 3 frames - planet frame ($A$), $B$ forward frame ($B_1$), and $B$ returning frame ($B_2$). On the journey ahead we have transformation information about $A,B_1$ and on the journey back we have information about $A,B_2$, so we'll project all time information from $A$ to $B$ frames.

In $A$, create events representing $B$ reaching the planet at $\left( L, \frac{L}{v} \right)$ and $B$ coming home at $\left( 0, \frac{2L}{v} \right)$. The first event has corresponding coordinates in $B_1$ given by
$$
\begin{align}
x &= \gamma(x'-vt') \\
t &= \gamma(-vx'+t')
\end{align}

\implies
\left( L, \frac{L}{v} \right) \rightarrow \left( 0,\frac{L\gamma}{v}-Lv\gamma \right)
$$
 and so elapsed time is $T_1=\frac{L\gamma}{v}-Lv\gamma = \frac{Lv}{\gamma}$.

Switching between $B_1$ and $B_2$ sees a shift in the planes of simultaneity; in $B_2$ the event is $$\left( L, \frac{L}{v} \right) \to \left( 2L\gamma, \frac{L\gamma}{v} + Lv\gamma \right)$$ - note there is no extra elapsed 'time' of $2Lv\gamma$ on $B$'s clock. The instantaneous gain of time resulting from changing planes of simultaneity goes unnoticed on $B$'s clock - precisely the resolution to the paradox. The home event in $B_2$ is $$\left( 0, \frac{2L}{v} \right) \to \left( 2L\gamma, \frac{2L\gamma}{v} \right)$$which is a time $T_2=\frac{2L\gamma}{v}- \frac{L\gamma}{v} - Lv\gamma= \frac{L\gamma}{v}-Lv\gamma= \frac{Lv}{\gamma}$ longer. Hence, the reading on $B$'s clock is $T_1+T_2=\frac{2L}{v\gamma}$ as desired, aging less than $A$ by a factor of $\gamma$.
#### Transverse Velocity Addition
Given an object travelling in frame $S'$ with a velocity of $\mathbf u'$, with $S'$ moving at a speed $v$ (positive x-axis) in frame $S$, it cannot be said that the observed velocity $\mathbf u$ of the object in $S$ is $(u'_x+v)\hat i+u'_y \hat j$. Find $u_x$ and $u_y$ as expressions in $u'_x,u'_y,v$.
##### Solution
The Lorentz transformations in two dimensions for $v$ aligned with x-axis are:
$$
\begin{align}
\Delta x &= \gamma(\Delta x'+v\Delta t') \\
\Delta t &= \gamma(v\Delta x'+\Delta t') \\
\Delta y &= \Delta y'
\end{align}
$$
So we have that $u'_x=\frac{x'}{t'}$, $u'_y=\frac{y'}{t'}$ and we wish to find $\mathbf u = \frac{x}{t} \hat{i} + \frac{y}{t} \hat{j}$.
$$u_x=\frac{x}{t}=\frac{\gamma(x'+vt')}{\gamma(vx'+t')}=\frac{\frac{x'}{t'}+v}{v\frac{x'}{t'}+1}=\frac{u_x+v}{1+u_xv}$$which is the standard longitudinal velocity addition formula. For transverse,
$$u_y=\frac{y}{t}=\frac{y'}{\gamma(vx'+t')}=\frac{\frac{y'}{t'}}{\gamma\left( v \frac{x'}{t'}+1 \right)}=\frac{u_y}{\gamma(1+u_xv)}$$which is the desired transverse velocity addition formula.