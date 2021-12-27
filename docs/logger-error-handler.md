# Logger and ErrorHandler services

The `GlobalErrorHandler` catches all application errors.

The `LoggerService` sends them to the API.

This feature is by default disabled on local development environment.

It depends on the settings of `environment.debug` flag.

## See

Flag to disable/enable service:

- `src/app/core/services/logger.service.ts:37`

Environment settings:

- `src/environments`
