const Item = ({ item, handleUpdate }) => {
  const handleCheck = (item) => {
    item.done = !item.done;
    handleUpdate(item, "http://localhost:3001/todos/" + item.id);
    window.location.reload();
  };

  return (
    <div className="list-container">
      <ul>
        <li key={item.id}>
          <h3>
            <input type="checkbox" onChange={() => handleCheck(item)} />
            {item.title}
          </h3>
          <p>{item.description}</p>
          <p>{item.date}</p>
        </li>
      </ul>
    </div>
  );
};

export default Item;
