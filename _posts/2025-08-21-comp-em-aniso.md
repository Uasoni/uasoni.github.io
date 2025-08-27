---
layout: post
title: "Computational EM - Anisotropy"
tags: [Computational Physics, EM]
---

## Motivation

So far the simulation utilises Dirichlet boundary conditions, which gets annoying because of wave reflectance. Hence, want to make an absorbing boundary, known as a **perfectly matched layer (PML)**.

### Perfectly Absorbing Boundary

A **perfectly absorbing boundary** works by absorbing a certain speed of plane wave. This works fine in 1D. However, for 2D, the angle of plane wave affects the speed of incidence (<span class="inline-math">$v\cos\theta$</span>, where <span class="inline-math">$\theta$</span> is angle of incidence). Therefore, this material is not sufficient.

## Uniaxial PML

### Fresnel Equations

These equations describe transmittance and reflectance of electromagnetic radiation incident on different media - for <span class="inline-math">$\text{TE}_z$</span> radiation (i.e. 's' (perpendicularly) polarised light, the <span class="inline-math">$E_z$</span> mode):

<div>
$$
\begin{align}
R_s&=\frac{Z_2\cos\theta_1-Z_1\cos\theta_2}{Z_1\cos\theta_2+Z_2\cos\theta_1} \\[.2cm]
T_s&=\frac{2Z_2\cos\theta_1}{Z_1\cos\theta_2+Z_2\cos\theta_1}
\end{align}
$$
</div>

From these two equations we make two observations:
1. We want to set reflectance to be 0, given that we can change <span class="inline-math">$Z_2$</span>.
2. Unfortunately, they are functions of <span class="inline-math">$\theta$</span>. So we need to eliminate <span class="inline-math">$\theta$</span> somehow to make PML work for all angles of incident light.

### Refraction

The refractive index of a material is given by

<div>
$$n=\sqrt{\varepsilon_r\mu_r}$$
</div>

