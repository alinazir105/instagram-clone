const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let postHTML = '' 
for (let i = 0; i < posts.length; i++) {
    postHTML += `
    <section id="section-one">
            <div>
                <img id="post-avatar" class="avatar" src="${posts[i].avatar}" alt="post avatar">
            </div>
            <div>
                <h1 id="name">${posts[i].name}</h1>
                <p id="location">${posts[i].location}</p>
            </div>
        </section>

        <section id="section-two">
            <img id="post-content" src="${posts[i].post}" alt="post content">
        </section>

        <section id="section-three">
            <div>
                <img id="like-btn" src="images/icon-heart.png" alt="like the post"><span id="likes"></span>
                <img src="images/icon-comment.png" alt="comment on the post">
                <img src="images/icon-dm.png" alt="dm the poster">
            </div>
            <p><span id="user">${posts[i].username}</span><span id="comment">${posts[i].comment}</span></p>
        </section>
    `
}

document.getElementById("post").innerHTML = postHTML


let likeBtn = document.getElementById("like-btn")
let likesEl = document.getElementById("likes")

let likes = 0
likeBtn.addEventListener("dblclick", function(){
    likes ++
    likesEl.innerText = likes
    likesEl.style.display = 'inline'
})