// TODO: Uncomment these variables as needed.
let text = document.getElementById("text") as HTMLInputElement;
let characters = document.getElementById("characters") as HTMLSpanElement;
let form = document.getElementById("form") as HTMLFormElement;
let tweets = document.getElementById("tweets") as HTMLDivElement;

export let main = async () => {
    document.body.style.background = "lightgray";
    text.onkeyup  = updateLength;
    form.onsubmit = postTweet;
};

let postTweet = (event: Event): void => {
    event.preventDefault();
    let p = document.createElement("p");
    p.textContent  = text.value;
    tweets.appendChild(p);
    text.value = "";
    updateLength();
};

let  updateLength = (event?: KeyboardEvent): void => {
    characters.textContent = text.value.length + "  chars";
    characters.style.fontSize = text.value.length + "pt";
};
main();