and can be complex like <span class="inline-math">$\mu_r$</span> and <span class="inline-math">$\varepsilon_r$</span> (<span class="inline-math">$n = n'-i\kappa$</span>). The negative of the imaginary part <span class="inline-math">$\kappa$</span> is known as the **extinction coefficient**; how quickly the wave decays.

>N.B. Notice how we write <span class="inline-math">$n=n'-i\kappa$</span> instead of <span class="inline-math">$n=n'+i\kappa$</span>. This is just convention.

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
$$R_s=\frac{\sqrt b \cos \theta_1 -\sqrt a \cos \theta_2}{\sqrt a \cos \theta_2 + \sqrt b \cos \theta_1}$$
</div>

>This is an involved derivation but principally involves making an ansatz for harmonic fields as  <span class="inline-math">$\mathbf E(t)=\mathbf E_0e^{i(k_x x+k_y y-\omega t)}$</span> (i.e. the phasor <span class="inline-math">$\mathbf E_0e^{i\mathbf k\cdot \mathbf r}$</span>) for wavevector <span class="inline-math">$\mathbf k=k_x\hat{i}+k_y\hat{j}$</span> in order to relate the components <span class="inline-math">$k_x=k_2\sin\theta_2$</span> and <span class="inline-math">$k_y=k_2\cos\theta_2$</span> (<span class="inline-math">$k_2$</span> transmitted wavevector).

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

where <span class="inline-math">$\varepsilon_{ij}$</span> and <span class="inline-math">$\mu_{ij}$</span> are diagonal relative permittivity/permeability tensors (we work where principal axes coincide with the crystal ones). For the 1st curl equation, we can set <span class="inline-math">$(\sigma+i\omega\varepsilon_0\varepsilon_{ij})\coloneqq(i\omega\varepsilon_0\tilde\varepsilon_{ij})$</span>, or, more usefully,

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
$$R_s=\frac{\sqrt b - \sqrt a}{\sqrt a + \sqrt b}=0$$
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
\frac{1}{s_x}s_ys_z & 0 & 0 \\
0 & s_x\frac{1}{s_y}s_z & 0 \\
0 & 0 & s_xs_y\frac{1}{s_z}
\end{bmatrix}$$
</div>

Note that <span class="inline-math">$s_x,s_y,s_z\in\mathbb C$</span> and can be anything they want.

## Stretched Coordinate PML

The uniaxial PML (UPML) simply requires these three <span class="inline-math">$s_x,s_y,s_z$</span> parameters. We can use this to derive the stretched coordinate PML (SC-PML).

### Derivation

From our UPML we have <span class="inline-math">$\mathbf s$</span>. Let's be loose with Maxwell's equations and write them as

<div>
$$\nabla\times\mathbf E=k[\mu_{ij}][s_{ij}]\mathbf H$$
</div>

where <span class="inline-math">$k$</span> is just... some constant (same for the other equation). We can move the <span class="inline-math">$s_{ij}$</span> to pre-multiply the curl operator:

<div>
$$[s_{ij}]^{-1}[\nabla\times]\mathbf E=k\mu_{ij}\mathbf H$$
</div>

The maths to expand this isn't hard:

<div>
$$
\begin{bmatrix}
0 & -\frac{s_x}{s_ys_z}\frac{ \partial }{ \partial z } & \frac{s_x}{s_ys_z}\frac{ \partial }{ \partial y } \\
\frac{s_y}{s_xs_z}\frac{ \partial }{ \partial z }  & 0 & - \frac{s_y}{s_xs_z}\frac{ \partial }{ \partial x } \\
-\frac{s_z}{s_xs_y}\frac{ \partial }{ \partial y } & \frac{s_z}{s_xs_y}\frac{ \partial }{ \partial x } & 0  
\end{bmatrix}
\mathbf E=k\mu_{ij}\mathbf H
$$
</div>

Notice how there are 'stretching terms' (e.g. <span class="inline-math">$\frac{1}{s_x}\frac{ \partial }{ \partial x }$</span>) and 'non-stretching terms' (e.g. <span class="inline-math">$\frac{s_z}{s_y}$</span>). In particular, stretching terms activate (<span class="inline-math">$s_z\neq0$</span>) only when inside their respective PML regions (e.g. the z stretching occurs only in z-PML) - therefore, contributions of <span class="inline-math">$\frac{ \partial }{ \partial z }$</span> matter only in said regions. In these regions, non-stretching terms reduce to 1 (e.g. <span class="inline-math">$s_x=s_y=1$</span> in z-PML).

So, the only cases are:
1. Not in region, in which case the entry is 0.
2. In region, in which case the entry is <span class="inline-math">$\pm\frac{1}{s_i}\frac{ \partial }{ \partial i }$</span>
Hence, can eliminate all non-stretching terms:

<div>
$$
\begin{bmatrix}
0 & -\frac{1}{s_z}\frac{ \partial }{ \partial z } & \frac{1}{s_y}\frac{ \partial }{ \partial y } \\
\frac{1}{s_z}\frac{ \partial }{ \partial z }  & 0 & - \frac{1}{s_x}\frac{ \partial }{ \partial x } \\
-\frac{1}{s_y}\frac{ \partial }{ \partial y } & \frac{1}{s_x}\frac{ \partial }{ \partial x } & 0  
\end{bmatrix}
\mathbf E=k\mu_{ij}\mathbf H
$$
</div>

### Loss and Conductivity

Since UMPL ensures that reflections are 0, the SC-PML derived from UPML should also guarantee reflections to be 0. Now to incorporate loss we utilise conductivity terms, for instance setting 'relative permittivity' to 1, and getting

<div>
$$s_x(x)=1+\frac{\sigma_x(x)}{i\omega\varepsilon_0}$$
</div>

For numeric stability, this fictional conductivity term should be faded in at the borders - conventionally, this is a cubic transition - that is,

<div>
$$\sigma_x(x)=\frac{\varepsilon_0}{2\Delta t}Q(x),\ Q(x)=\left(\frac{x}{L_x}\right)^3$$
</div>

where <span class="inline-math">$L_x$</span> is the x-width of the PML, and <span class="inline-math">$x$</span> is the distance from the outside to the start of the simulation (PML-free) area. This is mirrored in the y direction.

### Final Steps

Taking these two ideas in tandem, what an SC-PML essentially states is to apply the transformation

<div>
$$\frac{ \partial }{ \partial x } \rightarrow \frac{1}{1+\frac{\sigma_x(x)}{i\omega\varepsilon_0}} \frac{ \partial }{ \partial x }$$
</div>

## Update Equations

The way PMLs have been derived is inherently through a frequency domain method. However, we need to get the update equations in the time domain.

### Fourier Transforms

Consider

<div>
$$\hat f(\omega)=\mathcal F\{f(t)\}=\int_{-\infty}^\infty f(t)e^{-i2\pi\omega t}\,dt$$
</div>


>N.B. The inverse for most normal functions is
>
<div>
$$f(t)=\mathcal F^{-1}\{\hat f(\omega)\}=\int_{-\infty}^\infty \hat f(\omega)e^{i2\pi\omega t}\, d\omega$$
</div>


From this, it can easily be seen that

<div>
$$
\begin{align}
\mathcal F \{af(t)\} &= a \hat{f}(\omega) \\
\mathcal F \left\{ \frac{d^n}{dt^n} f(t)\right\} &= (i\omega)^n \hat{f}(\omega) \\
\mathcal F \left\{\int_{-\infty}^tf(\tau)\,d\tau\right\} &= \frac{1}{i\omega} \hat{f}(\omega)
\end{align}$$
</div>

amongst other properties. This is used to convert from frequency to time.

### Single Derivation (Update <span class="inline-math">$E_x$</span>)

Consider one of the curl equations,

<div>
$$\nabla\times\mathbf H(\omega) = \cancel{\sigma\mathbf E(\omega)}+i\omega\varepsilon_0[\varepsilon_{ij}][s_{ij}]\mathbf E(\omega)$$
</div>

and specifically the x coordinate:

<div>
$$\frac{ \partial H_z }{ \partial y } - \frac{ \partial H_y }{ \partial z } = i\omega\varepsilon_0\varepsilon_{xx} \frac{s_ys_z}{s_x}E_x$$
</div>

Perform normalisation of <span class="inline-math">$\mathbf H$</span> field as usual, and replace the x-coordinate of the curl with <span class="inline-math">$C_x^H(\omega)$</span> for ease of notation. Rearranging:

<div>
$$
\begin{align}
s_xC_x^{\tilde H}(\omega) &= \frac{\varepsilon_{xx}}{c_0}s_ys_zi\omega E_x(\omega) \\
\implies \left( 1+\frac{\sigma_x}{i\omega\varepsilon_0} \right) C_x^{\tilde H}(\omega) &= \frac{\varepsilon_{xx}}{c_0}\left( 1+\frac{\sigma_y}{i\omega\varepsilon_0} \right)\left( 1+\frac{\sigma_z}{i\omega\varepsilon_0} \right) i\omega E_x(\omega) \\
\implies \frac{c_0}{\varepsilon_{xx}} C_x^{\tilde H}(\omega) + \frac{1}{i\omega}\frac{c_0\sigma_x}{\varepsilon_0\varepsilon_{xx}} C_x^{\tilde H}(\omega) &= i\omega E_x(\omega)+ \frac{\sigma_y+\sigma_z}{\varepsilon_0}E_x(\omega)+\frac{1}{i\omega} \frac{\sigma_y\sigma_z}{\varepsilon_0^2}E_x(\omega)
\end{align}$$
</div>

Now we perform inverse Fourier transform to both sides to convert to time domain:

<div>
$$
\begin{align}
\mathcal F^{-1} \left\{ \frac{c_0}{\varepsilon_{xx}} C_x^{\tilde H}(\omega) + \frac{1}{i\omega}\frac{c_0\sigma_x}{\varepsilon_0\varepsilon_{xx}} C_x^{\tilde H}(\omega) \right\} &= \mathcal F^{-1} \left\{ i\omega E_x(\omega)+ \frac{\sigma_y+\sigma_z}{\varepsilon_0}E_x(\omega)+\frac{1}{i\omega} \frac{\sigma_y\sigma_z}{\varepsilon_0^2}E_x(\omega) \right\} \\
\implies \frac{c_0}{\varepsilon_{xx}} C_x^{\tilde H}(t) + \frac{c_0\sigma_x}{\varepsilon_0\varepsilon_{xx}} \int_{-\infty}^t C_x^{\tilde H}(\tau)\,d\tau &= \frac{ \partial E_x }{ \partial t } + \frac{\sigma_y+\sigma_z}{\varepsilon_0} E_x(t) + \frac{\sigma_y\sigma_z}{\varepsilon_0^2} \int_{-\infty}^t E_x(\tau)\,d\tau
\end{align}$$
</div>

For simplification, set <span class="inline-math">$c_0=\varepsilon_0=1$</span> and make <span class="inline-math">$\varepsilon=\varepsilon_{xx}=\varepsilon_{yy}=\varepsilon_{zz}$</span>. Now we have to discretise - do term-by-term:

<div>
$$
\begin{align}
\frac{1}{\varepsilon}C_x^{\tilde H}(t) &\approx \frac{1}{\varepsilon^{i,j,k}}C_x^{\tilde H}(t) \\
\frac{\sigma_x}{\varepsilon}\int_{-\infty}^t C_x^{\tilde H}(\tau)\,d\tau &\approx \frac{\sigma_x\, dt}{\varepsilon} \sum_{\tau=\frac{dt}{2}}^{t-\frac{dt}{2}} C_x^{\tilde H}(\tau) \\
\frac{ \partial E_x }{ \partial t } &\approx \frac{E_x^{i,j,k}(t+dt)-E_x^{i,j,k}(t)}{dt} \\
(\sigma_x+\sigma_y)E_x(t) &\approx (\sigma_x+\sigma_y) \frac{E_x^{i,j,k}(t)+E_x^{i,j,k}(t+dt)}{2} \\
\sigma_y\sigma_z\int_{-\infty}^t E_x(\tau)\,d\tau &\approx \sigma_y\sigma_z\, dt\left(\frac{E_x^{i,j,k}(t+dt)+E_x^{i,j,k}(t)}{4} + \sum_{\tau=0}^t E_x^{i,j,k}(\tau)\right)
\end{align}
$$
</div>

Recall that 
<div>
$$C_x^{\tilde H}(t)=\frac{\tilde H_z^{i,j+\frac{1}{2},k}\left( t+\frac{dt}{2} \right) - \tilde H_z^{i,j-\frac{1}{2},k}\left( t+\frac{dt}{2} \right)}{dy} - \frac{\tilde H_y^{i,j,k+\frac{1}{2}}\left( t+\frac{dt}{2} \right)-\tilde H_y^{i,j,k-\frac{1}{2}}\left( t+\frac{dt}{2} \right)}{dz}$$
</div>
- i.e. lives at positional coordinates <span class="inline-math">$(i,j,k)$</span> with time at <span class="inline-math">$t+\frac{dt}{2}$</span>.

From this equation it is possible to rearrange for <span class="inline-math">$E_x^{i,j,k}(t+dt)$</span> which completes the update equation for <span class="inline-math">$E_x$</span>.

### <span class="inline-math">$E_z$</span> Mode Update

Performing this for <span class="inline-math">$H_x$</span>, <span class="inline-math">$H_y$</span> and <span class="inline-math">$E_z$</span> (i.e. the <span class="inline-math">$E_z$</span> mode) in 2D (<span class="inline-math">$\frac{ \partial }{ \partial z }=\sigma(z)=0$</span>) yields (thanks GPT):

**Update Coefficients:**

<div>
$$
\begin{aligned}
A_E &= 1 \;+\; \frac{\Delta t}{2\varepsilon_0}(\sigma_x+\sigma_y)
        \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_x\sigma_y\\[4pt]
B_E &= 1 \;-\; \frac{\Delta t}{2\varepsilon_0}(\sigma_x+\sigma_y)
        \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_x\sigma_y\\[4pt]
C_E &= \frac{\Delta t}{\varepsilon_0\varepsilon}\left(1+\frac{\Delta t}{2\varepsilon_0}\sigma_z\right)\\[6pt]
D_E &= \frac{\Delta t^2}{4\varepsilon_0^2\varepsilon^2}\Bigl(\sigma_x\sigma_y
        \;-\;\sigma_z(\sigma_x+\sigma_y)\;+\;\sigma_z^2\Bigr) \\[4pt]
A_{H_x} &= 1 \;+\; \frac{\Delta t}{2\varepsilon_0}(\sigma_y+\sigma_z)
           \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_y\sigma_z\\[4pt]
B_{H_x} &= 1 \;-\; \frac{\Delta t}{2\varepsilon_0}(\sigma_y+\sigma_z)
           \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_y\sigma_z\\[4pt]
C_{H_x} &= \frac{\Delta t}{\mu_0\mu}\left(1+\frac{\Delta t}{2\varepsilon_0}\sigma_x\right)\\[6pt]
D_{H_x} &= \frac{\Delta t^2}{4\varepsilon_0^2}\Bigl(\sigma_y\sigma_z
           \;-\;\sigma_x(\sigma_y+\sigma_z)\;+\;\sigma_x^2\Bigr)\\[4pt]
A_{H_y} &= 1 \;+\; \frac{\Delta t}{2\varepsilon_0}(\sigma_z+\sigma_x)
           \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_z\sigma_x\\[4pt]
B_{H_y} &= 1 \;-\; \frac{\Delta t}{2\varepsilon_0}(\sigma_z+\sigma_x)
           \;+\; \frac{\Delta t^2}{4\varepsilon_0^2}\,\sigma_z\sigma_x\\[4pt]
C_{H_y} &= \frac{\Delta t}{\mu_0\mu}\left(1+\frac{\Delta t}{2\varepsilon_0}\sigma_y\right)\\[6pt]
D_{H_y} &= \frac{\Delta t^2}{4\varepsilon_0^2}\Bigl(\sigma_z\sigma_x
           \;-\;\sigma_y(\sigma_z+\sigma_x)\;+\;\sigma_y^2\Bigr)
\end{aligned}
$$
</div>

**Discrete Integral Terms:**

<div>
$$
\begin{aligned}
S_{E}^{\,i,j}\bigl(t+\tfrac{\Delta t}{2}\bigr)
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}}
        E_z^{\,i,j}(\tau)\,\Delta t\\[6pt]
