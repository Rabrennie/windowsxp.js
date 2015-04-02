#WindowsXP.js 

Javascript library for creating Windows XP like windows in the browser

####[Live Example](http://rabrennie.github.io/windowsxp/)

####Functions:

.boot() : initialises a new WindowsXp object;

.setBG() : Sets the background image of the page to the original ["Bliss"](http://en.wikipedia.org/wiki/Bliss_%28image%29) image.

.newWindow(x,y,width,height,title) : makes a new window with the parameters passed to it.

####Example Usage:

```javascript
<script src="windowsxp.js"></script>
<script>

	var windows = windowsxp.boot();
	windows.setBG()
	windows.newWindow(100,100,400,400, "HELLO WORLD");
	windows.newWindow(200,200,400,400, "Window Title");	
		
</script>
```

*Please not this is a work in progress.
