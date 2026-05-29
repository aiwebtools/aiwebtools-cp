import React, { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '@/utils/errorReporting';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Send to backend crash log
    reportError({
      error_type: 'ErrorBoundary',
      message: error?.message || 'Unknown React render error',
      stack: error?.stack,
      component_stack: errorInfo?.componentStack,
      severity: 'fatal',
    });
    // Self-heal stale Vite chunk errors with a single hard reload.
    // These happen when a deploy/HMR invalidates a previously fetched module URL.
    const msg = error?.message || '';
    const isChunkError =
      /Failed to fetch dynamically imported module/i.test(msg) ||
      /Importing a module script failed/i.test(msg) ||
      /ChunkLoadError/i.test(msg) ||
      /Loading chunk [\d]+ failed/i.test(msg);
    if (isChunkError && typeof window !== 'undefined') {
      const KEY = '__chunk_reload_attempted__';
      if (!sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, '1');
        window.location.reload();
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              The application encountered an error. Please refresh the page to try again.
            </p>
            <button
              className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;