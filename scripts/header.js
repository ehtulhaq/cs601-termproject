const headerComp = {
  props: ["highlight"],
  data() {
    return { open: false };
  },
  template: `
        <section class="header">
            <button @click="open = !open" class="menu-btn button-black"><i class="ri-menu-fill"></i></button>
            <nav class="menu-desktop">
                <a href="index.html" :class="highlight === 'About' ? 'link active-nav' : 'link'" >About</a>
                <a href="skills.html" :class="highlight === 'Skills' ? 'link active-nav' : 'link'">Skills</a>
                <a href="projects.html" :class="highlight === 'Projects' ? 'link active-nav' : 'link'">Projects</a>
                <a href="videos.html" :class="highlight === 'Videos' ? 'link active-nav' : 'link'">Videos</a>
                <a href="blog.html" :class="highlight === 'Blog' ? 'link active-nav' : 'link'">Blog</a>
                <a href="contact.html" :class="highlight === 'Contact' ? 'link active-nav' : 'link'">Contact</a>
            </nav>
            <transition name="fade">
                <nav class="menu-mobile" v-show="open">
                    <a href="index.html" :class="highlight === 'About' ? 'link active-nav' : 'link'" >About</a>
                    <a href="skills.html" :class="highlight === 'Skills' ? 'link active-nav' : 'link'">Skills</a>
                    <a href="projects.html" :class="highlight === 'Projects' ? 'link active-nav' : 'link'">Projects</a>
                    <a href="videos.html" :class="highlight === 'Videos' ? 'link active-nav' : 'link'">Videos</a>
                    <a href="blog.html" :class="highlight === 'Blog' ? 'link active-nav' : 'link'">Blog</a>
                    <a href="contact.html" :class="highlight === 'Contact' ? 'link active-nav' : 'link'">Contact</a>
                </nav>
            </transition>
        </section>
    `,
};
