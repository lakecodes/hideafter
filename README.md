# data-hideafter
Javascript snippet for hiding elements after an element specific 'data-hideafter' date.

## Example HTML
```html
<p class="noElementsVisibleStatement hidden">Some text visible when nothing else is visible.</p>
<span id="hiddenElementsLoader" class="open"><span></span></span>
<a href="#" data-hideafter="September 25, 2021">Register Now!</a>
<p class="elementsVisibleStatement hidden">Some other text visible when elements are visible.</p>
```

##  CSS for Quick Reference
```css
@keyframes rotate {
	0% {transform: rotateZ(0deg);}
	100% {transform: rotateZ(359.99deg);}
}
#hiddenElementsLoader {
	border: 30px solid transparent;
	border-left-color: #AAA;
	display: inline-block;
	width: 0;
	height: 0;
	position: relative;
	border-radius: 50%;
	animation-name: rotate;
	animation-timing-function: linear;
	animation-duration: .75s;
	animation-iteration-count: infinite;
}
	#hiddenElementsLoader span {
		display: inline-block;
		width: 0;
		height: 0;
		border: 25px solid #FFF;
		position: absolute;
		top: -25px;
		right: -25px;
		bottom: -25px;
		left: -25px;
		border-radius: 50%;
	}


.hidden {
	display:none !important;
	visibility:hidden !important;
}

```


## Changes
###### v2 <2021-08-26>
- Initial creating in GitHub
