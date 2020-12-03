var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'Scarlet Online', // App name
  theme: 'ios', // Automatic theme detection
  // App root data
  data() {
    return {
      foo: 'bar'
    };
  },
  // App root methods
  methods: {
    doSomething() {
      // ...
    }
  },


  // App routes
  routes: routes,
});