S_{H_x}^{\,i,j+\frac12}\bigl(t+\tfrac{\Delta t}{2}\bigr)
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}}
        H_x^{\,i,j+\frac12}(\tau)\,\Delta t\\[6pt]
S_{H_y}^{\,i+\frac12,j}\bigl(t+\tfrac{\Delta t}{2}\bigr)
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}}
        H_y^{\,i+\frac12,j}(\tau)\,\Delta t
\end{aligned}
$$
</div>

**Step 1A - Update** <span class="inline-math">$H_x$</span> **and** <span class="inline-math">$H_y$</span> (<span class="inline-math">$t= \frac{1}{2}, \frac{3}{2}, \dots$</span>)

<div>
$$
\begin{aligned}
\displaystyle
A_{H_x}\;H_x^{\,i,j+\frac12}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
&= B_{H_x}\;H_x^{\,i,j+\frac12}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)
\;-\; C_{H_x}\;\frac{E_z^{\,i,j}\!(t) - E_z^{\,i,j-1}\!(t)}{\Delta y}
\\[6pt]
&\qquad\qquad\qquad\qquad
\;-\; D_{H_x}\;S_{H_x}^{\,i,j+\frac12}\!\bigl(t-\tfrac{\Delta t}{2}\bigr) \\[6pt]
A_{H_y}\;H_y^{\,i+\frac12,j}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
&= B_{H_y}\;H_y^{\,i+\frac12,j}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)
\;+\; C_{H_y}\;\frac{E_z^{\,i+1,j}\!(t) - E_z^{\,i,j}\!(t)}{\Delta x}
\\[6pt]
&\qquad\qquad\qquad\qquad
\;-\; D_{H_y}\;S_{H_y}^{\,i+\frac12,j}\!\bigl(t-\tfrac{\Delta t}{2}\bigr).
\end{aligned}
$$
</div>

