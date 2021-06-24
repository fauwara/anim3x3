import './App.css';
import { useState } from 'react';
import Search from './components/js/search.js'
import Workspace from './components/js/workspace.js'

function App() {

	const [addedAnime, setAddedAnime] = useState([]);
	// const [images, setImages] = useState([]);
	console.log("addedAnime");
	console.log(addedAnime);

	return (
		<div className="app">
			<Search addedAnime={addedAnime} setAddedAnime={setAddedAnime}/>
			<Workspace addedAnime={addedAnime}/>
		</div>
	);
}

export default App;