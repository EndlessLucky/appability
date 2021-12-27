# Formatter for Each Model

Each data moddel has unique style rules for each columns.

To implement different style rules for each model, we have formatters for each model and define column names which have style rules for them.

# Define Style Column Names

`data-grid.component.ts` file has `getFormatColumns` function and we should override at `index.component.ts` for model.

e.g

```
Person Model's `index.component.ts` returns column names for style rules.

getFormatColumns() {
  return ['firstname','surname','useremail'];
}

```

# Create a Formatter

For each formatted column, we create a formatter which extends `universe-formatter.ts` inferface.

e.g

```
Person's style columns `firstname`, `surname`, `useremail`, we create `firstname-formatter.ts`, `surname-formatter.ts`, `useremail-formatter.ts` and finally `formatters.ts` in index folder.

Each formatter defines style rules according to the model value and returns it.

Finally, `formatter.ts` file returns style rules for person model.

```

# Define Adapter Function

After creating formatters for model, we have to return its rule at `model.ts`.

e.g

```
`person.model.ts` returns formatting rule using `adapt()` function.

```

# Create format component for each column

We create formatter component for each model and can customize easily.

e.g

```
ng generate component shared/components/formats/person-format --module=formats
ng generate component shared/components/formats/client-person-format --module=formats

```

Each formatter component defines customClass using rules and can customize view files.

# Add format component into the service which has arrays of format components

Finally, we should put new created format component into `model-format.service.ts`.

It has `models` array, key of array is the model name of format component, value is the format component.