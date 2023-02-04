/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

var form = document.querySelector("#form");
var formActive = document.querySelector("#form--active");
var taskInput = document.querySelector("#task");
var list = document.querySelector("#list");
var formError = document.querySelector("#form-error");
var removeButton = document.querySelector("#remove-all");
var removeCompletedButton = document.querySelector("#remove-completed");
taskInput.addEventListener("input", function () {
  if (taskInput.value) {
    formActive.classList.add('true');
  } else {
    formActive.classList.remove('true');
  }
});
var loadTasks = function loadTasks() {
  var cookie = document.cookie.split("=")[1];
  if (cookie) {
    var tasks = JSON.parse(decodeURIComponent(cookie));
    tasks.forEach(function (task) {
      var item = document.createElement("li");
      item.innerHTML = "\n        <div>\n          <input type=\"checkbox\" name=\"tasks\" id=\"".concat(task.id, "\" ").concat(task.completed ? "checked" : "", ">\n          <label for=\"").concat(task.id, "\" ").concat(task.completed ? "style='text-decoration: line-through;'" : "", ">").concat(task.task, "</label>\n        </div>\n        <button class=\"btn__remove-task\">X</button>\n      ");
      list.appendChild(item);
      var input = item.querySelector("input");
      input.addEventListener("change", function () {
        saveTasks();
        setCheckedState(input);
      });
      setCheckedState(input);
      var removeButton = item.querySelector(".btn__remove-task");
      removeButton.addEventListener("click", function () {
        item.remove();
        saveTasks();
      });
    });
  }
};
var saveTasks = function saveTasks() {
  var items = list.querySelectorAll("li");
  var tasks = [];
  var date = new Date();
  items.forEach(function (item) {
    var input = item.querySelector("input");
    var id = input.id;
    var task = item.querySelector("label").innerHTML;
    var completed = input.checked;
    tasks.push({
      id: id,
      task: task,
      completed: completed
    });
  });
  date.setTime(date.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
  document.cookie = "tasks=".concat(encodeURIComponent(JSON.stringify(tasks)), "; expires=").concat(date.toUTCString());
};
var setCheckedState = function setCheckedState(input) {
  if (input.checked) {
    input.nextElementSibling.style.textDecoration = "line-through";
  } else {
    input.nextElementSibling.style.textDecoration = "";
  }
};
var removeAllTasks = function removeAllTasks() {
  document.cookie = "tasks=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  list.innerHTML = "";
};
var removeCompletedTasks = function removeCompletedTasks() {
  var items = list.querySelectorAll("li");
  var itemsToRemove = [];
  items.forEach(function (item) {
    var input = item.querySelector("input");
    if (input.checked) {
      itemsToRemove.push(item);
    }
  });
  itemsToRemove.forEach(function (item) {
    item.remove();
  });
  saveTasks();
};
var taskId = 0;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var task = taskInput.value;
  if (!task) {
    formError.innerHTML = 'The task field cannot be empty.';
    return;
  }
  var existingTasks = list.querySelectorAll("li label");
  for (var i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].innerHTML === task) {
      formError.innerHTML = 'Already on the list. Type in a new to do';
      return;
    }
  }
  var item = document.createElement("li");
  item.innerHTML = "\n    <div>\n      <input type=\"checkbox\" name=\"tasks\" id=\"task-".concat(taskId, "\">\n      <label for=\"task-").concat(taskId, "\">").concat(task, "</label>\n    </div>\n    <button class=\"btn__remove-task\">X</button>\n  ");
  list.appendChild(item);
  var input = item.querySelector("input");
  input.addEventListener("change", function () {
    saveTasks();
    setCheckedState(input);
  });
  setCheckedState(input);
  var removeButton = item.querySelector(".btn__remove-task");
  removeButton.addEventListener("click", function () {
    item.remove();
    saveTasks();
  });
  taskInput.value = "";
  formActive.classList.remove('true');
  taskId++;
  saveTasks();
});
removeButton.addEventListener("click", removeAllTasks);
removeCompletedButton.addEventListener("click", removeCompletedTasks);
loadTasks();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/assets/js/app": 0,
/******/ 			"public/assets/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/assets/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/assets/css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;