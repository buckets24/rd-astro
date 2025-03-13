/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, d as addAttribute, m as maybeRenderHead, e as defineScriptVars, f as renderSlot, g as renderHead, h as renderScript } from '../chunks/astro/server_f6zrLXFD.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_luRBqEIF.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Video;
  const { videoId, timerSeconds, options } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", `
  // Utility functions
  const createDebounce = (wait) => {
    let timeout;
    return (func) => (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const toggleFullscreenMode = (show) => {
    const videoContainer = document.querySelector('.video-container');
    const doctorInfo = document.querySelector('[data-id="hero-section-doctor-info"]');
    const wistiaWrapper = document.querySelector('[data-id="wistia-wrapper-v3"]');

    if (!videoContainer || !wistiaWrapper || !doctorInfo) return;

    const fullscreenClasses = [
      '!px-0',
      '!py-0',
      'lg:!h-screen',
      'lg:!w-full',
      'lg:!max-w-full',
      'lg:!max-h-full'
    ];

    if (show) {
      videoContainer.classList.add('fullwidth');
      doctorInfo.classList.replace('block', 'hidden');
      wistiaWrapper.classList.add(...fullscreenClasses);
      wistiaWrapper.children[0]?.classList.add('w-full', 'max-w-full');
    } else {
      videoContainer.classList.remove('fullwidth');
      doctorInfo.classList.replace('hidden', 'block');
      wistiaWrapper.classList.remove(...fullscreenClasses);
      wistiaWrapper.children[0]?.classList.remove('w-full', 'max-w-full');
    }
  };

  // Handle keyboard shortcut
  document.addEventListener('keydown', ({ ctrlKey, key }) => {
    if (ctrlKey && key === 'b') {
      document.documentElement.classList.add('button-dropped');
    }
  });

  // Initialize Wistia
  const initWistia = async () => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    scriptTag.async = true;

    const loadScript = () => {
      return new Promise((resolve) => {
        scriptTag.onload = resolve;
        document.head.appendChild(scriptTag);
      });
    };

    await loadScript();

    const hasVideobar = window.location.hash.toLowerCase() === '#videobar';
    if (hasVideobar) options.playbar = true;
    
    window._wq = window._wq || [];
    window._wq.push({
      id: videoId,
      options,
      onReady: (video) => {
        const isMobile = window.innerWidth < 768;
        const debouncedResize = createDebounce(300);
        
        const handleVideoResize = debouncedResize(() => {
          const videoContainer = document.querySelector('.video-container');
          if (!videoContainer) return;

          const aspectRatio = video.aspect();
          const windowHeight = window.innerHeight;
          let toHeight = Math.floor(window.innerWidth / aspectRatio);
          let toWidth = videoContainer.offsetWidth;

          if (isMobile) {
            video.width(toWidth, { constrain: true });
            videoContainer.style.height = \`\${Math.min(toHeight - 4, windowHeight)}px\`;
          } else if (video.state() === 'playing') {
            toHeight = Math.min(toHeight, windowHeight);
            toWidth = Math.floor(toHeight * aspectRatio);
            video.width(toWidth, { constrain: true });
          }
        });

        if (isMobile) {
          handleVideoResize();
          window.addEventListener('resize', handleVideoResize);
          video.bind('widthchange', handleVideoResize);
        }

        video
          .bind('secondchange', (seconds) => {
            if (seconds === timerSeconds) {
              document.documentElement.classList.add('button-dropped');
            }
          })
          .bind('play', () => {
            document.documentElement.classList.add('video-playing');
            toggleFullscreenMode(true);
          })
          .bind('pause', () => {
            document.documentElement.classList.remove('video-playing');
            toggleFullscreenMode(false);
          });
      }
    });
  };

  initWistia();
})();<\/script> `, '<div id="vidcont"', ' data-astro-cid-7qzxku2k> <div class="block flex-grow-1" data-astro-cid-7qzxku2k> <div class="wistia-container max-w-[87vw] m-auto" data-astro-cid-7qzxku2k> <div class="wistia_responsive_padding relative pt-[56.25%] pr-0 pb-0 pl-0" data-astro-cid-7qzxku2k> <div class="wistia_responsive_wrapper absolute top-0 left-0 h-full w-full" data-astro-cid-7qzxku2k> <div', ' data-astro-cid-7qzxku2k></div> </div> </div> </div> <div class="beforedrop hideonplay hidden w-full px-[16px] md:block md:px-0 md:pt-[25px]" data-astro-cid-7qzxku2k> <div class="text-[20px]" data-astro-cid-7qzxku2k> <p class="inline-flex max-w-[776px] items-center text-center font-semibold md:m-auto" data-astro-cid-7qzxku2k> ', ' <span class="mr-[5px] text-[22px] font-bold text-[#d0190d]" data-astro-cid-7qzxku2k>\nIMPORTANT:\n</span> <span class="align-middle text-black" data-astro-cid-7qzxku2k>\nYour video may take 10 seconds to load. Make sure your sound is on.\n</span> </p> </div> </div> </div> <div class="hideonplay beforedrop hidden w-full px-[16px] pb-[10px] md:block md:w-[204.8px] md:px-0" data-id="hero-section-doctor-info" data-astro-cid-7qzxku2k> <div class="flex flex-col gap-[10px]" data-astro-cid-7qzxku2k> <div data-astro-cid-7qzxku2k> ', ` </div> <div class="flex flex-col" data-astro-cid-7qzxku2k> <span class="max-w-fit rounded-[2px] bg-[#e34134] px-1 text-[12.8px] font-[600] text-nowrap text-white" data-astro-cid-7qzxku2k>
Top Gastroenterologist 2024
</span> <span class="text-[25.6px] leading-[32px] font-[700] text-[#1c624d] underline" data-astro-cid-7qzxku2k>
Dr. Gina Sam M.D
</span> </div> </div> <p class="text-[18px] text-black md:text-[13px]" data-astro-cid-7qzxku2k> <b data-astro-cid-7qzxku2k>
Dr. Gina Sam, MD, is a leading NYC gastroenterologist and former
        director of the Mount Sinai Gastrointestinal Motility Center
</b>
. Over her 20-year career, Dr. Sam has specialized in treating digestive
      and metabolic disorders, founding the Institute of Gastrointestinal
      Motility Disorders and Integrative Health in New York City.
<em data-astro-cid-7qzxku2k>
Dr. Sam's research has positioned her at the forefront of
        understanding
<b data-astro-cid-7qzxku2k>obesity, fatigue and other metabolic dysfunctions.</b> </em> </p> </div> </div> <div class="bg-[#ffffff] md:bg-transparent m-auto maxwidth mb-sm-0 pb-0 pt-1 mt-[8px] md:mt-[16px] md:pb-[24px] md:pt-[16px] flowheight" data-astro-cid-7qzxku2k> <div class="text-[20px] px-[5px] hidden showonplay" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[776px] md:m-auto text-center font-myriadpro" data-astro-cid-7qzxku2k> `, ' <span class="align-middle" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', ' </p> </div> <div class="text-[22px] px-[5px] afterdrop mt-[33px] !hidden md:block" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[830px] md:m-auto text-center font-myriadpro" data-astro-cid-7qzxku2k> ', ' <span class="align-middle text-[#000000]" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', ' </p> </div> <div class="text-[16px] px-[5px] block md:hidden mobileimportant" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[776px] text-center font-myriadpro" data-astro-cid-7qzxku2k> ', ' <span class="align-middle text-[#000000]" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', " </p> </div> </div> "], ["<script>(function(){", `
  // Utility functions
  const createDebounce = (wait) => {
    let timeout;
    return (func) => (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const toggleFullscreenMode = (show) => {
    const videoContainer = document.querySelector('.video-container');
    const doctorInfo = document.querySelector('[data-id="hero-section-doctor-info"]');
    const wistiaWrapper = document.querySelector('[data-id="wistia-wrapper-v3"]');

    if (!videoContainer || !wistiaWrapper || !doctorInfo) return;

    const fullscreenClasses = [
      '!px-0',
      '!py-0',
      'lg:!h-screen',
      'lg:!w-full',
      'lg:!max-w-full',
      'lg:!max-h-full'
    ];

    if (show) {
      videoContainer.classList.add('fullwidth');
      doctorInfo.classList.replace('block', 'hidden');
      wistiaWrapper.classList.add(...fullscreenClasses);
      wistiaWrapper.children[0]?.classList.add('w-full', 'max-w-full');
    } else {
      videoContainer.classList.remove('fullwidth');
      doctorInfo.classList.replace('hidden', 'block');
      wistiaWrapper.classList.remove(...fullscreenClasses);
      wistiaWrapper.children[0]?.classList.remove('w-full', 'max-w-full');
    }
  };

  // Handle keyboard shortcut
  document.addEventListener('keydown', ({ ctrlKey, key }) => {
    if (ctrlKey && key === 'b') {
      document.documentElement.classList.add('button-dropped');
    }
  });

  // Initialize Wistia
  const initWistia = async () => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    scriptTag.async = true;

    const loadScript = () => {
      return new Promise((resolve) => {
        scriptTag.onload = resolve;
        document.head.appendChild(scriptTag);
      });
    };

    await loadScript();

    const hasVideobar = window.location.hash.toLowerCase() === '#videobar';
    if (hasVideobar) options.playbar = true;
    
    window._wq = window._wq || [];
    window._wq.push({
      id: videoId,
      options,
      onReady: (video) => {
        const isMobile = window.innerWidth < 768;
        const debouncedResize = createDebounce(300);
        
        const handleVideoResize = debouncedResize(() => {
          const videoContainer = document.querySelector('.video-container');
          if (!videoContainer) return;

          const aspectRatio = video.aspect();
          const windowHeight = window.innerHeight;
          let toHeight = Math.floor(window.innerWidth / aspectRatio);
          let toWidth = videoContainer.offsetWidth;

          if (isMobile) {
            video.width(toWidth, { constrain: true });
            videoContainer.style.height = \\\`\\\${Math.min(toHeight - 4, windowHeight)}px\\\`;
          } else if (video.state() === 'playing') {
            toHeight = Math.min(toHeight, windowHeight);
            toWidth = Math.floor(toHeight * aspectRatio);
            video.width(toWidth, { constrain: true });
          }
        });

        if (isMobile) {
          handleVideoResize();
          window.addEventListener('resize', handleVideoResize);
          video.bind('widthchange', handleVideoResize);
        }

        video
          .bind('secondchange', (seconds) => {
            if (seconds === timerSeconds) {
              document.documentElement.classList.add('button-dropped');
            }
          })
          .bind('play', () => {
            document.documentElement.classList.add('video-playing');
            toggleFullscreenMode(true);
          })
          .bind('pause', () => {
            document.documentElement.classList.remove('video-playing');
            toggleFullscreenMode(false);
          });
      }
    });
  };

  initWistia();
})();<\/script> `, '<div id="vidcont"', ' data-astro-cid-7qzxku2k> <div class="block flex-grow-1" data-astro-cid-7qzxku2k> <div class="wistia-container max-w-[87vw] m-auto" data-astro-cid-7qzxku2k> <div class="wistia_responsive_padding relative pt-[56.25%] pr-0 pb-0 pl-0" data-astro-cid-7qzxku2k> <div class="wistia_responsive_wrapper absolute top-0 left-0 h-full w-full" data-astro-cid-7qzxku2k> <div', ' data-astro-cid-7qzxku2k></div> </div> </div> </div> <div class="beforedrop hideonplay hidden w-full px-[16px] md:block md:px-0 md:pt-[25px]" data-astro-cid-7qzxku2k> <div class="text-[20px]" data-astro-cid-7qzxku2k> <p class="inline-flex max-w-[776px] items-center text-center font-semibold md:m-auto" data-astro-cid-7qzxku2k> ', ' <span class="mr-[5px] text-[22px] font-bold text-[#d0190d]" data-astro-cid-7qzxku2k>\nIMPORTANT:\n</span> <span class="align-middle text-black" data-astro-cid-7qzxku2k>\nYour video may take 10 seconds to load. Make sure your sound is on.\n</span> </p> </div> </div> </div> <div class="hideonplay beforedrop hidden w-full px-[16px] pb-[10px] md:block md:w-[204.8px] md:px-0" data-id="hero-section-doctor-info" data-astro-cid-7qzxku2k> <div class="flex flex-col gap-[10px]" data-astro-cid-7qzxku2k> <div data-astro-cid-7qzxku2k> ', ` </div> <div class="flex flex-col" data-astro-cid-7qzxku2k> <span class="max-w-fit rounded-[2px] bg-[#e34134] px-1 text-[12.8px] font-[600] text-nowrap text-white" data-astro-cid-7qzxku2k>
Top Gastroenterologist 2024
</span> <span class="text-[25.6px] leading-[32px] font-[700] text-[#1c624d] underline" data-astro-cid-7qzxku2k>
Dr. Gina Sam M.D
</span> </div> </div> <p class="text-[18px] text-black md:text-[13px]" data-astro-cid-7qzxku2k> <b data-astro-cid-7qzxku2k>
Dr. Gina Sam, MD, is a leading NYC gastroenterologist and former
        director of the Mount Sinai Gastrointestinal Motility Center
</b>
. Over her 20-year career, Dr. Sam has specialized in treating digestive
      and metabolic disorders, founding the Institute of Gastrointestinal
      Motility Disorders and Integrative Health in New York City.
<em data-astro-cid-7qzxku2k>
Dr. Sam's research has positioned her at the forefront of
        understanding
<b data-astro-cid-7qzxku2k>obesity, fatigue and other metabolic dysfunctions.</b> </em> </p> </div> </div> <div class="bg-[#ffffff] md:bg-transparent m-auto maxwidth mb-sm-0 pb-0 pt-1 mt-[8px] md:mt-[16px] md:pb-[24px] md:pt-[16px] flowheight" data-astro-cid-7qzxku2k> <div class="text-[20px] px-[5px] hidden showonplay" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[776px] md:m-auto text-center font-myriadpro" data-astro-cid-7qzxku2k> `, ' <span class="align-middle" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', ' </p> </div> <div class="text-[22px] px-[5px] afterdrop mt-[33px] !hidden md:block" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[830px] md:m-auto text-center font-myriadpro" data-astro-cid-7qzxku2k> ', ' <span class="align-middle text-[#000000]" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', ' </p> </div> <div class="text-[16px] px-[5px] block md:hidden mobileimportant" data-astro-cid-7qzxku2k> <p class="font-semibold max-w-[776px] text-center font-myriadpro" data-astro-cid-7qzxku2k> ', ' <span class="align-middle text-[#000000]" data-astro-cid-7qzxku2k>Your video may take 10 seconds to load. Make sure your sound is on.</span> ', " </p> </div> </div> "])), defineScriptVars({ videoId, timerSeconds, options }), maybeRenderHead(), addAttribute([
    "vidcont2 m-auto flex w-full flex-col gap-[16px] bg-[#ffffff] px-[0] py-[0] shadow-2xl md:flex-row md:gap-[35px]",
    { "max-w-[840px]": Astro2.slots.has("button-dropped"), "max-w-[1085.8px] md:px-[35px] md:pt-[45px] md:pb-[20px]": !Astro2.slots.has("button-dropped") }
  ], "class:list"), addAttribute(`wistia_embed m-auto h-full w-full wistia_async_${videoId}`, "class"), renderComponent($$result, "Image", $$Image, { "class": "mr-[5px] h-[16px] w-[16px] md:h-[24px] md:w-[24px]", "src": "https://resetdigestion.com/pages/er-vslfb-v3/charm_sound.png?v=56?v=1", "alt": "Sound icon", "width": 16, "height": 16, "loading": "lazy", "quality": 50, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "src": "https://resetdigestion.com/pages/er-vslfb-v3/drginasam.png?v=56?v=1", "class": "ginaimage w-[81.96px] md:w-[147.2px]", "alt": "Dr. Gina Sam", "width": 81.96, "height": 147.2, "loading": "lazy", "quality": 50, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "class": "h-[16px] md:h-[24px] w-[16px] md:w-[24px] mt-[6px] md:mt-[4px] me-[5px]", "src": "https://resetdigestion.com/pages/er-vslfb-v2/charm_sound.png", "alt": "Sound icon", "width": 16, "height": 16, "loading": "lazy", "quality": 50, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "src": "https://emmarelief.com/cdn/shop/t/10/assets/greenarrowdown.png?v=90230465467182572741687505008", "class": "garrow afterdrop d-none m-auto mt-2 mt-sm-4", "style": "width: 39px", "alt": "Green arrow down", "width": 39, "height": 39, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "class": "h-[16px] md:h-[24px] w-[16px] md:w-[24px] inline-block me-[5px]", "src": "https://resetdigestion.com/pages/er-vslfb-v2/charm_sound.png", "alt": "Sound icon", "width": 16, "height": 16, "loading": "lazy", "quality": 50, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "src": "https://emmarelief.com/cdn/shop/t/10/assets/greenarrowdown.png?v=90230465467182572741687505008", "class": "garrow afterdrop d-none m-auto mt-2 mt-sm-4", "style": "width: 39px", "alt": "Green arrow down", "width": 39, "height": 39, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "class": "h-[16px] w-[16px] me-[5px] inline-block", "src": "https://resetdigestion.com/pages/er-vslfb-v2/charm_sound.png", "alt": "Sound icon", "width": 16, "height": 16, "loading": "lazy", "quality": 50, "data-astro-cid-7qzxku2k": true }), renderComponent($$result, "Image", $$Image, { "src": "https://emmarelief.com/cdn/shop/t/10/assets/greenarrowdown.png?v=90230465467182572741687505008", "class": "garrow afterdrop d-none m-auto mt-2 mt-sm-4", "style": "width: 39px", "alt": "Green arrow down", "width": 39, "height": 39, "data-astro-cid-7qzxku2k": true }));
}, "/Users/konsciousketo/Documents/GitHub/rd-astro/src/components/Video.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Astro Basics</title><!-- Partytown configuration -->", "", "</head> <body data-astro-cid-sckkx6r4> ", ` <!-- Analytics and tracking scripts --> <script type="text/partytown" defer>
			// Initialize dataLayer
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			
			// Load Google Analytics
			const gaScript = document.createElement('script');
			gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-122527750-1";
			document.head.appendChild(gaScript);
			
			// Configure GTM
			const gtmScript = document.createElement('script');
			gtmScript.src = "https://gtmsvr.konsciousketo.com/gtm.js?id=GTM-56TX85F";
			document.head.appendChild(gtmScript);
			
			// Configure Google Analytics
			gtag('js', new Date());
			gtag('config', 'AW-770742054');
			gtag('config', 'AW-11038484286');
			
			// Load Polaris
			const polarisScript = document.createElement('script');
			polarisScript.src = "https://polaris.truevaultcdn.com/static/polaris.js";
			document.head.appendChild(polarisScript);
			
			// Configure Polaris
			window.polarisOptions = {
				GoogleAnalyticsTrackingId: "G-381562022",
				enableConsentManager: true,
				privacyCenterId: "2WDWRB6YE",
			};
		<\/script> </body> </html> `])), addAttribute(Astro2.generator, "content"), renderScript($$result, "/Users/konsciousketo/Documents/GitHub/rd-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/konsciousketo/Documents/GitHub/rd-astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Video", $$Video, { "videoId": "2dv7bb0ic0", "timerSeconds": 60, "options": {
    autoPlay: true,
    playbar: false,
    volumeControl: true,
    smallPlayButton: true,
    fullscreenButton: true
  } })} ` })}`;
}, "/Users/konsciousketo/Documents/GitHub/rd-astro/src/pages/index.astro", void 0);

const $$file = "/Users/konsciousketo/Documents/GitHub/rd-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
