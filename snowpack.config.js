module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  mount: {
<<<<<<< HEAD
    src: '/',
  },
  buildOptions: {
    out: 'build',
    baseUrl: '/sleepoutside/build/',
=======
    src: "/",
  },
  buildOptions: {
    out: "build",
    baseUrl: "/sleepoutside/build/",
>>>>>>> 60772a768836857a10d8c54547b1784c585f2850
    clean: true,
  },
  experiments: {
    optimize: {
      // 'bundle': true,
      minify: true,
<<<<<<< HEAD
      target: 'es2015',
=======
      target: "es2015",
>>>>>>> 60772a768836857a10d8c54547b1784c585f2850
    },
  },
};
