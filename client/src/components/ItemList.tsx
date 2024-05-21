import { ItemProps } from '../hooks/useFetchItems';

const ItemList = ({ items }: { items: ItemProps[] }) => {
  return (
    <div className="relative mt-4 flex  flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      {items.length <= 0 ? (
        <h2 className="text-center "> No Itee to display yet!</h2>
      ) : (
        <nav className="flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700">
          {items.map((item: ItemProps) => (
            <div
              key={item.id}
              role="button"
              className="flex capitalize items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              {item.name}
              <div className="grid ml-auto place-items-center justify-self-end">
                <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-gray-900 uppercase rounded-full select-none whitespace-nowrap bg-gray-900/10">
                  <span className="">€{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default ItemList;
