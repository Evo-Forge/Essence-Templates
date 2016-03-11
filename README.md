### React Essence Templates

### Installation
```bash
git clone https://github.com/Evo-Forge/Essence-Templates.git
```
or

download the ZIP archive from [Git Essence-Templates](https://github.com/Evo-Forge/Essence-Templates)

### Install all dependencies
```bash
cd Essence-Templates
```

```bash
npm install
```

### How to use
```
npm run template:dev
or
npm run template:custom
```

### How to create/run a custom template
After the installation of **essence-templates** and all dependencies, make a copy of the **custom/** folder and edit the App file **js/app.js**.

Edit the package.json and add a new line on **scripts** 
```
"template:__your-folder-name__": "webpack-dev-server --devtool eval --hot --progress --colors --config __your-folder-name__/js/webpack.config.js --port 8080 --host 0.0.0.0 --content-base __your-folder-name__/"
```
P.S.: `__your-folder-name__` is the name you choose for the **custom** copy

An instance of `webpack-dev-serve` will run on **port 8080** with the **--content-base** `__your-folder-name__/`
```
npm run template:__your-folder-name__
```

P.S.: please check if the port **8080** is available
