## 📖 Documentação

[Inglês](https://nzbin.gitbook.io/ng-matero/v/en-2/)

## 📦 Compatibility

Versões

| Angular | Material | Ng-Matero | Extensions |
| ------- | -------- | --------- | ---------- |
| v15     | v15      | 15.x.x    | 15.x.x     |
| v14     | v14      | 14.3.0    | 14.6.3     |
| v13     | v13      | 13.1.1    | 13.3.1     |
| v12     | v12      | 12.8.0    | 12.10.1    |
| v11     | v11      | 11.3.2    | 11.5.1     |
| v10     | v10      | 10.4.1    | 10.16.5    |
| v9      | v9       | 9.7.2     | 9.11.14    |
| v8      | v8       | 0.16.0    | 0.9.3      |

## 🔧 Instalação

The project has support `ng add` yet.

```bash
$ ng new <project-name>
$ cd <project-name>
$ ng add ng-matero
```

You can also git clone the starter repo to start. But it's not recommended.

```bash
$ git clone --depth=1 git@github.com:ng-matero/starter.git <project-name>
$ cd <project-name>
$ npm install
```

## ⚙️ Schematics

You can use the ng-matero schematics to generate a module or a page.

### Module schematic

Generate a lazy loaded module.

```bash
$ ng g ng-matero:module <module-name>
```

The new module will be created in `routes` folder, it will be added in `routes.module` and its route declaration will be added in `routes-routing.module` automaticly.

### Page schematic

Generate a page component in the module.

```bash
$ ng g ng-matero:page <page-name> -m=<module-name>
```

Generate a entry component in the page component.

```bash
$ ng g ng-matero:page <page-name>/<entry-component-name> -m=<module-name> -e=true
```

### Example

Just two steps after initializing the project, you can get a route page.

```bash
$ ng g ng-matero:module abc
$ ng g ng-matero:page def -m=abc
```

Take a look at `http://localhost:4200/#/abc/def`, enjoy it!

## 💻 Development

```bash
$ git clone git@github.com:ng-matero/ng-matero.git
$ cd ng-matero
$ npm install
$ npm run hmr
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
