---
layout: post
title: SR 1.4 - Minkowski Diagrams
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Lorentz Transformation]]; **Next**: [[Invariant Interval]]
___

## Explanation

Literally just geometry. Like draw crap and good luck. These don't solve new problems, but give a nicer visualisation.

### Here and Now

In a Minkowski diagram when boosting into <span class="inline-math">$S'$</span>, draw the <span class="inline-math">$x'$</span> and <span class="inline-math">$t'$</span> axes superimposed on the <span class="inline-math">$S$</span> basis; allows for understanding:
1. <span class="inline-math">$t'$</span> axis makes an angle <span class="inline-math">$\theta$</span> with <span class="inline-math">$t$</span> axis such that <span class="inline-math">$\tan\theta=v$</span>.
2. <span class="inline-math">$x'$</span> axis is the "now" line of <span class="inline-math">$S'$</span> - all events in <span class="inline-math">$S$</span> collinear to a line <span class="inline-math">$y=vx+k$</span> for some <span class="inline-math">$k\in\mathbb R$</span> (i.e. parallel to <span class="inline-math">$x'$</span> axis) happen simultaneously in <span class="inline-math">$S'$</span>.
3. <span class="inline-math">$t'$</span> axis is the "here" line of <span class="inline-math">$S'$</span> - all events in <span class="inline-math">$S$</span> collinear to a line <span class="inline-math">$y=\frac{1}{v}x+k$</span> for some <span class="inline-math">$k\in\mathbb R$</span> (i.e. parallel to <span class="inline-math">$t'$</span> axis) happen at the same location in <span class="inline-math">$S'$</span>.
4. Also to be noted that <span class="inline-math">$\frac{\text{len}(x')}{\text{len}(x)}=\sqrt{\frac{1+v^2}{1-v^2}}$</span> - i.e. as seen in a Minkowski diagram <span class="inline-math">$S$</span>, the length of one unit of <span class="inline-math">$x'$</span> if drawn on the <span class="inline-math">$S$</span> diagram is <span class="inline-math">$\sqrt{\frac{1+v^2}{1-v^2}}$</span> times the length of one unit of <span class="inline-math">$x$</span> (assume 1).

## Problems

#### Length Contraction

Consider frame <span class="inline-math">$S$</span> where <span class="inline-math">$S'$</span> moves towards positive x-axis with speed <span class="inline-math">$v$</span>. Solve with Minkowski diagram with orthogonal <span class="inline-math">$x$</span> and <span class="inline-math">$t$</span> axes (i.e. in <span class="inline-math">$S$</span>'s frame):
	a) Place a meter ruler at rest in <span class="inline-math">$S$</span>. What is its length as measured by <span class="inline-math">$S'$</span>?
	b) Place a meter ruler at rest in <span class="inline-math">$S'$</span>. What is its length as measured by <span class="inline-math">$S$</span>?

##### Solution

a) Diagram below:

<div style="text-align:center">
  <img src="/assets/images/length_cont_minkowski.png" alt="length_cont_minkowski.png" width="400px" />
</div>

The length of the stick in <span class="inline-math">$S'$</span> is related to the distance <span class="inline-math">$OB$</span>. With simple geometry, <span class="inline-math">$OB=\sqrt{1+v^2}$</span> (noting <span class="inline-math">$OA=1$</span>). Therefore, the length <span class="inline-math">$L'$</span> of the stick in <span class="inline-math">$S'$</span> is given by 
<div>
$$L'= \sqrt{1+v^2} \cdot \left( \frac{1+v^2}{1-v^2} \right)^{-1}=\sqrt{1-v^2}=\gamma^{-1}$$
</div>
as desired.
b) Diagram below:

<div style="text-align:center">
  <img src="/assets/images/length_cont_2_minkowski.png" alt="length_cont_2_minkowski.png" width="400px" />
</div>

The problem is now to find <span class="inline-math">$OA$</span> given that <span class="inline-math">$OB$</span> has length <span class="inline-math">$\sqrt{\frac{1+v^2}{1-v^2}}$</span> on paper. The geometry is fairly straightforward, obtaining <span class="inline-math">$OA=\sqrt{1-v^2}=\gamma^{-1}$</span>, which agrees with the standard result.