**Step 1B - Update Integrals of** <span class="inline-math">$H_x$</span> and <span class="inline-math">$H_y$</span>:

<div>
$$
\begin{aligned}
S_{H_x}^{\,i,j+\frac12}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
&= S_{H_x}^{\,i,j+\frac12}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)
\;+\;\frac{\Delta t}{2}\Bigl(H_x^{\,i,j+\frac12}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
+H_x^{\,i,j+\frac12}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)\Bigr) \\
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}} H_x^{\,i,j+\frac12}(\tau)\,\Delta t \\[6pt]
S_{H_y}^{\,i+\frac12,j}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
&= S_{H_y}^{\,i+\frac12,j}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)
\;+\;\frac{\Delta t}{2}\Bigl(H_y^{\,i+\frac12,j}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)
+H_y^{\,i+\frac12,j}\!\bigl(t-\tfrac{\Delta t}{2}\bigr)\Bigr) \\
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}} H_y^{\,i+\frac12,j}(\tau)\,\Delta t
\end{aligned}
$$
</div>

**Step 2A - Update** <span class="inline-math">$E_z$</span> (<span class="inline-math">$t=1,2,\dots$</span>):

<div>
$$
\begin{aligned}
A_E\;E_z^{\,i,j}\!\bigl(t+\Delta t\bigr)
&= B_E\;E_z^{\,i,j}\!(t)
\;+\; C_E\;\Biggl[
        \frac{H_y^{\,i+\frac12,j}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)-H_y^{\,i-\frac12,j}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)}{\Delta x}
        \\[-2pt]
