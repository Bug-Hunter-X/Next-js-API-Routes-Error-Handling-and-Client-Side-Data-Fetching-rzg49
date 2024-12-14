```javascript
// pages/about.js
import {getStaticProps} from 'next'

export default function About({data}) {
  return (
    <div>
      <h1>About Us</h1>
      <p>{data.message}</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
```
```javascript
// pages/api/data.js
export default async function handler(req, res) {
  res.status(200).json({ message: 'Hello from API route!' });
}
```