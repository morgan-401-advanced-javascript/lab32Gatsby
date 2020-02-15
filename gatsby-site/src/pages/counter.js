import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const SecondPage = () => (
//   <Layout>
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//   </Layout>
// )

// export default SecondPage

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
<SEO title="Counter" />
<div>

      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtract
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>

</div>
<Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
}
