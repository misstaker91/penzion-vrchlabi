import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePerformance } from '../hooks/usePerformance';

export function PerformanceRoute({ children }) {
  const location = useLocation();
  const { startTrace } = usePerformance();
  const traceRef = useRef(null);
  const isTraceActiveRef = useRef(false);

  useEffect(() => {
    // Start new trace
    try {
      if (!isTraceActiveRef.current) {
        traceRef.current = startTrace(`route_${location.pathname}`);
        if (traceRef.current) {
          isTraceActiveRef.current = true;
        }
      }
    } catch (error) {
      console.debug('Error starting trace:', error);
    }

    // Cleanup function
    return () => {
      if (isTraceActiveRef.current && traceRef.current) {
        try {
          traceRef.current.stop();
          isTraceActiveRef.current = false;
          traceRef.current = null;
        } catch (error) {
          console.debug('Error stopping trace:', error);
        }
      }
    };
  }, [location.pathname, startTrace]);

  return children;
} 