---
layout: post
title: SR 1.1 - Fundamental Effects
tags: [SR, Notes]
---

## Navigation

**Previous**: [[Motivation and Setup]]; **Next**: [[Velocity Addition]]
___

## Breaking Simultaneity

Most intuitive effect. Consider a setup with two lightbulbs on either side of a person <span class="inline-math">$A$</span>, all at rest relative to an inertial frame moving in the direction of one of the lightbulbs. An observer <span class="inline-math">$B$</span> 'outside' of the frame sees all objects moving at speed <span class="inline-math">$v$</span>.

In <span class="inline-math">$A$</span>'s frame, the light from the bulbs reaches <span class="inline-math">$A$</span> at exactly the same time - simultaneous events. In <span class="inline-math">$B$</span>'s frame, since speed of light constant, the light from the bulb in the direction of movement reaches <span class="inline-math">$A$</span> earlier than the other bulb. Simultaneity broken.

### Observed vs Relative Speed

In non-relativistic regime, observed speed is equivalent to relative speed. That is, in some external frame <span class="inline-math">$S$</span>, the **observed speed** of <span class="inline-math">$A$</span> from the frame of <span class="inline-math">$B$</span> can be calculated as 
<div>
$$v_O = v_A-v_B$$
</div>
 where <span class="inline-math">$v_A$</span> and <span class="inline-math">$v_B$</span> are the **observed speeds** of <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> respectively from <span class="inline-math">$S$</span>. The **relative speed** of <span class="inline-math">$A$</span> from <span class="inline-math">$B$</span> is calculated the same way - as <span class="inline-math">$v_R = v_A - v_B$</span>.

The difference between the two is that observed speed requires a frame-of-reference shift, while relative speed does not (we stay in the reference frame of <span class="inline-math">$S$</span>). This matters when working in a relativistic regime. In that case, the observed speed requires the [[Velocity Addition]] formula 
<div>
$$v_O = \frac{v_A-v_B}{1-\frac{v_Av_B}{c^2}}$$
</div>
while the relative velocity's magnitude is able to take any value <span class="inline-math">$0 \leq v_R \leq 2c$</span> and is still calculated by <span class="inline-math">$v_A-v_B$</span>. The way to think about this as a physical property is the "speed at which the distance between <span class="inline-math">$A$</span> and <span class="inline-math">$B$</span> changes in the frame of <span class="inline-math">$S$</span>" - which is allowed to exceed <span class="inline-math">$c$</span>.

The other way of thinking about it is that both can be considered "relative speed" - observed speed is <span class="inline-math">$A$</span> relative to <span class="inline-math">$S$</span> from the frame of <span class="inline-math">$S$</span>, while the relative speed is <span class="inline-math">$A$</span> relative to <span class="inline-math">$B$</span> from <span class="inline-math">$S$</span>.

### Quantitative Analysis

Quantify the simultaneity violation utilising relative velocity. Set the direction of movement to be right. The light from the left bulb moves *relative* to the bulb in frame <span class="inline-math">$B$</span> at <span class="inline-math">$c+v$</span>, while the right-bulb light moves at speed <span class="inline-math">$c-v$</span> *relative* to the right bulb. Given that <span class="inline-math">$v > 0$</span> it's easy to see that the times to reach <span class="inline-math">$A$</span> are <span class="inline-math">$t_l = \frac{L}{2(c+v)}$</span> and <span class="inline-math">$t_r = \frac{L}{2(c-v)}$</span>, and that <span class="inline-math">$t_l < t_r$</span> (<span class="inline-math">$L$</span> is the distance between the two bulbs in frame <span class="inline-math">$B$</span>).

In fact, the time difference is

<div>
$$\Delta t = t_r-t_l=\frac{L}{2(c-v)}-\frac{L}{2(c+v)}=\boxed{\frac{Lv}{c^2-v^2}}$$
</div>

### Rear-Clock Effect

Physically manifests in the fixed offset of clocks when moving at equal velocities observed from some other frame. Consider the following setup: place two clocks at a length <span class="inline-math">$L$</span> apart stationary relative to right-moving inertial frame <span class="inline-math">$A$</span> (right-moving with speed <span class="inline-math">$v$</span> relative to external frame <span class="inline-math">$B$</span>). Place a pulse light between the two clocks such that a pulse hits both clocks *simultaneously in <span class="inline-math">$B$</span>*.

The idea behind this setup is to figure out what *internal time* the clocks display (i.e. time in frame <span class="inline-math">$A$</span>) when both are observed simultaneously in frame <span class="inline-math">$B$</span> - equivalent to firing a pulse of light to simultaneously hit both clocks.

