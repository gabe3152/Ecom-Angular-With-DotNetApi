import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/**

* Enable Angular production mode when running in production.
  */
  if (environment.production) {
  enableProdMode();
  }

/**

* Application startup timestamp.
  */
  const appStartTime = performance.now();

/**

* Bootstrap the Angular application.
  */
  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
  const startupTime = (performance.now() - appStartTime).toFixed(2);

  console.group('%cAngular Application Started', 'color: #4CAF50; font-weight: bold;');
  console.log('Environment:', environment.production ? 'Production' : 'Development');
  console.log('Startup Time:', `${startupTime}ms`);
  console.log('Angular Version Loaded Successfully');
  console.log('Application Module:', AppModule.name);
  console.groupEnd();
  })
  .catch((error: Error) => {
  console.group('%cApplication Bootstrap Failed', 'color: #F44336; font-weight: bold;');
  console.error('Error Message:', error.message);
  console.error('Stack Trace:', error.stack);
  console.error('Full Error Object:', error);
  console.groupEnd();

  // Optional: Send error to monitoring service
  // sendErrorToMonitoring(error);
  });

/**

* Global Error Handlers
  */
  window.addEventListener('error', (event) => {
  console.error('Global JavaScript Error:', {
  message: event.message,
  file: event.filename,
  line: event.lineno,
  column: event.colno,
  error: event.error
  });
  });

window.addEventListener('unhandledrejection', (event) => {
console.error('Unhandled Promise Rejection:', event.reason);
});

/**

* Performance Monitoring
  */
  window.addEventListener('load', () => {
  const loadTime = performance.now();

console.log('Page Fully Loaded');
console.log(`Total Load Time: ${loadTime.toFixed(2)}ms`);
});

/**

* Development Debug Information
  */
  if (!environment.production) {
  console.log('Development Mode Enabled');
  console.log('Debug Tools Active');
  console.log('Source Maps Available');
  }