&\qquad\qquad\qquad\quad
        -\frac{H_x^{\,i,j+\frac12}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)-H_x^{\,i,j-\frac12}\!\bigl(t+\tfrac{\Delta t}{2}\bigr)}{\Delta y}
    \Biggr]
\;-\; D_E\;S_{E}^{\,i,j}\bigl(t+\tfrac{\Delta t}{2}\bigr)
\end{aligned}
$$
</div>

**Step 2B - Update Integral of** <span class="inline-math">$E_z$</span>:

<div>
$$
\begin{aligned}
S_{E}^{\,i,j}\bigl(t+\tfrac{\Delta t}{2}\bigr)
&= S_{E}^{\,i,j}\bigl(t-\tfrac{\Delta t}{2}\bigr)
\;+\;\frac{\Delta t}{2}\Bigl(E_z^{\,i,j}\!(t+\Delta t)+E_z^{\,i,j}\!(t)\Bigr)\\
&\;=\;\sum_{\tau=\tfrac{\Delta t}{2}}^{\,t+\tfrac{\Delta t}{2}} E_z^{\,i,j}(\tau)\,\Delta t.
\end{aligned}
$$
</div>

I sure hope these coefficients are right because I'm sure as hell not deriving them manually :(

## Implementation

Implemented everything in one go - building off the old 2D simulation; organised sections with comments for readability purposes.

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# --- SIMULATION PARAMETERS ---

