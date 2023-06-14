import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Produtos.css';
import './App';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
        <link rel='preconnect'
          href='https://fonts.googleapis.com' />
        <link rel='preconnect'
          href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' rel="stylesheet" />
      </header>
      <body class="corfundo">
        <section ref={(el) => (sectionsRef.current[0] = el)} className="home fade-in">
          <div class="circle"></div>
          <div class="home-text">
            <span>Bem-Vindo Ao</span> 
            <h1>EspoSkate</h1>
            <h2>Melhor Loja Online<br></br>De Skates</h2>
            <a href='' className="my-btn">Continuar</a>
          </div>
          <div class="home-img">
            <img src='imagens/home.png'></img>
          </div>
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)} className="trending-product fade-in">
          <div class="center-text">
            <h1>Nova <span>Coleção</span></h1>
          </div>

          <div class="produtos">
            <Container>
            <Row>
              <Col>
              <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/adidascasacos3.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Casaco Adidas</h4>
            </div>
            <div class="card__price">
              <p>76$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/antixcalcas2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Calcas Antix</h4>
            </div>
            <div class="card__price">
              <p>80$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/rellcalcoes1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Sapatos Nike</h4>
            </div>
            <div class="card__price">
              <p>60$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            <Row>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart4.png'/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom ">
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom ">
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom " >
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            </Container>       
          </div>

        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)} className="trending-product fade-in">
          <div class="center-text">
            <h1>Promoções</h1>
          </div>

          <div class="produtos">
            <Container>
            <Row>
              <Col>
              <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/adidascasacos3.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Casaco Adidas</h4>
            </div>
            <div class="card__price">
              <p>76$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/antixcalcas2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Calcas Antix</h4>
            </div>
            <div class="card__price">
              <p>80$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/rellcalcoes1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Sapatos Nike</h4>
            </div>
            <div class="card__price">
              <p>60$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            <Row>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart4.png'/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom ">
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom ">
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='produto-card'>
            <div class="card__infos">
              <img src='imagens/jart2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="card__title">
              <h4>Tábua Jart</h4>
            </div>
            <div class="card__price card__bottom " >
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            </Container>       
          </div>

        </section>

        <section class="contact">
          <div class="contact-info">
            <div class="first-info">
              <img src='/imagens/EspoSkate.png'/> <br></br>

              <a href='https://www.google.com/maps/place/C%C3%A2mara+Municipal+de+Esposende/@41.5314358,-8.7801767,18.96z/data=!4m14!1m7!3m6!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!2sC%C3%A2mara+Municipal+de+Esposende!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm!3m5!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm'>Praça do Município,<br />4740-223 Esposende</a>
              <p>966 597 688</p>
              <p>esposkate05@gmail.com</p>

              <div class="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100092639252098"><i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/esposendeskate/"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="https://twitter.com/EsposendeSkate"><i class='bx bxl-twitter' ></i></a>
              </div>

            </div>
            <div class="second-info">
              <h4>Suporte</h4>
              <a href='./Contact'>Contacta-nos</a>
              <p> </p>
              <a href='./Privacidade'>Privacidade</a>

            </div>
            <div class="fourth-info">
              <h4>Empresa</h4>
              <a href='./AboutUs'>Sobre</a>
              <p> </p>
              <a href='./Login'>Login</a>

            </div>
            <div class="five">
              <h4>Subscreve</h4>
              <p>Receba atualizações,Descontos, altas promoções no seu email</p>
              <p>Receive updates, discounts, high promotions in your email</p>
              <p>Recevez des mises à jour, des réductions, des promotions élevées dans votre e-mail</p>

            </div>
          </div>
        </section>
        <script src='src/script.js'></script>
      </body>
      <footer> </footer>

    </div>
  );
}
export default Home;
