const apps = [{
"app_name": "Unc0ver",
"author": "pwn20wnd",
"icon": "https://github.com/pwn20wndstuff/Undecimus/raw/master/Undecimus/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60%403x.png",
"signed_by": "Library++",
"plist_url": "https://url_to_plist.com",
"screenshot": ["url_to_screenshot", "url_to_screenshot", "url_to_screenshot"]
},
{
"app_name": "Odyssey",
"author": "Odyssey Team",
"icon": "https://iosninja.io/img/ipas/odyssey.jpg",
"signed_by": "Jailbreaks.app",
"plist_url": "https://url_to_plist.com",
"screenshot": ["url_to_screenshot", "url_to_screenshot", "url_to_screenshot"]
}];


document.getElementsByTagName("body")[0].style.backgroundImage = 'url("assets/splash.jpg")';
setTimeout(function(){ 
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "black";
    document.body.style.visibility = "visible";
    $("#tabs").fadeIn(2000);
}, 2500);


$(document).ready(function(){
	apps.forEach(function(v,k){
		$(`<div class="page-content tab cent dwnapp" id="${v.app_name}">
	<!-- Move objects down -->
	<br /><br /><br />
	<!-- From the developer text -->
	<div class="cent">
	<span class="fromthedev">From the Developer</span>
	<br /><br /></div>    
	<!-- Image + Appname -->
	    <div style="display:inline-block;vertical-align:top;">
    <img id="pic" style="border-radius: 30%" src="${v.icon}" width="80px" height="80px" alt="Discord ICON" />
</div><div style="display:inline-block;">
    <div style="color:black">&nbsp;</div>
    <div><span id="bruh" class="app_title">&nbsp;${v.app_name}</span></div>
    <div><span class="app_title2" style="color:grey">&nbsp;Version 1.0.0</span></div>
</div><br /><br />
	<!-- Changes -->
	<span class="changes">### Changelog ###<br />- Test<br />- Test<br /><br /></span>
	<!-- Install Button -->
	<a href="javascript:alert('No.')" style="text-align: center;width:80%;margin:auto;display:block;" style="border-radius: 5px;text-align: center" class="col button button-large button-fill color-pink">Install</a><br /><br /><a href="#tab2" class="tab-link tab-link-active col button color-pink">Dismiss</a>
</div>`).appendTo("#tabs");
		$(`<a href="#${v.app_name}" class="tab-link tab-link-active">${v.app_name}</a><br />`).appendTo("#tab2");
	});
});