N = 100  # Grid resolution
L = 0.1  # Thickness of PML
X, Y = 1.0, 1.0  # Domain size
dx, dy = X / N, Y / N  # Spatial steps
dt = 0.005  # Time step
T = 1.0  # Total time
rec_interval = 2  # Snapshot interval for animation

eps0, mu0 = 1.0, 1.0  # Vacuum constants

# --- FIELDS AND MATERIALS ---

Hx, Hy = np.zeros((N, N-1)), np.zeros((N-1, N))  # Magnetic fields
Ez = np.zeros((N, N))  # Electric field

eps = np.ones((N, N))  # Permittivity
mu = np.ones((N, N))  # Permeability

def create_gaussian_pulse(cx, cy, r, A=1.0):
    x = np.linspace(0, X, N)
    y = np.linspace(0, Y, N)
    X_grid, Y_grid = np.meshgrid(x, y)
    return A * np.exp(-((X_grid - cx)**2 + (Y_grid - cy)**2) / (2 * r**2))
Ez = create_gaussian_pulse(X/2, Y/2, 0.05, 1.0)

def create_material(x0, x1, y0, y1, permittivity=1.0, permeability=1.0):
    global eps, mu
    i0 = int(np.floor(x0 / dx)); i1 = int(np.ceil(x1 / dx))
    j0 = int(np.floor(y0 / dy)); j1 = int(np.ceil(y1 / dy))
    i0, i1 = max(0, i0), min(N, i1)
    j0, j1 = max(0, j0), min(N, j1)
    eps[j0:j1, i0:i1] = permittivity
    mu[j0:j1, i0:i1] = permeability
MATERIALS = []
for mat in MATERIALS:
    create_material(*mat)

# --- HELPERS ---

def stagger_H(arr, axis):  # axis=0 for Hx: (N,N)->(N,N-1); else Hy: (N,N)->(N-1,N)
    if not axis: return 0.5 * (arr[:, :-1] + arr[:, 1:])
    else: return 0.5 * (arr[:-1, :] + arr[1:, :])

def center_H(Hx, Hy):
    Hx_c = np.zeros((N, N))
    Hy_c = np.zeros((N, N))
    if N > 2: Hx_c[:, 1:-1] = 0.5 * (Hx[:, 1:] + Hx[:, :-1])
    Hx_c[:, 0] = Hx[:, 0]; Hx_c[:, -1] = Hx[:, -1]
    if N > 2: Hy_c[1:-1, :] = 0.5 * (Hy[1:, :] + Hy[:-1, :])
    Hy_c[0, :]  = Hy[0, :]; Hy_c[-1, :] = Hy[-1, :]
    return Hx_c, Hy_c

