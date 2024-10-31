
# React Native Template 🚀

The React Native template (v0.75.4) is your go-to toolkit for kickstarting projects effortlessly. It's crafted to slice the initial setup time significantly, giving your project a head start. 🌟

A few more steps are needed after using this template to fully gear up your project.

## 🔄 Rename Project

Switch up the name and bundle ID with a snap using this command, substituting `ExampleApp` and `ExampleBundleIdentifier` with your chosen names. 🛠

```
npx react-native-rename@latest "ExampleApp" -b "ExampleBundleIdentifier"
```

## 🔒 Private Package Setup

Get your project cozy with private packages by adding a `.npmrc` file. This ensures all package installations flow through GitHub Packages, making both scoped and unscoped npmjs.org packages accessible. 🔐

```sh
//npm.pkg.github.com/:_authToken=token
@enkeapple:registry=https://npm.pkg.github.com/
shamefully-hoist=true
```

## 🎨 Themes

Transform the look and feel by tweaking colors and fonts at these spots:

- Colors: Dive into `/src/shares/themes/colors.ts` to paint your project.
- Fonts: Drop new font files into `/src/assets/fonts` and update `/src/shared/themes/Typography.ts` with the new names.

## 🌅 Splash Screen

Refresh the SplashScreen with your brand's assets using this command. Customize it with your desired parameters and assets. ✨

```
npx react-native generate-bootsplash assets/logo.png \
  --platforms=android,ios \
  --background=FFFFFF \
  --logo-width=100
```
