import { useState, useEffect } from "react";

function Menu() {
  const [isExpanded, setExpanded] = useState(false);
  useEffect(() => {
    if (!isExpanded) {
      return console.log("!isExpanded !!")
    }

    const onWindowClick = () => setExpanded(false);
    window.addEventListener('pointerdown', onWindowClick);
    return () => window.removeEventListener('pointerdown', onWindowClick);
  }, [isExpanded])

  return (
    <main>
      <button onClick={() => setExpanded(true)}>
        Show menu
      </button>
      {isExpanded && (
        <div style={{border: '1px solid black', padding: '1em'}}>
          This is the menu
        </div>
      )}
    </main>
  )
}

function App() {
  return <Menu />
}
export default App;
