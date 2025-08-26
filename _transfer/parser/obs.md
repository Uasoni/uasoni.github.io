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
