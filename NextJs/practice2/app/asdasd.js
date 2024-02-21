const imageContainer = document.getElementById("imageContainer");

imageContainer.forEach((imageInfo) => {
  imageCard.innerHTML = `
    <div class="image-card" data-id="1">
    <img
    data-src="./data/images/image1.jpg"
    src="./data/images/image1.jpg"
    alt="Image 1"
    class=""
    />
    <h3>Image 1</h3>
    <p>Description of image 1</p>
    <button class="like-btn">Likes: 3</button>
    <div class="comments">
    <li>amazing! <span class="comment-timestamp">(2월 12일 10:01)</span></li>
    </div>
    <form class="comment-form">
    <input type="text" placeholder="Add a comment" />
    <button type="submit">Submit</button>
    </form>
    </div>
`;

  imageContainer.appendChild(imageCard);
});
