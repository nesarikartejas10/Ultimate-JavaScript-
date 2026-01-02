fetch("https://dummyjson.com/users")
  .then((res) => {
    return res.json();
  })
  .then((usersData) => {
    console.log(usersData);
    fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)
      .then((res) => res.json())
      .then((postsData) => {
        console.log(postsData);
        fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
          .then((res) => res.json())
          .then((commentsData) => {
            console.log(commentsData);
            fetch(`https://dummyjson.com/users/${commentsData.comments[1].id}`)
              .then((res) => res.json())
              .then((userData) =>
                console.log(userData.firstName, userData.lastName)
              );
          });
      });
  });
