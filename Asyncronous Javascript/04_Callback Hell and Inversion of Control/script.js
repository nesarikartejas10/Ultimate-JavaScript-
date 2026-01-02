const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "red";
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "green";
//     setTimeout(() => {
//       heading3.textContent = "Heading 3";
//       heading3.style.color = "blue";
//       setTimeout(() => {
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "brown";
//         setTimeout(() => {
//           heading5.textContent = "Heading 5";
//           heading5.style.color = "lightblue";
//           setTimeout(() => {
//             heading6.textContent = "Heading 6";
//             heading6.style.color = "yellow";
//             setTimeout(() => {
//               heading7.textContent = "Heading 7";
//               heading7.style.color = "coral";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//OR

function changeText(
  element,
  text,
  color,
  onSuccessCallback,
  onFailureCallback,
  time
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      } else {
        if (onFailureCallback) {
          onFailureCallback();
        }
      }
    }
  }, time);
}

changeText(
  heading1,
  "one",
  "red",
  () => {
    changeText(
      heading2,
      "two",
      "green",
      () => {
        changeText(
          heading3,
          "three",
          "blue",
          () => {
            changeText(
              heading4,
              "four",
              "lightblue",
              () => {
                changeText(
                  heading5,
                  "five",
                  "yellow",
                  () => {
                    changeText(
                      heading6,
                      "six",
                      "coral",
                      () => {
                        changeText(
                          heading7,
                          "seven",
                          "brown",
                          () => {},
                          () => {
                            "heading7 does not exit";
                          },
                          1000
                        );
                      },
                      () => {
                        "heading6 does not exit";
                      },
                      1000
                    );
                  },
                  () => {
                    "heading5 does not exit";
                  },
                  1000
                );
              },
              () => {
                "heading4 does not exit";
              },
              1000
            );
          },
          () => {
            "heading3 does not exit";
          },
          1000
        );
      },
      () => {
        "heading2 does not exit";
      },
      1000
    );
  },
  () => {
    "heading1 does not exit";
  },
  1000
);
