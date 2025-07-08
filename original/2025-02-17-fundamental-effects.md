---
layout: post
title: Special Relativity - Fundamental Effects
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Motivation and Setup]]; **Next**: [[Velocity Addition]]
___
## Breaking Simultaneity

Most intuitive effect. Consider a setup with two lightbulbs on either side of a person $A$, all at rest relative to an inertial frame moving in the direction of one of the lightbulbs. An observer $B$ 'outside' of the frame sees all objects moving at speed $v$.

In $A$'s frame, the light from the bulbs reaches $A$ at exactly the same time - simultaneous events. In $B$'s frame, since speed of light constant, the light from the bulb in the direction of movement reaches $A$ earlier than the other bulb. Simultaneity broken.
### Observed vs Relative Speed

In non-relativistic regime, observed speed is equivalent to relative speed. That is, in some external frame $S$, the **observed speed** of $A$ from the frame of $B$ can be calculated as $$v_O = v_A-v_B$$ where $v_A$ and $v_B$ are the **observed speeds** of $A$ and $B$ respectively from $S$. The **relative speed** of $A$ from $B$ is calculated the same way - as $v_R = v_A - v_B$.

The difference between the two is that observed speed requires a frame-of-reference shift, while relative speed does not (we stay in the reference frame of $S$). This matters when working in a relativistic regime. In that case, the observed speed requires the [[Velocity Addition]] formula $$v_O = \frac{v_A-v_B}{1-\frac{v_Av_B}{c^2}}$$while the relative velocity's magnitude is able to take any value $0 \leq v_R \leq 2c$ and is still calculated by $v_A-v_B$. The way to think about this as a physical property is the "speed at which the distance between $A$ and $B$ changes in the frame of $S$" - which is allowed to exceed $c$.

The other way of thinking about it is that both can be considered "relative speed" - observed speed is $A$ relative to $S$ from the frame of $S$, while the relative speed is $A$ relative to $B$ from $S$.
### Quantitative Analysis

Quantify the simultaneity violation utilising relative velocity. Set the direction of movement to be right. The light from the left bulb moves *relative* to the bulb in frame $B$ at $c+v$, while the right-bulb light moves at speed $c-v$ *relative* to the right bulb. Given that $v > 0$ it's easy to see that the times to reach $A$ are $t_l = \frac{L}{2(c+v)}$ and $t_r = \frac{L}{2(c-v)}$, and that $t_l < t_r$ ($L$ is the distance between the two bulbs in frame $B$).

In fact, the time difference is
$$\Delta t = t_r-t_l=\frac{L}{2(c-v)}-\frac{L}{2(c+v)}=\boxed{\frac{Lv}{c^2-v^2}}$$
### Rear-Clock Effect

Physically manifests in the fixed offset of clocks when moving at equal velocities observed from some other frame. Consider the following setup: place two clocks at a length $L$ apart stationary relative to right-moving inertial frame $A$ (right-moving with speed $v$ relative to external frame $B$). Place a pulse light between the two clocks such that a pulse hits both clocks *simultaneously in $B$*.

The idea behind this setup is to figure out what *internal time* the clocks display (i.e. time in frame $A$) when both are observed simultaneously in frame $B$ - equivalent to firing a pulse of light to simultaneously hit both clocks.

To find where the pulse light should be placed, consider that length contraction is independent of position. Hence, if the light must be placed forming distances in ratio $c+v:c-v$ in frame $B$, they must be placed in the same ratio in frame $A$. We have
$$(c+v):(c-v)\implies \odot\leftarrow\frac{L(c+v)}{2c}\rightarrow \star \leftarrow \frac{L(c-v)}{2c}\rightarrow\odot$$
(creatively setting $\odot$ to be the clocks and $\star$ to be the light). This forces simultaneity of clock illumination in $B$. Examine then what happens in $A$ ($t_l$ is illumination time of left clock, $t_r$ for right clock):
$$t_l=\frac{\frac{L}{2c}(c+v)}{c},\,t_r=\frac{\frac{L}{2c}(c-v)}{c}\implies \Delta t=t_r-t_l=\frac{\frac{L}{2}(2v)}{c^2}=\boxed{\frac{Lv}{c^2}}$$
Hence the left clock is *ahead* by $\frac{Lv}{c^2}$ seconds. Remember that $L$ is the proper length between the two clocks (i.e. the distance between the clocks in their own frame).
## Time Dilation

Clocks tick slower depending on their velocity to you. We can construct a pulse clock using the distance that light travels in one second i.e. $c \text{ m}$ (treating $c$ as a dimensionless constant). Consider a box (frame $B$) of height $\frac{c}{2}\text{ m}$ which travels rightwards with speed $v$ in the frame of an external observer $S$. At the bottom of the box is a laser pointing upwards - at the top of the box is a mirror facing downwards.

