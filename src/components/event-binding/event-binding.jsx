export function EventBinding() {
  function InsertClick(e) {
    // document.write(`
    //     Button Id : ${e.target.id} <br>
    //     Button Name : ${e.target.name} <br>
    //     Button Value : ${e.target.value} <br>
    //     X position : ${e.clientX}<br>
    //     ctrl Key : ${e.ctrlKey}
    // `);
    for (let property in e.target) {
      document.write(`${property} : ${typeof e[property]}<br>`);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h2>Event</h2>
        <button id="InsertClick" name="InsertButton" onClick={InsertClick}>
          Click me!
        </button>
      </div>
    </>
  );
}
