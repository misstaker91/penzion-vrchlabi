import { trace } from 'firebase/performance';
import { perf } from '../firebase/config';

export const usePerformance = () => {
  const startTrace = (traceName) => {
    if (!perf) {
      console.debug('Performance monitoring not initialized');
      return null;
    }

    try {
      const newTrace = trace(perf, traceName);
      // Only start if trace was created successfully
      if (newTrace) {
        newTrace.start();
        console.debug(`Started trace: ${traceName}`);
      }
      return newTrace;
    } catch (error) {
      console.debug('Error creating trace:', error);
      return null;
    }
  };

  return { startTrace };
};