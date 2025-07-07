---
layout: post
title: Special Relativity - Motivation and Setup
date: 2025-02-03
tags: [SR, Notes]
---

## Navigation

**Previous**: N/A; **Next**: [[Fundamental Effects]]
___
## Materials

Using a combination of Wang/Ricardo *Competitive Physics* and Morin's *Special Relativity for the Enthusiastic Beginner*.
## Galilean Transformation

For non-relativistic regime, assuming some reference frame at constant velocity $v$, the event coordinates $(x,y,z,t)$ in a rest frame obey the transformations:
$$(x,y,z,t) \rightarrow (x+v_x\Delta t, y+v_y\Delta t, z+v_z\Delta t, t+\Delta t)$$
Notice that this transformation is non-symmetric in space and time dimensions (i.e. space and time are treated differently in transformation). This becomes a problem for relativistic regime.

Consequences of this transformation are that
- Linearity holds - i.e. the same transformations apply to $\Delta x$, etc.
- Inertial frames exhibit the same laws of physics.
	- For instance, $F = \frac{dp}{dt}$ holds in all inertial frames since we have, using $v'=v+v_R$ and $dt=dt'$, $$a'=\frac{dv'}{dt'}=\frac{d(v+v_R)}{dt'}=\frac{dv}{dt}+0=a$$
## Invariance of $c$

Problem is that this transformation treats all 'magnitudes' of frame velocity equally - that is, consider the speed of light $c$ in some arbitrarily defined rest frame $c$. By switching to an inertial frame moving at $v$, $$c'=c+v$$
The issue is that
- The speed of light has been experimentally verified to be not only constant in all reference frames, but the effective 'speed limit' of the universe.
- Maxwell's equations get screwed over if we imagine its different forms under Galilean transformation.
## Special Relativity - Postulates

Two postulates of special relativity:
1. All inertial frames are equivalent.
	1. Frame $S$ observes frame $S'$ the same as how $S'$ observes $S$.
	2. Empty space is isotropic (equivalent under rotation).
	3. Empty space is homogenous (equivalent under translation).
2. The speed of light is constant in all inertial frames.
	N.B. It doesn't matter that light is the thing with same speed in all frames; could be restated as "There exists a limiting speed in all frames" or "There exists a massless object with the same speed in all frames".
## Formalisations

### Frames of Reference
A **frame of reference** is taken definitionally with some observer $S$ - formally a set of tangible/virtual points which are always at rest relative to the observer. The frame's **coordinate space** can be chosen arbitrarily as a means to quantify measurements in the frame. Usually Cartesian $\hat i, \hat j, \hat k$ for 3D space.
### Events
An **event** is an object with spatial and temporal coordinates which can be represented as a point. Note that this means that objects with spatial length or non-infinitesimal duration cannot be treated as events. We can denote the position of a 3D event in time as $(x,y,z,t)$.