import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

let categories = [
  { name: "Óculos", href: "/shop/shop-3-column" },
  { name: "Lentes", href: "/shop/shop-3-column" },
  { name: "Blocos", href: "/shop/shop-3-column" },
  { name: "Acessórios", href: "/shop/shop-3-column" },
  { name: "Insumos", href: "/shop/shop-3-column" },
  { name: "Fornituras", href: "/shop/shop-3-column" },
  { name: "Ferramentas", href: "/shop/shop-3-column" },
  { name: "Fresh Onion", href: "/shop/shop-3-column" },
  { name: "Equipamentos", href: "/shop/shop-3-column" },
  // { name: "Oatmeal", href: "/shop/shop-3-column" },
  // { name: "Fresh Bananas", href: "/shop/shop-3-column" },
];

function CategoryColappse({ active }) {
  const { Panel } = Collapse;
  return (
    <div className="category-collapse">
      <Collapse
        bordered={false}
        defaultActiveKey={active ? "1" : null}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? -180 : 0} />
        )}
        expandIconPosition="right"
      >
        <Panel
          header="Todos"
          key="1"
          extra={<i className="far fa-bars" />}
        >
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default React.memo(CategoryColappse);
