# Installation / Running

Beforehand, have [Node](https://nodejs.org/en) and [Yarn](https://yarnpkg.com/) installed.

```sh
git clone https://github.com/mattfinnell/personal_site
cd personal_site

yarn start
```

# Considerations

### Todo

- Initialize with Dark Theme
- Spice up the Theme (instead of vanilla ChakraUI)
- Introduce a Contact Form
- Blog
- Project List

### Best Practices

Since this is an eResume instead of a fully fledged web application, I have ommitted (but not forgotten) the following best practices...

- (Frontend) Using the _Container-Component_ pattern for components that use data (anything from `resume.tsx`)
- (Frontend) _React-Test-Library_ Tests
- (Operations) Testing Steps within the CI/CD Pipeline.
- (Operations) Staging Environment with a manual sign off step.

# Development Workflow

![Development Diagram](/src/assets/PersonalWebsiteDevFlow.png)
