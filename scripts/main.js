"use strict";
/*
Name: Ehtesham Mohammed
Email: ehtulhaq@bu.edu
*/

document.addEventListener("DOMContentLoaded", () => {
  const app = Vue.createApp({
    data() {
      return { backColor: COLORS.white, textColor: "#000" };
    },
  });
  app.component("headercomp", headerComp);
  app.component("footercomp", footerComp);

  //optional component so checking before using
  var formEle = window.contactForm || {};
  if (formEle !== {}) {
    app.component("contactform", formEle);
  }

  //optional component so checking before using
  var blogEle = window.blog || {};
  if (blogEle !== {}) {
    app.component("blog", blogEle);
  }
  app.mount("#app");
});
