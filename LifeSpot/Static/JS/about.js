let commentForm = document.getElementById("commentForm");
function submitComment(e) {
    e.preventDefault();
    addComment();
}

const showCommentForm = function () {
    let formElements = Array.from(commentForm.children);
    formElements.forEach(element => {
        element.style.visibility = 'visible';
    });
}

const writeComment = comment => {
    let likeCount = '';
    if (comment.hasOwnProperty("rate")) {
        likeCount = ` <button id="${Math.random()}" class="likeButton" onclick="AddLike(this.id)">❤️ ${comment.rate}</button>`;
    }
    document.getElementById("commentSection").innerHTML +=
        `<div class="comment">\n`
        + `<p><b>${comment.userName}</b> ${comment.date + likeCount}</p>`
        + `<p> ${comment.Text}</p>`
        + `</div>`;
}

function Comment() {
    this.userName = document.getElementById("commenterNameInput").value;
    this.Text = document.getElementById("commentTextInput").value;
    this.date = new Date().toLocaleString();
}

function addComment() {
    let comment = new Comment();
    if (confirm("Хотите, чтоб полезность комментария могли оценить другие пользователи?")) {
        comment = Object.create(comment);
        comment.rate = 0;
    }
    writeComment(comment);
}

const AddLike = function (buttonId) {
    let likedButton = document.getElementById(buttonId);
    // rate is last.
    const rate = likedButton.innerHTML.split(' ').at(-1);
    const updatedHtml = likedButton.innerHTML.replace(rate, Number(rate) + 1);
    likedButton.innerHTML = updatedHtml;
}

