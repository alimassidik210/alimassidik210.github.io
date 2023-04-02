import { Container, Row, Col } from "react-bootstrap";
import img from "./assets/alim.jpeg";

function Content() {
  return (
    <Container fluid>
      <Row className="mx-2">
        <Col className="col-lg-8 col-12">
          <div className="">
            <h3>Seruling Syaithon</h3>
            <p>
              ditulis oleh{" "}
              <a
                className="link-opacity-10"
                href="https://www.instagram.com/?hl=id"
              >
                Alim Assidik
              </a>
              . Pada 1 April 2023
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ipsam, saepe sunt neque unde, pariatur veniam eius qui suscipit
              sequi quas. Accusantium similique ipsa eaque eveniet earum
              praesentium ad a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              impedit dignissimos quas quaerat ad aperiam numquam autem, illo
              consequatur ea dolor excepturi itaque dolore! Sit beatae animi
              error repellendus quo, ipsam, tempore dicta exercitationem
              suscipit placeat fugiat. Et, mollitia. Obcaecati, autem quae eos
              excepturi repellat distinctio nihil odio animi esse rem totam iure
              dolor numquam ducimus quidem dignissimos corporis dolores
              blanditiis, ipsam similique! Voluptas eos ab, praesentium
              provident cupiditate libero nesciunt, pariatur saepe dignissimos
              porro rem, inventore expedita adipisci! Nihil quasi tempora
              exercitationem provident deserunt sed officiis vel veniam atque,
              cupiditate similique distinctio velit. Debitis hic distinctio
              tempore necessitatibus delectus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              cum, odio quod consectetur illum eum, possimus facere inventore
              amet eos accusamus accusantium facilis minus dolorem nisi sapiente
              qui similique officiis doloribus. Voluptatem rerum dicta dolorem
              non ullam corporis, tenetur libero eligendi, quas, ipsam culpa
              quod dolores? Eius, nam a quos saepe id, velit non recusandae
              veniam dolore explicabo magnam consectetur praesentium. Nihil
              asperiores quod consectetur ex error fugit aspernatur et qui,
              repudiandae nesciunt, suscipit saepe obcaecati? Officia
              perferendis porro nisi, enim nam modi, labore nostrum saepe, velit
              minima ipsam dolorum. Quia inventore temporibus incidunt odio
              suscipit aliquid reiciendis? Iste consectetur deleniti natus sequi
              facilis porro ullam, dignissimos temporibus autem saepe qui quod
              numquam. Incidunt fuga est, eveniet natus recusandae odio at nisi
              illum aliquid ipsum voluptas minus. Voluptas eligendi voluptatibus
              facere officiis vitae voluptatem cupiditate recusandae voluptate
              repudiandae non aliquam pariatur unde inventore labore atque at a,
              magni totam quo accusamus, debitis tempora expedita dicta. Labore
              quae temporibus asperiores ipsum at, ipsa provident minus
              architecto soluta sequi corporis eius voluptatibus quibusdam,
              aperiam a ea rerum quos excepturi exercitationem sint eligendi ad.
              Explicabo ad quod magnam odit, in praesentium repellat ratione ut,
              optio veritatis amet ab quo quis a, blanditiis expedita?
            </p>
          </div>
        </Col>
        <Col className="col-lg-4 col-12">
          <div className="px-auto">
            <h5>Tentang Penulis</h5>
            <img
              src={img}
              alt="my profil"
              className="float-start w-25 m-2 rounded-circle border border-2 border-info "
            />
            <p className="fw-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              dolores similique libero modi ullam est omnis illum eum, nobis eos
              nam exercitationem magnam. Adipisci est nisi consectetur,
              temporibus velit eveniet?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero hic ullam quibusdam adipisci obcaecati,
              cupiditate fugit suscipit voluptate quaerat, deleniti rem illo
              commodi magnam natus consequatur laborum, aut animi neque.
            </p>
          </div>
          <div className="my-4">
            <h5>Daftar Artikel Lainnya :</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary fst-italic">
                Adab Berpakaian Seorang Muslim
              </li>

              <li className="list-group-item list-group-item-primary fst-italic">
                Celana Diatas Mata Kaki
              </li>
              <li className="list-group-item list-group-item-primary fst-italic">
                Qunut Subuh Bid'ah atau Sunnah
              </li>
              <li className="list-group-item list-group-item-primary fst-italic">
                Biarkanlah Janggutmu
              </li>
              <li className="list-group-item list-group-item-primary fst-italic">
                Ziarah Yang Disunnahkan
              </li>
            </ul>
          </div>

          <figure class="text-center">
            <blockquote class="blockquote">
              <p>
                "Bertaqwalah kepada Allah, Allah akan mengajarkanmu banyak hal"
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Alim Assidik <cite title="Source Title">Situs Belajar Islam</cite>
            </figcaption>
          </figure>

          {/* <a href="https://wa.me/6287853463893" target="blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
              alt="whastup"
              className="whatsup"
            ></img>
          </a> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