mu_x = stagger_H(mu, 0); mu_y = stagger_H(mu, 1)

# Conductivity terms for UPML

sx = np.zeros((N, N)); sy = np.zeros((N, N))
for i in range(N):
    for j in range(N):
        if i*dx < L:
            sx[i, j] = 1/(2*dt)*((L-i*dx)/L)**3
        elif (X-i*dx) < L:
            sx[i, j] = 1/(2*dt)*((L-(X-i*dx))/L)**3
        if j*dy < L:
            sy[i, j] = 1/(2*dt)*((L-j*dy)/L)**3
        elif (Y-j*dy) < L:
            sy[i, j] = 1/(2*dt)*((L-(Y-j*dy))/L)**3
sx_E, sy_E = sx, sy  # For Ez at (i,j)
sx_Hx, sy_Hx = stagger_H(sx, 0), stagger_H(sy, 0)  # For Hx at (i,j+1/2)
sx_Hy, sy_Hy = stagger_H(sx, 1), stagger_H(sy, 1)  # For Hy at (i+1/2,j)

# Update coefficients for E

a_E = 1 + dt/(2*eps0)*(sx_E + sy_E) + dt**2/(4*eps0**2)*sx_E*sy_E
b_E = (1 - dt/(2*eps0)*(sx_E + sy_E) + dt**2/(4*eps0**2)*sx_E*sy_E) / a_E
c_E = (dt/(eps*eps0)) / a_E
d_E = (dt**2/(4*(eps0*eps)**2)*sx_E*sy_E) / a_E

# Update coefficients for Hx

a_Hx = 1 + dt/(2*eps0)*sy_Hx
b_Hx = (1 - dt/(2*eps0)*sy_Hx) / a_Hx
c_Hx = (dt/(mu_x*mu0) * (1 + dt/(2*eps0)*sx_Hx)) / a_Hx
d_Hx = (dt**2/(4*eps0**2)*(sx_Hx**2 - sx_Hx*sy_Hx)) / a_Hx

# Update coefficients for Hy

a_Hy = 1 + dt/(2*eps0)*sx_Hy
b_Hy = (1 - dt/(2*eps0)*sx_Hy) / a_Hy
c_Hy = (dt/(mu_y*mu0) * (1 + dt/(2*eps0)*sy_Hy)) / a_Hy
d_Hy = (dt**2/(4*eps0**2)*(sy_Hy**2 - sx_Hy*sy_Hy)) / a_Hy

# Integral terms

s_E = np.zeros((N, N))
s_Hx = np.zeros((N, N-1))
s_Hy = np.zeros((N-1, N))

# --- SIMULATION LOOP ---

def update(half_step):
    global Hx, Hy, Ez, s_Hx, s_Hy, s_E
    if half_step:
        Hx_old = Hx.copy(); Hy_old = Hy.copy()
        Hx = b_Hx * Hx - c_Hx * (Ez[:, 1:] - Ez[:, :-1]) / dy - d_Hx * s_Hx
        Hy = b_Hy * Hy + c_Hy * (Ez[1:, :] - Ez[:-1, :]) / dx - d_Hy * s_Hy
        s_Hx += dt/2 * (Hx + Hx_old)
        s_Hy += dt/2 * (Hy + Hy_old)
    else:
        Ez_old = Ez.copy()
        Ez[1:-1, 1:-1] = b_E[1:-1, 1:-1] * Ez[1:-1, 1:-1] + c_E[1:-1, 1:-1] * (
            (Hy[1:, 1:-1] - Hy[:-1, 1:-1]) / dx -
            (Hx[1:-1, 1:] - Hx[1:-1, :-1]) / dy
        ) - d_E[1:-1, 1:-1] * s_E[1:-1, 1:-1]
        Ez[0, :] = Ez[-1, :] = Ez[:, 0] = Ez[:, -1] = 0.0  # Dirichlet BC
        s_E += dt/2 * (Ez + Ez_old)

