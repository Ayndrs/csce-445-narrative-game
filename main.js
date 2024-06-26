/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const DIALOGUE = 2;
const EPILOGUE = 3;
const EPILOGUE2 = 4;

state = {
  gameStage: LOADING,
  isLoading: true,
  epilogue: null,
  epilogue2:null,
  talkingAudio: new Audio(),
  loudAudio: new Audio(),
};

function donePreloading() {
  if (state.isLoading) {
    state.isLoading = false;
    state.talkingAudio.loop = true;
    state.talkingAudio.src = "sounds/typing.mp3"
    state.loudAudio.loop = true;
    state.loudAudio.src = "sounds/dragon-breathes-fire-3-191459.mp3"
    $(".loading-dots").addClass("hidden");
    state.gameStage = TITLE;
    showGameStage();
  }
}

function startGame() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
}

function showDialogue(textNodeIndex) {
  const dialogue = DIALOGUE_CONTENT;
  if (getLives() == 0){
        showEpilogue2();
  }
  const textNode = dialogue.find((textNode) => textNode.id === textNodeIndex);
  // Stop any currently playing audio
  state.loudAudio.pause();
  state.loudAudio.currentTime = 0;

  // Play audio if available
  if (textNode.audioSrc) {
    state.loudAudio.src = textNode.audioSrc;
    state.loudAudio.play();
  }

  $("#character-portrait").css(
    "background-image",
    "url(" + textNode.characterImg[0] + ")"
  );
  $("#character-portrait").css(
    "background-position-x",
    textNode.characterImg[1] + "px"
  );
  $("#character-portrait").css(
    "background-position-y",
    textNode.characterImg[2] + "px"
  );

  $("#responses").empty(); // reset
  $("#progress-dialogue").addClass("hidden");

  // If displaying a dialogue object with options to show on the screen
  if (textNode.options) {
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      $("#responses").append(button);
    });
  }

  // If displaying a dialogue object with text and speaker content
  if (textNode.speakerName && textNode.text) {
    $("#speaker-name").text(textNode.speakerName);
    $("#character-dialogue").empty();

    loadingText = true;
    state.talkingAudio.play();
    
    textArray = textNode.text.split("");
    timeouts = [];

    textArray.forEach((letter, index) => {
      timeouts.push(
        setTimeout(() => {
          $("#character-dialogue").append(letter);
        }, 20 * index)
      );
    });

    timeouts.push(
      setTimeout(
        () => finishLoadingDialogue(textNode),
        20 * (textArray.length - 1)
      )
    );

    document.body.onkeyup = function (e) {
      if (e.code == "Space" || e.code == "Enter") {
        clearTimeouts(timeouts, textNode);
      }
    };

    $(".dialogue-wrapper").click(function () {
      clearTimeouts(timeouts, textNode);
    });
  }
 
}

function clearTimeouts(timeouts, textNode) {
  if (loadingText) {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
    $("#character-dialogue").html(textNode.text);
    finishLoadingDialogue(textNode);
  }
}

function finishLoadingDialogue(textNode) {
  loadingText = false;
  state.talkingAudio.pause();
  $("#progress-dialogue").removeClass("hidden");

  document.body.onkeyup = function (e) {
    if (e.code == "Space" || e.code == "Enter") {
      // if (textNode.decrement == true){
      //   updateLivesCount();
      // }
      advance(textNode);
    }
  };
  $("#progress-dialogue").click(function (event) {
    event.stopPropagation();
    // if (textNode.decrement == true){
    //   updateLivesCount();
    // }
    advance(textNode);
  });
  $(".dialogue-wrapper").click(function () {
    // if (textNode.decrement == true){
    //   updateLivesCount();
    // }
    advance(textNode);
  });
}

function clearListeners() {
  document.body.onkeyup = {};
  $("#progress-dialogue").off("click");
  $(".dialogue-wrapper").off("click");
}

function advance(textNode) {
  clearListeners();
  if (textNode.next == FINISH) {
    showEpilogue();
  } else
    showDialogue(textNode.next);
}


function selectOption(option) {
  if (option.setState) {
    state = Object.assign(state, option.setState);
  }
  option.chatMoods?.forEach((chatMood) => {
    showChat(chatMood);
  });
  ///
  if (option.decrement == true){
    updateLivesCount();
  }

  showDialogue(option.nextText);
}

function showGameStage() {
  $("#loading").addClass("hidden");
  $("#titlescreen").addClass("hidden");
  $("#dialogue-container").addClass("hidden");
  $("#epilogue").addClass("hidden");
  $("#epilogue2").addClass("hidden");
  switch (state.gameStage) {
    case LOADING:
      $("#loading").removeClass("hidden");
      break;
    case TITLE:
      $("#titlescreen").removeClass("hidden");
      break;
    case DIALOGUE:
      $("#dialogue-container").removeClass("hidden");
      break;
    case EPILOGUE:
      $("#epilogue").removeClass("hidden");
      break;
    case EPILOGUE2:
      $("#epilogue2").removeClass("hidden");
      break;
  }
}

function showEpilogue() {
  state.gameStage = EPILOGUE;
  showGameStage();
  const epilogueObject = EPILOGUES.find(
    (epilogue) => epilogue.id === state.epilogue
  );
  $("#epilogue-result").text(epilogueObject.text);
}

function showEpilogue2() {
  state.gameStage = EPILOGUE2;
  showGameStage();
  const epilogueObject = EPILOGUES.find(
    (epilogue2) => epilogue2.id === state.epilogue2
  );
  $("#epilogue-result2").text(epilogueObject.text);
}

function restart() {
  resetLives();
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
}