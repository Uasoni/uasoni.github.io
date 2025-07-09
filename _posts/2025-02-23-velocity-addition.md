---
layout: post
title: SR 1.2 - Velocity Addition
tags: [SR, Notes]
---

## Toy Problem

In some frame <span class="inline-math">$S$</span>, there exists a frame <span class="inline-math">$S'$</span> moving at speed <span class="inline-math">$v$</span>. In frame <span class="inline-math">$S'$</span>, some object moves at speed <span class="inline-math">$u$</span>. The problem is to find the measured speed of this object in <span class="inline-math">$S$</span>.

## Derivation

As a concretisation, let a train (frame <span class="inline-math">$S'$</span>) move at a speed <span class="inline-math">$v$</span> rightwards as observed by the ground frame (<span class="inline-math">$S$</span>), and a ball is chucked with speed <span class="inline-math">$u$</span> rightwards as observed in the train frame. Let <span class="inline-math">$w$</span> be the answer (i.e. the speed of the ball in <span class="inline-math">$S$</span>).

A possible expression for the time it takes for the ball to traverse the length of the train (proper length <span class="inline-math">$L$</span>) is to consider gaps and gap-closing speeds - i.e. since <span class="inline-math">$L \rightarrow \frac{L}{\gamma}$</span> from the train to the ground frame, the time it takes for the ball to traverse the train in <span class="inline-math">$S$</span> is 
<div>
$$t=\frac{L}{\gamma (w-v)}$$
</div>
Another expression can be obtained by examining times instead of lengths. Instantiate two clocks at rest in <span class="inline-math">$S'$</span> at the front and back of the train, synchronising so that in <span class="inline-math">$S'$</span>, the ball is released when both clocks hit 0. It takes <span class="inline-math">$\frac{L}{u}$</span> seconds in the ground frame for the ball to traverse the length - hence the final clock must read <span class="inline-math">$\frac{L}{u}$</span>, since the reading of a clock when an event happens *at it* is frame independent.
However, taking into account the offset reading on the front clock (<span class="inline-math">$-\frac{Lv}{c^2}$</span>), we obtain the final observed time in <span class="inline-math">$S$</span> looking at the front clock as 
<div>
$$t=\gamma\left(\frac{L}{u}+\frac{Lv}{c^2}\right)$$
</div>

Equating,

<div>
$$\begin{align}\frac{L}{\gamma(V-v)}&=\gamma\left(\frac{L}{u}+\frac{Lv}{c^2}\right)\\ \frac{1}{\gamma^2} \frac{1}{V-v} &= \frac{1}{u}+\frac{v}{c^2}\\ V &= v+ \left(1-\frac{v^2}{c^2}\right)\cdot \frac{1}{\frac{1}{u}+\frac{v}{c^2}} \\ &= \frac{1-\frac{v^2}{c^2}+\frac{v}{u}+\frac{v^2}{c^2}}{\frac{1}{u}+\frac{v}{c^2}}\\ &= \frac{1+\frac{v}{u}}{\frac{1}{u}+\frac{v}{c^2}}\\ &= \boxed{\frac{u+v}{1+uv}}\end{align}$$
</div>

where I have decided to switch to natural units at the very last step for no reason (implied <span class="inline-math">$\frac{uv}{c^2}$</span> via dimensional analysis).

In fact, if we define <span class="inline-math">$\beta_v = \dfrac{v}{c}$</span>, we have <span class="inline-math">$\beta = \dfrac{\beta_u+\beta_v}{1+\beta_u\beta_v}$</span>.

To verify, we'll check important properties that should satisfy:
1. When <span class="inline-math">$u,v \ll c$</span>, <span class="inline-math">$\beta_u\beta_v \rightarrow 0$</span> and you get <span class="inline-math">$w = u+v$</span> which is the non-relativistic velocity addition formula as desired.
2. When <span class="inline-math">$u=v=c$</span>, <span class="inline-math">$w=c$</span> as expected since the speed of light is invariant across reference shifts.
3. The above result is symmetric in <span class="inline-math">$u, v$</span>; this holds up via the first postulate of relativity (i.e. all inertial frames are equivalent) - so frame of <span class="inline-math">$U$</span> sees frame of <span class="inline-math">$V$</span> the same way that frame of <span class="inline-math">$V$</span> sees frame of <span class="inline-math">$U$</span>.

## Problems

#### Equal Speeds I

<span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> travel in the ground frame rightwards with <span class="inline-math">$v_A = \frac{4}{5}c$</span> and <span class="inline-math">$v_B=\frac{3}{5}c$</span>. How fast should person <span class="inline-math">$C$</span> travel such that in their frame <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> approach at equal speeds, and what is this equal speed?

##### Solution

Set ground frame velocity <span class="inline-math">$v_C$</span> rightwards and switch to natural units (<span class="inline-math">$v\coloneqq\beta$</span>). Then we have that

<div>
$$v'_A=\frac{v_A-v_C}{1-v_Av_C}=-v'_B=\frac{v_C-v_B}{1-v_Bv_C}$$
</div>

Simple algebra yields that <span class="inline-math">$(5v_C-7)(7v_C-5)=0$</span>, of which we take <span class="inline-math">$v_C=\frac{5}{7}$</span> since <span class="inline-math">$v_C=\frac{7}{5}>1$</span>. Hence the speed <span class="inline-math">$C$</span> adopts in the ground frame is <span class="inline-math">$\frac{5}{7}c$</span>, and in <span class="inline-math">$C$</span>'s frame <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> move with speed <span class="inline-math">$v'_A=-v'_B=\frac{1}{5}c$</span>.

#### Equal Speeds II

<span class="inline-math">$A$</span> travels rightward with speed <span class="inline-math">$v$</span> towards person <span class="inline-math">$B$</span> at rest, all in the ground frame. How fast should <span class="inline-math">$C$</span> (standing between <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span>) travel rightwards such that they see <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> approach at equal speeds in their frame? What is the ratio of distances <span class="inline-math">$BC:AC$</span> in the ground frame?

##### Solution

Set <span class="inline-math">$u$</span> to be the equal speed which <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> move at in <span class="inline-math">$C$</span>'s frame. Then, <span class="inline-math">$v_C=u$</span> in the ground frame also. Moving from <span class="inline-math">$C$</span>'s frame into ground frame:

<div>
$$v=\frac{u+u}{1+u^2}\implies vu^2-2u+v=0 \implies u=\frac{1-\gamma^{-1}}{v}$$
</div>
, where if you are scared we can add back in the <span class="inline-math">$c$</span>'s dimensionally to obtain <span class="inline-math">$u=\frac{c^2(1-\gamma^{-1})}{v}$</span>.

In <span class="inline-math">$C$</span>'s frame, <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> collide at <span class="inline-math">$x=0$</span> simultaneously. This is a frame independent event since the rear-clock effect vanishes to 0 (<span class="inline-math">$\frac{Lv}{c^2}\Big |_{L=0}=0$</span>). Hence in ground frame <span class="inline-math">$C$</span> and <span class="inline-math">$A$</span> both collide with <span class="inline-math">$B$</span> simultaneously. Hence, <span class="inline-math">$\frac{BC}{AC}=\frac{v_C-v_B}{v_A-v_C}$</span>. Doing some trivial algebra yields that <span class="inline-math">$\frac{BC}{AC}=\gamma$</span>. Nice-ish.
