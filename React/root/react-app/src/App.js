import './App.css';
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <div className={'flex-class'}>
        <Card title={'Introduction'}
              img={'https://i.imgur.com/n0LrlLP.jpg'}
              alt={'React'}
              text={'In this tutorial, you’ll share state across multiple components using React context. React context is an interface for sharing information with other components without explicitly passing the data as props.'}
              link={'Click me'}
        />
      </div>
      <div className={'flex-class'}>
        <Card title={'Introduction'}
              img={'https://i.imgur.com/n0LrlLP.jpg'}
              alt={'React'}
              text={'In this tutorial, you’ll share state across multiple components using React context. React context is an interface for sharing information with other components without explicitly passing the data as props.'}
              link={'Click me'}
        />
      </div>
      <div className={'flex-class'}>
        <Card title={'Introduction'}
              img={'https://i.imgur.com/n0LrlLP.jpg'}
              alt={'React'}
              text={'In this tutorial, you’ll share state across multiple components using React context. React context is an interface for sharing information with other components without explicitly passing the data as props.'}
              link={'Click me'}
        />
      </div>

    </div>
  );
}

export default App;
