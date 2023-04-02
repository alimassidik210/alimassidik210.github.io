import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const HeroImage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Carousel className="border-hero border-bottom border-danger mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="carousel-text">
                  <p>
                    <b>
                      لَيَكُونَنَّ مِنْ أُمَّتِى أَقْوَامٌ يَسْتَحِلُّونَ
                      الْحِرَ وَالْحَرِيرَ وَالْخَمْرَ وَالْمَعَازِفَ ،
                    </b>
                    <br />
                    "Sungguh, benar-benar akan ada di kalangan umatku sekelompok
                    orang yang menghalalkan zina, sutera, khamr, dan alat musik.
                    ” (HR.Bukhori)
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
                <div className="carousel-text">
                  <p>
                    <b>
                      اللَّهُمَّ إلَّا أَنْ يَكُونَ فِي سَمَاعِهِ ضَرَرٌ
                      دِينِيٌّ لَا يَنْدَفِعُ إلَّا بِالسَّدِّ
                    </b>
                    <br />
                    “Demi Allah, bahkan mendengarkan nyanyian (atau alat musik)
                    adalah bahaya yang mengerikan pada agama seseorang, tidak
                    ada cara lain selain dengan menutup jalan agar tidak
                    mendengarnya.”
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/184936708/photo/party-dj.jpg?b=1&s=170667a&w=0&k=20&c=xyGhydRCgqEwvsCF-Uq6dqiioc1hAqhwLi0qTIXJAV8="
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className="carousel-text">
                  <p>
                    <b>
                      الَيَشْرَبَنَّ نَاسٌ مِنْ أُمَّتِى الْخَمْرَ يُسَمُّونَهَا
                      بِغَيْرِ اسْمِهَا يُعْزَفُ عَلَى رُءُوسِهِمْ
                      بِالْمَعَازِفِ وَالْمُغَنِّيَاتِ يَخْسِفُ اللَّهُ بِهِمُ
                      الأَرْضَ وَيَجْعَلُ مِنْهُمُ الْقِرَدَةَ وَالْخَنَازِيرَ
                    </b>
                    <br />
                    “Sungguh, akan ada orang-orang dari umatku yang meminum
                    khamr, mereka menamakannya dengan selain namanya. Mereka
                    dihibur dengan musik dan alunan suara biduanita. Allah akan
                    membenamkan mereka ke dalam bumi dan Dia akan mengubah
                    bentuk mereka menjadi kera dan babi" (HR.Ibnu Majah)
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroImage;
