import React from 'react';
import './App.css';
import firebase from './firebase'
import {SpellInput} from './SpellInput'

function App() {
  const [spells, setSpells] = React.useState([])
  const [newSpellName, setNewSpellName] = React.useState()

  React.useEffect(()=>{
      const db = firebase.firestore();
      const unsubscribe = db.collection("spells").onSnapshot(snapshot =>{
        const spellsData = [];
        snapshot.forEach(doc => spellsData.push({...doc.data, id: doc.id}))
        setSpells(spellsData)
      })
      // const data = await db.collection("spells").get();
      // setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})))
   return unsubscribe;
  }, [])

  const onCreate = () =>{
      const db = firebase.firestore();
      db.collection("spells").add({name: newSpellName});
  }
  return (
    <ul>
    <input value={newSpellName} onChange={(e)=> setNewSpellName(e.target.value)}/>
    <button onClick={()=> onCreate()}>Create</button>
      {spells.map(spell => (
        <li key={spell.id}>
          <SpellInput spell={spell}/>
        </li>
      ))}
    </ul>
  );
}

export default App;
