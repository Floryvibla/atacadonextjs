import React from "react";
import { Row, Col } from "antd";
<<<<<<< HEAD
import Link from "next/link";

import FooterSubcribe from "./elements/FooterSubcribe";
import Container from "../other/Container";
import links from "../../data/footer-links.json";

function Footer({ containerType }) {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container type={containerType}>
          <Row justify="center" gutter={30}>
            <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-one">
                <Link href="#">
                  <a>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/logo.png"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
                <p>Av. Afonso Pena, 726 - Centro Belo Horizonte - MG 30130-003</p>
                <ul>
                  <li>atacadoopticomg@gmail.com</li>
                  <li>(31) 98501-5555</li>
                  <li>(31) 2538-3333</li>
                  <li>(31) 3657-4365</li>
                </ul>
              </div>
            </Col>
            <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-two">
                <Row gutter={30}>
                  <Col className="gutter-row" span={12}>
                    <h5 className="footer-title">Institucional</h5>
                    <ul>
                      {links.information.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <h5 className="footer-title">Minha Conta</h5>
                    <ul>
                      {links.account.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span="24" sm={18} lg={8}>
              <div className="footer-top-item -col-three">
                <h5 className="footer-title">Assine a nossa newsletter</h5>
                <p>
                Assine nosso boletim informativo e ganhe 10% de desconto na primeira compra
                </p>
                <FooterSubcribe url="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e" />
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer/payment.png"
                  }
                  alt="Payment methods"
                />
              </div>
            </Col>
=======
import classNames from "classnames";

import Container from "../other/Container";
import footerLinks from "../../data/footer-links.json";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";
import FooterSubcribeInput from "./elements/FooterSubcribeInput";

function Footer({ containerFluid, className }) {
  return (
    <div className={`footer -style-one ${classNames(className)}`}>
      {/* <div className="footer-top">
        <Container fluid={containerFluid}>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={8}>
              <FooterInfomation />
            </Col>
            <Col xs={24} md={15} lg={16}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="footer-subcribe">
        <Container>
          <Row align="center">
            <Col xs={24} md={14}>
              <div className="footer-subcribe__content">
                <h5>Junte-se ao nosso boletim informativo agora</h5>
                <p>
                Receba atualizações por e-mail sobre nossa última loja e ofertas especiais.
                </p>
              </div>
            </Col>
            <Col xs={24} md={10}>
              <FooterSubcribeInput url="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e" />
            </Col>
>>>>>>> dev01
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
<<<<<<< HEAD
        <Container type={containerType}>
          <p>OS DIREITOS RESERVADOS A ATACADO OPTICO.COM.BR COMERCIO DE PRODUTOS OPTICOS - EIRELI - CNPJ:17.393.408/0001-73.</p>
=======
        <Container>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2021 Atacado Óptico - All Rights Reserved.</p>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/footer/payment.png"}
              alt="Payment methods"
            />
          </div>
>>>>>>> dev01
        </Container>
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> dev01
export default React.memo(Footer);
