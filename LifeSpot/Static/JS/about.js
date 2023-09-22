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

function addComment() {
    let comment = {}
    comment.userName = document.getElementById("commenterNameInput").value;
    comment.Text = document.getElementById("commentTextInput").value;
    comment.date = new Date().toLocaleString();
    if (confirm("Хотите, чтоб полезность комментария могли оценить другие пользователи?")) {
        comment = Object.create(comment);
        comment.rate = 0;
    }
    writeComment(comment);
}

