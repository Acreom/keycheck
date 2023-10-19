# Contributing to Keycheck.dev

Hi Dev! Thank you for considering contributing to Keycheck.dev 💙 Before moving on with your contribution, please take a moment to review this document.

This file should help you with any of the following questions:
- How do I add shortcuts of a new app?
- How do I report a bug?
- How do I set up my development environment?
- How do I submit changes to the code base?

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your forked repository to your local machine:

```shell
git clone https://github.com/acreom/keycheck.git
```

Create a new branch for your contribution. If you are adding shortcuts of a new app, name the branch as follows:

```shell
git checkout -b app/app-name
```

otherwise, name the branch as follows:

```shell
git checkout -b [feature | bugfix]/descriptive-name
```

Make your desired changes or contributions to the code.

## Making Contributions

Keep your changes focused and concise. Avoid making unrelated changes in a single pull request.

There is no code style guide, but please write clean and readable code.

Write clear and meaningful commit messages.

Test your changes thoroughly to avoid introducing new issues.


### Adding Shortcuts of a New App

When adding shortcuts of a new app, please follow the steps below:

1. add a file named `your-app-id.ts` to `/known-shortcuts` folder, where `your-app-id` is the id of the app (usually a lowercase name of the app with spaces replaced for '-'). This file should have the structure shown in the following section. 
2. add app export to `known-shortcuts/index.ts` - something like `export { default as app-id } from "./app-id";`
3. add app icon to `public/app-icons`. The name must match your defined icon in the app config file. There are not rules applying to the icon, but check it looks ok.

#### App Config File Structure

When in doubt, have a look at the other app config files in the `/known-shortcuts` folder. Generally though, the structure is as follows:

```typescript
const app = {
  id: "app-id",
  name: "Full App Name",
  icon: "/app-icons/app-id.png",
  homepage: "https://app.com",
  description:
    "App description. Keep this short and concise.",
  globals: {
    "cmdOrCtrl+space": "Shortcuts that clash with system shortcuts (like cmdOrCtrl+space -> open launcher on macOs) should be defined here.",
  },
  shortcuts: {
    "cmdOrCtrl+1": "All the other shortcuts specific to your app go here",
    "cmdOrCtrl+shift+1": "Try to match the descriptions for similar shortcuts with the descriptions in other app config files.",
  },
};

export default app;
```

## Submitting Contributions
Commit your changes and push them to your forked repository:

```shell
git add .
git commit -m "Your commit message"
git push origin feature/your-feature-name
```

Create a Pull Request (PR) from your forked repository to the original repository. Ensure you provide a descriptive title and description for your PR.

We will review your contribution as soon as possible, offer feedback if necessary, and merge it when it meets the project's standards.

## Reporting Issues

If you encounter a bug, have questions, or want to suggest enhancements, please create an issue on the GitHub repository.

## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](/LICENSE.md) of this project.

We appreciate your contributions and look forward to working with you to improve this project!

Happy coding!