# Compodoc documentation generator

[Compodoc](https://compodoc.app/)

## Installation 

````
npm install -g "@compodoc/compodoc"
````

Add `script` to `package.json`:

````
"scripts": {
  "compodoc": "npx compodoc -p src/tsconfig.app.json"
}
````

(note you need to specify correct path to `tsconfig.app.json`)

## Generate docs

````
npm run compodoc
````
