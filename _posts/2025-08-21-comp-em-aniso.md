---
layout: post
title: "Computational EM - Anisotropy"
tags: [Computational Physics, EM]
---

## Motivation

So far the simulation utilises Dirichlet boundary conditions, which gets annoying because of wave reflectance. Hence, want to make an absorbing boundary, known as a **perfectly matched layer (PML)**.

## Uniaxial PML

### Perfectly Absorbing Boundary

A **perfectly absorbing boundary** works by absorbing a certain speed of plane wave. This works fine in 1D. However, for 2D, the angle of plane wave affects the speed of incidence (<span class="inline-math">$v\cos\theta$</span>, where <span class="inline-math">$\theta$</span> is angle of incidence). Therefore, this material is not sufficient.

### Fresnel Equations

These equations describe transmittance and reflectance of electromagnetic radiation incident on different media - for <span class="inline-math">$\text{TE}_z$</span> radiation (i.e. 'p' polarised light, the <span class="inline-math">$E_z$</span> mode):

<div>
$$
\begin{align}
R_p&=\frac{Z_2\cos\theta_2-Z_1\cos\theta_1}{Z_1\cos\theta_1+Z_2\cos\theta_2} \\[.2cm]
T_p&=\frac{2Z_2\cos\theta_1}{Z_1\cos\theta_1+Z_2\cos\theta_2}
\end{align}
$$
</div>

From these two equations we make two observations:
1. We want to set reflectance to be 0, given that we can change <span class="inline-math">$Z_2$</span>.
2. Unfortunately, they are functions of <span class="inline-math">$\theta$</span>. So we need to eliminate <span class="inline-math">$\theta$</span> somehow to make PML work for all angles of incident light.

### Refraction/Propagation

The refractive index of a material is given by

<div>
$$n=\sqrt{\varepsilon_r\mu_r}$$
</div>

