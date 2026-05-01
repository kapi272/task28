import Card from "./card";

function App() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Card
        title="Card 1"
        description="First card"
        image="https://placehold.co/300x200"
      />

      <Card
        title="Card 2"
        description="Second card"
        image="https://placehold.co/300x200"
      />

      <Card
        title="Card 3"
        description="Third card"
        image="https://placehold.co/300x200"
      />

      <Card
        title="Card 4"
        description="Third card"
        image="https://placehold.co/300x200"
      />

      <Card
        title="Card 5"
        description="Third card"
        image="https://placehold.co/300x200"
      />

      <Card
        title="Card 6"
        description="Third card"
        image="https://placehold.co/300x200"
      />
    </div>
  );
}

export default App;
