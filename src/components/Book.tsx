interface Book {
  id: string;
  name: string;
}
const books: Book[] = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Query overview" },
];

export default function App() {
  return (
    <>
      <h1 style={{ padding: "12px 16px", color: "red" }}>Books of the week</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
}