def run_simulation(steps):
    global Hx, Hy, Ez, MATERIALS
    hist_Hx, hist_Hy, hist_Ez = [], [], []
    hist_Hx.append(Hx.copy())
    hist_Hy.append(Hy.copy())
    hist_Ez.append(Ez.copy())
    
    for step in range(steps):
        update(1)  # Half-step for H
        update(0)  # Full-step for E
        if (step+1) % rec_interval == 0:
            hist_Hx.append(Hx.copy())
            hist_Hy.append(Hy.copy())
            hist_Ez.append(Ez.copy())
    return hist_Hx, hist_Hy, hist_Ez

# --- VISUALISATION ---

def visualise(hist_Hx, hist_Hy, hist_Ez, show_H=False, save=False):
    fig, ax = plt.subplots()
    Xc, Yc = np.meshgrid(np.arange(N) * dx + 0.5 * dx, np.arange(N) * dy + 0.5 * dy)

    # Material plots
    mat_rects = []
    for mat in MATERIALS:
        rect = ax.fill_between([mat[0], mat[1]], mat[3], mat[2], color=(abs(mat[4]-1)/9, 0, abs(mat[5]-1)/9, 0.5), edgecolor='k', linewidth=1.0, alpha=0.5, zorder=5)
        mat_rects.append(rect)
    pml_borders = [
        ax.fill_between([0, L], 0, Y-L, color=(0.5, 0.5, 0.5, 0.3), linewidth=0.0, alpha=0.3, zorder=4),
        ax.fill_between([0, X-L], Y-L, Y, color=(0.5, 0.5, 0.5, 0.3), linewidth=0.0, alpha=0.3, zorder=4),
        ax.fill_between([X-L, X], L, Y, color=(0.5, 0.5, 0.5, 0.3), linewidth=0.0, alpha=0.3, zorder=4),
        ax.fill_between([L, X], 0, L, color=(0.5, 0.5, 0.5, 0.3), linewidth=0.0, alpha=0.3, zorder=4)
    ]
    for i in pml_borders: mat_rects.append(i)

    # E and H plots
    im = ax.imshow(hist_Ez[0], origin='lower', extent=(0, X, 0, Y),
                   cmap='RdBu', vmin=-1.0, vmax=1.0, interpolation='bilinear', zorder=1)
    quiv = None
    if show_H:
        quiver_scale = 5.0
        quiver_width = 0.002
        quiver_color = (0, 0, 0, 0.5)
        Hx_c0, Hy_c0 = center_H(hist_Hx[0], hist_Hy[0])
        quiv = ax.quiver(Xc[::2, ::2], Yc[::2, ::2],
                         Hx_c0[::2, ::2], Hy_c0[::2, ::2],
                         scale=quiver_scale, pivot='mid', width=quiver_width, color=quiver_color, zorder=3)
    
    ax.set_xlabel('x'); ax.set_ylabel('y')
    ax.set_title('2D FDTD Simulation')
    ax.set_xlim(0, X); ax.set_ylim(0, Y)
    cb = plt.colorbar(im, ax=ax, fraction=0.046, pad=0.04)

    time_text = ax.text(0.02, 0.95, '', transform=ax.transAxes, color='k')

    def animate(i):
        im.set_array(hist_Ez[i])
        if show_H:
            Hx_c, Hy_c = center_H(hist_Hx[i], hist_Hy[i])
            quiv.set_UVC(Hx_c[::2, ::2], Hy_c[::2, ::2])
        time_text.set_text(f't = {i*dt*rec_interval:.3f} s')
        return [im, time_text, *mat_rects] + ([quiv] if show_H else [])
    ani = animation.FuncAnimation(fig, animate, frames=len(hist_Ez), interval=10, blit=True)
    if save:
        ani.save('output.gif', writer='ffmpeg', fps=30)
    plt.show()

hist_Hx, hist_Hy, hist_Ez = run_simulation(int(T/dt))
visualise(hist_Hx, hist_Hy, hist_Ez, show_H=True, save=True)
```

Tested with the same free-space setup as before:

<div style="text-align:center">
  <img src="/assets/images/FDTD_aniso_sim_1.gif" alt="FDTD_aniso_sim_1.gif" />
</div>

Looks like the PML is functioning. Testing materials:

<div style="text-align:center">
  <img src="/assets/images/FDTD_aniso_sim_2.gif" alt="FDTD_aniso_sim_2.gif" />
</div>

Good work. Time to retire.