and can be complex like <span class="inline-math">$\mu_r$</span> and <span class="inline-math">$\varepsilon_r$</span> (<span class="inline-math">$n = n'-i\kappa$</span>). The negative of the imaginary part <span class="inline-math">$\kappa$</span> is known as the **extinction coefficient**; how quickly the wave decays.

>N.B. Notice how we write <span class="inline-math">$n=n'-i\kappa$</span> instead of <span class="inline-math">$n=n'+i\kappa$</span>. This is just convention.

Likewise, the propagation coefficient <span class="inline-math">$\gamma=\alpha+i\beta$</span> quantifies how quickly amplitude and phase change - <span class="inline-math">$\alpha$</span> is the attenuation coefficient (amplitude decay) and <span class="inline-math">$\beta$</span> is the propagation constant (phase accumulation).

Notably, when the material is anisotropic - i.e.

<div>
$$
\varepsilon_{ij} = \mu_{ij} =
\begin{bmatrix}
a & 0 & 0 \\
0 & b & 0 \\
0 & 0 & c
\end{bmatrix}
$$
</div>

then Snell's Law becomes <span class="inline-math">$\sin \theta_1=\sqrt{bc} \sin \theta_2$</span>, and therefore the Fresnel reflection equation becomes

<div>
$$R_p=\frac{\sqrt b \cos \theta_2 -\sqrt a \cos \theta_1}{\sqrt a \cos \theta_1 + \sqrt b \cos \theta_2}$$
</div>

>This is an involved derivation but principally involves making an ansatz for harmonic fields proportional to <span class="inline-math">$e^{i(k_x x+k_y y-\omega t)}$</span> for wavevector <span class="inline-math">$\mathbf k=k_x\hat{i}+k_y\hat{j}$</span> in order to relate <span class="inline-math">$k_x=k_2\sin\theta_2$</span> and <span class="inline-math">$k_y=k_2\sin\theta_2$</span> (<span class="inline-math">$k_2$</span> transmitted wavevector).

### Boundary of Extinction

Motivated by the extinction coefficient <span class="inline-math">$\kappa$</span> one might think to create a border where the loss <span class="inline-math">$\kappa > 0$</span>. However, we know that

<div>
$$R = \frac{(1-n')^2+\kappa^2}{(1+n')^2+\kappa^2}$$
</div>

for <span class="inline-math">$n',\kappa\in\mathbb R$</span>. Therefore, it is not possible to reduce <span class="inline-math">$R$</span> to 0 in this way.

### Anisotropic Curl Equations

For anisotropic (and linear) materials, we replace <span class="inline-math">$\varepsilon$</span> and <span class="inline-math">$\mu$</span> with tensors, and incorporate loss by adding the conductivity term. Writing these in time-harmonic form (i.e. where <span class="inline-math">$\mathbf H$</span> and <span class="inline-math">$\mathbf E$</span> are phasors) yields:

<div>
$$
\begin{align}
\nabla \times \mathbf H &= \sigma \mathbf E + i\omega\varepsilon_0 [\varepsilon_{ij}]\mathbf E \\[.2cm]
\nabla \times \mathbf E &= -i\omega\mu_0 [\mu_{ij}]\mathbf H
\end{align}
$$
</div>

where <span class="inline-math">$\varepsilon_{ij}$</span> and <span class="inline-math">$\mu_{ij}$</span> are diagonal relative permittivity/permeability tensors (we work where principal axes coincide with the crystal ones. For the 1st curl equation, we can set <span class="inline-math">$(\sigma+i\omega\varepsilon_0\varepsilon_{ij})\coloneqq(i\omega\varepsilon_0\tilde\varepsilon_{ij})$</span>, or, more usefully,

<div>
$$\tilde\varepsilon_{ij}=\varepsilon_{ij}+\frac{\sigma}{i\omega\varepsilon_0} = \varepsilon_{ij} - i\frac{\sigma}{\omega\varepsilon_0}$$
</div>

so that the equations become

<div>
$$
\begin{align}
\nabla \times \mathbf H &= i\omega\varepsilon_0\tilde\varepsilon_{ij} \mathbf E \\[.2cm]
\nabla \times \mathbf E &= -i\omega\mu_0\mu_{ij} \mathbf H
\end{align}
$$
</div>

### Derivation of UPML

We want to set the impedance <span class="inline-math">$\eta_r=\sqrt{\frac{\mu_r}{\varepsilon_r}}$</span> constant. The easiest way to do this is to set them equal - denote this <span class="inline-math">$\mathbf s$</span>:

<div>
$$
\mathbf s = \varepsilon_{ij}= \mu_{ij}=
\begin{bmatrix}
a & 0 & 0 \\
0 & b & 0 \\
0 & 0 & c
\end{bmatrix}
$$
</div>

Recall Snell's Law for anisotropic materials. Angle dependence vanishes if we set <span class="inline-math">$\sqrt{bc}=1$</span>, i.e. <span class="inline-math">$c=b^{-1}$</span>, in which case <span class="inline-math">$\sin\theta_1=\sin\theta_2\implies \theta_1=\theta_2$</span>, and the Fresnel equation reduces to

<div>
$$R_p=\frac{\sqrt b - \sqrt a}{\sqrt a + \sqrt b}=0$$
</div>

which we set to be 0. Essentially, this means <span class="inline-math">$a=b$</span>. Therefore, our PML becomes a uniaxial material of the general form

<div>
$$\mathbf s_z = \varepsilon_{ij}= \mu_{ij}=
\begin{bmatrix}
s_z & 0 & 0 \\
0 & s_z & 0 \\
0 & 0 & \frac{1}{s_z}
\end{bmatrix}$$
</div>

This will kill waves travelling in the <span class="inline-math">$z$</span> direction. To incorporate all three dimensions,

<div>
$$\mathbf s = \begin{bmatrix}
s_x^{-1}s_ys_z & 0 & 0 \\
0 & s_xs_y^{-1}s_z & 0 \\
0 & 0 & s_xs_ys_z^{-1}
\end{bmatrix}$$
</div>

Note that <span class="inline-math">$s_x,s_y,s_z\in\mathbb C$</span>. Now that reflections are 0, to incorporate loss we utilise conductivity terms, for instance setting 'relative permittivity' to 1, and getting

<div>
$$s_x(x)=1+\frac{\sigma_x(x)}{i\omega\varepsilon_0}$$
</div>

For numeric stability, this fictional conductivity term should be faded in at the borders - conventionally, this is a cubic transition - that is,

<div>
$$\sigma_x(x)=\frac{\varepsilon_0}{2\Delta t}Q(x),\ Q(x)=\left(\frac{x}{L_x}\right)^3$$
</div>

where <span class="inline-math">$L_x$</span> is the x-width of the PML, and <span class="inline-math">$x$</span> is the distance from the outside to the start of the simulation (PML-free) area. This is mirrored in the y direction.

## Update Equations

I don't particularly want to do this one...
