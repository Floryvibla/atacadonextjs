import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import classNames from "classnames";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

import LayoutOne from "../../components/layouts/LayoutOne";
import Container from "../../components/other/Container";
import { formatCurrency } from "../../common/utils";

export default function checkoutComplete() {
  return (
    <LayoutOne title="Checkout completed">
      <Container>
        <div className="checkout-complete">
          <div className="checkout-complete-summary">
            <h3>Parabéns! Você concluiu o pagamento.</h3>
            <div className="checkout-complete-summary__table">
              <div className="checkout-complete-summary__table-item">
                <h5>Número do pedido</h5>
                <p>120</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Data</h5>
                <p>12 de agosto de 2020</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Total</h5>
                <p>{formatCurrency(200)}</p>
              </div>
              <div className="checkout-complete-summary__table-item">
                <h5>Métodos de Pagamento</h5>
                <p>Verifique o pagamento</p>
              </div>
            </div>
          </div>
          <div className="checkout-complete-details">
            <h3>detalhes do pedido</h3>
            <table>
              <thead>
                <tr>
                  <th>produtos</th>
                  <th>Preço</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Stay-Matte Sheer Pressed x 1</td>
                  <td className="bold">{formatCurrency(100)}</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="bold">{formatCurrency(100)}</td>
                </tr>
                <tr>
                  <td>Envio</td>
                  <td>Envio grátis</td>
                </tr>
                <tr>
                  <td>Forma de pagamento</td>
                  <td>Verificar pagamentos</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="bold">{formatCurrency(100)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}
