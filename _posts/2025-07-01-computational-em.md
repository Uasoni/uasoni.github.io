---
layout: post
title: "Computational EM - Setup"
tags: [Computational Physics, EM]
---

## Maxwell's Equations

The microscopic formulation of Maxwell's equations are fairly well-known:


<div>
$$\nabla \cdot \mathbf E = \frac{\rho}{\varepsilon_0}\qquad\text{(Gauss's Law)}$$
</div>


<div>
$$\nabla \cdot \mathbf B = 0\qquad \text{(Gauss's Law \#2?)}$$
</div>


<div>
$$\nabla \times \mathbf E = -\frac{ \partial \mathbf B }{ \partial t } \qquad \text{(Faraday's Law)}$$
</div>


<div>
$$\nabla \times \mathbf B = \mu_0\left( \mathbf J + \varepsilon_0 \frac{ \partial \mathbf E }{ \partial t }  \right) \qquad \text{(Ampere-Maxwell Law)}$$
</div>

However, the formulation we care about (specifically for material simulation) is the macroscopic one:

<div>
$$\nabla\cdot\mathbf D=\rho_f$$
</div>


<div>
$$\nabla \cdot \mathbf B = 0$$
</div>


<div>
$$\nabla \times \mathbf E = -\frac{ \partial \mathbf B }{ \partial t }$$
</div>


<div>
$$\nabla \times \mathbf H = \mathbf J_f+\frac{ \partial \mathbf D }{ \partial t } $$
</div>

where <span class="inline-math">$\mathbf J_f = \sigma \mathbf E$</span>.

> "What the hell is an H/D field?"
> These are *auxiliary fields*.
>  
> For computation/analysis purposes it simply suffices to recall that
> 
<div>
$$\mathbf H = \frac{\mathbf B}{\mu_0} - \mathbf M$$
</div>

> where <span class="inline-math">$\mathbf M$</span> is the magnetisation field.
> 
> Technically <span class="inline-math">$\mathbf B$</span> should be called "magnetic flux density" and it differs from the H field in that it takes into account material properties/current distribution.
> 
> The unit of <span class="inline-math">$\mathbf B$</span> is the tesla <span class="inline-math">$\mathrm T$</span> or in SI units <span class="inline-math">$\text{kg }\text{s}^{-2}\text{A}^{-1}$</span>. The unit of <span class="inline-math">$\mathbf H$</span> is simply <span class="inline-math">$\text{A m}^{-1}$</span>.
> 
> Similarly, the D field is "electric flux density" and is to the E field what the B field is to the H field! In particular,
> 
<div>
$$\mathbf D = \varepsilon_0 \mathbf E + \mathbf P$$
</div>

> where <span class="inline-math">$\mathbf P$</span> is the polarisation field.
> 
> Doesn't matter, we're just simulating stuff at the end of the day according to some equations anyway.

So we literally just computationally simulate this! (I only know high-school level EM I *might* be cooked.)

## Constitutive Relations

To apply the macroscopic formulation, we need the **constitutive relations** to connect the auxiliary fields to the ones we're used to. For linear isotropic materials:

<div>
$$\mathbf H = \frac{\mathbf B}{\mu}, \qquad \mathbf D=\varepsilon\mathbf E$$
</div>
where <span class="inline-math">$\mu=\mu_0(\chi_m+1),\,\varepsilon=\varepsilon_0(\chi_e+1)$</span>, and <span class="inline-math">$\chi_e$</span>/<span class="inline-math">$\chi_m$</span> are the electric/magnetic susceptibilities of the material respectively.

## Materials

Interesting paper called [Advanced Material Modelling in EM-FDTD](https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/151102/eth-41633-02.pdf) - using as a kind of guide.

EMPossible has a lecture series on [Electromagnetic Analysis Using FDTD](https://www.youtube.com/watch?v=vVeyP85xKD4&list=PLLYQF5WvJdJWoU9uEeWJ6-MRzDSziNnGt).

Following also the Purdue 37th lecture [Finite Difference Method, Yee's Algorithm](https://engineering.purdue.edu/wcchew/ece604s20/Lecture%20Notes/Lect37.pdf).

## Discretisation Setup

Consider only the two curl equations for now (apparent later),

<div>
$$\nabla \times \mathbf E = -\mu\frac{ \partial \mathbf H }{ \partial t }$$
</div>


<div>
$$\nabla \times \mathbf H = \mathbf \sigma \mathbf E +\varepsilon\frac{ \partial \mathbf E }{ \partial t } $$
</div>

We can write these using the centre-difference/forward-difference approximations to generate our update equations:


<div>
$$\frac{\mathbf H \left( t+\frac{dt}{2} \right) - \mathbf H \left( t-\frac{dt}{2} \right)}{dt}=-\frac{1}{\mu}(\nabla \times \mathbf E(t)) \implies \boxed{\mathbf H\left( t+\frac{dt}{2} \right)=\mathbf H\left( t-\frac{dt}{2} \right)-\frac{dt}{\mu}(\nabla \times \mathbf E(t))}$$
</div>


<div>
$$\frac{\mathbf E(t+dt)-\mathbf E(t)}{dt}=\frac{1}{\varepsilon}\left( \nabla \times \mathbf H\left( t+\frac{dt}{2} \right) \right) \implies \boxed{\mathbf E(t+dt)=\mathbf E(t)+\frac{dt}{\varepsilon}\left( \nabla \times \mathbf H\left( t+\frac{dt}{2} \right) \right)}$$
</div>


The curl operator mnemonic/definition for generalised coordinates is is:

<div>
$$\displaystyle \nabla \times \mathbf {F} ={\begin{vmatrix}{\boldsymbol {\hat {\imath }}}&{\boldsymbol {\hat {\jmath }}}&{\boldsymbol {\hat {k}}}\\[5mu]{\dfrac {\partial }{\partial x}}&{\dfrac {\partial }{\partial y}}&{\dfrac {\partial }{\partial z}}\\[5mu]F_{x}&F_{y}&F_{z}\end{vmatrix}} \qquad \text{or} \qquad \displaystyle (\nabla \times \mathbf {F} )^{k}={\frac {1}{\sqrt {g}}}\varepsilon ^{k\ell m}\nabla _{\ell }F_{m}$$
</div>

and thereby expands in the Cartesian system as:

<div>
$$\displaystyle \nabla \times \mathbf {F} =\left({\frac {\partial F_{z}}{\partial y}}-{\frac {\partial F_{y}}{\partial z}}\right){\boldsymbol {\hat {\imath }}}+\left({\frac {\partial F_{x}}{\partial z}}-{\frac {\partial F_{z}}{\partial x}}\right){\boldsymbol {\hat {\jmath }}}+\left({\frac {\partial F_{y}}{\partial x}}-{\frac {\partial F_{x}}{\partial y}}\right){\boldsymbol {\hat {k}}}$$
</div>

We use this to specify the curl part of the update equation depending on the dimensions the simulation ends up running in.

## FDTD Algorithmic Overview


<div style="text-align:center">
  <img src="/assets/images/FDTD_flowchart.png" alt="FDTD_flowchart.png" width="600px" />
</div>


It is easy to see why we do H before E (H takes half steps and is only dependent on <span class="inline-math">$\mathbf E(t)$</span> and <span class="inline-math">$\mathbf H( t-\frac{dt}{2} )$</span>, while E is dependent on <span class="inline-math">$\mathbf H( t+\frac{dt}{2} )$</span> as well as the E/H fields at previous times).

For more complex non-isotropic/non-linear materials the constitutive relations need to be baked into the actual simulation (i.e. update B from E, update H from B, update D from H, update E from D, etc.), but this is outside this project scope.

## Yee Grid

### Motivation

Consider a grid cell. It is standard and tempting to format the grid as shown:

<div style="text-align:center">
  <img src="/assets/images/FDTD_collocated.png" alt="FDTD_collocated.png" width="400px" />
</div>

However, this has problems (I'll take Yee at his word). Basically, stagger the position of the field components, instead of focusing them at a corner:

<div style="text-align:center">
  <img src="/assets/images/FDTD_yee.png" alt="FDTD_yee.png" width="400px" />
</div>

Turns out this has three major benefits:
1. **Divergence free field**. We only looked at the curl eqns., but turns out that by using this grid, the divergence equations (the two Gauss's laws) are naturally satisfied - that is, <span class="inline-math">$\nabla \cdot \mathbf B = 0, \, \nabla \cdot \mathbf D = 0$</span> (assuming <span class="inline-math">$\mathbf J_f,\, \rho_f=0$</span>)
2. **Emergent boundary conditions**. Material boundaries are naturally dealt with (so we don't have to manually write code to handle the boundary conditions).
3. **Curl simplification**. Notice that with the staggered grid, 
<div style="text-align:center">
  <img src="/assets/images/FDTD_curl_diagram.png" alt="FDTD_curl_diagram.png" width="400px" />
</div>
 - that is, H fields wrap around E fields and vice versa. This is the exact construction we want in order to approximate curl easily.

For 2D and 1D Yee grids, Maxwell's equations decouple into two modes (H and E) - i.e. they form two sets of equations (component-wise) with **no** shared terms between them.

### Consequences

Since the H and E field components within one grid cell represent *different positions*, it means there is **phase offset** - this needs to be taken into account when injecting sources.