# How to update our shared packages?

# Pre-requisites:

- Make sure you're logged in, otherwise you'll get a not found error.

`npm login`

# Step-by-step:

1. Implement your desired changes. Remember to export any types in index.ts

2. `yarn publish`

3. Update back-end and front-end packages

References: https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/

# Notes

- First time publishing will require you to explicitly set it to public:

```
yarn publish --access public
```
