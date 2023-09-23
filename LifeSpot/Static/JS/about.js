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
    let rateParagraph = '';
    if (comment.hasOwnProperty("rate")) {
        rateParagraph = `<small> Рейтинг отзыва: ${comment.rate}</small>`;
    }
    document.getElementById("commentSection").innerHTML +=
        `<div class="comment">\n`
        + `<p><b>${comment.userName}</b> ${comment.date + rateParagraph}</p>`
        + `<p> ${comment.commentText}</p>`
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

