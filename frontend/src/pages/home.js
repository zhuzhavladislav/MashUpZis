import React, { Component } from 'react'
import Search from '../pages/search';
import logo from '../images/Logo.png'
import figure_main from '../images/figure_main.png'
import arrow from '../images/arrow.png'
import tunning_text_temp from '../images/tunning-text-temp.png'
import element1 from '../images/element1.png'
import test3 from '../images/cover/6299bae5ac6d8f133f846297.jpg'
import test2 from '../images/cover/62939c48d70ef9b87bc54557.jpg'
import test1 from '../images/cover/6299bbbfac6d8f133f84629b.jpg'
import test from '../images/cover/test.jpg'
import empty from '../images/cover/empty.png'
import play from '../images/play.svg'
import arrow_up from '../images/arrow-up.svg'




export default class Home extends Component {
  
  render() {
    return (
      <div>
        <div id="wrapper">
          <header>
            <div className="div-list">
              <a href><img src={logo} width={53} height={90} alt="mashupzis logo" /></a>
              <nav className="nav-list">
                <ul className="top-menu">
                  <li><a href="">ГЛАВНАЯ</a></li>
                  <li><a href="/search">ПОИСК МЕШАПОВ</a></li>
                </ul>
              </nav>
            </div>
            <hr size={1} color="#FFFFFF" />
          </header>
          <div className="heading">
            <img src={figure_main} width={430} alt="" />
            <h1>Сборник мэшапов</h1>
            <h2>#mashupzis</h2>
            <p>С 2014 года мы отбираем лучшие работы, а теперь здесь расцветает русскоязычное <br />сообщество мэшаперов. За это время мы опубликовали почти 30 000 мэшапов и <br />аудиоприколов.</p>
            <a href><form action="#legend" target="_self"><button className='main-button'>Подробнее <img src={arrow} alt="" /></button></form></a>
            <img src={tunning_text_temp} width={1050} alt="" />
          </div>
          <div className="what-is-mashup">
            <img src={element1} width={530} alt="" />
            <h1>Что такое<br />мэшапы?</h1>
            <p>Мэшап — неоригинальное музыкальное произведение, состоящее,<br />как правило, из двух исходных произведений, записанное в<br />студийных условиях путём наложения любой партии одного<br />исходного произведения на похожую партию другого.</p>
          </div>
          <div className="legend-mashup">
            <div>
              <div className="legend-mashup">
                <div className="legend-mashup-cover legend-mashup-v1"><span className="legend-mashup-name">Rap God</span><div className="legend-mashup-border" /><img src={test1} className="legend-mashup-cover-img" /><span className="legend-mashup-author">done</span></div>
                <div className="legend-mashup-cover legend-mashup-v2"><span className="legend-mashup-name">Faded</span><div className="legend-mashup-border" /><img src={test2} className="legend-mashup-cover-img" /><span className="legend-mashup-author">Alan Walker</span></div>
              </div>
              <div className="legend-mashup">
                <div className="legend-mashup-cover legend-mashup-v3"><span className="legend-mashup-name">On The Loose</span><div className="legend-mashup-border" /><img src={test3} className="legend-mashup-cover-img" /><span className="legend-mashup-author">Carpenter Brut</span></div>
                <div className="legend-mashup-cover legend-mashup-v4"><span className="legend-mashup-name">Бойцовский Клуб</span><div className="legend-mashup-border" /><img src={test} className="legend-mashup-cover-img" /><span className="legend-mashup-author">Неизвестен</span></div>
              </div>
            </div>
            <div id="legend">
              <h1>Легендарные<br />мэшапы</h1>
              <p>Слева Вы можете наблюдать одни из самых значимых мешапов в истории развития.<br /><br />И это ещё не всё...</p>
              <form action='/search' target="_self"><button className='main-button'>Больше мешапов <img src={arrow} alt="" /></button></form>
            </div>
          </div>
          {/* <div className="trend">
            <h1>Узнайте, что<br />в тренде</h1>
            <p>Популярные темы </p>
            <button className='main-button'>Мэшап</button>
            <button className='main-button'>Ремикс</button>
            <button className='main-button'>Блютуз</button>
            <button className='main-button'>Вуз</button>
          </div>
          <div className="trend2">
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D1</span><span className="mashup-name">Name of the masup1</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D2</span><span className="mashup-name">Name of the masup2</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D3</span><span className="mashup-name">Name of the masup3</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D4</span><span className="mashup-name">Name of the masup4</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D</span><span className="mashup-name">Name of the masup</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D</span><span className="mashup-name">Name of the masup</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D</span><span className="mashup-name">Name of the masup</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
            <div className="mashup-cover"><div className="mashup-border" /><span className="mashup-author">D3DD3D</span><span className="mashup-name">Name of the masup</span><img src={empty} className="mashup-cover-img" /><a href><button className="mashup-button">Слушать <img src={play} alt="" /></button></a></div>
          </div>
          <div>
            <a href><button className='main-button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '40px' }}>Больше мэшапов <img src={arrow} alt="" /></button></a>
          </div> */}
        </div>
        <footer>
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
            {/* <div className="up">
              <h3><img src={arrow_up} alt="" /> Вернуться вверх</h3>
            </div>
            <div className="terms">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Copyright © 2022</p>
            </div> */}
          </div>
        </footer>





      </div>
    )
  }
}