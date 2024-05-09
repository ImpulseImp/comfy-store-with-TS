import { Button } from './components/ui/button';

function App() {
  return (
    <>
      <h1 className='text-3xl text-yellow-600'>Hello Impulse</h1>
      <Button
        variant='destructive'
        size='lg'
        onClick={() => console.log('it worked!!!')}
      >
        Click me
      </Button>
    </>
  );
}

export default App;
