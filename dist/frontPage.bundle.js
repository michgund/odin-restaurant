"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["frontPage"],{

/***/ "./src/frontPage.js":
/*!**************************!*\
  !*** ./src/frontPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _hotpot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotpot.png */ "./src/hotpot.png");


function homePage() {
  const newDiv = document.createElement("div");
  //   // Add the image
  const myImage = new Image();
  myImage.src = _hotpot_png__WEBPACK_IMPORTED_MODULE_0__;
  newDiv.appendChild(myImage);

  let text =
    "Welcome to Valhalla's Feast: Where the Gods Dine! <br> Step into the realm of the Norse gods and experience a dining adventure like no other. Our doors are open, and we extend a warm welcome to mortals and immortals alike to embark on a culinary journey fit for Odin himself. <br>At Valhalla's Feast, we honor the ancient traditions and epic sagas of Norse mythology, bringing them to life through tantalizing flavors and enchanting ambience. Prepare to be swept away by the magic and mystique of Asgard as you indulge in divine feasts worthy of Valhalla's esteemed warriors. <br>Immerse yourself in the splendor of our grand hall, adorned with mighty banners and intricate Norse artwork. Let the soft glow of flickering torches guide you to your seat, where you will be treated like a true hero of old. Our friendly staff, inspired by Odin's wisdom, will ensure your visit is nothing short of legendary. <br>Savor the taste of the Nine Realms as our skilled chefs conjure dishes of unparalleled creativity and quality. From succulent meats roasted to perfection, infused with herbs and spices from the enchanted forests, to delicacies inspired by the bountiful seas that surround Midgard, our menu is a tapestry of culinary delights. <br>Raise your goblets and toast with Odin's favored mead, crafted by the master brewers of Valhalla. Let the golden nectar flow, fueling tales and camaraderie as you revel in the company of fellow diners, both mortal and divine. <br>Whether you seek a gathering place for feasts and celebrations or a sanctuary to escape the mortal realm, Valhalla's Feast stands ready to fulfill your desires. Join us, and let the wonders of Asgard captivate your senses in an experience that will leave you yearning to return. <br>Hail to Odin, the Allfather! Welcome, honored guests, to Valhalla's Feast!";
  const textArr = text.split("<br>");
  textArr.forEach((para) => {
    text = document.createElement("p");
    text.innerHTML = para;
    newDiv.appendChild(text);
  });

  return newDiv;
}


/***/ }),