To find where the pulse light should be placed, consider that length contraction is independent of position. Hence, if the light must be placed forming distances in ratio <span class="inline-math">$c+v:c-v$</span> in frame <span class="inline-math">$B$</span>, they must be placed in the same ratio in frame <span class="inline-math">$A$</span>. We have

<div>
$$(c+v):(c-v)\implies \odot\leftarrow\frac{L(c+v)}{2c}\rightarrow \star \leftarrow \frac{L(c-v)}{2c}\rightarrow\odot$$
</div>

(creatively setting <span class="inline-math">$\odot$</span> to be the clocks and <span class="inline-math">$\star$</span> to be the light). This forces simultaneity of clock illumination in <span class="inline-math">$B$</span>. Examine then what happens in <span class="inline-math">$A$</span> (<span class="inline-math">$t_l$</span> is illumination time of left clock, <span class="inline-math">$t_r$</span> for right clock):

<div>
$$t_l=\frac{\frac{L}{2c}(c+v)}{c},\,t_r=\frac{\frac{L}{2c}(c-v)}{c}\implies \Delta t=t_r-t_l=\frac{\frac{L}{2}(2v)}{c^2}=\boxed{\frac{Lv}{c^2}}$$
</div>

Hence the left clock is *ahead* by <span class="inline-math">$\frac{Lv}{c^2}$</span> seconds. Remember that <span class="inline-math">$L$</span> is the proper length between the two clocks (i.e. the distance between the clocks in their own frame).

## Time Dilation

Clocks tick slower depending on their velocity to you. We can construct a pulse clock using the distance that light travels in one second i.e. <span class="inline-math">$c \text{ m}$</span> (treating <span class="inline-math">$c$</span> as a dimensionless constant). Consider a box (frame <span class="inline-math">$B$</span>) of height <span class="inline-math">$\frac{c}{2}\text{ m}$</span> which travels rightwards with speed <span class="inline-math">$v$</span> in the frame of an external observer <span class="inline-math">$S$</span>. At the bottom of the box is a laser pointing upwards - at the top of the box is a mirror facing downwards.

Consider the clock frame - light takes <span class="inline-math">$1\text{ s}$</span> to travel up and down since we made the values so nice.

Consider the observer frame - light takes a slanted path since it's being moved. The vertical speed of the light is 
<div>
$$v_y=\sqrt{c^2-v^2}$$
</div>
 and hence the time taken is 
<div>
$$t_S=\frac{c}{\sqrt{c^2-v^2}}=\boxed{\frac{1}{\sqrt{1-\frac{v^2}{c^2}}}}=\gamma t_B$$
</div>
 where we have defined <span class="inline-math">$\gamma \coloneqq \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}$</span>. Notice <span class="inline-math">$0 \leq \frac{v^2}{c^2} \leq 1 \implies \gamma \geq 1$</span>.

### Paradoxes

A common paradox is to observe that in frame <span class="inline-math">$B$</span>, a clock held by an observer at rest in frame <span class="inline-math">$S$</span> would run slower than that in frame <span class="inline-math">$B$</span>. This is fine (remember postulate that <span class="inline-math">$S$</span> sees <span class="inline-math">$S'$</span> the same way that <span class="inline-math">$S'$</span> sees <span class="inline-math">$S$</span>).

> If <span class="inline-math">$S$</span> sees <span class="inline-math">$B$</span> slower and <span class="inline-math">$B$</span> sees <span class="inline-math">$S$</span> run slower, than doesn't everything become infinitely slow just by alternating reference frames?

Clocks cannot run infinitely slow since <span class="inline-math">$t_S = \gamma t_B$</span> and <span class="inline-math">$t_B = \gamma t_S$</span> define the behaviour of two different clocks; the <span class="inline-math">$B$</span> clock and the <span class="inline-math">$S$</span> clock respectively. It cannot be 'substituted' since the actual dilation principle can be written as 
<div>
$$\Delta t_{\text{obs}}=\gamma \Delta t_{\text{prop}}$$
</div>
 - i.e. proper time doesn't 'transfer' across reference frames (definitionally tied to only one frame).

The other way to think about it would be time dilation states that the elapsed time between two events occurring *at the same location* in one frame is observed to be longer in another frame. Clock <span class="inline-math">$B$</span>'s ticks in <span class="inline-math">$S$</span>'s frame would not be at the same location, and vice-versa.

## Length Contraction

