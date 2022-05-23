// const ambil = async () => {
//   const response = await fetch(
//     "https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo"
//   );
//   const final = response.json();
//   console.log(final);
// };
const ambil = async () => {
  fetch(
    "https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.hits); //=> ini akses JSON hits
      const imageContainer = document.getElementById("image-container");
      data.hits.forEach((d) => {
        const imageWrapper = document.createElement("div"); //per div
        const img = document.createElement("img");
        const src = d.webformatURL;
        img.src = src;
        imageWrapper.setAttribute("class", "image-wrapper");

        // INI LIKE ICON AND LIK
        const imageInfo = document.createElement("div");
        imageInfo.setAttribute("class", "image-info");

        imageWrapper.append(img);
        imageWrapper.append(imageInfo);

        const likeInfo = document.createElement("div");
        likeInfo.setAttribute("class", "like-info");
        const likeiconwrapper = document.createElement("div");
        likeiconwrapper.setAttribute("class", "like-icon-wrapper");
        const imglike = document.createElement("img");
        imglike.src = "./assets/png/like.png";

        const spanLike = document.createElement("span");
        spanLike.innerHTML = d.likes;

        likeiconwrapper.append(imglike);
        likeInfo.append(likeiconwrapper);
        likeInfo.append(spanLike);
        imageInfo.append(likeInfo);

        //INI UNTUK COMMENT
        const commentInfo = document.createElement("div");
        commentInfo.setAttribute("class", "comment-info");
        const commenticonwrapper = document.createElement("div");
        commenticonwrapper.setAttribute("class", "comment-icon-wrapper");
        const imgcomment = document.createElement("img");
        imgcomment.src = "./assets/png/comment.png";
        const spanComment = document.createElement("span");
        spanComment.innerHTML = d.comments;
        commenticonwrapper.append(imgcomment);
        commentInfo.append(commenticonwrapper);
        commentInfo.append(spanComment);
        imageInfo.append(commentInfo);

        imageContainer.append(imageWrapper);
        // INI UNTUK TRANSISI
        //https://www.codegrepper.com/code-examples/javascript/can+you+add+an+event+listener+to+a+class+list+javascript
        // element.addEventListener("click", myFunction);
        // function myFunction() {
        //   document.getElementById("demo").innerHTML = "Hello World";
        // }
        imageInfo.addEventListener("mouseenter", (event) => {
          event.target.classList.add("visible");
        });
        imageInfo.addEventListener("mouseleave", (event) => {
          event.target.classList.remove("visible");
        });
      });
    });
};

ambil();
