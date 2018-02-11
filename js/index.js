import View  from "./View";
import Model  from "./Model";
import Controller  from "./Controller";
import styles from '../scss/style.scss';

$(() => {

  let model = new Model([]);
  let view = new View(model, {
          'gameBoard': $('#game-board'),
          'messageWrapper': $('.message-wrapper'),
          'startButton': $('.btn-start'),
          'timer': $('.timer')
  });
  let controller = new Controller(model,view);

})
