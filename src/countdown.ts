const EVENT_DATE = new Date(2025, 3, 13);
const EVENT_END_DATE = new Date(2025, 9, 13);
const startContent = document.querySelector(".c_startcounter__content");
const startMainttl = document.querySelector(".c_startcounter__mainttl");
const endContent = document.querySelector(".c_endcounter__content");
const endMainttl = document.querySelector(".c_endcounter__mainttl");

// 時間差を計算する関数
function getTimeDifference(eventDate: Date) {
  const currentTime = new Date().getTime();
  const difference = eventDate.getTime() - currentTime;

  return {
    date: Math.floor(difference / (1000 * 60 * 60 * 24)),

    hour: Math.floor((difference / (1000 * 60 * 60)) % 24),

    minut: Math.floor((difference / (1000 * 60)) % 60),

    second: Math.floor((difference / 1000) % 60),
  };
}

// startカウントダウンを更新する
function updateCountDown() {
  const { date, hour, minut, second } = getTimeDifference(EVENT_DATE);

  const countdownDay = document.getElementById("countdownDay");
  if (countdownDay) {
    if (date <= 0) {
      if (startContent) {
        startContent.textContent = "The event has started!";
        if (startMainttl) {
          startMainttl.textContent = "";
        }
      }
    } else {
      countdownDay.textContent = String(date);
    }
  }

  const countdownHour = document.getElementById("countdownHour");
  if (countdownHour) {
    countdownHour.textContent = String(hour);
  }

  const countdownMinut = document.getElementById("countdownMinut");
  if (countdownMinut) {
    if (minut <= 10) {
      countdownMinut.textContent = String(minut).padStart(2, "0");
    } else {
      countdownMinut.textContent = String(minut);
    }
  }

  const countdownSecond = document.getElementById("countdownSecond");
  if (countdownSecond) {
    if (second <= 10) {
      countdownSecond.textContent = String(second).padStart(2, "0");
    } else {
      countdownSecond.textContent = String(second);
    }
  }
}

// endカウントダウンを更新する
function updateClosingCountDown() {
  const { date, hour, minut, second } = getTimeDifference(EVENT_END_DATE);

  const countdownEndDay = document.getElementById("countdownEndDay");
  if (countdownEndDay) {
    if (date < 0) {
      if (endContent) {
        endContent.textContent = "The event has ended!";
        if (endMainttl) {
          endMainttl.textContent = "";
        }
      }
    } else {
      countdownEndDay.textContent = String(date);
    }
  }

  const countdownEndHour = document.getElementById("countdownEndHour");
  if (countdownEndHour) {
    countdownEndHour.textContent = String(hour);
  }

  const countdownEndMinut = document.getElementById("countdownEndMinut");
  if (countdownEndMinut) {
    if (minut <= 10) {
      countdownEndMinut.textContent = String(minut).padStart(2, "0");
    } else {
      countdownEndMinut.textContent = String(minut);
    }
  }

  const countdownEndSecond = document.getElementById("countdownEndSecond");
  if (countdownEndSecond) {
    if (second <= 10) {
      countdownEndSecond.textContent = String(second).padStart(2, "0");
    } else {
      countdownEndSecond.textContent = String(second);
    }
  }
}

export { updateCountDown, updateClosingCountDown };
