## Maxwell's Equations

The microscopic formulation of Maxwell's equations are fairly well-known:

$$\nabla \cdot \mathbf E = \frac{\rho}{\varepsilon_0}\qquad\text{(Gauss's Law)}$$
$$\nabla \cdot \mathbf B = 0\qquad \text{(Gauss's Law \#2?)}$$
$$\nabla \times \mathbf E = -\frac{ \partial \mathbf B }{ \partial t } \qquad \text{(Faraday's Law)}$$
$$\nabla \times \mathbf B = \mu_0\left( \mathbf J + \varepsilon_0 \frac{ \partial \mathbf E }{ \partial t }  \right) \qquad \text{(Ampere-Maxwell Law)}$$
However, the formulation we care about (specifically for material simulation) is the macroscopic one:
$$\nabla\cdot\mathbf D=\rho_f$$
$$\nabla \cdot \mathbf B = 0$$
$$\nabla \times \mathbf E = -\frac{ \partial \mathbf B }{ \partial t }$$
$$\nabla \times \mathbf H = \mathbf J_f+\frac{ \partial \mathbf D }{ \partial t } $$
where $\mathbf J_f = \sigma \mathbf E$.

> [!note]
> "What the hell is an H/D field?"
> These are *auxiliary fields*.
>  
> For computation/analysis purposes it simply suffices to recall that
> $$\mathbf H = \frac{\mathbf B}{\mu_0} - \mathbf M$$
> where $\mathbf M$ is the magnetisation field.
> 
> Technically $\mathbf B$ should be called "magnetic flux density" and it differs from the H field in that it takes into account material properties/current distribution.
> 
> The unit of $\mathbf B$ is the tesla $\mathrm T$ or in SI units $\text{kg }\text{s}^{-2}\text{A}^{-1}$. The unit of $\mathbf H$ is simply $\text{A m}^{-1}$.
> 
> Similarly, the D field is "electric flux density" and is to the E field what the B field is to the H field! In particular,
> $$\mathbf D = \varepsilon_0 \mathbf E + \mathbf P$$
> where $\mathbf P$ is the polarisation field.
> 
> Doesn't matter, we're just simulating stuff at the end of the day according to some equations anyway.

So we literally just computationally simulate this! (I only know high-school level EM I *might* be cooked.)
## Constitutive Relations

To apply the macroscopic formulation, we need the **constitutive relations** to connect the auxiliary fields to the ones we're used to. For linear isotropic materials:
$$\mathbf H = \frac{\mathbf B}{\mu}, \qquad \mathbf D=\varepsilon\mathbf E$$where $\mu=\mu_0(\chi_m+1),\,\varepsilon=\varepsilon_0(\chi_e+1)$, and $\chi_e$/$\chi_m$ are the electric/magnetic susceptibilities of the material respectively.
## Materials

Interesting paper called [Advanced Material Modelling in EM-FDTD](https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/151102/eth-41633-02.pdf) - using as a kind of guide.

EMPossible has a lecture series on [Electromagnetic Analysis Using FDTD](https://www.youtube.com/watch?v=vVeyP85xKD4&list=PLLYQF5WvJdJWoU9uEeWJ6-MRzDSziNnGt).

Following also the Purdue 37th lecture [Finite Difference Method, Yee's Algorithm](https://engineering.purdue.edu/wcchew/ece604s20/Lecture%20Notes/Lect37.pdf).
## Discretisation Setup

Consider only the two curl equations for now (apparent later),
$$\nabla \times \mathbf E = -\mu\frac{ \partial \mathbf H }{ \partial t }$$
$$\nabla \times \mathbf H = \mathbf \sigma \mathbf E +\varepsilon\frac{ \partial \mathbf E }{ \partial t } $$
We can write these using the centre-difference/forward-difference approximations to generate our update equations:

$$\frac{\mathbf H \left( t+\frac{dt}{2} \right) - \mathbf H \left( t-\frac{dt}{2} \right)}{dt}=-\frac{1}{\mu}(\nabla \times \mathbf E(t)) \implies \boxed{\mathbf H\left( t+\frac{dt}{2} \right)=\mathbf H\left( t-\frac{dt}{2} \right)-\frac{dt}{\mu}(\nabla \times \mathbf E(t))}$$
$$\frac{\mathbf E(t+dt)-\mathbf E(t)}{dt}=\frac{1}{\varepsilon}\left( \nabla \times \mathbf H\left( t+\frac{dt}{2} \right) \right) \implies \boxed{\mathbf E(t+dt)=\mathbf E(t)+\frac{dt}{\varepsilon}\left( \nabla \times \mathbf H\left( t+\frac{dt}{2} \right) \right)}$$

The curl operator mnemonic/definition for generalised coordinates is is:
$$\displaystyle \nabla \times \mathbf {F} ={\begin{vmatrix}{\boldsymbol {\hat {\imath }}}&{\boldsymbol {\hat {\jmath }}}&{\boldsymbol {\hat {k}}}\\[5mu]{\dfrac {\partial }{\partial x}}&{\dfrac {\partial }{\partial y}}&{\dfrac {\partial }{\partial z}}\\[5mu]F_{x}&F_{y}&F_{z}\end{vmatrix}} \qquad \text{or} \qquad \displaystyle (\nabla \times \mathbf {F} )^{k}={\frac {1}{\sqrt {g}}}\varepsilon ^{k\ell m}\nabla _{\ell }F_{m}$$
and thereby expands in the Cartesian system as:
$$\displaystyle \nabla \times \mathbf {F} =\left({\frac {\partial F_{z}}{\partial y}}-{\frac {\partial F_{y}}{\partial z}}\right){\boldsymbol {\hat {\imath }}}+\left({\frac {\partial F_{x}}{\partial z}}-{\frac {\partial F_{z}}{\partial x}}\right){\boldsymbol {\hat {\jmath }}}+\left({\frac {\partial F_{y}}{\partial x}}-{\frac {\partial F_{x}}{\partial y}}\right){\boldsymbol {\hat {k}}}$$
We use this to specify the curl part of the update equation depending on the dimensions the simulation ends up running in.
## FDTD Algorithmic Overview

![[FDTD_flowchart.png|600]]

It is easy to see why we do H before E (H takes half steps and is only dependent on $\mathbf E(t)$ and $\mathbf H( t-\frac{dt}{2} )$, while E is dependent on $\mathbf H( t+\frac{dt}{2} )$ as well as the E/H fields at previous times).

For more complex non-isotropic/non-linear materials the constitutive relations need to be baked into the actual simulation (i.e. update B from E, update H from B, update D from H, update E from D, etc.), but this is outside this project scope.
## Yee Grid
### Motivation
Consider a grid cell. It is standard and tempting to format the grid as shown:
![[FDTD_collocated.png|400]]
However, this has problems (I'll take Yee at his word). Basically, stagger the position of the field components, instead of focusing them at a corner:
![[FDTD_yee.png|400]]
Turns out this has three major benefits:
1. **Divergence free field**. We only looked at the curl eqns., but turns out that by using this grid, the divergence equations (the two Gauss's laws) are naturally satisfied - that is, $\nabla \cdot \mathbf B = 0, \, \nabla \cdot \mathbf D = 0$ (assuming $\mathbf J_f,\, \rho_f=0$)
2. **Emergent boundary conditions**. Material boundaries are naturally dealt with (so we don't have to manually write code to handle the boundary conditions).
3. **Curl simplification**. Notice that with the staggered grid, ![[FDTD_curl_diagram.png|400]] - that is, H fields wrap around E fields and vice versa. This is the exact construction we want in order to approximate curl easily.

For 2D and 1D Yee grids, Maxwell's equations decouple into two modes (H and E) - i.e. they form two sets of equations (component-wise) with **no** shared terms between them.
### Consequences
Since the H and E field components within one grid cell represent *different positions*, it means there is **phase offset** - this needs to be taken into account when injecting sources.
## 1D Simulation
