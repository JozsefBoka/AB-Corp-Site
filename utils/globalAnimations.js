import gsap from 'gsap';

export const attachGlobalAnims = (themeColors) => {
    gsap.utils.toArray('.accent-underline').forEach(underline => {
        gsap.to(underline, {
            '--clip-path': 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
            duration: 1,
            delay: 0.5,
            scrollTrigger: underline
        })
    })

    if (themeColors) {
        gsap.set('html', {
            '--accent-color': themeColors.accent
        })
    }

    gsap.to('html', {opacity: 1})
}

export const registerCustomEffects = () => {
    /**
     * Custom counter effect expects an object with a value and setter properties
     * @param {object} targets should have a setter and value props: setter should be a state setter function, value shuold be a number
     * @param {object} config duration, end, scrollTrigger, increment, ease
     */
    gsap.registerEffect({
        name: "counter",
        extendTimeline: true,
        defaults: {
            end: 0,
            duration: 0.5,
            ease: "linear",
            increment: 1,
        },
        effect: (targets, config) => {
            let tl = gsap.timeline()

            tl.to(targets, {
                duration: config.duration,
                value: config.end,
                scrollTrigger: config.scrollTrigger,
                //snap:{value:config.increment},
                modifiers: {
                    value: function (value) {
                        return gsap.utils.snap(config.increment, value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                },
                ease: config.ease,
                onUpdate: () => targets[0].setter(targets[0].value)
                
            }, 0)

            return tl
        }
    })
}
