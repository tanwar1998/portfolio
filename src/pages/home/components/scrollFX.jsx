import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFX = () => {
    const barRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            if (barRef.current) {
                gsap.to(barRef.current, {
                    scaleX: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.3
                    }
                });
            }

            mm.add('(prefers-reduced-motion: no-preference)', () => {
                const reveal = (selector, vars = {}) =>
                    gsap.from(selector, {
                        autoAlpha: 0,
                        y: 48,
                        duration: 0.9,
                        ease: 'power3.out',
                        clearProps: 'opacity,transform,visibility',
                        ...vars
                    });

                const onEnter = (el, x = false) => ({
                    scrollTrigger: {
                        trigger: el,
                        start: x ? 'top 85%' : 'top 92%',
                        once: true
                    }
                });

                reveal('.developer-image-container', {
                    autoAlpha: 0,
                    duration: 1,
                    clearProps: 'opacity,visibility',
                    ...onEnter('.developer-image-container', true)
                });
                reveal('.intro-label-container', {
                    y: 20,
                    duration: 0.7,
                    ...onEnter('.intro-label-container', true)
                });
                reveal('.name-info-container', {
                    y: 40,
                    duration: 1,
                    ...onEnter('.name-info-container', true)
                });
                reveal('.post-container', {
                    y: 30,
                    duration: 0.8,
                    ...onEnter('.post-container', true)
                });
                reveal('.landing-component-main h5', {
                    y: 28,
                    duration: 0.8,
                    ...onEnter('.landing-component-main h5', true)
                });

                gsap.utils.toArray('.main-heading-container .text').forEach((el) => {
                    reveal(el, {
                        y: 36,
                        ...onEnter(el)
                    });
                });
                gsap.utils.toArray('.info-text-container').forEach((el) => {
                    reveal(el, {
                        y: 28,
                        duration: 0.7,
                        ...onEnter(el)
                    });
                });

                reveal('.work-block-main', {
                    y: 64,
                    stagger: 0.12,
                    ...onEnter('.work-sample-content-main', true)
                });

                reveal('.service-item', {
                    y: 64,
                    stagger: 0.12,
                    ...onEnter('.services-item-container', true)
                });

                reveal('.company-name', {
                    y: 24,
                    stagger: 0.08,
                    ...onEnter('.experience-content-main', true)
                });
                reveal('.experience-content-main .right-side-container', {
                    y: 40,
                    ...onEnter('.experience-content-main .right-side-container', true)
                });

                reveal('.categories-tilt-container', {
                    y: 56,
                    scale: 0.97,
                    ...onEnter('.categories-tilt-container', true)
                });

                reveal('.hire-me-text', {
                    y: 36,
                    ...onEnter('.hire-me-text', true)
                });
                reveal('.links-container-main a', {
                    y: 24,
                    stagger: 0.08,
                    ...onEnter('.links-container-main', true)
                });

                gsap.fromTo(
                    '.developer-image-container',
                    { yPercent: 10 },
                    {
                        yPercent: -10,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.landing-component-main',
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );
                gsap.fromTo(
                    '.landing-component-main .left-side-container:not(.right-side-container)',
                    { yPercent: 0 },
                    {
                        yPercent: -6,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.landing-component-main',
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );

                return () => {
                    ScrollTrigger.getAll().forEach((t) => t.kill());
                };
            });
        });
        const refresh = () => ScrollTrigger.refresh();

        window.addEventListener('load', refresh);
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(refresh).catch(() => {});
        }
        const timer = window.setTimeout(refresh, 200);

        return () => {
            window.removeEventListener('load', refresh);
            window.clearTimeout(timer);
            ctx.revert();
        };
    }, []);

    return <div className="scroll-progress-bar" ref={barRef} aria-hidden="true" />;
};

export default ScrollFX;