Don't like the light-length measuring derivation cause it's very unintuitive that time becomes space (even though that's sort of the whole point of SR); also why do we just measure distance with light and call it a day; surely distance is still the same distance?
> A: Information travels at the speed of light; 'measured' relativity deals with the information taken from various frames of reference (such as length information which requires the light beam firing setup). "Distance is still the same distance" refers to the idea of an invariant (frame independent) 'proper length' - i.e. the length of an object in its own reference frame is universally agreed upon.

Nevertheless, an alternative derivation is provided.

### Quantitative Analysis

Consider the setup: person <span class="inline-math">$A$</span> stands at rest above a plank of proper length <span class="inline-math">$L$</span>. Person <span class="inline-math">$B$</span> flies along the plank at a speed <span class="inline-math">$v$</span> in <span class="inline-math">$A$</span>'s frame.

The time in <span class="inline-math">$A$</span>'s frame that <span class="inline-math">$B$</span> takes to traverse the plank is simply <span class="inline-math">$\frac{L}{v}$</span>. However, the time that it takes in <span class="inline-math">$B$</span>'s frame to traverse the plank is obtained via the time dilation result - <span class="inline-math">$A$</span> sees <span class="inline-math">$B$</span>'s clock run slow by a factor of <span class="inline-math">$\gamma$</span>, so the elapsed time which <span class="inline-math">$B$</span>'s clock measures moving across the plank is <span class="inline-math">$\frac{L}{\gamma v}$</span>. So <span class="inline-math">$B$</span> measures the length in their frame to be 
<div>
$$\frac{L}{\gamma v}\cdot\frac{1}{v}=\boxed{\frac{L}{\gamma}}$$
</div>
 as desired.

## Frame Independence

There are certain things agreed on by all frames:
- Proper length/time; the length/time of an object in its own reference frame.
- The *reading* of a clock; if an event happens at a clock, its reading <span class="inline-math">$T$</span> when that event happens is agreed upon by all frames (The rear-clock effect vanishes since <span class="inline-math">$L=0$</span>).
- The difference in *readings* of clocks; i.e. if a clock reads <span class="inline-math">$T_1$</span> before a set of events and reads <span class="inline-math">$T_2$</span> after, the difference <span class="inline-math">$T_2-T_1$</span> is invariant (since both <span class="inline-math">$T_1$</span> and <span class="inline-math">$T_2$</span> are invariant).
	- N.B. This one does not care about distance - e.g. an event can happen at one clock and move to another clock.
- If an event happens, it happens.

## Problems

#### Muon Decay I

A muon takes <span class="inline-math">$T = 2\cdot 10^{-6}\text{ s}$</span> to decay in its own frame. A muon is created <span class="inline-math">$20\text{ km}$</span> above the earth's surface and travels vertically downwards at <span class="inline-math">$v=0.9999c$</span> (<span class="inline-math">$\gamma\approx70$</span>). Does it reach the earth?

##### Solution

Yes. Time is dilated in the earth's frame, so the muon's internal clock ticks slower.

<div>
$$s_{\text{max}}=vt_{\text{max}}=v\gamma t_{\text{life}}\approx4\cdot10^4\text{ m} > 2\cdot10^4\text{ m}$$
</div>

#### Muon Decay II

Consider the same muon created <span class="inline-math">$20\text{ km}$</span> above the earth's surface. In it's own frame, it's internal clock ticks at a normal rate - in that case, would the muon be able to reach the earth's surface? Is there a contradiction?

##### Solution

No, the muon would still be able to reach the earth. The distance it needs to travel is contracted.

<div>
$$t_{\text{req}}=\frac{s_{\text{obs}}}{v}=\frac{s_{\text{prop}}}{\gamma v}=9.52\cdot 10^{-7}\text{ s} < 2\cdot10^{-6}\text{ s}$$
</div>

#### Train Clapping Distance

Two people stand a proper distance <span class="inline-math">$L$</span> apart on a platform, and clap simultaneously in the ground frame. A train is travelling at a speed <span class="inline-math">$v$</span> rightwards. From the train's perspective, what is the distance between the claps?

##### Solution I

Give each person clocks synchronised in the ground frame, such that each person claps when their clock hits 0. Loss of simultaneity means that in the train frame, the people move left with speed <span class="inline-math">$v$</span>, and the right person's clock hits 0 while the left person's clock reads <span class="inline-math">$\frac{Lv}{c^2}$</span>. Since ground clocks tick slower from the train frame, the time until the left person claps according to the train is <span class="inline-math">$\frac{Lv\gamma}{c^2}$</span>, and thus <span class="inline-math">$\Delta x = \frac{Lv^2\gamma}{c^2}$</span>. The total distance between the two events is thus 
<div>
$$s=\frac{L}{\gamma}+\frac{Lv^2\gamma}{c^2}=\gamma L\left(\frac{1}{\gamma^2}+\frac{v^2}{c^2}\right)=\gamma L$$
</div>

##### Solution II

Assume the claps create a kind of 'frozen' marker in space (maybe a persistent pulse of light). The ground sees them a distance <span class="inline-math">$L$</span> apart. Since the train is moving, whatever the markers' distance is on the train (<span class="inline-math">$L'$</span>), the ground sees them contracted so that <span class="inline-math">$L=\frac{L'}{\gamma}$</span> - hence <span class="inline-math">$L' = \gamma L$</span>.

#### Stick and Person

A stick with proper length <span class="inline-math">$L$</span> passes over a person at rest with speed <span class="inline-math">$v$</span>. There is a time interval between when the front of the stick passes over the person and when the back passes over. What is this time interval:
	a) In the frame of the person, working in the person's frame?
	b) In the frame of the person, working in the stick's frame?
	c) In the frame of the stick, working in the stick's frame?
	d) In the frame of the stick, working in the person's frame?

