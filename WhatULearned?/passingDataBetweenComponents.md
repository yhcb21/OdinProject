  - data is transferred from parent components to child components via `props`.
  - Props are information that you pass to a JSX tag.
  - it is unidirectional.

```js
function Button(props) {
  const buttonStyle = {
    color : props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style = {buttonStyle}>{props.text}</button>
  );
}

export default function App() {
	return (
	  <div>
			<Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
		</div>
	)
}


```
