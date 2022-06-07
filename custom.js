const el = document.querySelectorALL(.filter_embedquestion-iframe);
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();
