import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

CustomEase.create('out-soft', '0.16, 1, 0.3, 1');

gsap.defaults({ ease: 'out-soft', duration: 1 });

export { gsap, ScrollTrigger, SplitText };
