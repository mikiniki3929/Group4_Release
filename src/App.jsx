import './App.css';
import './App.css';
import Select from 'react-select';
import { TrainList } from './components/TrainList';
import { useState } from 'react';

//selectコンポーネントのドロップダウンメニューの要素
const origin = [
  { value: 'Ginza', label: '銀座' },
]
const destination = [
  { value: 'Tokyo', label: '東京' },
]

export const App = () => {
  //電車リスト表示用のステートを定義
  const [searchBool, setSearchBool] = useState(false);
  //検索ボタンを引き金に電車リストの表示/非表示を切り替え
  const onClickSearch = () => {
    setSearchBool(!searchBool);
  }
  return (
    <>
      <h3>From</h3>
      <Select options={origin} />
      <h3>To</h3>
      <Select options={destination} />
      <button onClick={() => onClickSearch()}>検索</button>
      <br />
      {searchBool && <TrainList id="train-list"/>}
    </>
  );
}