Consider the clock frame - light takes $1\text{ s}$ to travel up and down since we made the values so nice.

Consider the observer frame - light takes a slanted path since it's being moved. The vertical speed of the light is $$v_y=\sqrt{c^2-v^2}$$ and hence the time taken is $$t_S=\frac{c}{\sqrt{c^2-v^2}}=\boxed{\frac{1}{\sqrt{1-\frac{v^2}{c^2}}}}=\gamma t_B$$ where we have defined $\gamma \coloneqq \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}$. Notice $0 \leq \frac{v^2}{c^2} \leq 1 \implies \gamma \geq 1$.
### Paradoxes

A common paradox is to observe that in frame $B$, a clock held by an observer at rest in frame $S$ would run slower than that in frame $B$. This is fine (remember postulate that $S$ sees $S'$ the same way that $S'$ sees $S$).

> If $S$ sees $B$ slower and $B$ sees $S$ run slower, than doesn't everything become infinitely slow just by alternating reference frames?

Clocks cannot run infinitely slow since $t_S = \gamma t_B$ and $t_B = \gamma t_S$ define the behaviour of two different clocks; the $B$ clock and the $S$ clock respectively. It cannot be 'substituted' since the actual dilation principle can be written as $$\Delta t_{\text{obs}}=\gamma \Delta t_{\text{prop}}$$ - i.e. proper time doesn't 'transfer' across reference frames (definitionally tied to only one frame).

The other way to think about it would be time dilation states that the elapsed time between two events occurring *at the same location* in one frame is observed to be longer in another frame. Clock $B$'s ticks in $S$'s frame would not be at the same location, and vice-versa.
## Length Contraction

Don't like the light-length measuring derivation cause it's very unintuitive that time becomes space (even though that's sort of the whole point of SR); also why do we just measure distance with light and call it a day; surely distance is still the same distance?
> A: Information travels at the speed of light; 'measured' relativity deals with the information taken from various frames of reference (such as length information which requires the light beam firing setup). "Distance is still the same distance" refers to the idea of an invariant (frame independent) 'proper length' - i.e. the length of an object in its own reference frame is universally agreed upon.

Nevertheless, an alternative derivation is provided.

### Quantitative Analysis

Consider the setup: person $A$ stands at rest above a plank of proper length $L$. Person $B$ flies along the plank at a speed $v$ in $A$'s frame.

The time in $A$'s frame that $B$ takes to traverse the plank is simply $\frac{L}{v}$. However, the time that it takes in $B$'s frame to traverse the plank is obtained via the time dilation result - $A$ sees $B$'s clock run slow by a factor of $\gamma$, so the elapsed time which $B$'s clock measures moving across the plank is $\frac{L}{\gamma v}$. So $B$ measures the length in their frame to be $$\frac{L}{\gamma v}\cdot\frac{1}{v}=\boxed{\frac{L}{\gamma}}$$ as desired.

## Frame Independence

There are certain things agreed on by all frames:
- Proper length/time; the length/time of an object in its own reference frame.
- The *reading* of a clock; if an event happens at a clock, its reading $T$ when that event happens is agreed upon by all frames (The rear-clock effect vanishes since $L=0$).
- The difference in *readings* of clocks; i.e. if a clock reads $T_1$ before a set of events and reads $T_2$ after, the difference $T_2-T_1$ is invariant (since both $T_1$ and $T_2$ are invariant).
	- N.B. This one does not care about distance - e.g. an event can happen at one clock and move to another clock.
- If an event happens, it happens.
## Problems

#### Muon Decay I
A muon takes $T = 2\cdot 10^{-6}\text{ s}$ to decay in its own frame. A muon is created $20\text{ km}$ above the earth's surface and travels vertically downwards at $v=0.9999c$ ($\gamma\approx70$). Does it reach the earth?
##### Solution
Yes. Time is dilated in the earth's frame, so the muon's internal clock ticks slower.
$$s_{\text{max}}=vt_{\text{max}}=v\gamma t_{\text{life}}\approx4\cdot10^4\text{ m} > 2\cdot10^4\text{ m}$$
#### Muon Decay II
Consider the same muon created $20\text{ km}$ above the earth's surface. In it's own frame, it's internal clock ticks at a normal rate - in that case, would the muon be able to reach the earth's surface? Is there a contradiction?
##### Solution
No, the muon would still be able to reach the earth. The distance it needs to travel is contracted.
$$t_{\text{req}}=\frac{s_{\text{obs}}}{v}=\frac{s_{\text{prop}}}{\gamma v}=9.52\cdot 10^{-7}\text{ s} < 2\cdot10^{-6}\text{ s}$$
#### Train Clapping Distance
Two people stand a proper distance $L$ apart on a platform, and clap simultaneously in the ground frame. A train is travelling at a speed $v$ rightwards. From the train's perspective, what is the distance between the claps?
##### Solution I
Give each person clocks synchronised in the ground frame, such that each person claps when their clock hits 0. Loss of simultaneity means that in the train frame, the people move left with speed $v$, and the right person's clock hits 0 while the left person's clock reads $\frac{Lv}{c^2}$. Since ground clocks tick slower from the train frame, the time until the left person claps according to the train is $\frac{Lv\gamma}{c^2}$, and thus $\Delta x = \frac{Lv^2\gamma}{c^2}$. The total distance between the two events is thus $$s=\frac{L}{\gamma}+\frac{Lv^2\gamma}{c^2}=\gamma L\left(\frac{1}{\gamma^2}+\frac{v^2}{c^2}\right)=\gamma L$$
##### Solution II
Assume the claps create a kind of 'frozen' marker in space (maybe a persistent pulse of light). The ground sees them a distance $L$ apart. Since the train is moving, whatever the markers' distance is on the train ($L'$), the ground sees them contracted so that $L=\frac{L'}{\gamma}$ - hence $L' = \gamma L$.
#### Stick and Person
A stick with proper length $L$ passes over a person at rest with speed $v$. There is a time interval between when the front of the stick passes over the person and when the back passes over. What is this time interval:
	a) In the frame of the person, working in the person's frame?
	b) In the frame of the person, working in the stick's frame?
	c) In the frame of the stick, working in the stick's frame?
	d) In the frame of the stick, working in the person's frame?
