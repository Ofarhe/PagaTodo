import {useEffect} from 'react';
import {BackHandler} from 'react-native';

// *Handles the hardware back button press
// Intercepts the listener for the hardware
export const useBackpress = handler => {
  useEffect(() => {
    const _handler = () => {
      handler?.();
      return true;
    };
    const listener = BackHandler.addEventListener(
      'hardwareBackPress',
      _handler,
    );

    return () => {
      listener.remove();
    };
  }, [handler]);
};
