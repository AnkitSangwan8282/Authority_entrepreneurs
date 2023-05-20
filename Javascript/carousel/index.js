    const pics = document.getElementsByClassName("pic");
    let currentlyvisible = 0;
    pics[currentlyvisible].classList.add("active");
    document.getElementById("next_btn").addEventListener("click", function () {
      mvtopic(currentlyvisible + 1);
    });
    document.getElementById("prev_btn").addEventListener("click", function () {
      mvtopic(currentlyvisible - 1);
    });
    function mvtopic(n) {
      pics[currentlyvisible].classList.remove("active");
      currentlyvisible = (n + pics.length) % pics.length;
      pics[currentlyvisible].classList.add("active");
    }