/***/ "./src/hotpot.png":
/*!************************!*\
  !*** ./src/hotpot.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77c0590c35829d413a13.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/frontPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRQYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0NBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnJvbnRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPZGluIGZyb20gXCIuL2hvdHBvdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgLy8gQWRkIHRoZSBpbWFnZVxuICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gIG15SW1hZ2Uuc3JjID0gT2RpbjtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4gIGxldCB0ZXh0ID1cbiAgICBcIldlbGNvbWUgdG8gVmFsaGFsbGEncyBGZWFzdDogV2hlcmUgdGhlIEdvZHMgRGluZSEgPGJyPiBTdGVwIGludG8gdGhlIHJlYWxtIG9mIHRoZSBOb3JzZSBnb2RzIGFuZCBleHBlcmllbmNlIGEgZGluaW5nIGFkdmVudHVyZSBsaWtlIG5vIG90aGVyLiBPdXIgZG9vcnMgYXJlIG9wZW4sIGFuZCB3ZSBleHRlbmQgYSB3YXJtIHdlbGNvbWUgdG8gbW9ydGFscyBhbmQgaW1tb3J0YWxzIGFsaWtlIHRvIGVtYmFyayBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgZml0IGZvciBPZGluIGhpbXNlbGYuIDxicj5BdCBWYWxoYWxsYSdzIEZlYXN0LCB3ZSBob25vciB0aGUgYW5jaWVudCB0cmFkaXRpb25zIGFuZCBlcGljIHNhZ2FzIG9mIE5vcnNlIG15dGhvbG9neSwgYnJpbmdpbmcgdGhlbSB0byBsaWZlIHRocm91Z2ggdGFudGFsaXppbmcgZmxhdm9ycyBhbmQgZW5jaGFudGluZyBhbWJpZW5jZS4gUHJlcGFyZSB0byBiZSBzd2VwdCBhd2F5IGJ5IHRoZSBtYWdpYyBhbmQgbXlzdGlxdWUgb2YgQXNnYXJkIGFzIHlvdSBpbmR1bGdlIGluIGRpdmluZSBmZWFzdHMgd29ydGh5IG9mIFZhbGhhbGxhJ3MgZXN0ZWVtZWQgd2FycmlvcnMuIDxicj5JbW1lcnNlIHlvdXJzZWxmIGluIHRoZSBzcGxlbmRvciBvZiBvdXIgZ3JhbmQgaGFsbCwgYWRvcm5lZCB3aXRoIG1pZ2h0eSBiYW5uZXJzIGFuZCBpbnRyaWNhdGUgTm9yc2UgYXJ0d29yay4gTGV0IHRoZSBzb2Z0IGdsb3cgb2YgZmxpY2tlcmluZyB0b3JjaGVzIGd1aWRlIHlvdSB0byB5b3VyIHNlYXQsIHdoZXJlIHlvdSB3aWxsIGJlIHRyZWF0ZWQgbGlrZSBhIHRydWUgaGVybyBvZiBvbGQuIE91ciBmcmllbmRseSBzdGFmZiwgaW5zcGlyZWQgYnkgT2RpbidzIHdpc2RvbSwgd2lsbCBlbnN1cmUgeW91ciB2aXNpdCBpcyBub3RoaW5nIHNob3J0IG9mIGxlZ2VuZGFyeS4gPGJyPlNhdm9yIHRoZSB0YXN0ZSBvZiB0aGUgTmluZSBSZWFsbXMgYXMgb3VyIHNraWxsZWQgY2hlZnMgY29uanVyZSBkaXNoZXMgb2YgdW5wYXJhbGxlbGVkIGNyZWF0aXZpdHkgYW5kIHF1YWxpdHkuIEZyb20gc3VjY3VsZW50IG1lYXRzIHJvYXN0ZWQgdG8gcGVyZmVjdGlvbiwgaW5mdXNlZCB3aXRoIGhlcmJzIGFuZCBzcGljZXMgZnJvbSB0aGUgZW5jaGFudGVkIGZvcmVzdHMsIHRvIGRlbGljYWNpZXMgaW5zcGlyZWQgYnkgdGhlIGJvdW50aWZ1bCBzZWFzIHRoYXQgc3Vycm91bmQgTWlkZ2FyZCwgb3VyIG1lbnUgaXMgYSB0YXBlc3RyeSBvZiBjdWxpbmFyeSBkZWxpZ2h0cy4gPGJyPlJhaXNlIHlvdXIgZ29ibGV0cyBhbmQgdG9hc3Qgd2l0aCBPZGluJ3MgZmF2b3JlZCBtZWFkLCBjcmFmdGVkIGJ5IHRoZSBtYXN0ZXIgYnJld2VycyBvZiBWYWxoYWxsYS4gTGV0IHRoZSBnb2xkZW4gbmVjdGFyIGZsb3csIGZ1ZWxpbmcgdGFsZXMgYW5kIGNhbWFyYWRlcmllIGFzIHlvdSByZXZlbCBpbiB0aGUgY29tcGFueSBvZiBmZWxsb3cgZGluZXJzLCBib3RoIG1vcnRhbCBhbmQgZGl2aW5lLiA8YnI+V2hldGhlciB5b3Ugc2VlayBhIGdhdGhlcmluZyBwbGFjZSBmb3IgZmVhc3RzIGFuZCBjZWxlYnJhdGlvbnMgb3IgYSBzYW5jdHVhcnkgdG8gZXNjYXBlIHRoZSBtb3J0YWwgcmVhbG0sIFZhbGhhbGxhJ3MgRmVhc3Qgc3RhbmRzIHJlYWR5IHRvIGZ1bGZpbGwgeW91ciBkZXNpcmVzLiBKb2luIHVzLCBhbmQgbGV0IHRoZSB3b25kZXJzIG9mIEFzZ2FyZCBjYXB0aXZhdGUgeW91ciBzZW5zZXMgaW4gYW4gZXhwZXJpZW5jZSB0aGF0IHdpbGwgbGVhdmUgeW91IHllYXJuaW5nIHRvIHJldHVybi4gPGJyPkhhaWwgdG8gT2RpbiwgdGhlIEFsbGZhdGhlciEgV2VsY29tZSwgaG9ub3JlZCBndWVzdHMsIHRvIFZhbGhhbGxhJ3MgRmVhc3QhXCI7XG4gIGNvbnN0IHRleHRBcnIgPSB0ZXh0LnNwbGl0KFwiPGJyPlwiKTtcbiAgdGV4dEFyci5mb3JFYWNoKChwYXJhKSA9PiB7XG4gICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQuaW5uZXJIVE1MID0gcGFyYTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdEaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=