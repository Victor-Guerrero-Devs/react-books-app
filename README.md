# Context Version

## About

Main branch project works fine but has neither data persistance nor easy state management. Currently, many props have to be passed down a maze from App to grandchildren.

We fixed the first issue with `api-data-persistence` branch by using json-server to host a json file which will save the books.

Now in this branch, we will take care of the second problem: state management and the prop maze. We will use the `context` hook to wrangle all of this together.
