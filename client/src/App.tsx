import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import BlockchainStatus from './components/BlockchainStatus';
import useFetchItems from './hooks/useFetchItems';

const App = () => {
  const { items, loading, error, fetchItems } = useFetchItems();

  return (
    <div className="w-full md:w-full flex justify-center items-center">
      <div className="lg:w-1/2 md:w-full min-h-screen p-10">
        <h1 className="mb-4 mt-5 sm:text-2xl  text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl">
          Marketplace
        </h1>
        <hr />
        <BlockchainStatus />
        <hr />

        <ItemForm onItemAdded={fetchItems} />
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error fetching items: {(error as any).message}</div>
          ) : (
            <ItemList items={items} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
