// DIGIT RUNNER 
function digitRunner(numberNode) {
    function calculateStartNum(number, back) {
        if (number < back) {
            return 9 - (back - number) + 1
        }
        return number - back
    }

    function prepareRunningArr(number, back) {
        var from = calculateStartNum(number, back),
            out = []
        for (var i = 0; i < back; i++) {
            from++
            if (from > 9) from = 0
                out.push(from)
        }
        return out
    }

    function runner(node, placeno, ar, pause) {
        for (let i = 0; i < ar.length; i++) {
            setTimeout(function () {
                node[placeno].innerHTML = ar[i]
            }, pause + 50 * i);
        }
    }

    var num = numberNode.childNodes,
        digits = [],
        newnum = []
    for (let i = 0; i < num.length; i++) {
        digits[i] = +num[i].innerHTML
    }
    for (let i = 0; i < digits.length; i++) {
        var d = prepareRunningArr(digits[i], 7)
        newnum[i] = []
        for (let k = 0; k < d.length; k++) {
            newnum[i].push(d[k])
        }
    }
    var delay = 0
    for (let i = 0; i < newnum.length; i++) {
        delay += 150
        runner(num, i, newnum[i], delay)
    }
}

window.addEventListener("load", RunRunner, false);
function RunRunner () {	
	var els = document.querySelectorAll('.running')
	for (let i = 0; i < els.length; i++) {
		// 	els[i].notEvokedYet = true
		els[i].classList.add('hidden')
	}
	// function isElementInViewport(el) {
	// 	var rect = el.getBoundingClientRect();
	// 	return (
	// 		rect.top >= 0 &&
	// 		rect.left >= 0 &&
	// 		rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + 150) &&
	// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	// 	);
	// }

	// function runIfVisible(e) {
	// 	for (let i = 0; i < els.length; i++) {
	// 		if (isElementInViewport(els[i])) {
	// 			if (els[i].notEvokedYet) {
	// 				els[i].classList.remove('hidden')
	// 				digitRunner(els[i])
	// 				els[i].notEvokedYet = false
	// 			}
	// 		} else els[i].notEvokedYet = true
	// 	}
	// }
	// window.addEventListener("scroll", runIfVisible)
	
	// new approach
	var options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2
	}
	var callback = function(entries, observer) { 
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// console.log(entry)
				if (entry.target.classList.contains('hidden')) {
					// console.log('notevokedyet = true')
					entry.target.classList.remove('hidden')
					digitRunner(entry.target)
				}
			}
		})
	}
	var observer = new IntersectionObserver(callback, options);
	var target = document.querySelectorAll('.running');
	for (let i = 0; i < els.length; i++) {
		observer.observe(target[i]);
	}
}