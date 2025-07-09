---
layout: post
title: SR 0 - Motivation and Setup
tags: [SR, Notes]
---

## Materials

Using a combination of Wang/Ricardo *Competitive Physics* and Morin's *Special Relativity for the Enthusiastic Beginner*.

## Galilean Transformation

For non-relativistic regime, assuming some reference frame at constant velocity <span class="inline-math">$v$</span>, the event coordinates <span class="inline-math">$(x,y,z,t)$</span> in a rest frame obey the transformations:

<div>
$$(x,y,z,t) \rightarrow (x+v_x\Delta t, y+v_y\Delta t, z+v_z\Delta t, t+\Delta t)$$
</div>

Notice that this transformation is non-symmetric in space and time dimensions (i.e. space and time are treated differently in transformation). This becomes a problem for relativistic regime.

Consequences of this transformation are that
- Linearity holds - i.e. the same transformations apply to <span class="inline-math">$\Delta x$</span>, etc.
- Inertial frames exhibit the same laws of physics.
	- For instance, <span class="inline-math">$F = \frac{dp}{dt}$</span> holds in all inertial frames since we have, using <span class="inline-math">$v'=v+v_R$</span> and <span class="inline-math">$dt=dt'$</span>, 
<div>
$$a'=\frac{dv'}{dt'}=\frac{d(v+v_R)}{dt'}=\frac{dv}{dt}+0=a$$
</div>

## Invariance of <span class="inline-math">$c$</span>

Problem is that this transformation treats all 'magnitudes' of frame velocity equally - that is, consider the speed of light <span class="inline-math">$c$</span> in some arbitrarily defined rest frame <span class="inline-math">$c$</span>. By switching to an inertial frame moving at <span class="inline-math">$v$</span>, 
<div>
$$c'=c+v$$
</div>

The issue is that
- The speed of light has been experimentally verified to be not only constant in all reference frames, but the effective 'speed limit' of the universe.
- Maxwell's equations get screwed over if we imagine its different forms under Galilean transformation.

## Special Relativity - Postulates

Two postulates of special relativity:
1. All inertial frames are equivalent.
	1. Frame <span class="inline-math">$S$</span> observes frame <span class="inline-math">$S'$</span> the same as how <span class="inline-math">$S'$</span> observes <span class="inline-math">$S$</span>.
	2. Empty space is isotropic (equivalent under rotation).
	3. Empty space is homogenous (equivalent under translation).
2. The speed of light is constant in all inertial frames.
	N.B. It doesn't matter that light is the thing with same speed in all frames; could be restated as "There exists a limiting speed in all frames" or "There exists a massless object with the same speed in all frames".

## Formalisations

### Frames of Reference

A **frame of reference** is taken definitionally with some observer <span class="inline-math">$S$</span> - formally a set of tangible/virtual points which are always at rest relative to the observer. The frame's **coordinate space** can be chosen arbitrarily as a means to quantify measurements in the frame. Usually Cartesian <span class="inline-math">$\hat i, \hat j, \hat k$</span> for 3D space.

### Events

An **event** is an object with spatial and temporal coordinates which can be represented as a point. Note that this means that objects with spatial length or non-infinitesimal duration cannot be treated as events. We can denote the position of a 3D event in time as <span class="inline-math">$(x,y,z,t)$</span>.
