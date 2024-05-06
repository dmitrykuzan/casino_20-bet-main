"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger, accordion } from "./functions/";

// Components

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  accordion(".faq__body", "faq__question", ".faq__wrapper", "active");
});
