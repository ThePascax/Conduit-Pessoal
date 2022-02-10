export function FavButton({ article, event, index, size, text, arr }) {
  return (
    article.author && (
      <button
        className={`btn btn-sm btn-outline-primary ${
          size ? "pull-xs-right" : ""
        } ${article.favorited ? "active" : ""}`}
        onClick={() =>
          event({
            slug: article.slug,
            favorited: article.favorited,
            index: index,
            arr: arr,
          })
        }
      >
        <i className="ion-heart"></i> {text ? text : ""}{" "}
        <span className="counter">{article.favoritesCount}</span>
      </button>
    )
  );
}

export function FollowButton({ author, handler }) {
  return (
    <>
      <button
        className={`btn text-dark btn-sm action-btn ng-binding ${
          author.following ? "btn-secondary" : ""
        }`}
        style={{ color: "#777" }}
        onClick={handler}
      >
        <i
          className={author.following ? "ion-minus-round" : "ion-plus-round"}
        ></i>
        {author.following ? " Unfollow " : " Follow "}
        {author.username}
        <span className="counter">{/* TODO:Add followers count */}</span>
      </button>{" "}
    </>
  );
}
