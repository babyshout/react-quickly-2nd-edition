import React, { useState, useEffect } from "react";

function BlogPost({ title, body }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [header, setHeader] = useState(title);

  console.log("title is frozen? " + Object.isFrozen(title));

  console.log("header is frozen? " + Object.isFrozen(header));

  return (
    <article>
      <h1>title : {title}</h1>
      <h2>header : {header}</h2>
      {body}
      <button
        onClick={() =>
          setHeader((value) => {
            console.log(value === title);
            console.log(value);
            return value + "123123";
          })
        }
      >
        click the button!!!
      </button>
      <button
        onClick={() => {
          console.log(title);
          title += "123";
        }}
      >
        title + 123
      </button>
    </article>
  );
}

// function App() {

/**
 * state 가 setter 를 통해 바껴야 하므로... 
 *  부모객체에서 단순히 let 하고, 해당 변수를 바꿔줘도 렌더링이 바뀌지 않음..
 * useState() 를 사용해서 state 를 만들고
 * setter 를 통해서 바꿔주자!!!
 * 
 */

//   let title = 'First post';
//   let body = <p>Welcome to my cool website.</p>
//   return (
//     <main>
//       <BlogPost title={title} body={body} />
//       <button onClick={() => {
//   title = 'Second post';
//   body = <p>Welcome to my cool second website.</p>
//       }}>
//         click to change the props
//       </button>
//     </main>
//   );
// }

function App() {
  const [title, setTitle] = useState("First post");
  const [body, setBody] = useState(<p>Welcome to my cool website.</p>);

  return (
    <main>
      <BlogPost title={title} body={body} />
      <button
        onClick={() => {
          setTitle("Second post");
          setBody(<p>Welcome to my cool second website.</p>);
        }}
      >
        click to change the props
      </button>
    </main>
  );
}

export default App;
