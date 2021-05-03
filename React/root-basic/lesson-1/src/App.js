import './App.css';
import Card from "./components/card";

function App() {
  return (
    <div className={'row'}>
      <Card
          title={'React — это JavaScript-библиотека для разработки пользовательского интерфейса.'}
          img={'https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg'}
          alt={'React'}
          text={'Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение.'}
          btn={'Изучаем React'}
          link={'https://ru.reactjs.org/'}
      />

        <Card
            title={'React — это JavaScript-библиотека для разработки пользовательского интерфейса.'}
            img={'https://miro.medium.com/max/1138/1*QwotB6osQpt7vRnMNt85mw.png'}
            alt={'React'}
            text={'Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение.'}
            btn={'Изучаем React'}
            link={'https://ru.reactjs.org/'}
        />

        <Card
            title={'React — это JavaScript-библиотека для разработки пользовательского интерфейса.'}
            img={'https://www.freecodecamp.org/news/content/images/2020/11/Copy-of-Add-a-heading.png'}
            alt={'React'}
            text={'Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение.'}
            btn={'Изучаем React'}
            link={'https://ru.reactjs.org/'}
        />

    </div>
  );
}

export default App;
