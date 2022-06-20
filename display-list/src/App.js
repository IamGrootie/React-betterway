import logo from './logo.svg';

export default function App() {
  const list = ["Maria", "Joana", "José", "Pedro", "Ana"];
  return (
    <div>
      <h1>List of Names</h1>
      <section>
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
            ))}
        </ul>
      </section>
    </div>

  );
}