#### Twin Paradox II

The same twin paradox setup, but solve it geometrically with a Minkowski diagram.

##### Solution

<div style="text-align:center">
  <img src="/assets/images/twin_minkowski.png" alt="twin_minkowski.png" width="400px" />
</div>

Consider the problem in the frame of <span class="inline-math">$A$</span> (the person at rest relative to planet). Person <span class="inline-math">$B$</span>'s worldlines are shown, with `line 1` parallel to 'away-travelling' x-axis (call this frame <span class="inline-math">$B_1$</span>), and `line 2` parallel to 'toward-travelling' x-axis (call this frame <span class="inline-math">$B_2$</span>). Events on these lines are simultaneous in <span class="inline-math">$B$</span>'s two frames.
In this diagram, it is easy to see that <span class="inline-math">$B$</span> observes the instantaneous aging of <span class="inline-math">$A$</span> when they turn - specifically by <span class="inline-math">$2\Delta t$</span>.
By simple geometry <span class="inline-math">$\tan \theta = \beta_{B_1}$</span> and, using proper length in <span class="inline-math">$A$</span>, <span class="inline-math">$\overrightarrow{PQ}_x=L$</span>, so 
<div>
$$\frac{PT}{2}=c\Delta t=\beta L = \frac{Lv}{c} \implies 2\Delta t=\frac{2Lv}{c^2}$$
</div>

Hence, in <span class="inline-math">$B$</span>'s frame, at meetup, <span class="inline-math">$B$</span>'s clock reads <span class="inline-math">$\dfrac{2L}{\gamma v}$</span>, while <span class="inline-math">$A$</span>'s clock reads <span class="inline-math">$\dfrac{2L}{\gamma^2 v}+\dfrac{2Lv}{c^2}=\dfrac{2L}{v}$</span> as expected (less time has elapsed on <span class="inline-math">$B$</span>'s clock than <span class="inline-math">$A$</span>'s clock).

#### Streetlamps

In the lab frame <span class="inline-math">$S$</span>, three lamps at coordinates <span class="inline-math">$x_1,x_2,x_3$</span> are observed to be illuminated at times <span class="inline-math">$t_1,t_2,t_3$</span>. At <span class="inline-math">$t=0$</span> in <span class="inline-math">$S$</span>, a car is observed to travel from the origin at a constant velocity <span class="inline-math">$v > 0$</span> in the positive x-direction.
	a) Under what conditions will the car observe all three lamps to be lit up simultaneously?
	b) Assume the car observes the events to occur at <span class="inline-math">$t'=0$</span> in his own frame <span class="inline-math">$S'$</span>. Let the time intervals between the illumination of the lamps and the receipt of the corresponding photons be <span class="inline-math">$\Delta t_1, \Delta t_2, \Delta t_3$</span> in <span class="inline-math">$S'$</span>. If the car observes <span class="inline-math">$\Delta t_1:\Delta t_2 : \Delta t_3=1:2:3$</span>, determine <span class="inline-math">$x_2,x_3,t_1,t_2,t_3$</span> in terms of <span class="inline-math">$x_1, v, c$</span>.

##### Solution

I'm so not bothered to write a solution it's pretty simple (<span class="inline-math">$x_2=2x_1,x_3=3x_1$</span> etc.)

#### Diverging Cars

In lab frame <span class="inline-math">$S$</span>, car 1 travels <span class="inline-math">$v_1=\tan15\degree$</span> (natural units) in the negative x-direction and car 2 travels <span class="inline-math">$v_2=\frac{1}{\sqrt3}$</span> in the positive x-direction. Both cars start at <span class="inline-math">$x=0$</span> at <span class="inline-math">$t=0$</span> in lab frame. After some time, car 1 emits a light signal in the positive x-direction. Car 1 measures the time interval between itself sending and car 2 receiving to be <span class="inline-math">$t'$</span>. Determine the distance car 2 has travelled in lab frame when it receives the signal.

##### Solution

Ong not deep.
