(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Gzrk:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n("ufqH"),r=n("vOnD"),o=r.c.div.withConfig({displayName:"divider__Divider",componentId:"r5virg-0"})(["width:100%;height:2px;background:radial-gradient( circle,"," 0%,"," 100% );"],(function(e){return e.theme.colors.orange}),(function(e){var t=e.theme;return Object(a.c)(1,t.colors.light_gray)})),i=n("q1tI"),l=n.n(i),c=function(e){var t=e.children,n=e.className;return l.a.createElement(s,{className:n},l.a.createElement(m,null),l.a.createElement("blockquote",null,t))},s=r.c.div.withConfig({displayName:"blockquote__BlockQuoteWithDivider",componentId:"sc-1lidvlk-0"})(["display:grid;grid-template-columns:2px 1fr;margin-bottom:2rem;"]),m=Object(r.c)(o).withConfig({displayName:"blockquote__RotatedDivider",componentId:"sc-1lidvlk-1"})(["width:2px;height:100%;"])},Uxhg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("sPUu"),i=n("vOnD"),l=n("wEEd"),c=n("hGi/"),s=n("Gzrk"),m=function(e){return Object(c.a)(e),r.a.createElement("div",null,r.a.createElement("p",null,"Back in October of 2019, I joined"," ",r.a.createElement(u,{href:"https://cycle.io",target:"_blank"},"Cycle"),"."),r.a.createElement(s.a,null,r.a.createElement("p",null,"Too many companies have been led down the path of believing they have the same technical requirements as Fortune 100 enterprises, and we're here to fix that."),r.a.createElement("p",null,"Our goal is simple: enable developers to spend more time building awesome products and less time managing infrastructure, pushing deployments, and patching orchestrators."),r.a.createElement("p",{style:{margin:0}},"-"," ",r.a.createElement(u,{href:"https://cycle.io/platform/",target:"_blank"},"Platform"))),r.a.createElement("p",null,"I help manage and maintain five different frontend applications and my most recent noteworthy project has been developing the views/pages of our now-rebranded site, check it out!"),r.a.createElement("h2",null,"I've also written some blog posts!"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u,{href:"https://cycle.io/blog/2020/02/thrown-into-the-fire---learning-containers-as-a-new-college-grad/",target:"_blank"},"Thrown Into the Fire — Learning Containers as a New College Grad")),r.a.createElement("li",null,r.a.createElement(u,{href:"https://cycle.io/blog/2020/10/a-deep-dive-into-cycles-frontend-stack/",target:"_blank"},"A Deep Dive Into Cycle's Frontend Stack"))))},u=i.c.a.withConfig({displayName:"_career__BlueLink",componentId:"o0sdg3-0"})(["color:",";"],(function(e){return e.theme.colors.blue})),d=function(e){return Object(c.a)(e),r.a.createElement("div",null,r.a.createElement(s.b,{style:{marginBottom:"2rem"}}),r.a.createElement("p",null,"From an early age, I was introduced to Halo by a friend and got hooked into gaming. Like many, I got into Computer Science to build games, but in doing so found a world of much more."),r.a.createElement("p",null,"Through school, I learned just how vast the realm of CS is and questioned what path I should take. Tesla was becoming more and more popular and I saw what they were doing with Machine Learning and A.I; So I made these my focus. I was drawn towards this path because I wanted to help develop life-changing technologies that impact and shape the world we live in."),r.a.createElement("p",null,"Near the end of my schooling career, I was afforded an opportunity to become a Frontend Software Engineer and in doing so have found that there are more ways to impact and shape the world than disrupting the automotive industry."),r.a.createElement(s.b,null))},h=function(e){return Object(c.a)(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{marginTop:0}},"University of Nevada, Reno"),r.a.createElement(p,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}},r.a.createElement("p",null,"I graduated in the winter of 2019 from the University of Nevada, Reno with a Bachelors in Computer Science and Engineering and a minor in Mathematics."),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"2rem"}},r.a.createElement(s.b,null)),r.a.createElement("p",null,"My coursework and area of interest was in Machine Learning and A.I. For my Senior project, I worked as the primary front-end developer on a team of three. Our goal was to refactor and rebuild from scratch an in-use production application."))))},p=i.c.div.withConfig({displayName:"_education__Education",componentId:"sc-16v7vsj-0"})(["display:flex;flex-direction:column;align-items:center;height:100%;"]),f=function(e){var t=e.type,n=Object(l.b)({from:{opacity:0,transform:"translateY(5rem)"},to:{opacity:1,transform:"translateY(0)"},config:{mass:1,tension:280,friction:60},reset:!0});return r.a.createElement(g,{style:n},"about"===t&&r.a.createElement(d,null),"education"===t&&r.a.createElement(h,null),"career"===t&&r.a.createElement(m,null))},g=Object(i.c)(l.a.div).withConfig({displayName:"_content-blurb__Content",componentId:"sc-1v81jlb-0"})(["padding:2rem;position:relative;width:100%;color:",";"],(function(e){return e.theme.colors.white})),y=(t.default=function(){var e=Object(a.useState)("about"),t=e[0],n=e[1],i=Object(l.c)(y,(function(e){return e.key}),{trail:150,from:{opacity:0,transform:"scale(0)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0)"}});return r.a.createElement(o.b,null,r.a.createElement(b,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",marginRight:"6rem",textTransform:"capitalize"}},"about"===t?"About Me":t),r.a.createElement(w,null,i.map((function(e){var a=e.item,o=e.key,i=e.props;return console.log("isActive",a.key===t),r.a.createElement(v,{size:a.size,color:a.color,active:a.key===t,key:o,style:i,onClick:function(){return n(a.key)}},r.a.createElement(E,null,a.title))})))),r.a.createElement(f,{type:t})))},[{key:"about",title:"Who Am I?",size:12,color:"light_teal"},{key:"education",title:"Education",size:10,color:"orange"},{key:"career",title:"Career",size:15,color:"blue"}]),b=Object(i.c)(o.c).withConfig({displayName:"about__FullHeightSection",componentId:"eaunc1-0"})(["& > div{min-height:calc(100vh - 24rem);display:flex;align-items:flex-start;flex-direction:column;padding-top:4rem;","{align-items:center;justify-content:space-between;flex-direction:row;}}"],(function(e){return e.theme.mediaQuery.laptop})),w=i.c.ul.withConfig({displayName:"about__CircleWrapper",componentId:"eaunc1-1"})(["display:flex;margin-bottom:2rem;& > li:not(:last-child){margin-right:1.5rem;}","{margin-bottom:unset;margin-right:4rem;}"],(function(e){return e.theme.mediaQuery.laptop})),v=Object(i.c)(l.a.li).withConfig({displayName:"about__Circle",componentId:"eaunc1-2"})(["height:",";width:",";background-color:",";border-radius:50%;color:",";display:flex;align-items:center;justify-content:center;cursor:pointer;transition-property:scale3d;transition-duration:0.25s;transition-timing-function:ease-in-out;",";"],(function(e){return e.size+"rem"}),(function(e){return e.size+"rem"}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){return e.theme.colors.white}),(function(e){return e.active&&"\n    transform: scale3d(1.1, 1.1, 1) !important;\n  "})),E=i.c.h2.withConfig({displayName:"about__CircleHeaders",componentId:"eaunc1-3"})(["font-size:1.7rem;margin:0;"])},"hGi/":function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-about-index-tsx-8e3cea6061dce95e5524.js.map