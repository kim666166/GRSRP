/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo1.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "8HURZgwvK28", name: "Don't Be A Fool - Shawn Mendes"},
	{youtube: "FrIWlLizMJg", name: "Treat You Better - Shawn Mendes"},
	{youtube: "h82LDhLreRM", name: "Thinking Out Loud - Ed Sheeran"},
	{youtube: "SlbfAYvA_gI", name: "Photograph - Ed Sheeran"},
	{youtube: "FrIWlLizMJg", name: "One - Ed Sheeran"},
	{youtube: "hLQl3WQQoQ0", name: "Someone Like You - Adele"},
	{youtube: "2B50RUXbs-8", name: "Love The Way You Lie (Part II) (ft. Eminem) - Rihanna"},
	{youtube: "0wGVG7sZpPA", name: "Hello, You Beautiful Thing - Jason Mraz"},
	{youtube: "2QjqCJOPu-M", name: "Different Colors - WALK THE MOON"},
	{youtube: "LqI78S14Wgg", name: "Demons - Imagine Dragons"},
	{youtube: "jMKx8jUst0U", name: "Summertime of our lives - Cody Simpson"},
	{youtube: "Y1xs_xPb46M", name: "One Thing - One Direction "},
	{youtube: "pW7W8hbdhX8", name: "No Control - One Direction"},
	{youtube: "0l7GXX9K_Eg", name: "Leave Your Lover - Sam Smith"},
	{youtube: "YQY9BZBrZds", name: "Locked Away - R. City(ft. Adam Levine) "},
	{youtube: "Thbsg9i2mZ0", name: "Radioactive - Imagine Dragons"}

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 50;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
