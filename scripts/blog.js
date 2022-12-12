"use strict";
/*
Name: Ehtesham Mohammed
Email: ehtulhaq@bu.edu
*/
const dataInit = {
  title: "",
  createdAt: "",
  poster: "",
  content: "",
};
window.blog = {
  data() {
    return {
      blogs: [],
      blogsView: true,
      blogDetails: false,
      blog: Object.assign({}, dataInit),
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://639711ba86d04c763389d7b2.mockapi.io/blog"
        ); //Response class
        //Checking the response status
        if (response.status === 200) {
          return response.json();
        }
      } catch (error) {
        console.error("There has been a problem with fetch operation:", error);
      }
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
    populate(item) {
      this.blog = item;
      this.blogsView = false;
      this.blogDetails = true;
    },
    goBack() {
      this.blog = Object.assign({}, dataInit);
      this.blogsView = true;
      this.blogDetails = false;
    },
  },
  beforeMount() {
    this.fetchData().then((data) => {
      if (data !== undefined) {
        this.blogs = data;
      }
    });
  },
  template: `
        <transition name="fade">
        <div v-cloak v-show="blogsView">
            <div class="m-cont slider flex-col">
              <h1 class="statement text-center">
                Blog
              </h1>
              <p class="m-2 text-center">This is a mock blog data fetched from a mock api. In the future this would render my articles.
                <a href="contact.html" class="a-link">Contact to know more</a>
              </p>
            </div>
            <section class="m-cont blogs-container">
                  <div v-for="item in blogs" @click="populate(item)" class="blog-card">
                        <img alt="blog-image"
                          :src="item.poster">
                          <div class="blog-details">
                            <p class="metadata">{{formatDate(item.createdAt)}}</p>
                            <h2>{{item.title}}</h2>
                            <p class=blog-desc>{{item.content}}</p>
                        </div>
                  </div>
            </section>
        </div>
        </transition>
        <transition name="fade">
        <div v-cloak v-show="blogDetails" class="m-cont blog-large">
            <button class="m-cont button-black" @click="goBack"><i class="ri-arrow-left-line"></i></button>
            <img alt="blog-image"
            :src="blog.poster">
            <div class="blog-details">
              <p class="metadata">{{formatDate(blog.createdAt)}}</p>
              <h2>{{blog.title}}</h2>
              <p>{{blog.content}}</p>
          </div>
        </div>
        </transition>
  `,
};
