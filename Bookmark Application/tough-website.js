// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}];
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");
let bookmarksListEl = document.getElementById("bookmarksList");

function createAndAppend(bookmark) {
    let listEl = document.createElement("li");
    listEl.classList.add("bg-item3", "d-flex", "flex-row", "mt-3", "p-3");
    bookmarksListEl.appendChild(listEl);

    let containerEl = document.createElement("div");
    listEl.appendChild(containerEl);

    let labelEl = document.createElement("label");
    labelEl.classList.add("text");
    labelEl.textContent = bookmark.name;
    containerEl.appendChild(labelEl);

    let container2El = document.createElement("div");
    container2El.classList.add("mr-2", "ml-auto");
    listEl.appendChild(container2El);

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "btn-primary");

    let anchorEl = document.createElement("a");
    anchorEl.href = bookmark.url;
    anchorEl.target = "_blank";
    anchorEl.textContent = "Visit";
    anchorEl.classList.add("visit-button");
    buttonEl.appendChild(anchorEl);
    container2El.appendChild(buttonEl);
}

for (let bookmark of bookmarks) {
    createAndAppend(bookmark);
}

function newFolder() {
    if ((siteNameInputEl.value === "") || siteUrlInputEl.value === "") {
        siteNameInputEl.addEventListener("change", function(event) {
            if (event.target.value === "") {
                siteNameErrMsgEl.textContent = "Requried*";
            } else {
                siteNameErrMsgEl.textContent = "";
            }
        });
        siteUrlInputEl.addEventListener("change", function(event) {
            if (event.target.value === "") {
                siteUrlErrMsgEl.textContent = "Requried*";
            } else {
                siteUrlErrMsgEl.textContent = "";
            }
        });

    } else {
        let nameInput = siteNameInputEl.value;
        let urlInput = siteUrlInputEl.value;

        let newBookmark = {
            name: nameInput,
            url: urlInput
        };
        bookmarks.push(newBookmark);
        createAndAppend(newBookmark);
    }
}

siteNameInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Requried*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});
siteUrlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Requried*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

function invalidNameAndUrlText() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Requried*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Requried*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}


bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    invalidNameAndUrlText();
    newFolder();
});