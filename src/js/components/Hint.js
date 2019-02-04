import { createComponent } from '../mini';
import { connect } from '../store';

export function Hint(props) {
  return connect(
    createComponent({
      props,
      render({ current, rebuses, incorrectAnswerCount }) {
        const INCORRECT_ANSWER_MAX_COUNT = 3;
        const HINT_SYMBOL = '💡';
        const rebus = rebuses[current];
        const showHint = rebus.hint;

        return ` 
        ${
          showHint
            ? `<button class="rebus__hint" onclick="(function(){
                  document.querySelector(".rebus__hint").innerHTML = "changed";
              })();">
              ${HINT_SYMBOL} Need a hint? ${HINT_SYMBOL}
              </button>`
            : '<span></span>'
        }
        `;
      }
    })
  );
}
