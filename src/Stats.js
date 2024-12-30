export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You had everything ready! Time to travel 🛫"
          : `💼 You have ${numItems} items on your list and you're already packed ${numPacked} (${
              numItems === 0 ? "0" : percentPacked
            }%)`}
      </em>
    </footer>
  );
}
