# Proyecto Plantilla - React Native

## Requerimientos:

1) Armar entorno de trabajo:
https://reactnative.dev/docs/set-up-your-environment

Se requiere:
- Android Studio - version Jellyfish, como minimo
    Descargar Android SDK 36 y Build Tools 36
- XCode 16.1 (o versiones posteriores)
- Node 20: Se recomienda instalarlo usando nvm https://github.com/nvm-sh/nvm
- Ruby 3.1.0: Se recomienda instalarlo usando rbenv https://github.com/rbenv/rbenv

## Ejecutar proyecto

### Instalar dependencias

1) Instalar dependencias npm
```sh
npm install
```
2) Si es la primera vez que se ejecuta el proyecto, instalar dependencias de cocoapods
```sh
bundle install
```

Luego, cada vez que se actualicen estas dependencias, ejecutar:

```sh
bundle exec pod install
```
### Iniciar servidor de prueba local (Metro server)
```sh
npx react-native start --reset-cache
```
### Correr el proyecto en Android
```sh
npm run android
```
### Correr el proyecto en iOS

1) Ejecutar cocoapods
```sh
cd ios
pod install
```

2) Montar la aplicacion
```sh
# Usando iOS
npm run ios
```