# Next.js API Routes and Client-Side Data Fetching Bug

This repository demonstrates a common error encountered when using Next.js API routes and fetching data on the client-side.  The `About` page attempts to directly use `fetch` within the component, which will result in an error during client-side rendering. This example shows how to properly handle API requests within a Next.js application, addressing potential pitfalls.

## Bug Description

The bug lies in the `pages/about.js` file.  The `fetch` call is made directly within the functional component. Next.js's client-side rendering environment doesn't inherently provide `fetch` within component function body unless using `getStaticProps`, `getStaticPaths`, or `getServerSideProps`.  This results in a runtime error.

## Solution

The solution involves refactoring the data fetching logic using `getStaticProps` or `getServerSideProps` or using a library like `SWR` for data fetching.  The solution provided uses `getStaticProps` to fetch data at build time.