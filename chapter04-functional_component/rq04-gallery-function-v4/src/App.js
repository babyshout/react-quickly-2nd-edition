import React, { useMemo } from "react";

function App() {
  return (
    <main>
      <h1>Animals</h1>
      <Gallery />
    </main>
  );
}

const Gallery = () => (
  <section style={{ display: "flex" }}>
    <Image index="1003" title="Deer" />
    <Image index="1020" title="Bear" />
    <Image index="1024" title="Vulture" />
    <Image index="1084" title="Walrus" />
  </section>
);

const Image = ({ index, title }) => {
  const id = useMemo(() =>
`image-${Math.floor(Math.random() * 1000000)}`, []);


  const getImageSource = () => 
    `//picsum.photos/id/${index}/150/150/`;
  return (
    <figure style={{ margin: "5px" }} id={id}>
      <img src={getImageSource()} alt={title} />
      <figcaption>
        <h3>Species: {title}</h3>
      </figcaption>
    </figure>
  );
};

export default App;
