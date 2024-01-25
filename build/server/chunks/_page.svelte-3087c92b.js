import { c as create_ssr_component, e as escape, v as validate_component, a as each } from './ssr-f056b9d4.js';
import { M as Monitor } from './monitor-a4f7155d.js';
import { C as Card, a as Card_content } from './Icon-c4d21504.js';
import 'clsx';
import { I as Incident } from './incident-7de6acde.js';
import './ctx-a5738360.js';
import { B as Badge } from './index4-56229f86.js';
import './index2-ef0fcb8d.js';
import './index3-57e8b665.js';
import 'tailwind-variants';
import 'tailwind-merge';
import './helpers-1d8653cf.js';
import 'moment';
import './chevron-down-77916ef7.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let hasActiveIncidents = false;
  for (let i = 0; i < data.monitors.length; i++) {
    if (data.monitors[i].activeIncidents.length > 0) {
      hasActiveIncidents = true;
      break;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-11ekmvk_START -->${data.monitors.length > 0 ? `${$$result.title = `<title>${escape(data.monitors[0].name)} Monitor Page</title>`, ""}` : ``}<!-- HEAD_svelte-11ekmvk_END -->`, ""} <div class="mt-32"></div> ${hasActiveIncidents ? `<section class="mx-auto bg-transparent mb-4 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center" id=""><div class="grid w-full grid-cols-2 gap-4"><div class="col-span-2 md:col-span-1 text-center md:text-left">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
    default: () => {
      return `Ongoing Incidents`;
    }
  })}</div></div></section> <section class="mx-auto backdrop-blur-[2px] mb-8 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center" id="">${each(data.monitors, (monitor) => {
    return `${each(monitor.activeIncidents, (incident, i) => {
      return `${validate_component(Incident, "Incident").$$render(
        $$result,
        {
          incident,
          state: "close",
          variant: "title+body+comments+monitor",
          monitor
        },
        {},
        {}
      )}`;
    })}`;
  })}</section>` : ``} ${data.monitors.length > 0 ? `<section class="mx-auto bg-transparent mb-4 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center" id=""><div class="grid w-full grid-cols-2 gap-4"><div class="col-span-2 md:col-span-1 text-center md:text-left">${validate_component(Badge, "Badge").$$render($$result, { class: "", variant: "outline" }, {}, {
    default: () => {
      return `Availability per Component`;
    }
  })}</div> <div class="col-span-2 md:col-span-1 text-center md:text-right">${validate_component(Badge, "Badge").$$render($$result, { variant: "outline" }, {}, {
    default: () => {
      return `<span class="w-[8px] h-[8px] inline-flex rounded-full bg-api-up opacity-75 mr-1"></span> <span class="mr-3" data-svelte-h="svelte-fd8nbr">UP</span> <span class="w-[8px] h-[8px] inline-flex rounded-full bg-api-degraded opacity-75 mr-1"></span> <span class="mr-3" data-svelte-h="svelte-ddctvm">DEGRADED</span> <span class="w-[8px] h-[8px] inline-flex rounded-full bg-api-down opacity-75 mr-1"></span> <span class="mr-3" data-svelte-h="svelte-1o75psw">DOWN</span>`;
    }
  })}</div></div></section> <section class="mx-auto backdrop-blur-[2px] mb-8 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center">${validate_component(Card, "Card.Root").$$render($$result, { class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "p-0 monitors-card" }, {}, {
        default: () => {
          return `${each(data.monitors, (monitor) => {
            return `${validate_component(Monitor, "Monitor").$$render($$result, { monitor, localTz: data.localTz }, {}, {})}`;
          })}`;
        }
      })}`;
    }
  })}</section>` : `<section class="mx-auto bg-transparent mb-4 flex w-full max-w-[890px] flex-1 flex-col items-start justify-center" id="">${validate_component(Card, "Card.Root").$$render($$result, { class: "mx-auto" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "pt-4" }, {}, {
        default: () => {
          return `<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center" data-svelte-h="svelte-pnpgii">No Monitor Found.</h1> <p class="mt-3 text-center" data-svelte-h="svelte-x3h5nn">Please read the documentation on how to add monitors 
				<a href="https://kener.ing/docs#h1add-monitors" target="_blank" class="underline">here</a>.</p>`;
        }
      })}`;
    }
  })}</section>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3087c92b.js.map