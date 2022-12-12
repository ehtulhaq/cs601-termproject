const footerComp = {
  props: [],
  data() {
    return { year: (new Date()).getFullYear() };
  },
  template: `
      <footer class=m-cont>
        <div>
          <a target="_blank" href="https://twitter.com/ehtulhaq"><i class="ri-twitter-fill"></i></a>
          <a target="_blank" href="https://github.com/ehtulhaq"><i class="ri-github-fill"></i></a>
          <a target="_blank" href="https://www.youtube.com/@ehtulhaq7267/videos"><i
              class="ri-youtube-fill"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/ehtulhaq/" class="link"><i
              class="ri-linkedin-box-fill"></i></a>
        </div>
        <p class="copyright">&copy; {{year}} Ehtesham Ul Haq Mohammed</p>
      </footer>
    `,
};
