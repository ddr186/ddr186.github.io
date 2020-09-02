

$(() => {
  $('.button').on('click', event => {
    preventDefault()
  })

  // all element of modal set to variables
  const $jokeBtn = $('#jokeBtn')
  let $jokeModal = $('#jokeModal')
  let jokeText = ""


  const $openBtn = $('#bioModal')
  const $chuckModal = $('#chuckModal')
  const $closeBtn = $('#close')
  const $closeJoke = $('#closeJoke')

    // my event handlers
    const openModal = () => {
      $chuckModal.css('display', 'block')
    }

    const openJokeModal = () => {
      $jokeModal.css('display', 'block')
    }


    const closeModal = () => {
      $chuckModal.css('display', 'none')


    }
    const closeJokeModal = () => {
      $jokeModal.css('display', 'none')
    }
// I couldn't get the ajax method to work regarding syntax errors. I found this method to work.
    const getRandomJoke = () => {
      $.get("https://api.icndb.com/jokes/random", (data) => {
        $('#joke-text').text(data.value.joke)
      })

      $jokeModal.css('display', 'block')
    //
    }

    // my event listeners
    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    $jokeBtn.on('click', getRandomJoke)
    $closeJoke.on('click', closeJokeModal)

    setTimeout(openModal, 3000);
    setTimeout(closeModal, 6000);

    setTimeout(getRandomJoke, 9000);
    setTimeout(closeJokeModal, 14000)




})
