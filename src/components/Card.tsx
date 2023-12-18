interface CardTypes {
  id: number;
  name: string;
  email: string;
  username: string;
  setList: any;
  list: any;
}

const Card = (props: CardTypes) => {
  const deleteTodo = (id: number) => {
    props.setList(props.list.filter((todo: any) => todo.id !== id));
  };
  return (
    <div className="flex items-center">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
          {props.name}
        </p>
        <p className={`text-sm text-gray-500 truncate dark:text-gray-300`}>
          {props.email}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <button onClick={() => deleteTodo(props.id)}>❌</button>
      </div>
    </div>
  );
};

export default Card;
