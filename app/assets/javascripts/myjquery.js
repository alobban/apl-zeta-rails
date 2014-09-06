/**
 * @author Andrew
 */

// function switchImg() {
//     $("#bg-cover-rotator.cover").each(function(index) {
//     	console.log(index);
//         $(this).hide();
//         $(this).delay(10000 * index).fadeIn(10000).fadeOut(10000);
//     });
// }



// var bkgdImage = document.getElementById("cover");
// console.log(bkgdImage);

// var input = "../apl-zeta/img/carousel/";

// var imageArray = ["aplchi1.png","aplchi2.png","aplchi3.png","aplchi4.png","aplchi5.png"];
// var imageIndex = 0;

window.onload = function() {
	var bkgdParent = document.getElementById("bg-cover-rotator");
	console.log(bkgdParent);
	
	var bkgdChildren = bkgdParent.getElementsByClassName("cover");
	console.log(bkgdChildren.length);
	
	var cnt = 0, count = bkgdChildren.length;
	console.log(cnt + " " + count);
	
	var input = "carousel/";
	var imageArray = ["aplchi1.png","aplchi2.png","aplchi3.png","aplchi4.png","aplchi5.png"];
	var imageIndex = 0;
	
	setInterval(carousel, 10000);
	
	function carousel() {
		cnt = (cnt + 1) % count;
		imageIndex = (imageIndex + 1) % imageArray.length;
		console.log(cnt);
		console.log(imageIndex);
		if (cnt === 0) {
			bkgdChildren[cnt].style.background = "url(<%= asset_path '" + input + imageArray[imageIndex] + "' %>) no-repeat center center fixed";
			bkgdChildren[cnt].style.position = "relative";
			bkgdChildren[cnt].style.height = "100%";
			bkgdChildren[cnt].style.width = "100%";
			bkgdChildren[cnt].style.backgroundSize = "cover";
			bkgdChildren[cnt].style.webkitBackgroundSize = "cover";
			
			// switch the other background off
			// switchImg();
			bkgdChildren[(cnt+1)%count].style.display = "none";
			bkgdChildren[cnt].style.display = "block";
		} else {
			bkgdChildren[cnt].style.background = "url(<%= asset_path '" + input + imageArray[imageIndex] + "' %>) no-repeat center center fixed";
			bkgdChildren[cnt].style.position = "relative";
			bkgdChildren[cnt].style.height = "100%";
			bkgdChildren[cnt].style.width = "100%";
			bkgdChildren[cnt].style.backgroundSize = "cover";
			bkgdChildren[cnt].style.webkitBackgroundSize = "cover";
			
			// switch the other background off
			// switchImg();
			bkgdChildren[(cnt+1)%count].style.display = "none";
			bkgdChildren[cnt].style.display = "block";
		}
		console.log("displaying image " + imageArray[imageIndex]);
		console.log(bkgdChildren);
		console.log("content of background " + bkgdChildren[cnt].style.background);
	} 
};


