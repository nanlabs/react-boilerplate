# Android Docker

To work with the tools shown below, the project must have the `android/` directory. It is generated in the following way:

```sh
$ npx cap add android
```

## Build docker

```sh
$ docker image build -t app-android:latest -f ./docker/android/android.Dockerfile .
```

## Usage examples

### Build APK

```sh
$ docker run --rm --name android-build -v $PWD:/pwd -w /pwd  app-android /bin/sh -c \
  "yarn && yarn build:prod && yarn prepare:android && cd android && ./gradlew build && ./gradlew bundleRelease"
```

### Test avd

```sh
$ docker run --rm --name android-build -v $PWD:/pwd -w /pwd  app-android /bin/sh -c \
  "chmod +x ./bin/test-avd && ./bin/test-avd"
```
