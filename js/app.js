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
if (!window.navigator.standalone) {
    document.getElementById("tab1").innerHTML = `<br /><br /><span class="fromthedev">Welcome to Scarlet</span><br><br><img src="assets/icon.jpg" width="100px" height="100px" alt="scarlet" style="border-radius: 32%" /><br><br><span style="font-size:15px;font-family: 'Ubuntu', sans-serif;">Please download the profile below.</span><br /><br /><a href="assets/Scarlet.mobileconfig" style="text-align: center;width:50%;margin:auto;display:block;" class="link external col button color-pink">Download</a>`;
}