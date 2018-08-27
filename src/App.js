const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ])
}

const App = () => {
  return React.createElement("div", {},
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: "Moxie",
      animal: "cat",
      breed: "Tuxedo"
    }),
    React.createElement(Pet, {
      name: "Jack",
      animal: "cat",
      breed: "Tiger"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    })
  )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))
