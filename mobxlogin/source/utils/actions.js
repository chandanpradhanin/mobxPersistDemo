import { Actions } from 'react-native-router-flux';

export const goto = (route, param) => {
  Actions[route](param);
};

export const goBack = () => {
  Actions.pop();
};