##### Solution

a) The person sees the stick length contracted to <span class="inline-math">$\frac{L}{\gamma}$</span>. Hence the time duration they measure is <span class="inline-math">$\frac{L}{\gamma v}$</span>.
b) Give the person a clock which starts timing as the front of the stick passes over it (frame independent). The stick measures the time of passing over to be <span class="inline-math">$\frac{L}{v}$</span>. This duration appears on the person's clock as <span class="inline-math">$\frac{L}{\gamma v}$</span>, since for the stick, the person's clock runs slow (hence time displayed will be lower).
c) The stick measures the time of passing over to be <span class="inline-math">$\frac{L}{v}$</span> (as previously determined for part b).
d) Create two clocks at either end of the stick placed apart with proper distance <span class="inline-math">$L$</span>. The person sees the two clocks fly by with speed <span class="inline-math">$v$</span>, so synchronising so that the front clock reads 0 when passing over the person, the back clock will read <span class="inline-math">$\frac{Lv}{c^2}$</span>. As in part a, the person's measured time is <span class="inline-math">$\frac{L}{\gamma v}$</span>, but since the rear clock on the stick runs slowly to the person, the final time is given by 
<div>
$$\frac{Lv}{c^2}+\frac{L}{\gamma^2 v}=\frac{L}{v}\left(\frac{v^2}{c^2}+\frac{1}{\gamma^2}\right)=\frac{L}{v}$$
</div>

#### Photon and Train

A photon firer is attached at the back of a train moving with speed <span class="inline-math">$v$</span> relative to the ground with proper length <span class="inline-math">$L$</span>. Attach clocks synchronised in the train frame to the front and back, and fire a photon when the back clock hits 0. Prove that the front clock reads <span class="inline-math">$\frac{L}{c^2}$</span> whether you take the train or ground frame.

##### Solution

In the train frame, the distance the photon travels is <span class="inline-math">$L$</span>. Simultaneity forces that the front clock reads 0 when the photon is fired - hence <span class="inline-math">$t = \frac{L}{c}$</span>.
In the ground frame, the front clock reads <span class="inline-math">$-\frac{Lv}{c^2}$</span> when the photon is fired. It travels a contracted length <span class="inline-math">$\frac{L}{\gamma}$</span>, with a relative speed <span class="inline-math">$c-v$</span>. Hence time elapsed and clock time is 
<div>
$$t_e = \frac{L}{\gamma^2}\frac{1}{c-v}\implies t=\frac{L}{\gamma^2(c-v)}-\frac{Lv}{c^2}=\frac{L\left(1-\dfrac{v^2}{c^2}\right)}{c\left(1-\dfrac{v}{c}\right)}-\frac{Lv}{c^2}=\frac{L}{c}\left(\frac{1-v^2/c^2}{1-v/c}-\frac{v}{c}\right)=\boxed{\frac{L}{c}}$$
</div>

#### Rod Angle

Consider a rod with proper length <span class="inline-math">$L$</span> at rest in a frame <span class="inline-math">$S$</span> making an angle <span class="inline-math">$\theta$</span> with the positive x-axis. A frame <span class="inline-math">$S'$</span> moves with speed <span class="inline-math">$v$</span> in the positive x-axis direction of frame <span class="inline-math">$S$</span> (and has aligned axes). What is the angle that the rod makes with the positive x-axis taken from frame <span class="inline-math">$S'$</span>?

##### Solution

Length is contracted only in the parallel direction.

<div>
$$L'_x=\frac{L_x}{\gamma},L'_y=L_y\implies\theta'=\tan^{-1}\left(\gamma\frac{L_y}{L_x}\right)=\tan^{-1}(\gamma\tan\theta)$$
</div>
