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
    document.getElementById("commentSection").innerHTML +=
        `<div class="comment">\n`
        + `<p><b>${comment.userName}</b> ${comment.date}</p>`
        + `<p> ${comment.commentText}</p>`
        + `</div>`;
}

function addComment() {
    let comment = {}
    comment.userName = document.getElementById("commenterNameInput").value;
    comment.Text = document.getElementById("commentTextInput").value;
    comment.date = new Date().toLocaleString();

    writeComment(comment);
}