##### Solution
a) The person sees the stick length contracted to $\frac{L}{\gamma}$. Hence the time duration they measure is $\frac{L}{\gamma v}$.
b) Give the person a clock which starts timing as the front of the stick passes over it (frame independent). The stick measures the time of passing over to be $\frac{L}{v}$. This duration appears on the person's clock as $\frac{L}{\gamma v}$, since for the stick, the person's clock runs slow (hence time displayed will be lower).
c) The stick measures the time of passing over to be $\frac{L}{v}$ (as previously determined for part b).
d) Create two clocks at either end of the stick placed apart with proper distance $L$. The person sees the two clocks fly by with speed $v$, so synchronising so that the front clock reads 0 when passing over the person, the back clock will read $\frac{Lv}{c^2}$. As in part a, the person's measured time is $\frac{L}{\gamma v}$, but since the rear clock on the stick runs slowly to the person, the final time is given by $$\frac{Lv}{c^2}+\frac{L}{\gamma^2 v}=\frac{L}{v}\left(\frac{v^2}{c^2}+\frac{1}{\gamma^2}\right)=\frac{L}{v}$$
#### Photon and Train
A photon firer is attached at the back of a train moving with speed $v$ relative to the ground with proper length $L$. Attach clocks synchronised in the train frame to the front and back, and fire a photon when the back clock hits 0. Prove that the front clock reads $\frac{L}{c^2}$ whether you take the train or ground frame.
##### Solution
In the train frame, the distance the photon travels is $L$. Simultaneity forces that the front clock reads 0 when the photon is fired - hence $t = \frac{L}{c}$.
In the ground frame, the front clock reads $-\frac{Lv}{c^2}$ when the photon is fired. It travels a contracted length $\frac{L}{\gamma}$, with a relative speed $c-v$. Hence time elapsed and clock time is $$t_e = \frac{L}{\gamma^2}\frac{1}{c-v}\implies t=\frac{L}{\gamma^2(c-v)}-\frac{Lv}{c^2}=\frac{L\left(1-\dfrac{v^2}{c^2}\right)}{c\left(1-\dfrac{v}{c}\right)}-\frac{Lv}{c^2}=\frac{L}{c}\left(\frac{1-v^2/c^2}{1-v/c}-\frac{v}{c}\right)=\boxed{\frac{L}{c}}$$
#### Rod Angle
Consider a rod with proper length $L$ at rest in a frame $S$ making an angle $\theta$ with the positive x-axis. A frame $S'$ moves with speed $v$ in the positive x-axis direction of frame $S$ (and has aligned axes). What is the angle that the rod makes with the positive x-axis taken from frame $S'$?
##### Solution
Length is contracted only in the parallel direction.
$$L'_x=\frac{L_x}{\gamma},L'_y=L_y\implies\theta'=\tan^{-1}\left(\gamma\frac{L_y}{L_x}\right)=\tan^{-1}(\gamma\tan\theta)$$