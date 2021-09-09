import React from "react";
import { Row, Col } from "antd";
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
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2021 Atacado Óptico - All Rights Reserved.</p>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/footer/payment.png"}
              alt="Payment methods"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(Footer);
