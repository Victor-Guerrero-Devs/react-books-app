# Context Version

## About

Main branch project works fine but has neither data persistance nor easy prop management. Currently, many props have to be passed down a maze from App to grandchildren, e.g. `handleEditBook` passed from `App` as `onEditBook` down to `BookList` then to `BookShow` and finally to `BookEdit`. In other words, this particular prop had to be passed down two levels which had no use of it to reach the component that actually needs it.

We fixed the first issue with `api-data-persistence` branch by using json-server to host a json file which will save the books and by using HTTP requests to preform CRUD operations on said json-server.

Now in this branch, we will take care of the second problem: the prop maze aka prop drilling or prop chaining. We will use the `context` hook to fix this prop mess as it was made to make passing down props in a cleaner way especially in complicated component trees. Context achieves this by lifting certain variables and functions and making them directly accessible to any component at any level in the hierarchy.
