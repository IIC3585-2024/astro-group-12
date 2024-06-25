<script>
  let comments = [
    {
      user: "User1",
      message: "Excelente película, la recomiendo.",
      rating: 5,
    },
    {
      user: "User2",
      message: "No me gustó mucho, esperaba más.",
      rating: 2,
    },
    {
      user: "User3",
      message: "Buena película, pero no es para todos.",
      rating: 4,
    }
  ]
</script>



<div class="container">
  {#each comments as comment}
    <div class="comment">
      <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div class="relative flex gap-4">
              <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy">
              <div class="flex flex-col w-full">
                  <div class="flex flex-row justify-between">
                      <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">{comment.user}</p>
                      <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
                  </div>
                  <p class="text-gray-400 text-sm">Calificación: {comment.rating}/5</p>
              </div>
          </div>
          <p class="-mt-4 text-gray-500">{comment.message}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .container {
    position: relative;
    height: auto;
    width: 100%;
  }
  .comment {
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  @keyframes moveVertically {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
  }
  @keyframes moveHorizontally {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
  }
  .comment:nth-child(odd) {
    animation-name: moveVertically;
  }
  .comment:nth-child(even) {
    animation-name: moveHorizontally;
  }
</style>