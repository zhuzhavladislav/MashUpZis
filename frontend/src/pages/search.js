import React, { useState, Component, useCallback, useContext } from 'react'
//import '../css/search.css';
import logo from '../images/Logo.png'
import lupa from '../images/lupa.svg'
import axios from 'axios'
import audio1 from '../audio/done - Rap God Rick.mp3'


export default function Search() {

  //Для вывода трека
  const [tracks, setTracks] = useState([]);
  //Для поиска
  const [value, setValue] = useState("");

  //Получаем трек из api
  const getTrack = useCallback(async () => {
    try {
      await axios.get('/api/track')
        .then((response) => setTracks(response.data))
    } catch (error) {
      //console.log(error)
    }
  })

  //Вызываем функцию, без этого не работает
  getTrack()

  //Фильтруем трек для поиска
  const filteredTrack = tracks.filter(track => {
    return track.track_name.toLowerCase().includes(value.toLowerCase());
  })

  return (
    <div>
      <div id="wrapper">
        <header>
          <div className="div-list">
            <a href><img src={logo} width={53} height={90} alt="mashupzis logo" /></a>
            <nav className="nav-list">
              <ul className="top-menu">
                <li><a href="/">ГЛАВНАЯ</a></li>
                <li><a href="">ПОИСК МЕШАПОВ</a></li>
              </ul>
            </nav>
          </div>
          <hr size={1} color="#FFFFFF" />
        </header>
      </div>
      {/* start */}
      <div className="d1">
        <form className="search">
          <button type="button"><img src={lupa} alt="lupa" className="lupa" /></button>
          <input type="text" placeholder="Поиск трека..." onChange={(event) => setValue(event.target.value)} />
        </form>
        <div className="trend3">
          <p>Популярные темы </p>
          <button className='main-button'>Мэшап</button>
          <button className='main-button'>Ремикс</button>
          <button className='main-button'>Блютуз</button>
          <button className='main-button'>Вуз</button>
        </div>
        {/* Вывод трека */}
        <div className="playlist">
          {
            filteredTrack.map((track) => {
              return (
                <div className="song">
                  <div className="cover" />
                  <span className='mashup-name2'>{track.author}</span>
                  <span className='mashup-name2'>{track.track_name}</span>
                  <audio src={audio1} />
                  <div className="audio-track">
                    {/*полоска прослушивания*/}
                    <div className="time" />
                  </div>
                  <span id="tracktime">0 / 0</span>
                  <button className="play" />
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Надо фиксить как-то */}
      {/* <footer>
                    <div id="footer">
                      <div id="name">
                        <h2>MASHUPZIS</h2>
                      </div>
                      <div className="contacts">
                        <a href="https://ssau.ru/"><h3>SSAU</h3></a>
                        <p>|</p>
                        <a href="https://github.com/algorithm-ssau/MashUpZis"><h3>Github</h3></a>
                        <p> | </p>
                        <a href="https://www.figma.com/file/x3NkJdKiE17ABIP7MDFIpG/MashUpZis?node-id=50%3A22"><h3>Design</h3></a>
                      </div>
                      <div className="up">
                        <h3><img src="images/arrow-up.svg" alt="" /> Вернуться вверх</h3>
                      </div>
                      <div className="terms">
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Copyright © 2022</p>
                      </div>
                    </div>
                  </footer> */}


    </div>
  );
}