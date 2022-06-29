import type { App, Plugin } from 'vue';
//@ts-ignore
import Button from './index.vue';

Button.install = function (app: App) {
  app.component(Button.name, Button);
  return app;
};


export default Button 